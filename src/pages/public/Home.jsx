import { PublicLayout } from "@/components/layout/PublicLayout";
import { Hero } from "@/components/public/Hero";
import { Introduction } from "@/components/public/Introduction";
import { Services } from "@/components/public/Services";
import { Featured } from "@/components/public/Featured";
import { Experience } from "@/components/public/Experience";
import { Gallery } from "@/components/public/Gallery";
import { Cta } from "@/components/public/Cta";
import { Contact } from "@/components/public/Contact";

export function Home() {
  return (
    <PublicLayout>
      <Hero />
      <Introduction />
      <Services />
      <Featured />
      <Experience />
      <Gallery />
      <Cta />
      <Contact />
    </PublicLayout>
  );
}