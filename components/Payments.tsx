const METHODS = [
  { name: "JazzCash", min: "PKR 100", time: "1–3 min", fee: "Free" },
  { name: "Easypaisa", min: "PKR 100", time: "1–3 min", fee: "Free" },
  { name: "HBL Bank", min: "PKR 500", time: "5–30 min", fee: "Free" },
  { name: "UBL Bank", min: "PKR 500", time: "5–30 min", fee: "Free" },
  { name: "Meezan Bank", min: "PKR 500", time: "5–30 min", fee: "Free" },
  { name: "USDT (TRC20)", min: "USDT 5", time: "Instant", fee: "Network only" },
];

export default function Payments() {
  return (
    <section
      id="payments"
      aria-labelledby="payments-title"
      className="relative py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold">
            Deposit & Withdraw
          </p>
          <h2
            id="payments-title"
            className="mt-3 font-display text-4xl sm:text-5xl tracking-wide"
          >
            Pakistan&apos;s fastest{" "}
            <span className="text-gold-gradient">JazzCash & Easypaisa</span>{" "}
            withdrawals
          </h2>
          <p className="mt-4 text-white/70">
            Ec99 settles 90% of withdrawal requests in under 3 minutes — to any
            JazzCash, Easypaisa or local bank account. There are no hidden fees,
            and minimum withdrawals start from just PKR 300.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-ink-900/70">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/[0.04] text-xs uppercase tracking-wider text-white/60">
              <tr>
                <th className="py-3 px-4">Method</th>
                <th className="py-3 px-4">Min Deposit</th>
                <th className="py-3 px-4">Withdrawal Time</th>
                <th className="py-3 px-4">Fee</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {METHODS.map((m) => (
                <tr key={m.name} className="hover:bg-white/[0.03]">
                  <td className="py-3 px-4 font-semibold text-white">{m.name}</td>
                  <td className="py-3 px-4 text-gold-400">{m.min}</td>
                  <td className="py-3 px-4 text-white/80">{m.time}</td>
                  <td className="py-3 px-4 text-emerald-400">{m.fee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-xs text-white/50">
          Fees and times shown reflect 30-day rolling averages from the Ec99
          payment gateway. Ec99 never charges hidden withdrawal fees, unlike some
          competing apps where players have reported &ldquo;988 win game
          withdrawal not received&rdquo; or &ldquo;ar999 withdrawal pending&rdquo; complaints.
        </p>
      </div>
    </section>
  );
}
