import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kieran Wang — Developer, Product Builder & Photographer",
  description: "Kieran Wang builds software and products, and photographs the blue hour.",
  metadataBase: new URL("https://kieran.wang"),
  openGraph: {
    title: "Kieran Wang",
    description: "Developer, product builder, and photographer.",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og.png", width: 1733, height: 907, alt: "Kieran Wang — Developer, product builder, and photographer." }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
