import type { Metadata } from "next";
import KatexStylesheet from '@/components/KatexStyleSheet';
import PrismStylesheet from '@/components/PrismStyleSheet';
import "./globals.css";

// Component imports
import { Navbar } from "@/components/Navbar";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Footer } from "@/components/Footer";


export const metadata: Metadata = {
  title: "Vicky Ye",
  description: "Personal portfolio website of Vicky Ye",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <KatexStylesheet />
        <PrismStylesheet />
      </head>
      <body className="overscroll-x-none overscroll-y-none">
        <Navbar />
        <main>{children}</main>
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
