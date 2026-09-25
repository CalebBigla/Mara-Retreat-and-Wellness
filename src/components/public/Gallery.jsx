import { siteContent } from "@/data/siteContent";
import { galleryImages } from "@/data/gallery";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export function Gallery() {
  const { eyebrow, title, buttonText, buttonLink } = siteContent.gallery;

  return (
    <section id="gallery" className="section-pad bg-background">
      <div className="mx-auto max-w-[1480px] px-5 md:px-10">
        <p className={cn("mb-5 text-[0.67rem] font-semibold uppercase tracking-[0.24em]", "text-accent/80")}>{eyebrow}</p>
        <h2 className="font-display text-5xl leading-[1.02] text-balance md:text-7xl">{title}</h2>
        <div className="mt-14 grid auto-rows-[260px] grid-cols-1 gap-3 md:grid-cols-3 md:auto-rows-[300px]">
          {galleryImages.map((image, i) => (
            <figure key={i} className="group overflow-hidden">
              <img src={image.src} alt={image.alt} loading="lazy" className="size-full object-cover transition-transform duration-1000 group-hover:scale-[1.025]" />
            </figure>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link to="/gallery" className="inline-flex items-center justify-center border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent">{buttonText}</Link>
        </div>
      </div>
    </section>
  );
}
