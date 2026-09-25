import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";

export function Footer() {
  const whatsappUrl = "https://wa.me/2349073385380";
  return (
    <footer className="bg-primary px-5 pb-8 pt-20 text-primary-foreground md:px-10">
      <div className="mx-auto max-w-[1360px]">
        <div className="grid gap-12 border-b border-primary-foreground/20 pb-16 md:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_0.7fr]">
          <div>
            <a href="/" className="inline-flex flex-col text-primary-foreground" aria-label="Mara Retreat and Wellness home">
              <span className="font-display text-[2rem] leading-none">Mara</span>
              <span className="mt-1 text-[0.52rem] uppercase tracking-[0.3em] opacity-75">Retreat &amp; Wellness</span>
            </a>
            <p className="mt-6 max-w-sm leading-7 text-primary-foreground/60">
              A holistic escape for expertly delivered body therapies, pristine aesthetic care and deeply restorative wellness.
            </p>
          </div>
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.18em] text-primary-foreground/50">Explore</p>
            <nav className="mt-5 grid gap-3">
              {[{ label: "About", to: "/about" }, { label: "Massages", to: "/massages" }, { label: "Gallery", to: "/gallery" }, { label: "Contact", to: "/contact" }].map(({ label, to }) => (
                <Link key={to} to={to} className="w-fit text-sm hover:opacity-60">
                  {label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.18em] text-primary-foreground/50">Contact</p>
            <div className="mt-5 space-y-3 text-sm text-primary-foreground/70">
              <p>Ajah, Lekki, Lagos</p>
              <a href="tel:+2347031007478" className="block hover:opacity-60">+234 703 100 7478</a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="block hover:opacity-60">WhatsApp concierge</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 pt-3 text-primary-foreground hover:opacity-60">
                <Instagram className="size-4"/> Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-7 text-[0.62rem] uppercase tracking-[0.14em] text-primary-foreground/45 sm:flex-row sm:justify-between">
          <p>© 2026 Mara Retreat &amp; Wellness.</p>
          <p>Royal Palmwill Estate · Badore</p>
        </div>
      </div>
    </footer>
  );
}