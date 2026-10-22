
"use client";

import { differentiators } from "@/lib/content";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function About() {
  const reducedMotion = useReducedMotion() ?? false;

  const reveal = (delay = 0) => ({
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
      duration: reducedMotion ? 0 : 0.7,
      delay: reducedMotion ? 0 : delay,
      ease,
    },
  });

  return (
    <section
      id="about"
      style={{
        padding: "clamp(80px, 9vw, 125px) 0",
        background: "#F7F5F0",
        color: "#142033",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "min(1180px, calc(100% - 48px))",
          margin: "0 auto",
        }}
      >
        {/* Section introduction */}
        <motion.div {...reveal()}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 22,
              color: "#987641",
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
            About the Summit
          </div>

          <h2
            style={{
              maxWidth: 900,
              margin: "0 0 22px",
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: "clamp(42px, 6vw, 76px)",
              fontWeight: 400,
              lineHeight: 1.08,
              letterSpacing: "-0.045em",
            }}
          >
            Redefining how the world
            <br />
            <span style={{ color: "#A17B40" }}>
              moves value.
            </span>
          </h2>

          <p
            style={{
              maxWidth: 740,
              margin: "0 0 55px",
              color: "#657080",
              fontSize: 16,
              lineHeight: 1.9,
            }}
          >
            A business-focused platform exploring the convergence
            of digital payments, asset tokenization, programmable
            finance and institutional digital-asset infrastructure.
          </p>
        </motion.div>

        {/* Mission and vision */}
        <div
          className="about-mv-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: 22,
          }}
        >
          {[
            {
              number: "01",
              title: "Our Mission",
              text:
                "To accelerate meaningful conversations, strategic partnerships and practical adoption across the evolving token economy.",
            },
            {
              number: "02",
              title: "Our Vision",
              text:
                "To become a leading international meeting platform for the institutions and innovators shaping the next generation of financial infrastructure.",
            },
          ].map((item, index) => (
            <motion.article
              key={item.title}
              {...reveal(index * 0.12)}
              whileHover={
                reducedMotion ? undefined : { y: -4 }
              }
              transition={{ duration: 0.3, ease }}
              style={{
                position: "relative",
                padding: "clamp(27px, 4vw, 43px)",
                border: "1px solid #E4DED2",
                borderTop: "2px solid #B99A62",
                background: "#FFFFFF",
                overflow: "hidden",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: 15,
                  right: 22,
                  color: "rgba(161,123,64,0.11)",
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: 82,
                  lineHeight: 1,
                }}
              >
                {item.number}
              </span>

              <div
                style={{
                  position: "relative",
                  marginBottom: 25,
                  color: "#987641",
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: "0.16em",
                }}
              >
                {item.number} / THE FOUNDATION
              </div>

              <h3
                style={{
                  position: "relative",
                  margin: "0 0 15px",
                  color: "#142033",
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: 32,
                  fontWeight: 400,
                  lineHeight: 1.2,
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  position: "relative",
                  maxWidth: 470,
                  margin: 0,
                  color: "#657080",
                  fontSize: 15,
                  lineHeight: 1.9,
                }}
              >
                {item.text}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Positioning statement */}
        <motion.div
          {...reveal(0.1)}
          style={{
            padding: "clamp(55px, 8vw, 95px) 0 50px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              marginBottom: 20,
              color: "#987641",
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: "0.2em",
            }}
          >
            OUR APPROACH
          </div>

          <h3
            style={{
              maxWidth: 920,
              margin: "0 auto 25px",
              color: "#142033",
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: "clamp(29px, 4vw, 48px)",
              fontWeight: 400,
              lineHeight: 1.3,
              letterSpacing: "-0.025em",
            }}
          >
            Finance First.
            <span style={{ color: "#A17B40" }}>
              {" "}Technology Forward.
            </span>
            <br className="about-desktop-break" />
            Business Focused.
          </h3>

          <p
            style={{
              maxWidth: 790,
              margin: "0 auto",
              color: "#657080",
              fontSize: 15,
              lineHeight: 1.95,
            }}
          >
            We bring together the financial institutions,
            technology providers, investors, issuers and enterprise
            decision-makers working to transform how value is
            created, represented, transferred and managed. We go
            beyond cryptocurrency conversations to examine the
            broader transformation of financial systems.
          </p>
        </motion.div>

        {/* Traditional finance to tokenized finance */}
        <motion.div
          {...reveal(0.12)}
          className="about-bridge-panel"
          style={{
            padding: "clamp(25px, 4vw, 43px)",
            background: "#101D2C",
            color: "#F7F5F0",
          }}
        >
          <div
            style={{
              marginBottom: 30,
              color: "#D9B574",
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: "0.2em",
              textAlign: "center",
            }}
          >
            BRIDGING TODAY AND TOMORROW
          </div>

          <div
            className="about-bridges"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: 0,
            }}
          >
            {differentiators.map(([left, right], index) => (
              <div
                key={left}
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "minmax(0, 1fr) 45px minmax(0, 1fr)",
                  alignItems: "center",
                  gap: 10,
                  padding: "21px 12px",
                  borderTop: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <span
                  style={{
                    color: "#E0E5EB",
                    fontSize: 13,
                    lineHeight: 1.7,
                    textAlign: "right",
                  }}
                >
                  {left}
                </span>

                <span
                  aria-hidden="true"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#D9B574",
                    fontSize: 19,
                  }}
                >
                  →
                </span>

                <span
                  style={{
                    color: "#D9B574",
                    fontSize: 13,
                    lineHeight: 1.7,
                    fontWeight: 500,
                  }}
                >
                  {right}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Closing statement */}
        <motion.div
          {...reveal(0.1)}
          style={{
            maxWidth: 850,
            margin: "55px auto 0",
            textAlign: "center",
          }}
        >
          <span
            style={{
              display: "block",
              marginBottom: 19,
              color: "#B99A62",
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: 34,
            }}
          >
            “
          </span>

          <p
            style={{
              margin: 0,
              color: "#344153",
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: "clamp(23px, 3vw, 34px)",
              lineHeight: 1.55,
              fontWeight: 400,
            }}
          >
            The future of finance will be shaped not by technology
            alone, but by the partnerships, infrastructure and
            trust that make adoption possible.
          </p>

          <div
            style={{
              width: 45,
              height: 2,
              margin: "27px auto 0",
              background: "#B99A62",
            }}
          />
        </motion.div>
      </div>

      {/* Responsive styling */}
      <style>{`
        @media (max-width: 700px) {
          #about .about-mv-grid {
            grid-template-columns: minmax(0, 1fr) !important;
          }

          #about .about-bridges {
            grid-template-columns: minmax(0, 1fr) !important;
          }

          #about .about-bridges > div {
            padding-left: 0 !important;
            padding-right: 0 !important;
          }

          #about .about-desktop-break {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          #about article {
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
