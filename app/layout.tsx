import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const siteUrl = "https://kieran.wang";
const siteName = "Kieran Wang";
const title = "Kieran Wang — Design is how it works";
const description =
  "Kieran Wang 的个人网站：原生应用与 Web 开发、产品实践、文章与摄影。少一点，但要更好。";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

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
    "Product Management",
    "Photography",
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
        url: "/og.png",
        width: 1733,
        height: 907,
        alt: "Kieran Wang — Developer, Product Manager and Photographer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: "#07101f",
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
    jobTitle: ["Web and Native App Developer", "Product Manager", "Photographer"],
    sameAs: [
      "https://github.com/kieranwv",
      "https://juejin.cn/user/1141722285880972",
    ],
    knowsAbout: [
      "Web Development",
      "Native App Development",
      "Product Management",
      "Photography",
    ],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable}`}>
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
