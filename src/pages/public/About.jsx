import { PublicLayout } from "@/components/layout/PublicLayout";
import { Introduction } from "@/components/public/Introduction";

export function About() {
  return (
    <PublicLayout>
      <Introduction />
      {/* Additional content can be added here */}
    </PublicLayout>
  );
}