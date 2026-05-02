const FEATURES = [
  {
    title: "Instant JazzCash & Easypaisa Withdrawals",
    desc:
      "90% of Ec99 withdrawal requests are processed in under 3 minutes — directly to JazzCash, Easypaisa or local bank accounts (HBL, UBL, Meezan, Allied).",
    icon: (
      <path d="M3 12h18M3 12l4-4m-4 4l4 4M21 12l-4-4m4 4l-4 4" />
    ),
  },
  {
    title: "100% Welcome Bonus + Daily Free Spins",
    desc:
      "First-time Ec99 players get a 100% deposit match up to PKR 5,000, plus 50 daily free spins on PG Fortune slots and a recharge bonus every Friday.",
    icon: <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />,
  },
  {
    title: "True Provably-Fair RNG",
    desc:
      "Every Ec99 round publishes its hash before the bet. You can verify each color prediction, K3 dice roll and 5D draw — no rigged results.",
    icon: <path d="M12 1l9 4-9 4-9-4 9-4zm0 8l9 4-9 4-9-4 9-4zm0 8l9 4-9 4-9-4 9-4z" />,
  },
  {
    title: "Optimized for 2G/3G/4G Pakistan",
    desc:
      "The Ec99 APK is only 38 MB and runs smoothly on entry-level Android phones with as little as 2 GB RAM, even on slower networks.",
    icon: <path d="M5 12.55a11 11 0 0114 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0M12 20h.01" />,
  },
  {
    title: "24/7 Urdu + English Support",
    desc:
      "Live chat agents based in Pakistan reply within 60 seconds — in Urdu, English or Punjabi. Plus a WhatsApp helpline for VIP players.",
    icon: <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />,
  },
  {
    title: "VIP Tiers & Cashback up to 12%",
    desc:
      "Climb 8 VIP levels and unlock weekly cashback up to 12%, exclusive VIP-only Dragon Tiger tables, and faster withdrawal lanes.",
    icon: <path d="M12 15l-3-3 1.4-1.4L12 12.2l5.6-5.6L19 8l-7 7zM12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />,
  },
  {
    title: "Built for Pakistan, by Pakistanis",
    desc:
      "Localized in PKR, Urdu language UI, plus games tuned for Pakistani players. Unlike imported apps like 988 Win or AR999, Ec99 is purpose-built for the local market.",
    icon: <path d="M12 21s-7-4.35-7-10a7 7 0 0114 0c0 5.65-7 10-7 10z" />,
  },
  {
    title: "Encrypted & Secure",
    desc:
      "Bank-grade 256-bit SSL, encrypted KYC, and 2FA on every withdrawal. Your number, balance and bet history are never shared.",
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  },
];

export default function Features() {
  return (
    <section
      id="features"
      aria-labelledby="features-title"
      className="relative py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold">
            Why play on Ec99
          </p>
          <h2
            id="features-title"
            className="mt-3 font-display text-4xl sm:text-5xl tracking-wide"
          >
            Why <span className="text-gold-gradient">Ec99 Game</span> beats every
            other earning app in Pakistan
          </h2>
          <p className="mt-4 text-white/70">
            Players searching for &ldquo;988 win game download&rdquo;, &ldquo;ar999 game&rdquo; or
            &ldquo;real money earning app Pakistan&rdquo; consistently switch to Ec99 for
            faster cashouts, fairer games, and a Pakistan-first experience. Here&apos;s
            what makes Ec99 different.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => (
            <li
              key={f.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:border-gold-500/40 hover:bg-white/[0.05] transition"
            >
              <div
                aria-hidden
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gold-500/15 text-gold-400"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {f.icon}
                </svg>
              </div>
              <h3 className="mt-4 font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-white/65">{f.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
