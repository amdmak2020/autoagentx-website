import About from "@/components/About";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - AutoAgent X",
  description: "Learn about AutoAgent X, our mission, vision, values, and the passionate team behind our innovative technology solutions.",
  openGraph: {
    title: "About Us - AutoAgent X",
    description: "Learn about AutoAgent X, our mission, vision, values, and the passionate team behind our innovative technology solutions.",
  },
};

export default function AboutPage() {
  return <About />;
}
