import { PublicLayout } from "@/components/layout/PublicLayout";
import { massages } from "@/data/massages";
import { MassageCard } from "@/components/public/MassageCard";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/data/siteContent";
import { cn } from "@/lib/utils";

export function Massages() {
  const { eyebrow, title } = siteContent.services; // Reuse the services section title and eyebrow

  return (
    <PublicLayout>
      <section className="mb-12">
        <h2 className={cn("mb-5 text-[0.67rem] font-semibold uppercase tracking-[0.24em]", "text-primary-foreground/70")}>{eyebrow}</h2>
        <h1 className="font-display text-5xl leading-[1.02] text-balance md:text-7xl">{title}</h1>
      </section>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 px-6">
        {massages.map((massage) => (
          <MassageCard key={massage.id} massage={massage} />
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <a href="https://wa.me/2349073385380" target="_blank" rel="noreferrer" className={cn(
          "inline-flex min-h-12 items-center justify-center gap-2 border border-primary bg-primary text-primary-foreground hover:border-accent hover:bg-accent hover:text-accent-foreground px-6 text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        )}>
          Book an appointment
        </a>
      </div>
    </PublicLayout>
  );
}