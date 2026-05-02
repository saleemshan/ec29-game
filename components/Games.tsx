const GAMES = [
  {
    name: "Color Prediction",
    minBet: "PKR 10",
    round: "60 sec",
    rtp: "97.5%",
    desc:
      "Predict if the next number is red, green or violet — Ec99's flagship game with the simplest learning curve in Pakistan.",
    tag: "Most Popular",
  },
  {
    name: "K3 Lottery",
    minBet: "PKR 10",
    round: "3 min",
    rtp: "97.0%",
    desc:
      "Three virtual dice produce a combined total. Bet on big/small, odd/even, sum or specific combinations for higher payouts.",
    tag: "Hot",
  },
  {
    name: "5D Lottery",
    minBet: "PKR 10",
    round: "3 min",
    rtp: "97.0%",
    desc:
      "Predict five separate digit positions in a single automated draw. Bet on individual positions or combined outcomes.",
    tag: "Big Wins",
  },
  {
    name: "Dragon Tiger",
    minBet: "PKR 20",
    round: "90 sec",
    rtp: "96.3%",
    desc:
      "A fast card game where you bet on whether Dragon or Tiger will draw the higher card. Rounds finish in under 2 minutes.",
    tag: "Fast",
  },
  {
    name: "PG Fortune Slots",
    minBet: "PKR 10",
    round: "Spin",
    rtp: "96.8%",
    desc:
      "Includes Fortune Tiger, Fortune Rabbit, Fortune Gems and other licensed PG Soft titles with progressive bonus rounds.",
    tag: "Jackpot",
  },
  {
    name: "Andar Bahar",
    minBet: "PKR 20",
    round: "60 sec",
    rtp: "97.85%",
    desc:
      "The classic Pakistani card game — pick Andar or Bahar and win even-money payouts every minute.",
    tag: "Local Favourite",
  },
  {
    name: "Teen Patti",
    minBet: "PKR 50",
    round: "Live table",
    rtp: "97.2%",
    desc:
      "Live multiplayer Teen Patti with real dealers, voice chat and side bets. The most authentic Patti experience in any Pakistani earning app.",
    tag: "Live",
  },
  {
    name: "Aviator Crash",
    minBet: "PKR 10",
    round: "30 sec",
    rtp: "97.0%",
    desc:
      "Cash out before the plane crashes. Adjustable auto-cashout makes Aviator perfect for short, high-adrenaline rounds.",
    tag: "Trending",
  },
];

export default function Games() {
  return (
    <section
      id="games"
      aria-labelledby="games-title"
      className="relative py-20 sm:py-24 bg-gradient-to-b from-ink-900 to-ink-950"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold">
            8 ways to win
          </p>
          <h2
            id="games-title"
            className="mt-3 font-display text-4xl sm:text-5xl tracking-wide"
          >
            Every <span className="text-gold-gradient">Ec99 Game</span> in one app
          </h2>
          <p className="mt-4 text-white/70">
            Color prediction, K3 lottery, 5D lottery, Dragon Tiger, PG Slots, Andar
            Bahar, Teen Patti and Aviator — all running on a single PKR wallet
            with the same fast withdrawal pipeline.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {GAMES.map((g) => (
            <li
              key={g.name}
              className="rounded-2xl border border-white/10 bg-ink-900/80 p-5 hover:-translate-y-1 hover:border-gold-500/40 transition"
            >
              <div className="flex items-start justify-between">
                <h3 className="font-semibold text-white text-lg">{g.name}</h3>
                <span className="text-[10px] uppercase tracking-wider rounded-full bg-gold-500/15 text-gold-400 px-2 py-0.5">
                  {g.tag}
                </span>
              </div>
              <dl className="mt-4 grid grid-cols-3 text-xs text-white/70 gap-2">
                <div>
                  <dt className="text-white/40">Min Bet</dt>
                  <dd className="text-gold-400 font-semibold">{g.minBet}</dd>
                </div>
                <div>
                  <dt className="text-white/40">Round</dt>
                  <dd className="text-white">{g.round}</dd>
                </div>
                <div>
                  <dt className="text-white/40">RTP</dt>
                  <dd className="text-white">{g.rtp}</dd>
                </div>
              </dl>
              <p className="mt-3 text-sm text-white/65">{g.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
