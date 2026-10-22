
"use client";

import { registerOptions } from "@/lib/content";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function Register() {
  const reducedMotion = useReducedMotion() ?? false;

  const fadeUp = (delay = 0) => ({
    initial: reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: {
      duration: reducedMotion ? 0 : 0.75,
      delay: reducedMotion ? 0 : delay,
      ease,
    },
  });

    function chooseInterest(interest: any): void {
        throw new Error("Function not implemented.");
    }

  return (
    <section
      id="register"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "clamp(78px, 9vw, 125px) 24px",
        background: "#091522",
        color: "#F7F4ED",
      }}
    >
      {/* Subtle gold top border */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: "8%",
          right: "8%",
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, #D9B574, transparent)",
        }}
      />

      {/* Decorative background rings */}
      <div
        aria-hidden="true"
        className="register-decoration"
        style={{
          position: "absolute",
          top: "80px",
          right: "-190px",
          width: "480px",
          height: "480px",
          border: "1px solid rgba(217,181,116,0.09)",
          borderRadius: "50%",
          boxShadow:
            "0 0 0 45px rgba(217,181,116,0.025), 0 0 0 90px rgba(217,181,116,0.018)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: "1240px",
          margin: "0 auto",
        }}
      >
        {/* Heading */}
        <motion.div
          {...fadeUp()}
          style={{
            maxWidth: "850px",
            margin: "0 auto 62px",
            textAlign: "center",
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "25px",
              color: "#D9B574",
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            <span
              style={{
                width: "28px",
                height: "1px",
                background: "#D9B574",
              }}
            />
            Registration
            <span
              style={{
                width: "28px",
                height: "1px",
                background: "#D9B574",
              }}
            />
          </span>

          <h2
            style={{
              margin: "0 auto 23px",
              color: "#F7F4ED",
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(38px, 5.4vw, 67px)",
              fontWeight: 400,
              lineHeight: 1.12,
              letterSpacing: "-1.5px",
            }}
          >
            Your next opportunity{" "}
            <span style={{ color: "#D9B574", fontStyle: "italic" }}>
              starts here.
            </span>
          </h2>

          <p
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              color: "#B5BEC7",
              fontSize: "14px",
              lineHeight: 2,
            }}
          >
            Join the institutions, innovators and decision-makers exploring
            the next generation of financial infrastructure. Choose how you
            want to participate.
          </p>
        </motion.div>

        {/* Registration options */}
        <div className="register-options-grid">
          {registerOptions.map((r, i) => (
            <motion.article
              key={r.title}
              {...fadeUp(i * 0.08)}
              whileHover={
                reducedMotion
                  ? undefined
                  : {
                      y: -6,
                      transition: { duration: 0.25 },
                    }
              }
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                minHeight: "300px",
                padding: "30px 26px",
                background:
                  i === 0
                    ? "linear-gradient(155deg, #182B3E, #102033)"
                    : "rgba(255,255,255,0.035)",
                border:
                  i === 0
                    ? "1px solid rgba(217,181,116,0.5)"
                    : "1px solid rgba(255,255,255,0.13)",
                boxShadow:
                  i === 0
                    ? "0 18px 45px rgba(0,0,0,0.12)"
                    : "none",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "12px",
                  marginBottom: "34px",
                }}
              >
                <span
                  style={{
                    color: "#D9B574",
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: "34px",
                    lineHeight: 1,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span
                  aria-hidden="true"
                  style={{
                    width: "34px",
                    height: "1px",
                    background: "rgba(217,181,116,0.7)",
                  }}
                />
              </div>

              <h3
                style={{
                  margin: "0 0 14px",
                  color: "#F7F4ED",
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "23px",
                  fontWeight: 400,
                  lineHeight: 1.4,
                }}
              >
                {r.title}
              </h3>

              <p
                style={{
                  flex: 1,
                  margin: "0 0 28px",
                  color: "#B4BEC7",
                  fontSize: "13px",
                  lineHeight: 1.9,
                }}
              >
                {r.body}
              </p>

              <a
                href="#contact"
                onClick={() => chooseInterest(r.interest)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "12px",
                  paddingTop: "17px",
                  borderTop: "1px solid rgba(217,181,116,0.24)",
                  color: "#D9B574",
                  fontSize: "12px",
                  fontWeight: 600,
                  lineHeight: 1.6,
                  textDecoration: "none",
                }}
              >
                <span>{r.cta}</span>
                <span
                  aria-hidden="true"
                  style={{
                    fontSize: "19px",
                    fontWeight: 400,
                  }}
                >
                  →
                </span>
              </a>

              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: i === 0 ? "100%" : "42px",
                  height: "2px",
                  background:
                    "linear-gradient(90deg, #B28F52, #E4CD9F, transparent)",
                }}
              />
            </motion.article>
          ))}
        </div>

        {/* Event details */}
        <motion.div
          {...fadeUp(0.12)}
          className="register-event-panel"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            alignItems: "center",
            gap: "30px",
            marginTop: "48px",
            padding: "clamp(26px, 4vw, 42px)",
            background: "rgba(255,255,255,0.045)",
            border: "1px solid rgba(217,181,116,0.3)",
          }}
        >
          <div>
            <span
              style={{
                display: "block",
                marginBottom: "16px",
                color: "#D9B574",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "2.5px",
                textTransform: "uppercase",
              }}
            >
              India Edition · Event Details
            </span>

            <h3
              style={{
                margin: "0 0 17px",
                color: "#F7F4ED",
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(25px, 3.5vw, 37px)",
                fontWeight: 400,
                lineHeight: 1.3,
              }}
            >
              The Token Economy Summit &amp; Expo 2027
            </h3>

            <div
              className="register-event-meta"
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "12px",
                color: "#BEC6CD",
                fontSize: "12px",
                lineHeight: 1.8,
              }}
            >
              <span>24–25 February 2027</span>
              <span
                aria-hidden="true"
                style={{ color: "#D9B574" }}
              >
                /
              </span>
              <span>Mumbai, India</span>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="register-date-mark"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "112px",
              height: "112px",
              border: "1px solid rgba(217,181,116,0.45)",
              color: "#D9B574",
            }}
          >
            <span
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "36px",
                lineHeight: 1,
              }}
            >
              24–25
            </span>
            <span
              style={{
                marginTop: "10px",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "2px",
              }}
            >
              FEB 2027
            </span>
          </div>
        </motion.div>

        {/* Closing statement */}
        <motion.div
          {...fadeUp(0.15)}
          style={{
            maxWidth: "780px",
            margin: "65px auto 0",
            textAlign: "center",
          }}
        >
          <span
            aria-hidden="true"
            style={{
              display: "block",
              width: "48px",
              height: "1px",
              margin: "0 auto 25px",
              background: "#D9B574",
            }}
          />

          <p
            style={{
              margin: 0,
              color: "#F7F4ED",
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(22px, 3.5vw, 34px)",
              lineHeight: 1.55,
            }}
          >
            The future is moving.
            <br />
            <span style={{ color: "#D9B574", fontStyle: "italic" }}>
              Make sure you’re part of the conversation.
            </span>
          </p>
        </motion.div>
      </div>

      <style>{`
        .register-options-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
        }

        .register-options-grid article {
          transition: border-color 0.25s ease, background 0.25s ease;
        }

        .register-options-grid article:hover {
          border-color: rgba(217,181,116,0.55) !important;
        }

        .register-options-grid a {
          transition: color 0.2s ease;
        }

        .register-options-grid a:hover {
          color: #F2D9A5 !important;
        }

        @media (max-width: 1000px) {
          .register-options-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .register-event-panel {
            grid-template-columns: 1fr auto !important;
          }
        }

        @media (max-width: 600px) {
          .register-options-grid {
            grid-template-columns: 1fr;
          }

          .register-options-grid article {
            min-height: 260px !important;
          }

          .register-event-panel {
            grid-template-columns: 1fr !important;
          }

          .register-date-mark {
            width: 100% !important;
            height: auto !important;
            min-height: 85px;
            flex-direction: row !important;
            gap: 15px;
          }

          .register-date-mark span:last-child {
            margin-top: 0 !important;
          }

          .register-decoration {
            opacity: 0.45;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .register-options-grid article,
          .register-options-grid a {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
