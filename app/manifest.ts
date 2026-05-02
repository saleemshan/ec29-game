import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ec99 Game – Pakistan's #1 Real Money Earning App",
    short_name: "Ec99 Game",
    description:
      "Download Ec99 Game APK and earn real money in Pakistan. Color prediction, lottery, slots, Dragon Tiger with instant JazzCash & Easypaisa withdrawals.",
    start_url: "/",
    display: "standalone",
    background_color: "#070A1A",
    theme_color: "#FFC23C",
    orientation: "portrait",
    categories: ["games", "entertainment", "finance"],
    lang: "en-PK",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
