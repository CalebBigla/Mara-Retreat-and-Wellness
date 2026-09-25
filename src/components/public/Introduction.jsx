import { ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteContent } from "@/data/siteContent";

export function Introduction() {
  const { eyebrow, title, copy, buttonText, buttonLink, image } = siteContent.about;

  return (
    <section id="about" className="section-pad bg-background">
      <div className="mx-auto grid max-w-[1360px] gap-14 px-5 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-24">
        <div className="relative">
          <img src={image} alt="Professional massage treatment at Mara Retreat" loading="lazy" width={1200} height={1504} className="aspect-[4/5] w-full object-cover" />
          <div className="absolute -bottom-8 -right-3 hidden bg-secondary px-8 py-7 md:block">
            <Sparkles className="mb-4 size-5" strokeWidth={1.2} />
            <p className="max-w-44 font-display text-2xl leading-tight">Your escape. Your time. Your wellness.</p>
          </div>
        </div>
        <div>
          <p className={cn("mb-5 text-[0.67rem] font-semibold uppercase tracking-[0.24em]", "text-accent/80")}>{eyebrow}</p>
          <h2 className="font-display text-5xl leading-[1.02] text-balance md:text-7xl" dangerouslySetInnerHTML={{ __html: title }}></h2>
          <div className="mt-8 max-w-lg space-y-4 text-base leading-8 text-muted-foreground md:text-lg">
            {copy.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <a href={buttonLink} className={cn(
            "inline-flex items-center gap-2 mt-8 text-foreground underline-offset-8 hover:underline font-medium"
          )}>
            {buttonText} <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}