import { APK_URL } from "@/lib/site";

export default function Header() {
  return (
    <header
      role="banner"
      className="sticky top-0 z-40 backdrop-blur-md bg-ink-950/70 border-b border-white/5"
    >
      <nav
        aria-label="Primary"
        className="mx-auto max-w-6xl flex items-center justify-between px-4 sm:px-6 h-14"
      >
        <a
          href="#top"
          className="flex items-center gap-2 font-display text-2xl tracking-wider"
          aria-label="Ec99 Game home"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.svg"
            alt="Ec99 Game"
            width={36}
            height={36}
            className="h-9 w-9 drop-shadow-[0_0_10px_rgba(255,194,60,0.35)]"
          />
          <span className="text-gold-gradient">Ec99</span>
          <span className="text-white/80">Game</span>
        </a>
        <ul className="hidden md:flex items-center gap-7 text-sm text-white/80">
          <li><a href="#features" className="hover:text-gold-400">Features</a></li>
          <li><a href="#games" className="hover:text-gold-400">Games</a></li>
          <li><a href="#how-to-play" className="hover:text-gold-400">How to Play</a></li>
          <li><a href="#download" className="hover:text-gold-400">Download</a></li>
          <li><a href="#faq" className="hover:text-gold-400">FAQ</a></li>
        </ul>
        <a
          href={APK_URL}
          rel="nofollow noopener"
          className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-4 py-2 text-sm font-semibold text-ink-950 shadow-gold hover:bg-gold-400 transition"
        >
          Download APK
        </a>
      </nav>
    </header>
  );
}
