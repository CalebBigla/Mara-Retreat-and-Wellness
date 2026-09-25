import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { massages } from "@/data/massages";
import { siteContent } from "@/data/siteContent";
import { Link } from "react-router-dom";

export function Featured() {
  const { eyebrow, title, copy, buttonText, buttonLink, image } = siteContent.featured;
  // Get the first featured massage for now
  const featuredMassage = massages.find(m => m.featured) || massages[0];

  return (
    <section id="home-service" className="grid bg-primary text-primary-foreground lg:min-h-[720px] lg:grid-cols-2">
      <img src={image} alt="Massage oils, warm stones and folded linens" loading="lazy" width={1408} height={1056} className="aspect-[4/3] size-full object-cover lg:aspect-auto" />
      <div className="flex items-center px-5 py-20 md:px-14 lg:px-[10%]">
        <div className="max-w-xl">
          <p className={cn("mb-5 text-[0.67rem] font-semibold uppercase tracking-[0.24em]", "text-primary-foreground/70")}>{eyebrow}</p>
          <h2 className="font-display text-6xl leading-[0.95] text-balance md:text-8xl" dangerouslySetInnerHTML={{ __html: title }}></h2>
          <p className="mt-8 leading-8 text-primary-foreground/70">{copy}</p>
          <p className="mt-3 text-xs text-primary-foreground/55">Advance booking is required for out-of-state travel.</p>
          <Link to="/book" className={cn(
            "inline-flex min-h-12 items-center justify-center gap-2 border border-primary-foreground/50 bg-transparent text-primary-foreground hover:border-primary-foreground hover:bg-primary-foreground hover:text-primary px-6 text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
            "mt-9"
          )}>
            {buttonText} <ArrowRight className="size-4"/>
          </Link>
        </div>
      </div>
    </section>
  );
}
