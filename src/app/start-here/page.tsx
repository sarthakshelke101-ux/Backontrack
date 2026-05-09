import type { Metadata } from "next";
import { conditions, categories } from "@/data/conditions";
import ConditionCard from "@/components/ConditionCard";
import BodyMap from "@/components/BodyMap";

export const metadata: Metadata = {
  title: "Start Here — Find Your Posture Issue",
  description: "Use our interactive head-to-toe diagnostic to identify your postural problem and find the right correction guide.",
};

export default function StartHerePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="py-20 md:py-28 px-6 text-center" id="start-hero">
        <div className="max-w-[1000px] mx-auto">
          <p className="text-xs text-muted uppercase tracking-widest mb-4 animate-fade-in">Head-to-Toe Diagnostic</p>
          <h1 className="font-heading font-bold text-3xl md:text-5xl mb-4 animate-slide-up">
            Where is your discomfort?
          </h1>
          <p className="text-muted text-base md:text-lg max-w-[500px] mx-auto mb-16 animate-slide-up delay-100">
            Click on the body region where you feel pain or stiffness to find your personalized correction guide.
          </p>

          {/* ── Body Map ── */}
          <div className="animate-slide-up delay-200">
            <BodyMap />
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="max-w-[200px] mx-auto border-t border-border" />

      {/* ── Conditions by Category ── */}
      <section className="py-20 px-6" id="all-conditions">
        <div className="max-w-[1000px] mx-auto">
          <p className="text-xs text-muted uppercase tracking-widest text-center mb-3">Browse by Region</p>
          <h2 className="font-heading font-semibold text-2xl text-center mb-14">All Posture Conditions</h2>

          {categories.map((cat) => {
            const catConditions = conditions.filter((c) => c.category === cat.id);
            return (
              <div key={cat.id} className="mb-14" id={`category-${cat.id}`}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xl">{cat.icon}</span>
                  <h3 className="font-heading font-semibold text-lg">{cat.name}</h3>
                  <div className="flex-1 border-t border-border ml-4" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {catConditions.map((c) => (
                    <ConditionCard key={c.slug} condition={c} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </>
  );
}
