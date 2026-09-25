import { PublicLayout } from "@/components/layout/PublicLayout";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Book() {
  return (
    <PublicLayout>
      <div className="text-center py-12">
        <h1 className="font-display text-4xl mb-6">Book an Appointment</h1>
        <p className="text-lg mb-8">
          Please use the WhatsApp button below to book your appointment.
        </p>
          <a href="https://wa.me/2349073385380" target="_blank" rel="noreferrer" className={cn(
            "inline-flex min-h-12 items-center justify-center gap-2 border border-primary bg-primary text-primary-foreground hover:border-accent hover:bg-accent hover:text-accent-foreground px-6 text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
            "mt-9"
          )}>
            Book via WhatsApp
          </a>
      </div>
    </PublicLayout>
  );
}