import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Ec99 Game – Pakistan's #1 Real Money Earning App APK Download";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          color: "white",
          background:
            "radial-gradient(ellipse at top left, rgba(255,194,60,0.45), transparent 55%), radial-gradient(ellipse at bottom right, rgba(255,59,92,0.35), transparent 55%), #070A1A",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            color: "#FFC23C",
            fontSize: 28,
            letterSpacing: 8,
            textTransform: "uppercase",
            fontWeight: 700,
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: 999,
              background: "linear-gradient(135deg,#FFE48A,#E8A41A 60%,#B97D0F)",
              color: "#FFE48A",
              fontSize: 30,
              fontWeight: 900,
              letterSpacing: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 0 4px #0F4B2E, 0 0 0 6px #FFC23C",
            }}
          >
            <span
              style={{
                width: 60,
                height: 60,
                borderRadius: 999,
                background: "radial-gradient(circle at 50% 45%, #0F4B2E, #031A0F)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#FFC23C",
                fontSize: 24,
              }}
            >
              EC99
            </span>
          </div>
          Ec99 Game · Pakistan
        </div>

        <div
          style={{
            marginTop: 28,
            fontSize: 84,
            fontWeight: 900,
            lineHeight: 1.05,
            background: "linear-gradient(120deg,#FFE48A,#FFC23C,#E8A41A)",
            backgroundClip: "text",
            color: "transparent",
            display: "block",
          }}
        >
          Ec99 Game APK Download
        </div>

        <div
          style={{
            marginTop: 16,
            fontSize: 38,
            fontWeight: 600,
            color: "rgba(255,255,255,0.92)",
            display: "block",
          }}
        >
          Pakistan&apos;s #1 Real Money Earning App – v2.26
        </div>

        <div style={{ marginTop: 40, display: "flex", gap: 20 }}>
          {["JazzCash · 3 min", "Easypaisa · 3 min", "100% Bonus", "4.8 / 5 ★"].map((t) => (
            <div
              key={t}
              style={{
                fontSize: 24,
                padding: "12px 22px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
