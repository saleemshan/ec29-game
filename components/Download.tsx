import { APK_URL } from "@/lib/site";

const STEPS = [
  {
    n: "01",
    title: "Tap the Download button",
    body:
      "Press the orange APK Download button below. Your browser will save ec99-latest.apk (38 MB) to your Downloads folder.",
  },
  {
    n: "02",
    title: "Allow installation from unknown sources",
    body:
      "Open Settings → Security → Install Unknown Apps and toggle ON for your browser. (Real-money game APKs aren't on Play Store, so this step is required.)",
  },
  {
    n: "03",
    title: "Open the APK file",
    body:
      "Tap the ec99-latest.apk file in Downloads (or in the notification bar). Tap Install when prompted — installation finishes in under 10 seconds.",
  },
  {
    n: "04",
    title: "Register & claim your bonus",
    body:
      "Open Ec99, tap Register, enter your mobile number, set a password, verify the OTP. Make your first deposit (min PKR 100) and the 100% welcome bonus credits instantly.",
  },
];

export default function Download() {
  return (
    <section
      id="download"
      aria-labelledby="download-title"
      className="relative py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <p className="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold">
              Free APK · Latest version 2.26.0
            </p>
            <h2
              id="download-title"
              className="mt-3 font-display text-4xl sm:text-5xl tracking-wide"
            >
              <span className="text-gold-gradient">Ec99 Game APK</span>{" "}
              Download for Android
            </h2>
            <p className="mt-4 text-white/70">
              Get the official Ec99 Game APK — latest version 2.26.0, only 38 MB,
              built for Android 6.0 and above. Faster, lighter and more reliable
              than 988 Win, AR999 or any other Pakistani earning app.
            </p>

            <a
              href={APK_URL}
              className="mt-6 group relative inline-flex items-center gap-3 rounded-full bg-gold-500 px-7 py-4 text-base font-bold text-ink-950 shadow-gold hover:bg-gold-400 transition"
              rel="nofollow noopener"
            >
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Ec99 APK · 38 MB
              <span className="absolute inset-0 rounded-full shimmer opacity-30" />
            </a>

            <ul className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <li className="rounded-xl bg-white/5 border border-white/10 px-3 py-2">
                <div className="text-white/50 text-xs">Version</div>
                <div className="text-white font-semibold">v2.26.0</div>
              </li>
              <li className="rounded-xl bg-white/5 border border-white/10 px-3 py-2">
                <div className="text-white/50 text-xs">Size</div>
                <div className="text-white font-semibold">38 MB</div>
              </li>
              <li className="rounded-xl bg-white/5 border border-white/10 px-3 py-2">
                <div className="text-white/50 text-xs">Requires</div>
                <div className="text-white font-semibold">Android 6.0+</div>
              </li>
              <li className="rounded-xl bg-white/5 border border-white/10 px-3 py-2">
                <div className="text-white/50 text-xs">Country</div>
                <div className="text-white font-semibold">Pakistan 🇵🇰</div>
              </li>
              <li className="rounded-xl bg-white/5 border border-white/10 px-3 py-2">
                <div className="text-white/50 text-xs">Languages</div>
                <div className="text-white font-semibold">English / Urdu</div>
              </li>
              <li className="rounded-xl bg-white/5 border border-white/10 px-3 py-2">
                <div className="text-white/50 text-xs">Updated</div>
                <div className="text-white font-semibold">
                  {new Date().toLocaleDateString("en-PK", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </div>
              </li>
            </ul>

            <p className="mt-5 text-xs text-white/50">
              Looking for &ldquo;Ec99 game download apk latest version&rdquo;,
              &ldquo;Ec99 app download for android&rdquo;, &ldquo;Ec99 register&rdquo; or
              &ldquo;Ec99 login Pakistan&rdquo;? You&apos;re on the official page —
              ec99game.vercel.app is the only verified source.
            </p>
          </div>

          <ol
            id="how-to-play"
            className="lg:col-span-7 space-y-4"
            aria-label="Steps to install Ec99 Game APK"
          >
            {STEPS.map((s) => (
              <li
                key={s.n}
                className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:border-gold-500/30 transition"
              >
                <span className="font-display text-4xl text-gold-gradient leading-none w-12 shrink-0">
                  {s.n}
                </span>
                <div>
                  <h3 className="font-semibold text-white">{s.title}</h3>
                  <p className="mt-1 text-sm text-white/65">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
