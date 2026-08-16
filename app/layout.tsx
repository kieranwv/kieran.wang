import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kieran Wang — Personal Website",
  description: "Kieran Wang is a developer and product builder interested in software, product, and design.",
  metadataBase: new URL("https://kieran.wang"),
  openGraph: {
    title: "Kieran Wang",
    description: "Developer and product builder. A small personal index on the web.",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-v2.png", width: 1733, height: 907, alt: "Kieran Wang — Personal website" }],
  },
  twitter: { card: "summary_large_image", images: ["/og-v2.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
