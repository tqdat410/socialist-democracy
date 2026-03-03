import Section1Content from "./section-1-content";
import Section2Content from "./section-2-content";
import Section3Content from "./section-3-content";

export const runtime = "edge";
export const dynamic = "force-dynamic";

export default async function SectionPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (id === "1") return <Section1Content />;
  if (id === "2") return <Section2Content />;
  if (id === "3") return <Section3Content />;

  return (
    <main className="max-w-[960px] mx-auto min-h-screen p-5">
      <div className="scrap paper-magazine tape text-center p-5">
        <h2 className="font-[family-name:var(--font-anton)] text-[1.8em] tracking-[3px]">
          Section {id} not found
        </h2>
      </div>
    </main>
  );
}
