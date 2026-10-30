import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./reference.css";
import "./interactions.css";
import "./expansion.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import AppProviders from "@/components/providers/AppProviders";

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Archademy",
  description:
    "Archademy is a Nigerian architecture and design studio crafting contemporary spaces with clarity, warmth, and precision.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <AppProviders>
          <Navbar />
          {children}
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
