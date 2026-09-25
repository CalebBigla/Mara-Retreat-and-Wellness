import { createFileRoute } from "@tanstack/react-router";
import { SpaPage } from "@/components/spa-page";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mara Retreat & Wellness | Premium Spa in Lagos" },
      { name: "description", content: "Premium massage, wellness, grooming and mobile spa services in Ajah, Lekki and across Nigeria." },
      { property: "og:title", content: "Mara Retreat & Wellness" },
      { property: "og:description", content: "Reconnect with your inner peace through therapeutic massage, advanced aesthetics and home wellness services." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SpaPage,
});
