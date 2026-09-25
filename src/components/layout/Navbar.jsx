import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowRight, Check, Clock3, CreditCard, Home, Instagram, MapPin, Menu, Phone, Sparkles, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const whatsappUrl = "https://wa.me/2349073385380";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Massages", to: "/massages" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
  { label: "Book", to: "/book" }
];

function Wordmark({ light = false }) {
  return <a href="/" className={cn("inline-flex flex-col", light ? "text-primary-foreground" : "text-foreground")} aria-label="Mara Retreat and Wellness home">
    <span className="font-display text-[2rem] leading-none">Mara</span>
    <span className="mt-1 text-[0.52rem] uppercase tracking-[0.3em] opacity-75">Retreat &amp; Wellness</span>
  </a>;
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  // Note: We are not managing body overflow here for simplicity, but we can add it if needed.
  // useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);

  return (
    <header className="absolute inset-x-0 top-0 z-40 border-b border-primary-foreground/20 text-primary-foreground">
      <div className="mx-auto grid h-24 max-w-[1480px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 md:px-10 lg:grid-cols-[1fr_auto_1fr]">
        <Wordmark light />
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
          {navItems.map(({ label, to }) => (
            <Link key={to} to={to} className="text-[0.68rem] uppercase tracking-[0.12em] transition-opacity hover:opacity-60">
              {label}
            </Link>
          ))}
        </nav>
        <div className="hidden justify-end lg:flex">
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className={cn(
            "inline-flex min-h-12 items-center justify-center gap-2 border border-primary-foreground/50 bg-transparent text-primary-foreground hover:border-primary-foreground hover:bg-primary-foreground hover:text-primary px-6 text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          )}>
            Book an appointment
          </a>
        </div>
        <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10 lg:hidden" onClick={() => setOpen(true)} aria-label="Open menu">
          <Menu className="size-6" />
        </Button>
      </div>
      <div className={cn("fixed inset-0 z-50 bg-primary px-6 py-6 transition-transform duration-500 lg:hidden", open ? "translate-x-0" : "translate-x-full")} aria-hidden={!open}>
        <div className="flex items-center justify-between">
          <Wordmark light />
          <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10" onClick={() => setOpen(false)} aria-label="Close menu">
            <X className="size-6" />
          </Button>
        </div>
        <nav className="mt-14 flex flex-col border-t border-primary-foreground/20">
          {navItems.map(({ label, to }, i) => (
            <Link key={to} to={to} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1} className="flex items-center justify-between border-b border-primary-foreground/20 py-4 font-display text-3xl">
              {label}
              <span className="font-sans text-xs opacity-50">0{i + 1}</span>
            </Link>
          ))}
        </nav>
        <a href={whatsappUrl} target="_blank" rel="noreferrer" className={cn(
          "inline-flex min-h-12 items-center justify-center gap-2 border border-primary bg-primary text-primary-foreground hover:border-accent hover:bg-accent hover:text-accent-foreground px-6 text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          "mt-8 w-full"
        )}>
          Book an appointment
        </a>
      </div>
    </header>
  );
}