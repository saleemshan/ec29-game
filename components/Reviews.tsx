const REVIEWS = [
  {
    name: "Ahmed K.",
    city: "Lahore",
    rating: 5,
    body:
      "Switched from 988 Win to Ec99 last month. Withdrawals to JazzCash hit my account in under 2 minutes. The Dragon Tiger payouts are noticeably better.",
    date: "22 Apr 2026",
  },
  {
    name: "Sana R.",
    city: "Karachi",
    rating: 5,
    body:
      "Ec99 ka color prediction game bohat smooth hai. Easypaisa withdrawal 3 minute mein aa gaya. Pakistani players ke liye best earning app.",
    date: "30 Apr 2026",
  },
  {
    name: "Bilal A.",
    city: "Islamabad",
    rating: 5,
    body:
      "Tried AR999, 988win and a few others. Ec99 has the most reliable payments and the best Aviator multipliers. APK is also light – only 38 MB.",
    date: "18 Apr 2026",
  },
  {
    name: "Hina M.",
    city: "Faisalabad",
    rating: 4,
    body:
      "100% welcome bonus actually paid out. Took my first PKR 4,000 win in 2 days. Customer support replied in Urdu within a minute.",
    date: "05 Apr 2026",
  },
  {
    name: "Usman T.",
    city: "Multan",
    rating: 5,
    body:
      "K3 lottery aur 5D lotto dono pasand hain. Daily PKR 500-1000 ka profit ho jata hai. Easy login and registration.",
    date: "12 Apr 2026",
  },
  {
    name: "Zoha S.",
    city: "Rawalpindi",
    rating: 5,
    body:
      "I was sceptical but Ec99 paid out on day one. The PG Slots bonus rounds hit way more often than other Pakistani earning apps I&apos;ve tried.",
    date: "27 Apr 2026",
  },
];

function Stars({ value }: { value: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          aria-hidden
          viewBox="0 0 24 24"
          className={`h-4 w-4 ${i < value ? "text-gold-400" : "text-white/15"}`}
          fill="currentColor"
        >
          <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="relative py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold">
              Real player reviews
            </p>
            <h2
              id="reviews-title"
              className="mt-3 font-display text-4xl sm:text-5xl tracking-wide"
            >
              Rated <span className="text-gold-gradient">4.8 / 5</span> by 31,427
              Pakistani players
            </h2>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <Stars value={5} />
              <span className="text-white font-semibold">4.8</span>
              <span className="text-white/50">/ 5</span>
            </div>
            <p className="text-xs text-white/50 mt-1">
              Based on verified Ec99 in-app reviews · Apr 2026
            </p>
          </div>
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r) => (
            <li
              key={r.name + r.date}
              className="rounded-2xl border border-white/10 bg-ink-900/70 p-5"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-white">{r.name}</div>
                  <div className="text-xs text-white/50">{r.city} · {r.date}</div>
                </div>
                <Stars value={r.rating} />
              </div>
              <p
                className="mt-3 text-sm text-white/75"
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: r.body }}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
