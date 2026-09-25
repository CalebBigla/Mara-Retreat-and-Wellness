import { useEffect, useState, type ReactNode } from "react";
import { ArrowDown, ArrowRight, Check, Clock3, CreditCard, Home, Instagram, MapPin, Menu, Phone, Sparkles, X } from "lucide-react";

import heroImage from "@/assets/spa-hero.jpg";
import treatmentImage from "@/assets/spa-treatment.jpg";
import interiorImage from "@/assets/spa-interior.jpg";
import detailsImage from "@/assets/spa-details.jpg";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const whatsappUrl = "https://wa.me/2349073385380";
const navItems = [
  ["Home", "#home"], ["About", "#about"], ["Services", "#services"],
  ["Home Service", "#home-service"], ["Gallery", "#gallery"], ["Contact", "#contact"],
] as const;

const massages = [
  ["Full Body Swedish", "Gentle, soothing strokes improve circulation, reduce stress and promote relaxation.", "₦30,000", "₦55,000", "1 hr"],
  ["Full Body Deep Tissue", "Targets deeper muscle layers to relieve chronic tension, reduce muscle pain and improve mobility.", "₦35,000", "₦60,000", "1 hr"],
  ["Thai Massage", "Acupressure, stretching and assisted yoga postures improve flexibility and energy flow.", "₦30,000", "₦55,000", "45 min"],
  ["Swedish Nuru", "A blend of Swedish massage and Nuru gel for deep relaxation and nourished skin.", "₦40,000", "₦65,000", "1 hr"],
  ["Deep Tissue Nuru", "Deep tissue pressure and Nuru gel release intense tension and restore muscle function.", "₦45,000", "₦70,000", "1 hr"],
  ["Erotic / Deep Tissue / Swedish", "A customized experience blending relaxation and arousal while easing muscle tension.", "₦45,000", "₦70,000", "1 hr"],
  ["Tantric / Deep Tissue / Swedish", "A mindful, body-connecting massage designed to awaken sensual energy and promote deep relaxation.", "₦40,000", "₦65,000", "1 hr"],
  ["4 Hands Swedish / Deep Tissue Nuru", "Two therapists work in harmony to deliver ultimate relaxation and release.", "₦70,000", "₦95,000", "1 hr"],
  ["Couples Nuru Massage", "A side-by-side Nuru massage for couples to relax, connect and enjoy together.", "₦70,000", "₦95,000", "1 hr"],
  ["Yoni Massage", "A women’s wellness massage supporting reproductive health, hormonal balance and deep relaxation.", "₦40,000", "₦65,000", "1 hr"],
  ["Lingam", "A tailored men’s massage that promotes relaxation, improves circulation and relieves tension.", "₦40,000", "₦65,000", "1 hr"],
  ["Reflexology", "Pressure applied to reflex points on the feet supports healing, balance and whole-body relaxation.", "₦30,000", "₦55,000", "35 min"],
  ["Back Massage", "Focused care for the back, shoulders and neck to ease stress, tightness and improve posture.", "₦30,000", "₦55,000", "35 min"],
] as const;

const grooming = [
  ["Underarm", "₦5,000"], ["Brazilian", "₦20,000"], ["Bikini", "₦18,000"], ["Full Leg", "₦10,000"],
  ["Half Leg", "₦7,000"], ["Back", "₦10,000"], ["Tummy", "₦12,000"], ["Full Hand", "₦10,000"],
  ["Half Hand", "₦7,000"], ["Basic Pedicure", "₦5,000"], ["Jelly Pedicure", "₦7,000"], ["Manicure", "₦3,000"],
] as const;

function Wordmark({ light = false }: { light?: boolean }) {
  return <a href="#home" className={cn("inline-flex flex-col", light ? "text-primary-foreground" : "text-foreground")} aria-label="Mara Retreat and Wellness home">
    <span className="font-display text-[2rem] leading-none">Mara</span>
    <span className="mt-1 text-[0.52rem] uppercase tracking-[0.3em] opacity-75">Retreat &amp; Wellness</span>
  </a>;
}

function Navbar() {
  const [open, setOpen] = useState(false);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  return <header className="absolute inset-x-0 top-0 z-40 border-b border-primary-foreground/20 text-primary-foreground">
    <div className="mx-auto grid h-24 max-w-[1480px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 md:px-10 lg:grid-cols-[1fr_auto_1fr]">
      <Wordmark light />
      <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">{navItems.map(([label, href]) => <a key={href} href={href} className="text-[0.68rem] uppercase tracking-[0.12em] transition-opacity hover:opacity-60">{label}</a>)}</nav>
      <div className="hidden justify-end lg:flex"><a href={whatsappUrl} target="_blank" rel="noreferrer" className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 border border-primary-foreground/50 bg-transparent text-primary-foreground hover:border-primary-foreground hover:bg-primary-foreground hover:text-primary px-6 text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
      )}>
        Book an appointment
      </a></div>
      <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10 lg:hidden" onClick={() => setOpen(true)} aria-label="Open menu"><Menu className="size-6" /></Button>
    </div>
    <div className={cn("fixed inset-0 z-50 bg-primary px-6 py-6 transition-transform duration-500 lg:hidden", open ? "translate-x-0" : "translate-x-full")} aria-hidden={!open}>
      <div className="flex items-center justify-between"><Wordmark light /><Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10" onClick={() => setOpen(false)} aria-label="Close menu"><X className="size-6" /></Button></div>
      <nav className="mt-14 flex flex-col border-t border-primary-foreground/20">{navItems.map(([label, href], i) => <a key={href} href={href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1} className="flex items-center justify-between border-b border-primary-foreground/20 py-4 font-display text-3xl">{label}<span className="font-sans text-xs opacity-50">0{i + 1}</span></a>)}</nav>
      <a href={whatsappUrl} target="_blank" rel="noreferrer" className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 border border-primary bg-primary text-primary-foreground hover:border-accent hover:bg-accent hover:text-accent-foreground px-6 text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        "mt-8 w-full"
      )}>
        Book an appointment
      </a>
    </div>
  </header>;
}

function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <p className={cn("mb-5 text-[0.67rem] font-semibold uppercase tracking-[0.24em]", light ? "text-primary-foreground/70" : "text-muted-foreground")}>{children}</p>;
}
function SectionHeading({ eyebrow, title, copy, align = "left" }: { eyebrow: string; title: string; copy?: string; align?: "left" | "center" }) {
  return <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}><Eyebrow>{eyebrow}</Eyebrow><h2 className="font-display text-5xl leading-[0.98] text-balance md:text-7xl">{title}</h2>{copy && <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground md:text-lg">{copy}</p>}</div>;
}

function Hero() {
  return <section id="home" className="relative min-h-[92svh] overflow-hidden bg-primary text-primary-foreground">
    <img src={heroImage} alt="A serene Mara Retreat massage room" width={1600} height={1200} className="absolute inset-0 size-full object-cover object-[64%_center]" />
    <div className="absolute inset-0 bg-hero-overlay" />
    <div className="relative mx-auto flex min-h-[92svh] max-w-[1480px] items-end px-5 pb-20 pt-40 md:px-10 lg:items-center lg:pb-0">
      <div className="max-w-4xl animate-reveal"><Eyebrow light>Retreat &amp; Wellness · Lagos</Eyebrow><h1 className="font-display text-[clamp(3.7rem,8vw,8rem)] leading-[0.86] text-balance">Reconnect with<br/><em className="font-normal">your inner peace.</em></h1>
        <p className="mt-8 max-w-2xl text-base leading-7 text-primary-foreground/80 md:text-lg md:leading-8">Premium wellness, therapeutic massages and advanced aesthetics tailored to your body—at our serene Lagos sanctuary or in the comfort of your home.</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className={cn(
            "inline-flex min-h-12 items-center justify-center gap-2 border border-primary bg-primary text-primary-foreground hover:border-accent hover:bg-accent hover:text-accent-foreground px-6 text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          )}>
            Book your session
          </a>
          <a href="#services" className={cn(
            "inline-flex min-h-12 items-center justify-center gap-2 border border-primary-foreground/50 bg-transparent text-primary-foreground hover:border-primary-foreground hover:bg-primary-foreground hover:text-primary px-6 text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          )}>
            Explore services
          </a>
        </div>
      </div>
      <a href="#about" aria-label="Discover Mara" className="absolute bottom-8 right-10 hidden items-center gap-3 text-xs uppercase tracking-[0.15em] lg:flex">Discover Mara <ArrowDown className="size-4 animate-float" /></a>
    </div>
  </section>;
}

function Introduction() {
  return <section id="about" className="section-pad bg-background"><div className="mx-auto grid max-w-[1360px] gap-14 px-5 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-24">
    <div className="relative"><img src={treatmentImage} alt="Professional massage treatment at Mara Retreat" loading="lazy" width={1200} height={1504} className="aspect-[4/5] w-full object-cover" /><div className="absolute -bottom-8 -right-3 hidden bg-secondary px-8 py-7 md:block"><Sparkles className="mb-4 size-5" strokeWidth={1.2}/><p className="max-w-44 font-display text-2xl leading-tight">Your escape. Your time. Your wellness.</p></div></div>
    <div><Eyebrow>Welcome to Mara</Eyebrow><h2 className="font-display text-5xl leading-[1.02] text-balance md:text-7xl">A sanctuary for <em className="font-normal">lasting renewal.</em></h2><p className="mt-8 max-w-lg text-base leading-8 text-muted-foreground md:text-lg">Mara Retreat &amp; Wellness is a highly rated sanctuary in Lekki/Ajah, Lagos. We pair deep-tissue relaxation, advanced skincare and modern aesthetic treatments with thoughtful, professional care.</p><p className="mt-5 max-w-lg leading-8 text-muted-foreground">Our philosophy is simple: wellness is not a luxury, but a vital pillar of health. Every treatment is designed to bring physical relief and mental clarity.</p><a href="#experience" className={cn(
      "min-h-0 border-0 p-0 text-foreground underline-offset-8 hover:underline",
      "mt-8"
    )}>
      Why choose Mara <ArrowRight className="size-4" />
    </a></div>
  </div></section>;
}

function Services() {
  return <section id="services" className="section-pad bg-surface"><div className="mx-auto max-w-[1360px] px-5 md:px-10">
    <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-end"><SectionHeading eyebrow="Therapeutic massage solutions" title="Massage Menu"/><p className="max-w-xl leading-8 text-muted-foreground lg:justify-self-end">Melt away tension, improve circulation and re-energize your muscles with signature therapies delivered by experienced professionals.</p></div>
    <div className="mt-14 overflow-hidden border-y border-border">
      <div className="hidden grid-cols-[42px_1.25fr_1.45fr_100px_110px_75px] gap-5 bg-primary px-5 py-4 text-[0.62rem] uppercase tracking-[0.12em] text-primary-foreground lg:grid"><span>No.</span><span>Treatment</span><span>Description</span><span>Spa</span><span>Home</span><span>Time</span></div>
      {massages.map(([name, description, spa, home, duration], i) => <article key={name} className="grid gap-4 border-b border-border px-1 py-7 last:border-0 lg:grid-cols-[42px_1.25fr_1.45fr_100px_110px_75px] lg:items-center lg:gap-5 lg:px-5"><span className="text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span><h3 className="font-display text-2xl leading-tight">{name}</h3><p className="text-sm leading-6 text-muted-foreground">{description}</p><div><span className="text-[0.6rem] uppercase text-muted-foreground lg:hidden">Spa price · </span><strong className="text-sm font-semibold">{spa}</strong></div><div><span className="text-[0.6rem] uppercase text-muted-foreground lg:hidden">Home price · </span><strong className="text-sm font-semibold">{home}</strong></div><span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground"><Clock3 className="size-3.5"/>{duration}</span></article>)}
    </div>
    <div className="mt-7 flex flex-col gap-4 bg-secondary p-6 sm:flex-row sm:items-center sm:justify-between"><p className="max-w-2xl text-sm leading-6"><strong>Please note:</strong> A deposit is required before a therapist leaves for your home-service location.</p><a href={whatsappUrl} target="_blank" rel="noreferrer" className={cn(
      "inline-flex min-h-12 items-center justify-center gap-2 border border-primary bg-primary text-primary-foreground hover:border-accent hover:bg-accent hover:text-accent-foreground px-6 text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    )}>
      Reserve a treatment
    </a></div>
  </div></section>;
}

function Featured() {
  return <section id="home-service" className="grid bg-primary text-primary-foreground lg:min-h-[720px] lg:grid-cols-2"><img src={detailsImage} alt="Massage oils, warm stones and folded linens" loading="lazy" width={1408} height={1056} className="aspect-[4/3] size-full object-cover lg:aspect-auto"/><div className="flex items-center px-5 py-20 md:px-14 lg:px-[10%]"><div className="max-w-xl"><Eyebrow light>Mobile spa · Home service</Eyebrow><h2 className="font-display text-6xl leading-[0.95] text-balance md:text-8xl">Wellness,<br/><em className="font-normal">where you are.</em></h2><p className="mt-8 leading-8 text-primary-foreground/70">Our fully equipped mobile wellness team brings the complete Mara experience to your home, office or hotel.</p><p className="mt-5 text-sm uppercase tracking-[0.1em] text-primary-foreground/80">Lagos · Ibadan · Port Harcourt · Abuja</p><p className="mt-3 text-xs text-primary-foreground/55">Advance booking is required for out-of-state travel.</p><a href={whatsappUrl} target="_blank" rel="noreferrer" className={cn(
            "inline-flex min-h-12 items-center justify-center gap-2 border border-primary-foreground/50 bg-transparent text-primary-foreground hover:border-primary-foreground hover:bg-primary-foreground hover:text-primary px-6 text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
            "mt-9"
          )}>
            Request home service <ArrowRight className="size-4"/>
          </a></div></div></section>;
}

function Experience() {
  const points = [["01", "5-Star Experience", "Professional wellness therapies and attentive customer care."], ["02", "Tranquil Sanctuary", "A peaceful, secure setting created for complete mental and physical detachment."], ["03", "Expert Therapists", "Skilled professionals using therapeutic techniques and modern aesthetic care."], ["04", "Flexible Care", "Visit our Ajah retreat or let our mobile spa come to you."]];
  return <section id="experience" className="section-pad bg-background"><div className="mx-auto max-w-[1360px] px-5 md:px-10"><SectionHeading eyebrow="Why choose us" title="The Mara experience." align="center"/><div className="mt-20 grid gap-12 border-t border-border pt-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">{points.map(([n,t,c]) => <div key={t} className="lg:border-r lg:border-border lg:pr-8 lg:last:border-0"><span className="text-xs text-muted-foreground">{n}</span><h3 className="mt-8 font-display text-3xl">{t}</h3><p className="mt-4 leading-7 text-muted-foreground">{c}</p></div>)}</div></div></section>;
}

function Grooming() {
  return <section className="section-pad bg-surface"><div className="mx-auto grid max-w-[1360px] gap-14 px-5 md:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24"><div><SectionHeading eyebrow="Luxury grooming" title="Waxing & Nails" copy="Refined grooming rituals to keep you feeling polished, smooth and cared for."/><img src={interiorImage} alt="Mara Retreat relaxation lounge" loading="lazy" className="mt-10 hidden aspect-[5/3] w-full object-cover lg:block"/></div><div className="grid gap-x-10 md:grid-cols-2">{grooming.map(([name, price], i) => <div key={name} className="flex items-center justify-between border-b border-border py-5"><span className="flex items-center gap-3"><span className="text-[0.62rem] text-muted-foreground">{String(i + 1).padStart(2,"0")}</span><strong className="font-display text-xl font-normal">{name}</strong></span><span className="text-sm font-semibold">{price}</span></div>)}</div></div></section>;
}

const galleryImages = [{src:interiorImage,alt:"Mara wellness lounge",shape:"md:col-span-2 md:row-span-2"},{src:detailsImage,alt:"Spa oils and hot stones",shape:""},{src:treatmentImage,alt:"Professional massage treatment",shape:"md:row-span-2"},{src:heroImage,alt:"Private treatment room",shape:""},{src:detailsImage,alt:"Natural treatment details",shape:"md:col-span-2"}] as const;
function Gallery() { return <section id="gallery" className="section-pad bg-background"><div className="mx-auto max-w-[1480px] px-5 md:px-10"><SectionHeading eyebrow="Inside our sanctuary" title="Space to breathe."/><div className="mt-14 grid auto-rows-[260px] grid-cols-1 gap-3 md:grid-cols-3 md:auto-rows-[300px]">{galleryImages.map((image,i)=><figure key={i} className={cn("group overflow-hidden",image.shape)}><img src={image.src} alt={image.alt} loading="lazy" className="size-full object-cover transition-transform duration-1000 group-hover:scale-[1.025]"/></figure>)}</div></div></section>; }

function ContactItem({icon,title,children}:{icon:ReactNode;title:string;children:ReactNode}) { return <div className="grid grid-cols-[auto_1fr] gap-4"><span className="mt-1 text-accent [&_svg]:size-4">{icon}</span><div><h3 className="text-xs font-semibold uppercase tracking-[0.14em]">{title}</h3><div className="mt-2 text-sm leading-6 text-muted-foreground">{children}</div></div></div>; }
function Contact() {
  return <section id="contact" className="section-pad bg-surface"><div className="mx-auto grid max-w-[1360px] gap-16 px-5 md:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24"><div><SectionHeading eyebrow="Get in touch" title="Your renewal begins here."/><p className="mt-7 max-w-md leading-8 text-muted-foreground">Have a question or want to customize a group package? Reach our concierge team today.</p><a href={whatsappUrl} target="_blank" rel="noreferrer" className={cn(
            "inline-flex min-h-12 items-center justify-center gap-2 border border-primary bg-primary text-primary-foreground hover:border-accent hover:bg-accent hover:text-accent-foreground px-6 text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
            "mt-9"
          )}>
            Chat on WhatsApp
          </a></div><div><div className="grid gap-x-8 gap-y-9 border-y border-border py-10 sm:grid-cols-2"><ContactItem icon={<MapPin/>} title="Visit us">Royal Palmwill Estate (Remlek), Badore Road, Ajah, Lekki, Lagos</ContactItem><ContactItem icon={<Phone/>} title="Call"><a href="tel:+2347031007478">+234 703 100 7478</a></ContactItem><ContactItem icon={<ArrowRight/>} title="WhatsApp"><a href={whatsappUrl} target="_blank" rel="noreferrer">+234 907 338 5380</a></ContactItem><ContactItem icon={<CreditCard/>} title="Payments">Debit cards, credit cards and direct bank transfers</ContactItem></div><div className="mt-8 flex min-h-48 items-center justify-center border border-border bg-map-pattern p-8 text-center"><div><MapPin className="mx-auto mb-3 size-6" strokeWidth={1.3}/><p className="font-display text-2xl">Royal Palmwill Estate</p><p className="mt-2 text-xs uppercase tracking-[0.12em] text-muted-foreground">Badore Road · Ajah · Lagos</p></div></div></div></div></section>;
}

function FullCta() { return <section className="relative flex min-h-[600px] items-center justify-center overflow-hidden bg-primary px-5 py-24 text-center text-primary-foreground"><img src={heroImage} alt="Mara Retreat private treatment room" loading="lazy" className="absolute inset-0 size-full object-cover"/><div className="absolute inset-0 bg-cta-overlay"/><div className="relative max-w-4xl"><Eyebrow light>Relax · Rejuvenate · Restore</Eyebrow><h2 className="font-display text-6xl leading-[0.92] text-balance md:text-8xl">Make space for <em className="font-normal">yourself.</em></h2><p className="mx-auto mt-7 max-w-xl leading-8 text-primary-foreground/80">Choose your treatment and let our concierge arrange every detail.</p><a href={whatsappUrl} target="_blank" rel="noreferrer" className={cn(
            "inline-flex min-h-12 items-center justify-center gap-2 border border-primary bg-primary text-primary-foreground hover:border-accent hover:bg-accent hover:text-accent-foreground px-6 text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
            "mt-9"
          )}>
            Book an appointment
          </a></div></section>; }

function Footer() { return <footer className="bg-primary px-5 pb-8 pt-20 text-primary-foreground md:px-10"><div className="mx-auto max-w-[1360px]"><div className="grid gap-12 border-b border-primary-foreground/20 pb-16 md:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_0.7fr]"><div><Wordmark light/><p className="mt-6 max-w-sm leading-7 text-primary-foreground/60">A holistic escape for expertly delivered body therapies, pristine aesthetic care and deeply restorative wellness.</p></div><div><p className="text-[0.65rem] uppercase tracking-[0.18em] text-primary-foreground/50">Explore</p><nav className="mt-5 grid gap-3">{navItems.slice(1).map(([l,h])=><a key={h} href={h} className="w-fit text-sm hover:opacity-60">{l}</a>)}</nav></div><div><p className="text-[0.65rem] uppercase tracking-[0.18em] text-primary-foreground/50">Contact</p><div className="mt-5 space-y-3 text-sm text-primary-foreground/70"><p>Ajah, Lekki, Lagos</p><a href="tel:+2347031007478" className="block">+234 703 100 7478</a><a href={whatsappUrl} className="block">WhatsApp concierge</a><a href="#contact" className="inline-flex items-center gap-2 pt-3 text-primary-foreground"><Instagram className="size-4"/> Instagram</a></div></div></div><div className="flex flex-col gap-3 pt-7 text-[0.62rem] uppercase tracking-[0.14em] text-primary-foreground/45 sm:flex-row sm:justify-between"><p>© 2026 Mara Retreat &amp; Wellness.</p><p>Royal Palmwill Estate · Badore</p></div></div></footer>; }

export function SpaPage() { return <><Navbar/><main><Hero/><Introduction/><Services/><Featured/><Experience/><Grooming/><Gallery/><FullCta/><Contact/></main><Footer/></>; }
