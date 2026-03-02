import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const BASE_URL = process.env.CAPTURE_BASE_URL || "http://127.0.0.1:3000";
const OUTPUT_DIR = process.env.CAPTURE_OUTPUT_DIR || "artifacts/section-export";

const sections = [
  { id: "1", selector: "#section-1-board", output: "section-1.png" },
  { id: "2", selector: "#section-2-board", output: "section-2.png" },
  { id: "3", selector: "#section-3-board", output: "section-3.png" },
];

async function triggerScrollAnimations(page) {
  await page.evaluate(async () => {
    const total = Math.max(
      0,
      document.documentElement.scrollHeight - window.innerHeight,
    );
    if (total <= 0) return;

    const steps = 12;
    for (let i = 1; i <= steps; i += 1) {
      window.scrollTo(0, (total * i) / steps);
      await new Promise((resolve) => setTimeout(resolve, 90));
    }

    for (let i = steps - 1; i >= 0; i -= 1) {
      window.scrollTo(0, (total * i) / steps);
      await new Promise((resolve) => setTimeout(resolve, 90));
    }
  });
}

async function waitForBoardImages(page, selector) {
  await page.waitForFunction(
    (targetSelector) => {
      const root = document.querySelector(targetSelector);
      if (!root) return false;
      const images = Array.from(root.querySelectorAll("img"));
      return images.every((image) => image.complete && image.naturalWidth > 0);
    },
    selector,
    { timeout: 45_000 },
  );
}

async function stabilizeGeometry(page) {
  await page.evaluate(async () => {
    const waitFrames = async (count) => {
      for (let i = 0; i < count; i += 1) {
        await new Promise((resolve) =>
          requestAnimationFrame(() => requestAnimationFrame(resolve)),
        );
      }
    };

    window.dispatchEvent(new Event("resize"));
    await waitFrames(4);
    window.dispatchEvent(new Event("orientationchange"));
    await waitFrames(4);
    window.dispatchEvent(new Event("resize"));
    await waitFrames(4);
  });
}

async function run() {
  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 1200 },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();

  for (const section of sections) {
    const url = `${BASE_URL}/section/${section.id}`;
    const outputPath = path.join(OUTPUT_DIR, section.output);
    console.log(`Capturing section ${section.id}: ${url}`);

    await page.goto(url, { waitUntil: "networkidle", timeout: 60_000 });
    await page.waitForSelector(section.selector, { timeout: 30_000 });
    await page.addStyleTag({
      content: `
        nav.sticky.top-0.z-40,
        .fixed.bottom-0.left-0.right-0.z-30 {
          display: none !important;
        }

        #section-1-board,
        #section-2-board,
        #section-3-board {
          background: #785437 !important;
          border: 0 !important;
          border-radius: 12px !important;
          box-shadow:
            0 0 0 12px #4f3522,
            inset 0 0 0 2px rgba(248, 229, 198, 0.18),
            inset 0 0 0 8px rgba(32, 20, 12, 0.14) !important;
          padding-bottom: 22px !important;
        }
      `,
    });
    await page.evaluate(async () => {
      if ("fonts" in document) {
        await document.fonts.ready;
      }
    });
    await waitForBoardImages(page, section.selector);
    await triggerScrollAnimations(page);
    await stabilizeGeometry(page);
    await page.waitForTimeout(600);

    const board = page.locator(section.selector).first();
    await board.screenshot({
      path: outputPath,
      type: "png",
      animations: "disabled",
    });

    console.log(`Saved: ${outputPath}`);
  }

  await browser.close();
}

run().catch((error) => {
  console.error("Capture failed:", error);
  process.exitCode = 1;
});
