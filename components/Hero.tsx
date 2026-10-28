"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;
const EVENT_START = new Date("2027-02-24T09:00:00+05:30").getTime();

const fade = (delay: number, reduced: boolean) => ({
  initial: { opacity: 0, y: reduced ? 0 : 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: reduced ? 0 : 0.8, delay: reduced ? 0 : delay, ease },
});

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4M8 3v4M3 10h18" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

/* Wireframe globe, drawn in SVG so no background image is required */
function Globe() {
  return (
    <svg className="th-globe" viewBox="0 0 800 800" fill="none" aria-hidden="true">
      <defs>
        <radialGradient id="th-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1E64A0" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#1E64A0" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="400" cy="400" r="330" fill="url(#th-glow)" />
      <g stroke="#D9B574" strokeWidth="1">
        <circle cx="400" cy="400" r="330" strokeOpacity="0.55" />
        <ellipse cx="400" cy="400" rx="247" ry="330" strokeOpacity="0.22" />
        <ellipse cx="400" cy="400" rx="165" ry="330" strokeOpacity="0.22" />
        <ellipse cx="400" cy="400" rx="82" ry="330" strokeOpacity="0.22" />
        <line x1="400" y1="70" x2="400" y2="730" strokeOpacity="0.22" />
        <ellipse cx="400" cy="400" rx="330" ry="82" strokeOpacity="0.22" />
        <ellipse cx="400" cy="400" rx="330" ry="165" strokeOpacity="0.16" />
        <line x1="70" y1="400" x2="730" y2="400" strokeOpacity="0.22" />
      </g>
      <g className="th-orbit">
        <ellipse
          cx="400" cy="400" rx="385" ry="120"
          transform="rotate(-24 400 400)"
          stroke="#D9B574" strokeOpacity="0.5" strokeWidth="1.2"
        />
        <circle className="th-pulse" cx="760" cy="262" r="5" fill="#D9B574" />
        <circle cx="52" cy="535" r="3.5" fill="#F7F4ED" />
        <circle cx="560" cy="318" r="2.5" fill="#D9B574" fillOpacity="0.8" />
      </g>
      <g fill="#D9B574">
        <circle cx="296" cy="238" r="3.5" />
        <circle cx="508" cy="206" r="3" />
        <circle cx="560" cy="520" r="4" />
        <circle cx="250" cy="498" r="3" />
        <circle cx="452" cy="336" r="3" />
      </g>
      <g stroke="#D9B574" strokeOpacity="0.45" strokeWidth="1">
        <path d="M296 238 L452 336 L508 206" />
        <path d="M452 336 L560 520 L250 498 L296 238" />
      </g>
    </svg>
  );
}

function HeroCountdown() {
  // null on the server and first paint, so there is no hydration mismatch
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  let s = now === null ? 0 : Math.max(0, Math.floor((EVENT_START - now) / 1000));
  const d = Math.floor(s / 86400); s -= d * 86400;
  const h = Math.floor(s / 3600); s -= h * 3600;
  const m = Math.floor(s / 60); s -= m * 60;
  const pad = (n: number) => String(n).padStart(2, "0");

  const units = [
    { value: pad(d), label: "Days" },
    { value: pad(h), label: "Hours" },
    { value: pad(m), label: "Mins" },
    { value: pad(s), label: "Secs" },
  ];

  return (
    <div className="th-count" role="timer" aria-label="Countdown to the summit">
      {units.map((u) => (
        <div key={u.label} className="th-count-cell">
          <span className="th-count-num">{u.value}</span>
          <span className="th-count-label">{u.label}</span>
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  const reduced = useReducedMotion() ?? false;

  return (
    <section id="top" className="th">
      <div className="th-bg" aria-hidden="true" />
      <div className="th-grid-lines" aria-hidden="true" />
      <Globe />
      <div className="th-shade" aria-hidden="true" />

      <div className="th-main ">
        <div className="th-copy">
          
          <motion.h1 {...fade(0.15, reduced)} className="pt-10">
            Value,
            <br />
            <em>Reimagined.</em>
          </motion.h1>

          <motion.p className="th-lead" {...fade(0.25, reduced)}>
            The next evolution of financial infrastructure is here. Discover how
            digital payments, tokenized assets and programmable finance are
            redefining the movement of value. Join the institutions, innovators
            and decision-makers building what comes next.
          </motion.p>

          <motion.div className="th-meta" {...fade(0.35, reduced)}>
            <div className="th-meta-item">
              <CalendarIcon />
              <span>24–25 February 2027</span>
            </div>
            <span className="th-meta-divider" aria-hidden="true" />
            <div className="th-meta-item">
              <LocationIcon />
              <span>Mumbai, India</span>
            </div>
          </motion.div>

          <motion.div className="th-actions" {...fade(0.45, reduced)}>
            <a href="#register" className="th-btn">
              Register as a Delegate
              <ArrowIcon />
            </a>
            <a href="#sponsors" className="th-link">
              Explore Sponsorship
              <ArrowIcon />
            </a>
          </motion.div>
        </div>

        <motion.aside className="th-panel" {...fade(0.3, reduced)}>
          <div className="th-panel-top">
            <span>Countdown to the summit</span>
            <span className="th-dot th-pulse" aria-hidden="true" />
          </div>

          <HeroCountdown />

          <div className="th-panel-rule" aria-hidden="true" />

          <ul className="th-topics">
            <li><span>01</span>Digital payments</li>
            <li><span>02</span>Tokenized assets</li>
            <li><span>03</span>Programmable finance</li>
          </ul>

          <a href="#programme" className="th-panel-link">
            Discover the summit
            <ArrowIcon />
          </a>
        </motion.aside>
      </div>

      <div className="th-bar">
        <div className="th-bar-inner">
          <div className="th-cats">
            <span>Payments</span><i aria-hidden="true" />
            <span>Tokenization</span><i aria-hidden="true" />
            <span>Digital assets</span><i aria-hidden="true" />
            <span>Future of finance</span>
          </div>
          <div className="th-tagline">Where the future of value takes shape</div>
        </div>
      </div>

      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Manrope:wght@400;500;600;700;800&display=swap");

       .th {
  --gold: #D9B574;
  --ivory: #F7F4ED;
  --muted: #C1C8D2;
  --bg: #050D18;

  position: relative;
  z-index: 0;
  isolation: isolate;
  overflow: hidden;
  width: 100%;

  /* Reserve space for the fixed navbar */
  min-height: calc(100svh - var(--header-height, 100px));

  display: flex;
  flex-direction: column;

  background: var(--bg);
  color: var(--ivory);
  font-family: "Manrope", system-ui, sans-serif;
  box-sizing: border-box;
}
        .th *, .th *::before, .th *::after { box-sizing: border-box; }

        /* Atmosphere */
        .th-bg {
          position: absolute; inset: 0; z-index: -4;
          background:
            radial-gradient(ellipse 60% 70% at 78% 46%, rgba(30,100,160,.30), transparent 70%),
            radial-gradient(ellipse 40% 50% at 92% 8%, rgba(217,181,116,.16), transparent 70%),
            linear-gradient(180deg, #07121F 0%, #050D18 100%);
        }
        .th-grid-lines {
          position: absolute; inset: 0; z-index: -3; opacity: .5;
          background-image:
            linear-gradient(rgba(217,181,116,.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(217,181,116,.07) 1px, transparent 1px);
          background-size: 72px 72px;
          -webkit-mask-image: radial-gradient(ellipse 70% 80% at 75% 45%, #000, transparent 75%);
                  mask-image: radial-gradient(ellipse 70% 80% at 75% 45%, #000, transparent 75%);
        }
        .th-globe {
          position: absolute; z-index: -2;
          right: -140px; top: 50%;
          width: 860px; height: 860px; margin-top: -450px;
          max-width: none; opacity: .9;
        }
        .th-orbit { transform-origin: 400px 400px; animation: thSpin 90s linear infinite; }
        .th-pulse { animation: thPulse 2.4s ease-in-out infinite; }
        .th-shade {
          position: absolute; inset: 0; z-index: -1;
          background: linear-gradient(90deg, rgba(5,13,24,.94) 0%, rgba(5,13,24,.78) 38%, rgba(5,13,24,0) 70%);
        }
        @keyframes thSpin { to { transform: rotate(360deg); } }
        @keyframes thPulse { 0%,100% { opacity: 1; } 50% { opacity: .35; } }

        /* Layout */
        .th-main {
  flex: 1;
  width: 100%;
  max-width: 1360px;
  margin: 0 auto;

  padding: clamp(34px, 4vh, 54px) 58px 42px;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 36px 56px;
}.th-main {
          flex: 1;
          width: 100%; max-width: 1360px; margin: 0 auto;
          padding: 72px 48px 56px;
          display: flex; flex-wrap: wrap; align-items: center;
          gap: 56px 72px;
        }
        .th-copy {
          flex: 1.5 1 520px; min-width: 0; max-width: 760px;
          display: flex; flex-direction: column; align-items: flex-start;
        }

        .th-eyebrow {
          display: flex; align-items: center; gap: 14px;
          color: var(--gold); font-size: 13px; font-weight: 700;
          letter-spacing: .22em; text-transform: uppercase;
        }
        .th-eyebrow-line { width: 40px; height: 1px; background: var(--gold); }

        .th h1 {
          margin: 28px 0 0;
          font-family: "Instrument Serif", Georgia, serif;
          font-weight: 400;
          font-size: clamp(68px, 9.2vw, 132px);
          line-height: .92; letter-spacing: -.035em;
          color: var(--ivory);
        }
        .th h1 em { font-style: italic; color: var(--gold); }

        .th-lead {
          margin: 32px 0 0; max-width: 560px;
          font-size: 18px; line-height: 1.7; color: var(--muted);
          text-wrap: pretty;
        }

        .th-meta {
          margin-top: 32px;
          display: flex; flex-wrap: wrap; align-items: center; gap: 14px 28px;
          font-size: 15px; font-weight: 600;
        }
        .th-meta-item { display: flex; align-items: center; gap: 10px; }
        .th-meta-item svg {
          width: 20px; height: 20px; stroke: var(--gold); stroke-width: 1.6;
          stroke-linecap: round; stroke-linejoin: round;
        }
        .th-meta-divider { width: 1px; height: 20px; background: rgba(217,181,116,.4); }

        .th-actions {
          margin-top: 40px;
          display: flex; flex-wrap: wrap; align-items: center; gap: 18px 32px;
        }
        .th-btn {
          display: inline-flex; align-items: center; gap: 18px;
          min-height: 56px; padding: 0 26px;
          background: var(--gold); color: #101722; text-decoration: none;
          font-size: 13px; font-weight: 800; letter-spacing: .12em; text-transform: uppercase;
          transition: background .18s ease, transform .18s ease;
        }
        .th-btn:hover { background: var(--ivory); transform: translateY(-2px); }
        .th-link {
          display: inline-flex; align-items: center; gap: 10px; min-height: 44px;
          color: var(--ivory); text-decoration: none;
          font-size: 13px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase;
          transition: color .18s ease, gap .18s ease;
        }
        .th-link:hover { color: var(--gold); gap: 16px; }
        .th-btn svg, .th-link svg, .th-panel-link svg {
          width: 18px; height: 18px; stroke: currentColor; stroke-width: 1.8;
          stroke-linecap: round; stroke-linejoin: round; flex-shrink: 0;
        }
        .th a:focus-visible { outline: 2px solid var(--ivory); outline-offset: 4px; }

        /* Panel */
        .th-panel {
          flex: 1 1 340px; min-width: 0; max-width: 420px; margin-left: auto;
          padding: 32px;
          border: 1px solid rgba(217,181,116,.3);
          background: linear-gradient(150deg, rgba(16,31,47,.82), rgba(5,13,24,.72));
          -webkit-backdrop-filter: blur(18px); backdrop-filter: blur(18px);
          box-shadow: 0 30px 90px rgba(0,0,0,.35), inset 0 1px 0 rgba(255,255,255,.06);
        }
        .th-panel-top {
          display: flex; align-items: center; justify-content: space-between; gap: 12px;
          color: var(--gold); font-size: 12px; font-weight: 700;
          letter-spacing: .2em; text-transform: uppercase;
        }
        .th-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: var(--gold); box-shadow: 0 0 12px rgba(217,181,116,.7);
        }
        .th-count { margin-top: 22px; display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 10px; }
        .th-count-cell {
          display: flex; flex-direction: column; align-items: center; gap: 6px;
          padding: 14px 0 12px;
          border: 1px solid rgba(217,181,116,.2); background: rgba(0,0,0,.2);
        }
        .th-count-num {
          font-family: "Instrument Serif", Georgia, serif;
          font-size: 44px; line-height: 1; font-variant-numeric: tabular-nums;
        }
        .th-count-label {
          font-size: 11px; font-weight: 700; letter-spacing: .14em;
          text-transform: uppercase; color: #AEB6C2;
        }
        .th-panel-rule {
          margin-top: 28px; height: 1px;
          background: linear-gradient(90deg, var(--gold), rgba(217,181,116,.05));
        }
        .th-topics { list-style: none; margin: 0; padding: 0; }
        .th-topics li {
          display: flex; align-items: center; gap: 16px; padding: 16px 0;
          border-bottom: 1px solid rgba(255,255,255,.09);
          font-size: 15px; font-weight: 500;
        }
        .th-topics li span { color: var(--gold); font-size: 12px; font-weight: 700; letter-spacing: .08em; }
        .th-panel-link {
          margin-top: 22px; min-height: 44px;
          display: flex; align-items: center; justify-content: space-between; gap: 12px;
          color: var(--ivory); text-decoration: none;
          font-size: 13px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase;
        }
        .th-panel-link:hover { color: var(--gold); }

        /* Bottom bar */
        .th-bar { width: 100%; max-width: 1360px; margin: 0 auto; padding: 0 48px 36px; }
        .th-bar-inner {
          display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between;
          gap: 14px 32px; padding-top: 22px;
          border-top: 1px solid rgba(217,181,116,.25);
          font-size: 12px; font-weight: 700; letter-spacing: .16em; text-transform: uppercase;
        }
        .th-cats { display: flex; flex-wrap: wrap; align-items: center; gap: 10px 22px; color: #E6E3DC; }
        .th-cats i { width: 4px; height: 4px; border-radius: 50%; background: var(--gold); }
        .th-tagline { color: #AEB6C2; }

        /* Responsive */
        @media (max-width: 1050px) {
          .th-main, .th-bar { padding-left: 28px; padding-right: 28px; }
          .th-globe { right: -300px; opacity: .6; }
          .th-panel { margin-left: 0; max-width: 520px; }
        }
        @media (max-width: 700px) {
          .th-main { padding-top: 48px; padding-bottom: 40px; gap: 40px; }
          .th-main, .th-bar { padding-left: 20px; padding-right: 20px; }
          .th-lead { font-size: 16px; }
          .th-meta-divider { display: none; }
          .th-panel { padding: 24px 20px; max-width: none; }
          .th-count-num { font-size: 36px; }
          .th-shade { background: linear-gradient(90deg, rgba(5,13,24,.92), rgba(5,13,24,.7)); }
        }

        @media (prefers-reduced-motion: reduce) {
          .th-orbit, .th-pulse { animation: none; }
          .th-btn, .th-link { transition: none; }
        }
      `}</style>
    </section>
  );
}