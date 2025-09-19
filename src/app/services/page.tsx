import Services from "@/components/Services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services - AutoAgent X",
  description: "Explore our comprehensive technology services including web development, mobile apps, AI solutions, consulting, and more.",
  openGraph: {
    title: "Our Services - AutoAgent X",
    description: "Explore our comprehensive technology services including web development, mobile apps, AI solutions, consulting, and more.",
  },
};

export default function ServicesPage() {
  return <Services />;
}
