import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const siteUrl = "https://kieran.wang";
const siteName = "Kieran Wang";
const title = "Kieran Wang — Developer & Product Designer";
const description =
  "Kieran Wang is a web and native app developer and product designer. The design is not just what it looks like and feels like. The design is how it works.";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s — Kieran Wang",
  },
  description,
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: "technology",
  keywords: [
    "Kieran Wang",
    "Kieran",
    "kieranwv",
    "个人网站",
    "Developer",
    "Web Development",
    "Native App Development",
    "Product Design",
  ],
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.webmanifest",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title,
    description,
    url: "/",
    siteName,
    type: "profile",
    locale: "en_US",
    alternateLocale: ["zh_CN"],
    images: [
      {
        url: "/og-v2.png",
        width: 1733,
        height: 907,
        alt: "Kieran Wang — Developer and Product Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-v2.png"],
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#e8e8e3",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: title,
  url: siteUrl,
  description,
  mainEntity: {
    "@type": "Person",
    name: siteName,
    url: siteUrl,
    jobTitle: ["Web and Native App Developer", "Product Designer"],
    sameAs: [
      "https://github.com/kieranwv",
      "https://juejin.cn/user/1141722285880972",
    ],
    knowsAbout: [
      "Web Development",
      "Native App Development",
      "Product Design",
    ],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
