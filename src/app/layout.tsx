import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "DEV.HUB | Engineering Digital Reality",
  description: "Synthesizing complex engineering with architectural discipline.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} antialiased font-sans`}>
      <body className="relative">
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  );
}
