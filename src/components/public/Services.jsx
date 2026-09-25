import { Link } from "react-router-dom";
import { Clock3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { massages } from "@/data/massages";
import { siteContent } from "@/data/siteContent";

export function Services() {
  const { eyebrow, title, copy } = siteContent.services;

  return (
    <section id="services" className="section-pad bg-surface">
      <div className="mx-auto max-w-[1360px] px-5 md:px-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-end">
          <div>
            <p className={cn("mb-5 text-[0.67rem] font-semibold uppercase tracking-[0.24em]", "text-accent/80")}>{eyebrow}</p>
            <h2 className="font-display text-5xl leading-[1.02] text-balance md:text-7xl">{title}</h2>
          </div>
          {copy && <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground md:text-lg">{copy}</p>}
        </div>
        <div className="mt-14 overflow-hidden border-y border-border">
          <div className="hidden grid-cols-[42px_1.25fr_1.45fr_100px_110px_75px] gap-5 bg-primary px-5 py-4 text-[0.62rem] uppercase tracking-[0.12em] text-primary-foreground lg:grid">
            <span>No.</span>
            <span>Treatment</span>
            <span>Description</span>
            <span>Spa</span>
            <span>Home</span>
            <span>Time</span>
          </div>
          {massages.map((massage, i) => (
            <article key={massage.id} className="grid gap-4 border-b border-border px-1 py-7 last:border-0 lg:grid-cols-[42px_1.25fr_1.45fr_100px_110px_75px] lg:items-center lg:gap-5 lg:px-5">
              <span className={cn("text-xs text-muted-foreground")}>{String(i + 1).padStart(2, "0")}</span>
              <Link to={`/services/${massage.slug}`} className="font-display text-2xl leading-tight hover:text-accent">{massage.name}</Link>
              <p className="text-sm leading-6 text-muted-foreground">{massage.description}</p>
              <div>
                <span className={cn("text-[0.6rem] uppercase text-muted-foreground lg:hidden")}>Spa price · </span>
                <strong className="text-sm font-semibold">{massage.spaPrice}</strong>
              </div>
              <div>
                <span className={cn("text-[0.6rem] uppercase text-muted-foreground lg:hidden")}>Home price · </span>
                <strong className="text-sm font-semibold">{massage.homePrice}</strong>
              </div>
              <span className={cn("inline-flex items-center gap-1.5 text-xs text-muted-foreground")}>
                <Clock3 className="size-3.5" />
                {massage.duration}
              </span>
            </article>
          ))}
        </div>
        <div className="mt-7 flex flex-col gap-4 bg-secondary p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm leading-6">
            <strong>Please note:</strong> A deposit is required before a therapist leaves for your home-service location.
          </p>
          <Link to="/services" className={cn(
            "inline-flex min-h-12 items-center justify-center gap-2 border border-primary bg-primary text-primary-foreground hover:border-accent hover:bg-accent hover:text-accent-foreground px-6 text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          )}>
            Explore all services
          </Link>
        </div>
      </div>
    </section>
  );
}
