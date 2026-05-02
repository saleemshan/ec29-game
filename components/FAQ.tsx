const FAQS = [
  {
    q: "What is Ec99 Game?",
    a: "Ec99 is Pakistan&rsquo;s fastest-growing real money earning app — featuring color prediction, K3 lottery, 5D lottery, Dragon Tiger, PG slots, Andar Bahar, Teen Patti and Aviator. All games run on a single PKR wallet with JazzCash and Easypaisa withdrawals.",
  },
  {
    q: "How do I download the latest Ec99 Game APK?",
    a: "Visit the official site at <strong>ec99game.vercel.app</strong>, tap the orange APK Download button at the top of the page, allow installation from unknown sources in your phone&rsquo;s settings, then open the downloaded ec99-latest.apk file to install. The current latest version is <strong>v2.26.0</strong> (38 MB).",
  },
  {
    q: "Is Ec99 better than 988 Win, AR999 or other earning apps?",
    a: "Ec99 was built specifically for Pakistani players. Compared to 988 Win and AR999, Ec99 offers faster JazzCash & Easypaisa withdrawals (avg 3 min vs 10–30 min), a higher 100% welcome bonus, lower minimum withdrawal of PKR 300, a smaller 38 MB APK, and 24/7 Urdu live chat support.",
  },
  {
    q: "How do I register on Ec99 Game?",
    a: "Open the app, tap <strong>Register</strong>, enter your active mobile number, set a password, and verify the OTP that arrives via SMS. Registration takes under 30 seconds and you instantly get a PKR 30 trial bonus.",
  },
  {
    q: "How do I login to Ec99?",
    a: "On the app or web version (<strong>ec99game.vercel.app/login</strong>) tap <strong>Login</strong>, enter the same mobile number you registered with and your password. Forgot your password? Tap &ldquo;Forgot password&rdquo; to reset via OTP.",
  },
  {
    q: "What is the minimum deposit and withdrawal on Ec99?",
    a: "Minimum deposit is <strong>PKR 100</strong> via JazzCash or Easypaisa, and <strong>PKR 500</strong> via bank. Minimum withdrawal is <strong>PKR 300</strong> across all methods. Most withdrawals are processed in 1–5 minutes.",
  },
  {
    q: "Is the Ec99 Game APK safe?",
    a: "Yes. Ec99 uses 256-bit SSL encryption end-to-end, two-factor authentication on every withdrawal, and a provably-fair RNG you can verify per round. We never share your phone number, balance or game history with third parties.",
  },
  {
    q: "Why is Ec99 not on Google Play Store?",
    a: "Real-money game apps are restricted on Google Play in Pakistan, so Ec99 (like 988 Win, AR999, K8, CT999 and similar apps) is distributed as a direct APK from the official site. You only need to enable &ldquo;Install unknown apps&rdquo; once for your browser — you can disable it again right after installation.",
  },
  {
    q: "Does Ec99 work on iPhone or iOS?",
    a: "Currently Ec99 is optimized for Android 6.0 and above. The iOS version is in private beta and an invite link will appear here when public launch happens.",
  },
  {
    q: "Can I play Ec99 Game online without downloading the APK?",
    a: "Yes. The full Ec99 game library is also playable directly in your mobile browser at <strong>ec99game.vercel.app/play</strong>. The APK version offers smoother performance and push notifications for free spins.",
  },
  {
    q: "What payment methods does Ec99 support in Pakistan?",
    a: "JazzCash, Easypaisa, HBL, UBL, Meezan, Allied Bank, and USDT (TRC20). All deposits and withdrawals are free of charge.",
  },
  {
    q: "How fast does Ec99 process withdrawals?",
    a: "Around 90% of Ec99 withdrawals to JazzCash and Easypaisa complete within 3 minutes. Bank withdrawals usually settle within 5–30 minutes. There are no hidden fees.",
  },
  {
    q: "Does Ec99 have referral bonuses?",
    a: "Yes — invite friends with your unique referral code and earn 10% of every bet they place, for life. Top referrers also unlock VIP cashback up to 12%.",
  },
  {
    q: "What if I forget my Ec99 password or get logged out?",
    a: "On the login screen tap <strong>Forgot Password</strong>, enter your registered mobile number, and you&rsquo;ll receive an OTP. Enter the OTP and set a new password — the whole flow takes under a minute.",
  },
  {
    q: "Is Ec99 legal in Pakistan?",
    a: "Ec99 is offered as a skill-based gaming entertainment app. Players are responsible for following local regulations and must be 18+ to register. We recommend playing responsibly within your discretionary entertainment budget.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative py-20 sm:py-24 bg-gradient-to-b from-ink-900 to-ink-950"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold">
            Frequently asked
          </p>
          <h2
            id="faq-title"
            className="mt-3 font-display text-4xl sm:text-5xl tracking-wide"
          >
            <span className="text-gold-gradient">Ec99 Game</span> FAQs
          </h2>
          <p className="mt-4 text-white/70">
            Everything Pakistani players ask about downloading, registering and
            withdrawing from Ec99 Game.
          </p>
        </div>

        <div className="mt-10 space-y-3">
          {FAQS.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] open:bg-white/[0.05] transition"
            >
              <summary className="cursor-pointer list-none p-5 flex items-center justify-between gap-4">
                <h3 className="font-semibold text-white text-left">{f.q}</h3>
                <span
                  aria-hidden
                  className="ml-auto inline-flex h-7 w-7 items-center justify-center rounded-full bg-gold-500/15 text-gold-400 transition group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <div
                className="px-5 pb-5 text-sm text-white/75"
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: f.a }}
              />
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
