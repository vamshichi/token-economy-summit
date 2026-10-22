
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Counter } from "./ui";
// import Counter from "./Counter"; // Adjust if Counter is imported elsewhere

const ease = [0.22, 1, 0.36, 1] as const;

export function Stats() {
  const reducedMotion = useReducedMotion() ?? false;

  const stats = [
    { to: 2, label: "Days", detail: "Focused discussions" },
    { to: 3, label: "Global Editions", detail: "International perspectives" },
    { to: 8, label: "Core Themes", detail: "Ideas shaping finance" },
    {
      to: 5,
      label: "Expo Innovation Zones",
      detail: "Technology in action",
    },
  ];

  return (
    <section
      id="stats"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#0A1624",
        color: "#F7F4ED",
        borderTop: "1px solid rgba(217,181,116,0.25)",
        borderBottom: "1px solid rgba(217,181,116,0.25)",
        padding: "clamp(42px, 6vw, 72px) 0",
      }}
    >
      {/* Subtle background accent */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(217,181,116,0.07), transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="stats-inline-container"
        style={{
          position: "relative",
          width: "min(1240px, calc(100% - 48px))",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
        }}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{
              opacity: 0,
              y: reducedMotion ? 0 : 12,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: reducedMotion ? 0 : 0.65,
              delay: reducedMotion ? 0 : index * 0.1,
              ease,
            }}
            style={{
              minWidth: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              padding: "10px clamp(8px, 2vw, 28px)",
              borderRight:
                index !== stats.length - 1
                  ? "1px solid rgba(217,181,116,0.25)"
                  : "none",
            }}
          >
            {/* Gold accent */}
            <span
              aria-hidden="true"
              style={{
                width: 22,
                height: 2,
                marginBottom: 20,
                background: "#D9B574",
              }}
            />

            {/* Number */}
            <strong
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "center",
                color: "#D9B574",
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: "clamp(42px, 5.5vw, 68px)",
                fontWeight: 400,
                letterSpacing: "-0.045em",
                lineHeight: 1.1,
                fontVariantNumeric: "tabular-nums",
              }}
            >
              <Counter to={stat.to} />
            </strong>

            {/* Label */}
            <span
              style={{
                marginTop: 13,
                color: "#F7F4ED",
                fontSize: "clamp(12px, 1.3vw, 15px)",
                fontWeight: 600,
                lineHeight: 1.5,
                overflowWrap: "anywhere",
              }}
            >
              {stat.label}
            </span>

            {/* Supporting text */}
            <span
              style={{
                marginTop: 7,
                color: "#9EADBD",
                fontSize: 11,
                lineHeight: 1.7,
              }}
            >
              {stat.detail}
            </span>
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (max-width: 650px) {
          #stats .stats-inline-container {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            row-gap: 30px;
          }

          #stats .stats-inline-container > div {
            padding: 12px 14px !important;
          }

          #stats .stats-inline-container > div:nth-child(2) {
            border-right: none !important;
          }

          #stats .stats-inline-container > div:nth-child(3),
          #stats .stats-inline-container > div:nth-child(4) {
            border-top: 1px solid rgba(217,181,116,0.20);
            padding-top: 28px !important;
          }
        }

        @media (max-width: 360px) {
          #stats .stats-inline-container > div {
            padding-left: 6px !important;
            padding-right: 6px !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          #stats * {
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </section>
  );
}
