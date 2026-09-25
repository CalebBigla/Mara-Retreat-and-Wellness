import { PublicLayout } from "@/components/layout/PublicLayout";
import { useParams } from "react-router-dom";
import { massages } from "@/data/massages";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function MassageDetails() {
  const { slug } = useParams();
  const massage = massages.find((m) => m.slug === slug);

  if (!massage) {
    return (
      <PublicLayout>
        <p>Massage not found</p>
      </PublicLayout>
    );
  }

  return (
    <PublicLayout>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <h1 className="font-display text-4xl">{massage.name}</h1>
          <p className="text-lg">{massage.description}</p>
        </div>
        <div className="grid gap-4 mb-6">
          <div>
            <span className="font-semibold">Duration:</span>
            <span>{massage.duration}</span>
          </div>
          <div>
            <span className="font-semibold">Spa Price:</span>
            <span>{massage.spaPrice}</span>
          </div>
          <div>
            <span className="font-semibold">Home Price:</span>
            <span>{massage.homePrice}</span>
          </div>
          <div>
            <span className="font-semibold">Status:</span>
            <span className={cn("font-medium", massage.status === "published" && "text-green-500")}>
              {massage.status}
            </span>
          </div>
        </div>
        {/* We can add an image here if we have one for the massage */}
        {/* <img src={massage.image} alt={massage.name} className="rounded-lg mb-6" /> */}
        <div className="mt-8">
          <a href="https://wa.me/2349073385380" target="_blank" rel="noreferrer" className={cn(
            "inline-flex min-h-12 items-center justify-center gap-2 border border-primary bg-primary text-primary-foreground hover:border-accent hover:bg-accent hover:text-accent-foreground px-6 text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          )}>
            Book this massage
          </a>
        </div>
      </div>
    </PublicLayout>
  );
}