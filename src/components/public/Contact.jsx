import { MapPin, Phone, ArrowRight, CreditCard, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteContent } from "@/data/siteContent";

export function Contact() {
  const { eyebrow, title, copy, buttonText, buttonLink, address, phone, whatsapp } = siteContent.contact;

  return (
    <section id="contact" className="section-pad bg-surface">
      <div className="mx-auto grid max-w-[1360px] gap-16 px-5 md:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <div>
          <p className={cn("mb-5 text-[0.67rem] font-semibold uppercase tracking-[0.24em]", "text-accent/80")}>{eyebrow}</p>
          <h2 className="font-display text-5xl leading-[1.02] text-balance md:text-7xl">{title}</h2>
          <p className="mt-7 max-w-md leading-8 text-muted-foreground">{copy}</p>
          <a href={buttonLink} target="_blank" rel="noreferrer" className={cn(
            "inline-flex min-h-12 items-center justify-center gap-2 border border-primary bg-primary text-primary-foreground hover:border-accent hover:bg-accent hover:text-accent-foreground px-6 text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
            "mt-9"
          )}>
            {buttonText}
          </a>
        </div>
        <div>
          <div className="grid gap-x-8 gap-y-9 border-y border-border py-10 sm:grid-cols-2">
            <div className="flex items-center gap-4">
              <MapPin className="mt-1 text-accent [&_svg]:size-4" />
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.14em]">{address}</h3>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="mt-1 text-accent [&_svg]:size-4" />
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.14em]">Call</h3>
                <div className="mt-2 text-sm leading-6 text-muted-foreground">{phone}</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <ArrowRight className="mt-1 text-accent [&_svg]:size-4" />
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.14em]">WhatsApp</h3>
                <div className="mt-2 text-sm leading-6 text-muted-foreground">{whatsapp}</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <CreditCard className="mt-1 text-accent [&_svg]:size-4" />
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.14em]">Payments</h3>
                <div className="mt-2 text-sm leading-6 text-muted-foreground">Debit cards, credit cards and direct bank transfers</div>
              </div>
            </div>
          </div>
          <div className="mt-8 flex min-h-48 items-center justify-center border border-border bg-map-pattern p-8 text-center">
            <div>
              <MapPin className="mx-auto mb-3 size-6" strokeWidth={1.3} />
              <p className="font-display text-2xl">Royal Palmwill Estate</p>
              <p className="mt-2 text-xs uppercase tracking-[0.12em] text-muted-foreground">Badore Road · Ajah · Lagos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}