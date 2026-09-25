import { siteContent } from "@/data/siteContent";
import { cn } from "@/lib/utils";

export function Experience() {
  const { eyebrow, title, points } = siteContent.experience;

  return (
    <section id="experience" className="section-pad bg-background">
      <div className="mx-auto max-w-[1360px] px-5 md:px-10">
        <p className={cn("mb-5 text-[0.67rem] font-semibold uppercase tracking-[0.24em]", "text-accent/80")}>{eyebrow}</p>
        <h2 className="font-display text-5xl leading-[1.02] text-balance md:text-7xl">{title}</h2>
        <div className="mt-20 grid gap-12 border-t border-border pt-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {points.map((point) => (
            <div key={point.title} className="lg:border-r lg:border-border lg:pr-8 lg:last:border-0">
              <span className="text-xs text-muted-foreground">{point.number}</span>
              <h3 className="mt-8 font-display text-3xl">{point.title}</h3>
              <p className="mt-4 leading-7 text-muted-foreground">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}