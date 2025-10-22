import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — AutoAgentX",
  description: "Terms of Service for AutoAgentX. Learn about our service terms, user agreements, and legal policies for our AI automation and video content services.",
  keywords: "terms of service, legal, AutoAgentX, AI automation, video content, business terms",
  robots: "index, follow",
  openGraph: {
    title: "Terms of Service — AutoAgentX",
    description: "Terms of Service for AutoAgentX. Learn about our service terms, user agreements, and legal policies for our AI automation and video content services.",
    type: "website",
    url: "https://autoagentx.com/terms",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
