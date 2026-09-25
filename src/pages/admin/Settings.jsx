import { AdminLayout } from "@/components/layout/AdminLayout";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SettingsAdmin() {
  return (
    <AdminLayout>
      <div className="text-center py-12">
        <h1 className="font-display text-4xl mb-6">Settings</h1>
        <p className="text-lg mb-8">
          Manage spa settings, contact information, social links, etc.
        </p>
          <a href="#" className={cn(
            "inline-flex min-h-12 items-center justify-center gap-2 border border-border bg-transparent text-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground px-6 text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          )}>
            Coming Soon
          </a>
      </div>
    </AdminLayout>
  );
}