import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AutoAgent X - Transform Your Digital Future",
  description: "We create cutting-edge web applications, AI solutions, and digital experiences that drive growth and innovation for businesses of all sizes.",
  keywords: "web development, AI solutions, mobile apps, digital transformation, technology consulting",
  authors: [{ name: "AutoAgent X" }],
  creator: "AutoAgent X",
  publisher: "AutoAgent X",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://autoagentx.com",
    title: "AutoAgent X - Transform Your Digital Future",
    description: "We create cutting-edge web applications, AI solutions, and digital experiences that drive growth and innovation for businesses of all sizes.",
    siteName: "AutoAgent X",
  },
  twitter: {
    card: "summary_large_image",
    title: "AutoAgent X - Transform Your Digital Future",
    description: "We create cutting-edge web applications, AI solutions, and digital experiences that drive growth and innovation for businesses of all sizes.",
    creator: "@autoagentx",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
