import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function MassageCard({ massage }) {
  return (
    <div className="bg-background p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h3 className="font-display text-2xl mb-4">{massage.name}</h3>
      <p className="mb-4">{massage.description}</p>
      <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
        <div>
          <span>Duration:</span>
          <span className="font-medium">{massage.duration}</span>
        </div>
        <div>
          <span>Spa Price:</span>
          <span className="font-medium">{massage.spaPrice}</span>
        </div>
        <div>
          <span>Home Price:</span>
          <span className="font-medium">{massage.homePrice}</span>
        </div>
        <div>
          <span>Status:</span>
          <span className={cn("font-medium", massage.status === "published" && "text-green-500")}>
            {massage.status}
          </span>
        </div>
      </div>
      <Link to={`/massages/${massage.slug}`}>
        <Button variant="outline" size="sm" className="mt-4">
          View Details
        </Button>
      </Link>
    </div>
  );
}