import type { Metadata } from "next";
import {
  Anton,
  Be_Vietnam_Pro,
  Caveat,
  Courier_Prime,
  Newsreader,
  Noto_Sans,
  Patrick_Hand,
  Permanent_Marker,
  Shantell_Sans,
  Sriracha,
  Special_Elite,
} from "next/font/google";
import "./globals.css";
import "@/styles/scrapbook.css";
import ResourceLoadingGate from "@/components/layout/resource-loading-gate";

const anton = Anton({
  weight: "400",
  subsets: ["latin", "vietnamese"],
  variable: "--font-anton",
});
const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
});
const beVietnamPro = Be_Vietnam_Pro({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "latin-ext", "vietnamese"],
  variable: "--font-be-vietnam-pro",
});
const courierPrime = Courier_Prime({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-courier-prime",
});
const newsreader = Newsreader({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "latin-ext", "vietnamese"],
  variable: "--font-newsreader",
});
const notoSans = Noto_Sans({
  subsets: ["latin", "vietnamese"],
  variable: "--font-noto-sans",
});
const patrickHand = Patrick_Hand({
  weight: "400",
  subsets: ["latin", "latin-ext", "vietnamese"],
  variable: "--font-patrick-hand",
});
const permanentMarker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-permanent-marker",
});
const shantellSans = Shantell_Sans({
  subsets: ["latin", "latin-ext", "vietnamese"],
  variable: "--font-shantell-sans",
});
const sriracha = Sriracha({
  weight: "400",
  subsets: ["latin", "latin-ext", "vietnamese"],
  variable: "--font-sriracha",
});
const specialElite = Special_Elite({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-special-elite",
});

export const metadata: Metadata = {
  title: "Dân Chủ - Interactive Infographic",
  description:
    "Chuong 4 — MLN131 — Nhom 3: Interactive infographic ve Dan chu Xa hoi Chu nghia",
};

const fontVars = [
  anton,
  beVietnamPro,
  caveat,
  courierPrime,
  newsreader,
  notoSans,
  patrickHand,
  permanentMarker,
  shantellSans,
  sriracha,
  specialElite,
]
  .map((f) => f.variable)
  .join(" ");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${fontVars} antialiased`}>
        <ResourceLoadingGate>{children}</ResourceLoadingGate>
      </body>
    </html>
  );
}
