import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

import { cn } from "@/lib/utils";

export function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <Link
      to="/"
      className={cn("inline-flex flex-col", light ? "text-primary-foreground" : "text-foreground")}
      aria-label="Mara Retreat and Wellness home"
    >
      <span className="font-display text-[2rem] leading-none">Mara</span>
      <span className="mt-1 text-[0.52rem] uppercase tracking-[0.3em] opacity-75">Retreat &amp; Wellness</span>
    </Link>
  );
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={cn("mb-5 text-[0.67rem] font-semibold uppercase tracking-[0.24em]", light ? "text-primary-foreground/70" : "text-muted-foreground")}>
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
}: { eyebrow: string; title: string; copy?: string; align?: "left" | "center" }) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="font-display text-5xl leading-[0.98] text-balance md:text-7xl">{title}</h2>
      {copy && <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground md:text-lg">{copy}</p>}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  copy,
  image,
  imageAlt,
}: { eyebrow: string; title: ReactNode; copy?: string; image: string; imageAlt: string }) {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <img src={image} alt={imageAlt} className="absolute inset-0 size-full object-cover" />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="relative mx-auto max-w-[1480px] px-5 pb-20 pt-40 md:px-10 md:pb-28 md:pt-52">
        <div className="max-w-3xl animate-reveal">
          <Eyebrow light>{eyebrow}</Eyebrow>
          <h1 className="font-display text-[clamp(2.9rem,6vw,5.5rem)] leading-[0.92] text-balance">{title}</h1>
          {copy && <p className="mt-7 max-w-xl leading-8 text-primary-foreground/80">{copy}</p>}
        </div>
      </div>
    </section>
  );
}
