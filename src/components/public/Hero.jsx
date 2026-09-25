import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteContent } from "@/data/siteContent";

export function Hero() {
  const { eyebrow, title, copy, buttonText1, buttonText2, buttonLink1, buttonLink2 } = siteContent.hero;

  return (
    <section id="home" className="relative min-h-[92svh] overflow-hidden bg-primary text-primary-foreground">
      <img src="/assets/spa-hero.jpg" alt="A serene Mara Retreat massage room" width={1600} height={1200} className="absolute inset-0 size-full object-cover object-[64%_center]" />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="relative mx-auto flex min-h-[92svh] max-w-[1480px] items-end px-5 pb-20 pt-40 md:px-10 lg:items-center lg:pb-0">
        <div className="max-w-4xl animate-reveal">
          <p className={cn("mb-5 text-[0.67rem] font-semibold uppercase tracking-[0.24em]", "text-primary-foreground/70")}>{eyebrow}</p>
          <h1 className="font-display text-[clamp(3.7rem,8vw,8rem)] leading-[0.86] text-balance" dangerouslySetInnerHTML={{ __html: title }}></h1>
          <p className="mt-8 max-w-2xl text-base leading-7 text-primary-foreground/80 md:text-lg md:leading-8">{copy}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={buttonLink1} target="_blank" rel="noreferrer" className={cn(
              "inline-flex min-h-12 items-center justify-center gap-2 border border-primary-foreground bg-primary-foreground text-primary hover:bg-transparent hover:text-primary-foreground px-6 text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            )}>
              {buttonText1}
            </a>
            <a href={buttonLink2} className={cn(
              "inline-flex min-h-12 items-center justify-center gap-2 border border-primary-foreground/50 bg-transparent text-primary-foreground hover:border-primary-foreground hover:bg-primary-foreground hover:text-primary px-6 text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            )}>
              {buttonText2}
            </a>
          </div>
        </div>
        <a href="#about" aria-label="Discover Mara" className="absolute bottom-8 right-10 hidden items-center gap-3 text-xs uppercase tracking-[0.15em] lg:flex">
          Discover Mara <ArrowDown className="size-4 animate-float" />
        </a>
      </div>
    </section>
  );
}