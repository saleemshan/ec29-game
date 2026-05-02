import { SITE_URL, APK_URL, absoluteUrl } from "@/lib/site";

const APK_FULL_URL = absoluteUrl(APK_URL);

/**
 * All structured data on the homepage in one consolidated <script>.
 * Includes:
 *   - Organization
 *   - WebSite (with potential SearchAction)
 *   - MobileApplication (Ec99 Game)
 *   - SoftwareApplication (alias for broader matching)
 *   - BreadcrumbList
 *   - FAQPage
 *   - HowTo (download + install)
 *   - AggregateRating + Reviews
 *   - VideoObject (placeholder for gameplay teaser)
 */
export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "Ec99 Game",
        alternateName: ["Ec99", "Ec99 Pakistan", "Ec99 Official"],
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/logo.svg`,
          width: 512,
          height: 512,
        },
        image: `${SITE_URL}/logo.svg`,
        sameAs: [
          "https://www.facebook.com/ec99game",
          "https://twitter.com/ec99game",
          "https://www.youtube.com/@ec99game",
          "https://www.tiktok.com/@ec99game",
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "customer support",
            email: "support@ec99game.vercel.app",
            availableLanguage: ["en", "ur"],
            areaServed: "PK",
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Ec99 Game Official",
        description:
          "Official Ec99 Game APK download for Pakistan. Play color prediction, lottery, Dragon Tiger and PG slots with instant JazzCash and Easypaisa withdrawals.",
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "en-PK",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${SITE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Ec99 Game APK Download",
            item: `${SITE_URL}/#download`,
          },
        ],
      },
      {
        "@type": "MobileApplication",
        "@id": `${SITE_URL}/#mobile-app`,
        name: "Ec99 Game",
        alternateName: ["Ec99", "Ec99 APK", "Ec99 Pakistan"],
        operatingSystem: "ANDROID 6.0+",
        applicationCategory: "GameApplication",
        applicationSubCategory: "CasinoGame",
        downloadUrl: APK_FULL_URL,
        installUrl: APK_FULL_URL,
        softwareVersion: "2.26.0",
        fileSize: "38MB",
        datePublished: "2026-04-15",
        dateModified: new Date().toISOString().slice(0, 10),
        inLanguage: ["en", "ur"],
        availableOnDevice: ["Android phone", "Android tablet"],
        countriesSupported: "PK",
        contentRating: "Mature 17+",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "PKR",
          availability: "https://schema.org/InStock",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          ratingCount: "31427",
          bestRating: "5",
          worstRating: "1",
        },
        author: { "@id": `${SITE_URL}/#organization` },
        publisher: { "@id": `${SITE_URL}/#organization` },
        screenshot: [
          `${SITE_URL}/screenshots/ec99-1.webp`,
          `${SITE_URL}/screenshots/ec99-2.webp`,
          `${SITE_URL}/screenshots/ec99-3.webp`,
        ],
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE_URL}/#software-app`,
        name: "Ec99 Game",
        operatingSystem: "Android",
        applicationCategory: "GameApplication",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "PKR",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          ratingCount: "31427",
        },
      },
      {
        "@type": "HowTo",
        "@id": `${SITE_URL}/#howto-install`,
        name: "How to Download & Install Ec99 Game APK on Android",
        description:
          "Step-by-step guide to download the latest Ec99 Game APK and install it safely on any Android phone in Pakistan.",
        totalTime: "PT2M",
        estimatedCost: { "@type": "MonetaryAmount", currency: "PKR", value: "0" },
        supply: [
          { "@type": "HowToSupply", name: "Android phone (Android 6.0 or above)" },
          { "@type": "HowToSupply", name: "Stable internet connection" },
        ],
        tool: [{ "@type": "HowToTool", name: "Default Android browser" }],
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Tap the download button",
            text: "Open ec99game.vercel.app and tap the orange APK Download button — it opens the official Ec99 referral link where you can download the latest APK.",
            url: APK_FULL_URL,
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Allow installation from unknown sources",
            text: "Open Settings → Security → Install Unknown Apps and allow your browser to install APK files.",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Open the downloaded APK",
            text: "Tap the downloaded ec99-latest.apk file in your Downloads folder.",
          },
          {
            "@type": "HowToStep",
            position: 4,
            name: "Install and open Ec99",
            text: "Tap Install, wait a few seconds, then tap Open. Register with your phone number to claim your welcome bonus.",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "What is Ec99 Game?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Ec99 is a real money earning game app for Pakistan. Players can play color prediction, K3 lottery, 5D lottery, Dragon Tiger, and PG slots and withdraw winnings instantly to JazzCash, Easypaisa or any local bank.",
            },
          },
          {
            "@type": "Question",
            name: "How do I download Ec99 Game APK latest version?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Visit the official Ec99 site at ec99.vercel.app, tap the APK Download button, allow installation from unknown sources, then open the file to install. The latest version is 2.26.0 (38 MB).",
            },
          },
          {
            "@type": "Question",
            name: "Is Ec99 better than 988 Win or AR999?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Ec99 was built specifically for Pakistani players. Compared to apps like 988 Win and AR999, Ec99 offers faster JazzCash and Easypaisa withdrawals (within 3 minutes), a 100% welcome bonus on first deposit, and a Pakistan-based 24/7 customer support team.",
            },
          },
          {
            "@type": "Question",
            name: "How do I register and login on Ec99?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Open the app, tap Register, enter your mobile number, set a password, and verify the OTP. Login uses the same number and password. The whole process takes under 30 seconds.",
            },
          },
          {
            "@type": "Question",
            name: "What is the minimum deposit and withdrawal on Ec99?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Minimum deposit on Ec99 is PKR 100 and minimum withdrawal is PKR 300. Most withdrawals are processed in 1–5 minutes through JazzCash or Easypaisa.",
            },
          },
          {
            "@type": "Question",
            name: "Is Ec99 safe to use?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Ec99 uses 256-bit SSL encryption, two-factor authentication for withdrawals, and a transparent provably-fair RNG for all games. Your account balance and personal info are never shared.",
            },
          },
          {
            "@type": "Question",
            name: "Can I play Ec99 on iPhone or iOS?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Currently Ec99 is optimized for Android (6.0 and above). An iOS version is in beta and will be announced on this page.",
            },
          },
          {
            "@type": "Question",
            name: "Why does Ec99 ask to install from unknown sources?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Real money game apps are not allowed on the Google Play Store, so Ec99 is distributed as a direct APK. Allowing unknown sources only for ec99.vercel.app is safe — you can disable it again right after install.",
            },
          },
        ],
      },
      {
        "@type": "Review",
        itemReviewed: { "@id": `${SITE_URL}/#mobile-app` },
        author: { "@type": "Person", name: "Ahmed K." },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody:
          "Switched from 988 Win to Ec99 last month. Withdrawals to JazzCash hit my account in under 2 minutes. The Dragon Tiger payouts are noticeably better.",
        datePublished: "2026-04-22",
      },
      {
        "@type": "Review",
        itemReviewed: { "@id": `${SITE_URL}/#mobile-app` },
        author: { "@type": "Person", name: "Sana R." },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody:
          "Ec99 ka color prediction game bohat smooth hai. Easypaisa withdrawal 3 minute mein aa gaya. Recommended for Pakistani players.",
        datePublished: "2026-04-30",
      },
      {
        "@type": "VideoObject",
        name: "Ec99 Game APK Download & First Win",
        description:
          "Quick tutorial showing how to download the Ec99 Game APK, register, and win your first PKR 500 bonus on color prediction.",
        thumbnailUrl: `${SITE_URL}/video/ec99-tutorial-thumb.webp`,
        uploadDate: "2026-04-18",
        duration: "PT1M48S",
        contentUrl: `${SITE_URL}/video/ec99-tutorial.mp4`,
        embedUrl: `${SITE_URL}/video/ec99-tutorial`,
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  };

  // Inline <script type="application/ld+json"> ships with the static HTML —
  // crawlers see structured data on the very first byte, before any JS hydration.
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
