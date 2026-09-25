import { cn } from "@/lib/utils";
import { siteContent } from "@/data/siteContent";
import { Link } from "react-router-dom";

export function Cta() {
  const { eyebrow, title, copy, buttonText, buttonLink } = siteContent.cta;

  return (
    <section className="relative flex min-h-[600px] items-center justify-center overflow-hidden bg-primary px-5 py-24 text-center text-primary-foreground">
      <img src="/assets/spa-resort.jpg" alt="Mara Retreat private treatment room" loading="lazy" className="absolute inset-0 size-full object-cover" />
      <div className="absolute inset-0 bg-cta-overlay" />
      <div className="relative max-w-4xl">
        <p className={cn("mb-5 text-[0.67rem] font-semibold uppercase tracking-[0.24em]", "text-primary-foreground/70")}>{eyebrow}</p>
        <h2 className="font-display text-6xl leading-[0.92] text-balance md:text-8xl" dangerouslySetInnerHTML={{ __html: title }}></h2>
        <p className="mx-auto mt-7 max-w-xl leading-8 text-primary-foreground/80">{copy}</p>
        <Link to={buttonLink} className={cn(
          "inline-flex min-h-12 items-center justify-center gap-2 border border-primary-foreground bg-primary-foreground text-primary hover:bg-transparent hover:text-primary-foreground px-6 text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          "mt-9"
        )}>
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
