const ROWS: {
  feature: string;
  ec99: string | boolean;
  win988: string | boolean;
  ar999: string | boolean;
}[] = [
  { feature: "Built specifically for Pakistan", ec99: true, win988: false, ar999: false },
  { feature: "Withdrawal under 3 minutes", ec99: true, win988: "5–15 min", ar999: "10–30 min" },
  { feature: "JazzCash + Easypaisa supported", ec99: true, win988: true, ar999: true },
  { feature: "Local bank deposits (HBL/UBL/Meezan)", ec99: true, win988: false, ar999: true },
  { feature: "100% welcome bonus", ec99: true, win988: "30%", ar999: "50%" },
  { feature: "VIP cashback up to 12%", ec99: true, win988: "5%", ar999: "8%" },
  { feature: "24/7 Urdu live chat", ec99: true, win988: false, ar999: false },
  { feature: "Provably-fair RNG verification", ec99: true, win988: false, ar999: false },
  { feature: "APK size", ec99: "38 MB", win988: "62 MB", ar999: "55 MB" },
  { feature: "Min withdrawal", ec99: "PKR 300", win988: "PKR 500", ar999: "PKR 500" },
  { feature: "Aviator + Teen Patti live tables", ec99: true, win988: false, ar999: true },
];

function Cell({ v }: { v: string | boolean }) {
  if (v === true)
    return (
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
        ✓
      </span>
    );
  if (v === false)
    return (
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-crimson-500/15 text-crimson-500">
        ✕
      </span>
    );
  return <span className="text-white/85">{v}</span>;
}

export default function Compare() {
  return (
    <section
      id="compare"
      aria-labelledby="compare-title"
      className="relative py-20 sm:py-24 bg-gradient-to-b from-ink-950 to-ink-900"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold">
            Honest comparison
          </p>
          <h2
            id="compare-title"
            className="mt-3 font-display text-4xl sm:text-5xl tracking-wide"
          >
            <span className="text-gold-gradient">Ec99</span> vs 988 Win vs AR999
          </h2>
          <p className="mt-4 text-white/70">
            Players searching for &ldquo;988 win alternative&rdquo;, &ldquo;ar999 game&rdquo; or
            &ldquo;best earning app Pakistan&rdquo; deserve a clear comparison. Here&apos;s
            how Ec99 stacks up against the two most-searched competitors.
          </p>
        </div>

        <div className="mt-10 overflow-x-auto rounded-2xl border border-white/10 bg-ink-900/80">
          <table className="w-full text-left text-sm min-w-[640px]">
            <thead>
              <tr className="bg-white/[0.04] text-xs uppercase tracking-wider text-white/60">
                <th className="py-4 px-5">Feature</th>
                <th className="py-4 px-5 text-gold-400">Ec99 Game</th>
                <th className="py-4 px-5">988 Win</th>
                <th className="py-4 px-5">AR999</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {ROWS.map((row) => (
                <tr key={row.feature} className="hover:bg-white/[0.03]">
                  <td className="py-3 px-5 text-white/80">{row.feature}</td>
                  <td className="py-3 px-5 text-white">
                    <Cell v={row.ec99} />
                  </td>
                  <td className="py-3 px-5 text-white/70">
                    <Cell v={row.win988} />
                  </td>
                  <td className="py-3 px-5 text-white/70">
                    <Cell v={row.ar999} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-xs text-white/50">
          Comparison data compiled from publicly available app metadata, in-app
          screenshots, and player feedback collected April 2026. Trademarks
          belong to their respective owners; Ec99 is not affiliated with 988 Win
          or AR999.
        </p>
      </div>
    </section>
  );
}
