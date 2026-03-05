"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo } from "react";
import { sectionDescriptions } from "@/lib/content-data";
import { buildCloudinaryUrl, cloudinaryAssets } from "@/lib/cloudinary";
import { HomeThreadOverlay } from "@/components/layout/home-thread-overlay";
import { section1InteractiveItems } from "@/lib/section1-interactive-data";
import { section2InteractiveItems } from "@/lib/section2-interactive-data";
import { section3InteractiveItems } from "@/lib/section3-interactive-data";
import { useQuizStore } from "@/stores/quiz-store";

const NOTE_COLOR_CLASS = ["home-note-1", "home-note-2", "home-note-3"] as const;
type SectionDoneKey = "1" | "2" | "3";

export default function HomePage() {
  const droppedItems = useQuizStore((s) => s.droppedItems);
  const droppedItemIds = useMemo(() => new Set(Object.values(droppedItems)), [droppedItems]);

  const doneBySection = useMemo<Record<SectionDoneKey, boolean>>(
    () => ({
      "1": section1InteractiveItems.every((item) => droppedItemIds.has(item.id)),
      "2": section2InteractiveItems.every((item) => droppedItemIds.has(item.id)),
      "3": section3InteractiveItems.every((item) => droppedItemIds.has(item.id)),
    }),
    [droppedItemIds],
  );

  return (
    <main className="home-board min-h-screen pb-16">
      <div className="home-shell max-w-[980px] mx-auto px-4 md:px-6 pt-8 md:pt-12">
        <HomeThreadOverlay />

        <section className="home-top-row mb-8 md:mb-10">
          <article className="scrap home-title-note tape">
            <h1 className="home-title-combo">
              <span className="home-title-printed">Dân Chủ</span>
              <span className="home-title-hand-question">?</span>
            </h1>
          </article>
          <figure className="scrap home-hero-photo pushpin">
            <span className="home-thread-pin-anchor" data-thread-pin="photo" aria-hidden />
            <div className="home-hero-photo-body">
              <Image
                src={buildCloudinaryUrl(cloudinaryAssets.homepageHero)}
                alt="Biểu tượng dân chủ"
                fill
                className="home-hero-photo-img"
                sizes="(max-width: 768px) 84vw, 240px"
                priority
              />
            </div>
            <figcaption>MLN131</figcaption>
          </figure>
        </section>

        <section className="mb-8 md:mb-10">
          <article className="scrap paper-lined tape home-intro-paper">
            <p>
              Interactive Infographic về &apos;Dân Chủ&apos;.
              <br />
              Kéo thả để hoàn thiện các nội dung liên quan trong các phần.
            </p>
          </article>
        </section>

        <section className="home-notes-wrap relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-11 lg:gap-14">
            {sectionDescriptions.map((section, index) => (
              <Link key={section.id} href={`/section/${section.id}`} className="block no-underline">
                <article
                  className={`scrap home-note-card pushpin ${NOTE_COLOR_CLASS[index]}`}
                >
                  <span className="home-thread-pin-anchor" data-thread-pin={`note-${section.id}`} aria-hidden />
                  <p className="home-note-part">PHẦN {section.id}</p>
                  <h2>{section.title}</h2>
                  <p className="home-note-subtitle">{section.subtitle}</p>
                  {doneBySection[section.id as SectionDoneKey] ? (
                    <p className="home-note-done-badge" aria-label={`Phần ${section.id} đã hoàn thành`}>
                      done
                    </p>
                  ) : null}
                </article>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
