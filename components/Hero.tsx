
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "./ui";
import Countdown from "./Countdown";

const ease = [0.22, 1, 0.36, 1] as const;

const fade = (delay: number, reduced: boolean) => ({
  initial: {
    opacity: 0,
    y: reduced ? 0 : 12,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: {
    duration: reduced ? 0 : 0.75,
    delay: reduced ? 0 : delay,
    ease,
  },
});

export default function Hero() {
  const reducedMotion = useReducedMotion() ?? false;

  const colors = {
    background: "#07111D",
    gold: "#D9B574",
    ivory: "#F7F4ED",
    muted: "#C1C8D2",
    border: "rgba(217,181,116,0.38)",
  };

  return (
    <section
      id="top"
      style={{
        position: "relative",
        isolation: "isolate",
        minHeight: "min(850px, 100svh)",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: colors.background,
        color: colors.ivory,
        padding: "clamp(110px, 12vh, 150px) 0 76px",
        boxSizing: "border-box",
      }}
    >
      {/* Real photographic background */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: -2,
          backgroundImage:
            "url('./Golden Crypto City Globe.png')",
          backgroundSize: "cover",
          backgroundPosition: "center 60%",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Dark gradient for text contrast */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: -1,
          background: `
            linear-gradient(
              90deg,
              rgba(5, 13, 24, 0.97) 0%,
              rgba(5, 13, 24, 0.91) 38%,
              rgba(5, 13, 24, 0.66) 63%,
              rgba(5, 13, 24, 0.38) 100%
            ),
            linear-gradient(
              0deg,
              rgba(5, 13, 24, 0.72) 0%,
              transparent 45%,
              rgba(5, 13, 24, 0.18) 100%
            )
          `,
        }}
      />

      {/* Main content */}
      <div
        className="token-hero-inner"
        style={{
          width: "min(1240px, calc(100% - 64px))",
          margin: "0 auto",
          position: "relative",
          boxSizing: "border-box",
        }}
      >
        <motion.div
          initial="initial"
          animate="animate"
          style={{
            width: "min(100%, 740px)",
          }}
        >
          {/* Eyebrow */}
          <motion.div
            {...fade(0.08, reducedMotion)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 13,
              marginBottom: 28,
              color: colors.gold,
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.22em",
              lineHeight: 1.6,
            }}
          >
            <span
              style={{
                width: 34,
                height: 1,
                flexShrink: 0,
                background: colors.gold,
              }}
            />
            THE TOKEN ECONOMY SUMMIT
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fade(0.18, reducedMotion)}
            style={{
              margin: 0,
              color: colors.ivory,
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: "clamp(58px, 7.4vw, 100px)",
              fontWeight: 400,
              lineHeight: 0.99,
              letterSpacing: "-0.055em",
            }}
          >
            Value,
            <br />
            <span style={{ color: colors.gold }}>
              Reimagined.
            </span>
          </motion.h1>

          {/* Summit categories */}
          <motion.p
            {...fade(0.28, reducedMotion)}
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "8px 11px",
              margin: "28px 0 18px",
              color: "#E5E6E8",
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: "0.11em",
              lineHeight: 1.9,
            }}
          >
            PAYMENTS
            <span style={{ color: colors.gold }}>·</span>
            TOKENIZATION
            <span style={{ color: colors.gold }}>·</span>
            DIGITAL ASSETS
            <span style={{ color: colors.gold }}>·</span>
            THE FUTURE OF FINANCE
          </motion.p>

          {/* Description */}
          <motion.p
            {...fade(0.38, reducedMotion)}
            style={{
              maxWidth: 590,
              margin: 0,
              color: colors.muted,
              fontSize: 15,
              fontWeight: 400,
              lineHeight: 1.9,
            }}
          >
            The next evolution of financial infrastructure is here.
            Discover how digital payments, tokenized assets and
            programmable finance are redefining the movement of value.
            Join the institutions, innovators and decision-makers
            building what comes next.
          </motion.p>

          {/* Event details */}
          <motion.div
            {...fade(0.48, reducedMotion)}
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "12px 17px",
              marginTop: 27,
              color: colors.ivory,
              fontSize: 13,
              fontWeight: 500,
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
              }}
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke={colors.gold}
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="3" y="5" width="18" height="16" rx="2" />
                <path d="M16 3v4M8 3v4M3 10h18" />
              </svg>
              24–25 February 2027
            </span>

            <span
              aria-hidden="true"
              style={{
                width: 1,
                height: 20,
                background: colors.border,
              }}
            />

            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
              }}
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke={colors.gold}
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              Mumbai, India
            </span>
          </motion.div>

          {/* Calls to action */}
          <motion.div
            {...fade(0.58, reducedMotion)}
            className="token-hero-actions"
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: 12,
              marginTop: 30,
            }}
          >
            <Button href="#register">
              Register as a Delegate
            </Button>

            <Button href="#sponsors" variant="ghost">
              Explore Sponsorship
            </Button>

            <Button href="#expo" variant="ghost">
              Discover the Expo
            </Button>
          </motion.div>

          {/* Countdown */}
          <motion.div
            {...fade(0.7, reducedMotion)}
            style={{
              width: "fit-content",
              maxWidth: "100%",
              boxSizing: "border-box",
              marginTop: 30,
              padding: "18px 22px",
              border: `1px solid ${colors.border}`,
              borderRadius: 12,
              background: "rgba(5, 13, 24, 0.62)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
            }}
          >
            <p
              style={{
                margin: "0 0 12px",
                color: colors.gold,
                fontSize: 9,
                fontWeight: 600,
                letterSpacing: "0.2em",
              }}
            >
              COUNTDOWN TO THE SUMMIT
            </p>

            <Countdown />
          </motion.div>
        </motion.div>

        {/* Minimal supporting caption */}
        <div
          className="token-hero-caption"
          style={{
            position: "absolute",
            right: 0,
            bottom: 0,
            color: "rgba(247,244,237,0.72)",
            fontSize: 9,
            fontWeight: 500,
            letterSpacing: "0.17em",
            textAlign: "right",
          }}
        >
          FINANCE · INNOVATION · GLOBAL LEADERSHIP
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 900px) {
          .token-hero-inner {
            width: calc(100% - 48px) !important;
          }

          .token-hero-caption {
            display: none;
          }
        }

        @media (max-width: 600px) {
          #top {
            min-height: auto !important;
            padding: 112px 0 46px !important;
          }

          #top .token-hero-inner {
            width: calc(100% - 36px) !important;
          }

          #top .token-hero-actions {
            align-items: stretch !important;
            flex-direction: column !important;
          }

          #top .token-hero-actions > * {
            max-width: 100%;
          }

          #top h1 {
            font-size: clamp(52px, 12.5vw, 72px) !important;
            line-height: 1 !important;
          }

          #top p {
            overflow-wrap: anywhere;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          #top *,
          #top *::before,
          #top *::after {
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </section>
  );
}
