import { APK_URL } from "@/lib/site";

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-hero-radial"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(800px 400px at 20% 0%, rgba(255,194,60,0.18), transparent), radial-gradient(700px 350px at 90% 100%, rgba(255,59,92,0.15), transparent)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-14 md:py-24 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs uppercase tracking-widest text-gold-400 mb-5">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Live • 30M+ players in Pakistan
          </div>

          <h1
            id="hero-title"
            className="font-display text-5xl sm:text-6xl md:text-7xl leading-[1.05] tracking-wide"
          >
            <span className="text-gold-gradient">Ec99 Game</span> Download APK
            <span className="block text-white/95">
              Pakistan&apos;s #1 Real Money Earning App 2026
            </span>
          </h1>

          <p className="mt-5 text-lg text-white/75 max-w-2xl">
            Play <strong className="text-white">color prediction</strong>,{" "}
            <strong className="text-white">K3 lottery</strong>,{" "}
            <strong className="text-white">5D lottery</strong>,{" "}
            <strong className="text-white">Dragon Tiger</strong> and{" "}
            <strong className="text-white">PG slots</strong> — and withdraw to{" "}
            <strong className="text-gold-400">JazzCash</strong> or{" "}
            <strong className="text-gold-400">Easypaisa</strong> in minutes.
            The smarter alternative to 988 Win, AR999 and other earning apps.
          </p>

          <ul className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
            <li className="rounded-xl bg-white/5 border border-white/10 px-3 py-2">
              <div className="text-gold-400 font-semibold">100%</div>
              <div className="text-white/70">Welcome bonus</div>
            </li>
            <li className="rounded-xl bg-white/5 border border-white/10 px-3 py-2">
              <div className="text-gold-400 font-semibold">3 min</div>
              <div className="text-white/70">Avg withdrawal</div>
            </li>
            <li className="rounded-xl bg-white/5 border border-white/10 px-3 py-2">
              <div className="text-gold-400 font-semibold">PKR 100</div>
              <div className="text-white/70">Min deposit</div>
            </li>
            <li className="rounded-xl bg-white/5 border border-white/10 px-3 py-2">
              <div className="text-gold-400 font-semibold">4.8 / 5</div>
              <div className="text-white/70">31,427 ratings</div>
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={APK_URL}
              rel="nofollow noopener"
              className="group relative inline-flex items-center gap-3 rounded-full bg-gold-500 px-6 py-3 text-base font-semibold text-ink-950 shadow-gold hover:bg-gold-400 transition"
            >
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="currentColor"
              >
                <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Download Ec99 APK (Latest v2.26)
              <span className="absolute inset-0 rounded-full shimmer opacity-30" />
            </a>
            <a
              href="#how-to-play"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-base font-semibold text-white/90 hover:bg-white/5 transition"
            >
              How it works →
            </a>
          </div>

          <p className="mt-4 text-xs text-white/50">
            Free • Android 6.0+ • 38 MB • Updated {" "}
            {new Date().toLocaleDateString("en-PK", {
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>

        {/* App preview card */}
        <div className="lg:col-span-5">
          <div className="relative mx-auto w-full max-w-sm">
            <div
              aria-hidden
              className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-gold-500/30 via-crimson-500/20 to-transparent blur-2xl"
            />
            <div className="relative rounded-3xl border border-white/10 bg-ink-900/90 p-5 shadow-glow animate-floaty">
              <div className="flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo.svg"
                  alt="Ec99 Game logo"
                  width={56}
                  height={56}
                  className="h-14 w-14 drop-shadow-[0_0_18px_rgba(255,194,60,0.35)]"
                />
                <div>
                  <div className="font-semibold">Ec99 Game</div>
                  <div className="text-xs text-white/60">v2.26.0 • 38 MB • Android</div>
                </div>
                <div className="ml-auto text-right">
                  <div className="text-gold-400 font-bold">4.8 ★</div>
                  <div className="text-[10px] text-white/50">31,427 reviews</div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
                {["K3 Lottery", "5D Lotto", "Dragon Tiger", "PG Slots", "Color", "Card"].map(
                  (g) => (
                    <div
                      key={g}
                      className="rounded-lg bg-white/5 border border-white/10 px-2 py-3 text-white/80"
                    >
                      {g}
                    </div>
                  )
                )}
              </div>

              <div className="mt-4 rounded-xl bg-gradient-to-r from-emerald-500/15 to-transparent border border-emerald-500/30 px-3 py-2 text-xs text-emerald-300">
                ✓ Withdraw via JazzCash / Easypaisa — avg 3 min
              </div>

              <a
                href={APK_URL}
                rel="nofollow noopener"
                className="mt-4 block text-center rounded-full bg-gold-500 px-4 py-2 text-sm font-semibold text-ink-950 hover:bg-gold-400 transition"
              >
                Install Ec99 Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
