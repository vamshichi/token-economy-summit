
"use client";

import { motion, useReducedMotion } from "framer-motion";

// Keep your existing SectionHead and Reveal imports if you use them elsewhere.

const ease = [0.22, 1, 0.36, 1] as const;

export function Future() {
  const reducedMotion = useReducedMotion() ?? false;

  const reveal = (delay = 0) => ({
    initial: { opacity: 0, y: reducedMotion ? 0 : 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: {
      duration: reducedMotion ? 0 : 0.7,
      delay: reducedMotion ? 0 : delay,
      ease,
    },
  });

  const statements = [
    "Less speculation.",
    "More substance.",
    "More connections.",
    "More opportunity.",
  ];

  return (
    <section
      id="future"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "clamp(80px, 10vw, 140px) 0",
        background: "#F7F5F0",
        color: "#101A27",
      }}
    >
      <div
        style={{
          width: "min(1240px, calc(100% - 48px))",
          margin: "0 auto",
        }}
      >
        {/* Section heading */}
        <motion.div {...reveal()}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 24,
              color: "#92713C",
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
                background: "#B99960",
              }}
            />
            The Shift
          </div>

          <h2
            style={{
              maxWidth: 850,
              margin: "0 0 64px",
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: "clamp(42px, 6vw, 76px)",
              fontWeight: 400,
              letterSpacing: "-0.045em",
              lineHeight: 1.08,
            }}
          >
            The future isn’t just digital.
            <br />
            <span style={{ color: "#A17B40" }}>
              It’s tokenized.
            </span>
          </h2>
        </motion.div>

        {/* Editorial two-column layout */}
        <div
          className="future-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 0.88fr",
            alignItems: "start",
            gap: "clamp(36px, 7vw, 100px)",
          }}
        >
          {/* Left: story */}
          <div>
            <motion.p
              {...reveal(0.05)}
              style={{
                margin: "0 0 30px",
                color: "#354253",
                fontSize: "clamp(19px, 2.1vw, 25px)",
                lineHeight: 1.75,
                fontWeight: 400,
              }}
            >
              Money is evolving. Assets are transforming. Payments
              are becoming more connected. Financial infrastructure
              is being reimagined.
            </motion.p>

            <motion.div
              {...reveal(0.12)}
              style={{
                margin: "0 0 32px",
                padding: "6px 0 6px 24px",
                borderLeft: "2px solid #B99960",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: "clamp(24px, 3vw, 35px)",
                  fontWeight: 400,
                  lineHeight: 1.45,
                  color: "#172638",
                }}
              >
                The question is no longer whether the token economy
                will evolve—but{" "}
                <em style={{ color: "#A17B40" }}>
                  who will shape it.
                </em>
              </p>
            </motion.div>

            <motion.p
              {...reveal(0.19)}
              style={{
                margin: 0,
                color: "#596474",
                fontSize: 15,
                lineHeight: 1.95,
              }}
            >
              <strong style={{ color: "#172638" }}>
                The Token Economy Summit &amp; Expo 2027
              </strong>{" "}
              brings together banking leaders, payment networks,
              fintech innovators, institutional investors and
              technology pioneers to explore the opportunities,
              challenges and commercial realities of the emerging
              token economy. From real-world asset tokenization to
              cross-border payments, programmable money and
              institutional digital-asset infrastructure, this is
              where emerging possibilities meet real-world business.
            </motion.p>
          </div>

          {/* Right: financial visual */}
          <motion.div
            {...reveal(0.15)}
            style={{
              position: "relative",
              minWidth: 0,
            }}
          >
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                aspectRatio: "4 / 5",
                background: "#101C2A",
              }}
            >
              <img
                src="/feature/image.png"
                alt="Abstract digital network representing tokenized financial infrastructure"
                loading="lazy"
                style={{
                  display: "block",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                  position: "absolute",
                  inset: 0,
                }}
              />

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(8,18,31,0.05) 25%, rgba(8,18,31,0.92) 100%)",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  left: 25,
                  right: 25,
                  bottom: 28,
                  color: "#F7F5F0",
                }}
              >
                <div
                  style={{
                    width: 35,
                    height: 1,
                    marginBottom: 17,
                    background: "#D9B574",
                  }}
                />

                <p
                  style={{
                    margin: "0 0 10px",
                    color: "#D9B574",
                    fontSize: 10,
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                  }}
                >
                  THE NEXT FINANCIAL ERA
                </p>

                <h3
                  style={{
                    maxWidth: 340,
                    margin: 0,
                    fontFamily: 'Georgia, "Times New Roman", serif',
                    fontSize: "clamp(27px, 3vw, 38px)",
                    lineHeight: 1.2,
                    fontWeight: 400,
                  }}
                >
                  Turning digital value into real-world possibility.
                </h3>
              </div>
            </div>

            {/* Understated image caption */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: 12,
                paddingTop: 14,
                color: "#7C8490",
                fontSize: 9,
                letterSpacing: "0.12em",
                lineHeight: 1.7,
              }}
            >
              <span>FINANCIAL INFRASTRUCTURE</span>
              <span>01 / THE SHIFT</span>
            </div>
          </motion.div>
        </div>

        {/* Four closing statements */}
        <motion.div
          {...reveal(0.12)}
          className="future-statements"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            marginTop: 75,
            borderTop: "1px solid #DCD7CC",
            borderBottom: "1px solid #DCD7CC",
          }}
        >
          {statements.map((statement, index) => (
            <motion.div
              key={statement}
              {...reveal(index * 0.08)}
              style={{
                padding: "25px 18px",
                borderRight:
                  index !== statements.length - 1
                    ? "1px solid #DCD7CC"
                    : "none",
                textAlign: "center",
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: "clamp(16px, 2vw, 22px)",
                lineHeight: 1.5,
                color: index === 1 || index === 3
                  ? "#98733D"
                  : "#172638",
              }}
            >
              {statement}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Responsive styles only; all design values remain inline */}
      <style>{`
        @media (max-width: 760px) {
          #future .future-grid {
            grid-template-columns: minmax(0, 1fr) !important;
            gap: 38px !important;
          }

          #future .future-statements {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            margin-top: 48px !important;
          }

          #future .future-statements > div {
            border-bottom: 1px solid #DCD7CC;
            padding: 20px 10px !important;
          }

          #future .future-statements > div:nth-child(2) {
            border-right: none !important;
          }

          #future .future-statements > div:nth-child(3),
          #future .future-statements > div:nth-child(4) {
            border-bottom: none;
          }

          #future img {
            object-position: center 45%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          #future * {
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </section>
  );
}
