import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ec99game.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Ec99 Game Download APK 2026 – Pakistan's #1 Real Money Earning App",
    template: "%s | Ec99 Game Official",
  },
  description:
    "Download Ec99 Game APK latest version 2026 — Pakistan's fastest real money earning app. Play color prediction, K3 lottery, 5D, Dragon Tiger and PG slots. Instant JazzCash & Easypaisa withdrawals. Register & login in 30 seconds.",
  keywords: [
    "ec99",
    "ec99 game",
    "ec99 game download",
    "ec99 apk",
    "ec99 apk download",
    "ec99 game pakistan",
    "ec99 login",
    "ec99 register",
    "ec99 real money game",
    "ec99 earning app",
    "ec99 game apk latest version",
    "ec99 game download for android",
    "ec99 official",
    "color prediction game pakistan",
    "real money game pakistan",
    "jazzcash game app",
    "easypaisa earning game",
    "988 win alternative",
    "ar999 alternative",
    "best earning app pakistan 2026",
  ],
  authors: [{ name: "Ec99 Game Official" }],
  creator: "Ec99 Game",
  publisher: "Ec99 Game",
  category: "Games",
  applicationName: "Ec99 Game",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-PK": "/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: SITE_URL,
    siteName: "Ec99 Game",
    title:
      "Ec99 Game Download APK 2026 – Pakistan's #1 Real Money Earning App",
    description:
      "Download Ec99 APK for Android. Play color prediction, lottery, slots & Dragon Tiger. Withdraw via JazzCash/Easypaisa within minutes. Register free today.",
    images: [
      {
        url: "/og-cover.png",
        width: 1200,
        height: 630,
        alt: "Ec99 Game – Pakistan Real Money Earning App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ec99 Game APK Download – Real Money Earning App Pakistan",
    description:
      "Pakistan's fastest growing earning game. Color prediction, slots, lottery, Dragon Tiger. Withdraw to JazzCash & Easypaisa in minutes.",
    images: ["/og-cover.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/logo.svg", type: "image/svg+xml", sizes: "any" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.svg",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "A7-YrvC27E1-AyezeLeEXhtTtBqIH_IazbS4uWoXHqk",
  },
  other: {
    "theme-color": "#070A1A",
    "msapplication-TileColor": "#070A1A",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#070A1A" },
    { media: "(prefers-color-scheme: dark)", color: "#070A1A" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-PK" className={`${bebas.variable} ${inter.variable}`}>
      <head>
        <link rel="preconnect" href={SITE_URL} />
        <link rel="dns-prefetch" href={SITE_URL} />
      </head>
      <body className="bg-ink-950 text-white antialiased selection:bg-gold-500 selection:text-ink-950">
        {children}
      </body>
    </html>
  );
}
