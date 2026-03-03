import Link from "next/link";
import Image from "next/image";
import { sectionDescriptions } from "@/lib/content-data";
import { buildCloudinaryUrl, cloudinaryAssets } from "@/lib/cloudinary";
import { HomeThreadOverlay } from "@/components/layout/home-thread-overlay";

const NOTE_COLOR_CLASS = ["home-note-1", "home-note-2", "home-note-3"] as const;

export default function HomePage() {
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
            <figcaption>mln131</figcaption>
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
                </article>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
