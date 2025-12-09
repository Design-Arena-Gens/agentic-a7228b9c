import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const heading = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-heading"
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  title: "Adcraze | Performance-Driven Digital Advertising",
  description:
    "Adcraze delivers performance-based advertising campaigns for growth-focused businesses. We only win when you win."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  );
}
