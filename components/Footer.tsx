import { APK_URL } from "@/lib/site";

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="border-t border-white/5 bg-ink-950"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14">
        <div className="grid lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 font-display text-2xl tracking-wider">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.svg"
                alt="Ec99 Game"
                width={36}
                height={36}
                className="h-9 w-9"
              />
              <span className="text-gold-gradient">Ec99</span>
              <span className="text-white/80">Game</span>
            </div>
            <p className="mt-4 text-sm text-white/65 max-w-md">
              Ec99 is Pakistan&apos;s fastest-growing real money earning app —
              color prediction, slots, lottery, Dragon Tiger and Aviator with
              instant JazzCash &amp; Easypaisa withdrawals. The smarter
              alternative to 988 Win, AR999, CT999, K8 and DK999.
            </p>
            <p className="mt-4 text-xs text-white/45">
              Play responsibly. Players must be 18+. Ec99 is a skill &amp;
              entertainment platform — never wager more than your discretionary
              budget.
            </p>
          </div>

          <div>
            <h2 className="text-xs uppercase tracking-widest text-gold-400 font-semibold">
              Ec99
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li><a href={APK_URL} rel="nofollow noopener" className="hover:text-gold-400">Download APK</a></li>
              <li><a href="#how-to-play" className="hover:text-gold-400">How to Install</a></li>
              <li><a href="#features" className="hover:text-gold-400">Features</a></li>
              <li><a href="#games" className="hover:text-gold-400">All Games</a></li>
              <li><a href="#payments" className="hover:text-gold-400">Payments</a></li>
              <li><a href="#reviews" className="hover:text-gold-400">Reviews</a></li>
              <li><a href="#faq" className="hover:text-gold-400">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs uppercase tracking-widest text-gold-400 font-semibold">
              Popular Searches
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-white/55">
              <li>Ec99 Game Download APK</li>
              <li>Ec99 APK latest version</li>
              <li>Ec99 game login Pakistan</li>
              <li>Ec99 register</li>
              <li>Ec99 vs 988 win</li>
              <li>Ec99 vs ar999</li>
              <li>Real money earning app Pakistan</li>
              <li>JazzCash earning game</li>
              <li>Easypaisa earning app</li>
            </ul>
          </div>
        </div>

        <hr className="my-10 border-white/5" />

        <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-white/45">
          <p>
            © {new Date().getFullYear()} Ec99 Game. Trademarks of 988 Win, AR999
            and others belong to their respective owners.
          </p>
          <div className="flex items-center gap-5">
            <a href="/privacy" className="hover:text-gold-400">Privacy</a>
            <a href="/terms" className="hover:text-gold-400">Terms</a>
            <a href="/responsible-play" className="hover:text-gold-400">
              Responsible Play
            </a>
            <a href="/contact" className="hover:text-gold-400">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
