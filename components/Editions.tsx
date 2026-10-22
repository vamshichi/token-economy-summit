
"use client";

import { editions } from "@/lib/content";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

// Uses the existing editions array from your project.

export function Editions() {
  const reducedMotion = useReducedMotion() ?? false;

  const fade = (delay = 0) => ({
    initial: {
      opacity: 0,
      y: reducedMotion ? 0 : 16,
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
      duration: reducedMotion ? 0 : 0.7,
      delay: reducedMotion ? 0 : delay,
      ease,
    },
  });

  const cityImages: Record<string, string> = {
    // Replace these keys with the exact values in editions[].city.
    Mumbai:
      "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1000&q=85",
    Singapore:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1000&q=85",
    Dubai:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=85",
  };

  return (
    <section
      id="editions"
      style={{
        padding: "clamp(80px, 9vw, 130px) 0",
        background: "#F7F5F0",
        color: "#142033",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "min(1240px, calc(100% - 48px))",
          margin: "0 auto",
        }}
      >
        {/* Section heading */}
        <motion.div {...fade()}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 22,
              color: "#96733D",
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
                background: "#B99A62",
              }}
            />
            Global Editions
          </div>

          <h2
            style={{
              margin: "0 0 22px",
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: "clamp(42px, 6vw, 76px)",
              fontWeight: 400,
              lineHeight: 1.08,
              letterSpacing: "-0.045em",
            }}
          >
            Three editions.
            <br />
            <span style={{ color: "#A17B40" }}>
              One global vision.
            </span>
          </h2>

          <p
            style={{
              maxWidth: 630,
              margin: "0 0 55px",
              color: "#647080",
              fontSize: 16,
              lineHeight: 1.85,
            }}
          >
            The future of value has no borders. Explore our
            international editions and connect with the financial
            ecosystems shaping tomorrow.
          </p>
        </motion.div>

        {/* Edition cards */}
        <div
          className="edition-grid"
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(3, minmax(0, 1fr))",
            gap: 22,
            alignItems: "stretch",
          }}
        >
          {editions.map((e, index) => {
            const image =
              cityImages[e.city] ??
              cityImages[e.city.trim()] ??
              "";

            return (
              <motion.article
                key={e.id}
                {...fade(index * 0.12)}
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
                  overflow: "hidden",
                  background: e.featured
                    ? "#101D2C"
                    : "#FFFFFF",
                  color: e.featured
                    ? "#F7F5F0"
                    : "#142033",
                  border: e.featured
                    ? "1px solid #A98A51"
                    : "1px solid #E6E0D5",
                  boxShadow: e.featured
                    ? "0 16px 44px rgba(16,29,44,0.12)"
                    : "0 8px 28px rgba(16,29,44,0.035)",
                }}
              >
                {/* City photography */}
                <div
                  style={{
                    position: "relative",
                    height: 210,
                    overflow: "hidden",
                    background: "#152234",
                  }}
                >
                  {image && (
                    <img
                      src={image}
                      alt={`${e.city} city skyline`}
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "block",
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    />
                  )}

                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, rgba(7,17,29,0.05) 15%, rgba(7,17,29,0.72) 100%)",
                    }}
                  />

                  {/* Edition label */}
                  <span
                    style={{
                      position: "absolute",
                      top: 18,
                      left: 18,
                      padding: "8px 11px",
                      background: e.featured
                        ? "#D9B574"
                        : "rgba(7,17,29,0.82)",
                      color: e.featured
                        ? "#101D2C"
                        : "#F7F5F0",
                      fontSize: 9,
                      fontWeight: 600,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                    }}
                  >
                    {e.label}
                  </span>

                  {/* City name */}
                  <h3
                    style={{
                      position: "absolute",
                      left: 22,
                      right: 18,
                      bottom: 17,
                      margin: 0,
                      color: "#F7F5F0",
                      fontFamily:
                        'Georgia, "Times New Roman", serif',
                      fontSize: "clamp(30px, 3vw, 42px)",
                      lineHeight: 1.05,
                      fontWeight: 400,
                      letterSpacing: "-0.035em",
                    }}
                  >
                    {e.city}
                  </h3>
                </div>

                {/* Card content */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    flex: 1,
                    padding: "25px 24px 27px",
                  }}
                >
                  <div
                    style={{
                      marginBottom: 20,
                      color: e.featured
                        ? "#D9B574"
                        : "#96733D",
                      fontSize: 11,
                      fontWeight: 600,
                      lineHeight: 1.8,
                      letterSpacing: "0.035em",
                    }}
                  >
                    {e.date}
                    <span
                      style={{
                        margin: "0 8px",
                        opacity: 0.6,
                      }}
                    >
                      |
                    </span>
                    {e.place}
                  </div>

                  <h4
                    style={{
                      margin: "0 0 13px",
                      fontFamily:
                        'Georgia, "Times New Roman", serif',
                      fontSize: 23,
                      fontWeight: 400,
                      lineHeight: 1.4,
                      color: e.featured
                        ? "#F7F5F0"
                        : "#142033",
                    }}
                  >
                    {e.headline}
                  </h4>

                  <p
                    style={{
                      margin: "0 0 28px",
                      color: e.featured
                        ? "#C0C8D3"
                        : "#687383",
                      fontSize: 14,
                      lineHeight: 1.9,
                    }}
                  >
                    {e.body}
                  </p>

                  <a
                    href={e.href}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 12,
                      marginTop: "auto",
                      paddingBottom: 5,
                      borderBottom: `1px solid ${
                        e.featured ? "#D9B574" : "#B99A62"
                      }`,
                      color: e.featured
                        ? "#D9B574"
                        : "#8D6B35",
                      textDecoration: "none",
                      fontSize: 12,
                      fontWeight: 600,
                      letterSpacing: "0.025em",
                    }}
                  >
                    {e.cta}
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Closing statement */}
        <motion.div
          {...fade(0.15)}
          style={{
            marginTop: 65,
            paddingTop: 35,
            borderTop: "1px solid #DDD7CB",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              margin: "0 0 18px",
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: "clamp(25px, 3.5vw, 38px)",
              fontWeight: 400,
              lineHeight: 1.35,
              color: "#142033",
            }}
          >
            Three financial ecosystems.
            <br />
            <span style={{ color: "#A17B40" }}>
              One transformative conversation.
            </span>
          </h3>

          <p
            style={{
              maxWidth: 780,
              margin: "0 auto",
              color: "#687383",
              fontSize: 14,
              lineHeight: 1.95,
            }}
          >
            The movement of value is global. The opportunities are
            regional. Each edition offers a distinct regional
            perspective while sharing a common focus: meaningful
            connections, commercially relevant innovation and the
            future of value.
          </p>
        </motion.div>
      </div>

      {/* Responsive layout */}
      <style>{`
        @media (max-width: 900px) {
          #editions .edition-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }

        @media (max-width: 600px) {
          #editions .edition-grid {
            grid-template-columns: minmax(0, 1fr) !important;
            gap: 20px !important;
          }

          #editions .edition-grid article > div:first-child {
            height: 225px !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          #editions article {
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
