
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "./ui";
import { whyNow } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

export function WhyNow() {
  const reducedMotion = useReducedMotion() ?? false;

  const fade = (delay = 0) => ({
    initial: {
      opacity: 0,
      y: reducedMotion ? 0 : 14,
    },
    whileInView: {
      opacity: 1,
      y: 0,
    },
    viewport: {
      once: true,
      amount: 0.15,
    },
    transition: {
      duration: reducedMotion ? 0 : 0.65,
      delay: reducedMotion ? 0 : delay,
      ease,
    },
  });

  return (
    <section
      id="why-now"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "clamp(80px, 9vw, 125px) 0",
        background: "#091522",
        color: "#F7F4ED",
      }}
    >
      {/* Subtle decorative gold glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: -180,
          right: "-8%",
          width: 520,
          height: 520,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(194,153,84,0.10) 0%, rgba(194,153,84,0) 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          width: "min(1240px, calc(100% - 48px))",
          margin: "0 auto",
        }}
      >
        {/* Heading */}
        <motion.div {...fade()}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 23,
              color: "#D9B574",
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
            }}
          >
            <span
              style={{
                width: 34,
                height: 1,
                background: "#D9B574",
              }}
            />
            Why Now
          </div>

          <h2
            style={{
              maxWidth: 850,
              margin: "0 0 20px",
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: "clamp(40px, 5.8vw, 72px)",
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: "-0.045em",
              color: "#F7F4ED",
            }}
          >
            Why the Token Economy.
            <br />
            <span style={{ color: "#D9B574" }}>
              Why Now?
            </span>
          </h2>

          <p
            style={{
              maxWidth: 650,
              margin: "0 0 50px",
              color: "#AEB9C7",
              fontSize: 15,
              lineHeight: 1.9,
            }}
          >
            Financial infrastructure is entering a new era.
            Five fundamental shifts are creating the conditions
            for tokenized value to move from possibility to
            practical adoption.
          </p>
        </motion.div>

        {/* Five insight cards */}
        <div
          className="why-now-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
            gap: 14,
            alignItems: "stretch",
          }}
        >
          {whyNow.map((w, i) => (
            <motion.article
              key={w.title}
              {...fade(i * 0.09)}
              whileHover={
                reducedMotion
                  ? undefined
                  : { y: -5 }
              }
              transition={{
                duration: 0.3,
                ease,
              }}
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                minWidth: 0,
                minHeight: 285,
                padding: "25px 20px 24px",
                boxSizing: "border-box",
                overflow: "hidden",
                border: "1px solid rgba(217,181,116,0.22)",
                borderTop: "2px solid #9E804B",
                background:
                  "linear-gradient(155deg, rgba(255,255,255,0.055), rgba(255,255,255,0.015))",
              }}
            >
              {/* Oversized background number */}
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: 5,
                  right: 10,
                  color: "rgba(217,181,116,0.10)",
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: 76,
                  fontWeight: 400,
                  lineHeight: 1,
                  pointerEvents: "none",
                  userSelect: "none",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Small numbered label */}
              <span
                style={{
                  position: "relative",
                  zIndex: 1,
                  marginBottom: 34,
                  color: "#D9B574",
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: "0.16em",
                }}
              >
                SHIFT {String(i + 1).padStart(2, "0")}
              </span>

              <h3
                style={{
                  position: "relative",
                  zIndex: 1,
                  margin: "0 0 15px",
                  color: "#F7F4ED",
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: "clamp(19px, 1.65vw, 24px)",
                  fontWeight: 400,
                  lineHeight: 1.35,
                  overflowWrap: "anywhere",
                }}
              >
                {w.title}
              </h3>

              <p
                style={{
                  position: "relative",
                  zIndex: 1,
                  margin: 0,
                  color: "#ADB8C6",
                  fontSize: 13,
                  lineHeight: 1.85,
                  overflowWrap: "anywhere",
                }}
              >
                {w.body}
              </p>

              {/* Bottom gold detail */}
              <div
                aria-hidden="true"
                style={{
                  width: 30,
                  height: 2,
                  marginTop: "auto",
                  paddingTop: 22,
                  boxSizing: "content-box",
                  backgroundClip: "content-box",
                  background: "#B99A62",
                  opacity: 0.8,
                }}
              />
            </motion.article>
          ))}
        </div>

        {/* Closing CTA */}
        <motion.div
          {...fade(0.25)}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 24,
            marginTop: 42,
            paddingTop: 28,
            borderTop: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          <p
            style={{
              maxWidth: 490,
              margin: 0,
              color: "#C0C9D4",
              fontSize: 14,
              lineHeight: 1.85,
            }}
          >
            Understand the forces reshaping payments, assets
            and institutional financial infrastructure.
          </p>

          <Button href="#programme" variant="ghost">
            Explore the Key Themes →
          </Button>
        </motion.div>
      </div>

      {/* Responsive layout */}
      <style>{`
        @media (max-width: 1050px) {
          #why-now .why-now-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
          }
        }

        @media (max-width: 650px) {
          #why-now .why-now-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 12px !important;
          }

          #why-now .why-now-grid article {
            min-height: 275px !important;
            padding: 21px 16px !important;
          }

          #why-now .why-now-grid article h3 {
            font-size: 21px !important;
          }

          #why-now .why-now-grid article p {
            font-size: 12px !important;
          }
        }

        @media (max-width: 380px) {
          #why-now .why-now-grid {
            grid-template-columns: minmax(0, 1fr) !important;
          }

          #why-now .why-now-grid article {
            min-height: 220px !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          #why-now article {
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
