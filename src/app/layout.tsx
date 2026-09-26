import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ALGAIR - Engineering Meets Biology",
  description:
    "ALGAIR: Capturing vehicle emissions using algae-based biological technology. Engineering, biology, and sustainable innovation combined.",
  keywords:
    "emissions capture, algae technology, exhaust filter, sustainable vehicles, environmental engineering",
  openGraph: {
    title: "ALGAIR - Engineering Meets Biology",
    description: "Capturing vehicle emissions using algae-based biological technology",
    images: [
      {
        url: "https://algair.vercel.app/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen bg-black text-white">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
