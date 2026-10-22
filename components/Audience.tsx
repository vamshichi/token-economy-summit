
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "./ui";
import { audience, whoYouMeet, whyAttend } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

export function Audience() {
  const reducedMotion = useReducedMotion() ?? false;

  const fadeUp = (delay = 0) => ({
    initial: reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: {
      duration: reducedMotion ? 0 : 0.75,
      delay: reducedMotion ? 0 : delay,
      ease,
    },
  });

  return (
    <section
      id="audience"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "clamp(76px, 9vw, 124px) 24px",
        background: "#F7F5F0",
        color: "#142333",
      }}
    >
      {/* Fine gold divider */}
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

      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: "1240px",
          margin: "0 auto",
        }}
      >
        {/* Header */}
        <motion.div
          {...fadeUp()}
          style={{
            maxWidth: "850px",
            margin: "0 auto 55px",
            textAlign: "center",
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "24px",
              color: "#967644",
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
                background: "#B99A61",
              }}
            />
            Who Will You Meet?
            <span
              style={{
                width: "28px",
                height: "1px",
                background: "#B99A61",
              }}
            />
          </span>

          <h2
            style={{
              margin: "0 auto 22px",
              color: "#102033",
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(36px, 5vw, 62px)",
              fontWeight: 400,
              lineHeight: 1.14,
              letterSpacing: "-1.5px",
            }}
          >
            Your industry. Your decision-makers.{" "}
            <span style={{ color: "#A98549", fontStyle: "italic" }}>
              Your next opportunity.
            </span>
          </h2>

          <p
            style={{
              maxWidth: "680px",
              margin: "0 auto",
              color: "#6D7680",
              fontSize: "14px",
              lineHeight: 1.95,
            }}
          >
            The people building, funding, regulating and adopting the next
            generation of financial infrastructure.
          </p>
        </motion.div>

        {/* Networking categories */}
        <motion.div
          {...fadeUp(0.08)}
          style={{
            padding: "32px",
            background: "#FFFFFF",
            border: "1px solid #E5DED1",
            borderRadius: "3px",
          }}
        >
          <div
            style={{
              marginBottom: "22px",
              color: "#967644",
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "2.4px",
              textTransform: "uppercase",
              textAlign: "center",
            }}
          >
            Connect Across the Ecosystem
          </div>

          <div className="audience-chips">
            {whoYouMeet.map((w, i) => (
              <motion.div
                key={w}
                {...fadeUp(i * 0.035)}
                whileHover={
                  reducedMotion
                    ? undefined
                    : {
                        y: -3,
                        transition: { duration: 0.2 },
                      }
                }
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "48px",
                  padding: "12px 17px",
                  border: "1px solid #E4D8C3",
                  background: "#FAF8F3",
                  color: "#27394A",
                  fontSize: "12px",
                  fontWeight: 500,
                  lineHeight: 1.5,
                  textAlign: "center",
                  transition: "background 0.25s ease",
                }}
              >
                <span
                  style={{
                    width: "5px",
                    height: "5px",
                    minWidth: "5px",
                    marginRight: "10px",
                    background: "#B28F52",
                    borderRadius: "50%",
                  }}
                />
                {w}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Networking statement */}
        <motion.div
          {...fadeUp(0.1)}
          style={{
            padding: "35px 12px 55px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              margin: 0,
              color: "#6D747B",
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(19px, 2.5vw, 25px)",
              fontStyle: "italic",
              lineHeight: 1.6,
            }}
          >
            Your next customer.
            <span style={{ color: "#B28F52" }}> Your next partner.</span>
            {" "}Your next opportunity.
          </p>
        </motion.div>

        {/* Who should attend */}
        <div>
          <motion.div
            {...fadeUp()}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "22px",
              marginBottom: "28px",
            }}
          >
            <div style={{ flex: 1 }}>
              <span
                style={{
                  display: "block",
                  marginBottom: "10px",
                  color: "#967644",
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "2.5px",
                  textTransform: "uppercase",
                }}
              >
                The Right Room
              </span>

              <h3
                style={{
                  margin: 0,
                  color: "#142333",
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "clamp(29px, 4vw, 43px)",
                  fontWeight: 400,
                  lineHeight: 1.2,
                }}
              >
                Who should attend?
              </h3>
            </div>

            <div
              aria-hidden="true"
              className="audience-heading-line"
              style={{
                width: "22%",
                height: "1px",
                background: "#D9B574",
              }}
            />
          </motion.div>

          <div className="audience-role-grid">
            {audience.map((a, i) => (
              <motion.article
                key={a.title}
                {...fadeUp(i * 0.07)}
                whileHover={
                  reducedMotion
                    ? undefined
                    : {
                        y: -4,
                        transition: { duration: 0.25 },
                      }
                }
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  minHeight: "225px",
                  padding: "29px 26px",
                  background: "#FFFFFF",
                  border: "1px solid #E5DED1",
                  boxShadow: "0 8px 26px rgba(16, 32, 51, 0.025)",
                }}
              >
                <span
                  style={{
                    display: "block",
                    marginBottom: "24px",
                    color: "#B28F52",
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: "30px",
                    lineHeight: 1,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <h4
                  style={{
                    margin: "0 0 13px",
                    color: "#142333",
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: "21px",
                    fontWeight: 400,
                    lineHeight: 1.4,
                  }}
                >
                  {a.title}
                </h4>

                <p
                  style={{
                    margin: 0,
                    color: "#737B83",
                    fontSize: "13px",
                    lineHeight: 1.9,
                  }}
                >
                  {a.body}
                </p>

                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "48px",
                    height: "2px",
                    background: "#B28F52",
                  }}
                />
              </motion.article>
            ))}
          </div>
        </div>

        {/* Why attend panel */}
        <div
          className="audience-benefits"
          style={{
            display: "grid",
            gridTemplateColumns: "0.8fr 1.5fr",
            gap: "45px",
            marginTop: "80px",
            padding: "clamp(28px, 5vw, 55px)",
            background: "#102033",
            border: "1px solid rgba(217, 181, 116, 0.25)",
          }}
        >
          <motion.div {...fadeUp()}>
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
              Make Every Meeting Count
            </span>

            <h3
              style={{
                margin: "0 0 20px",
                color: "#F7F4ED",
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(32px, 4vw, 46px)",
                fontWeight: 400,
                lineHeight: 1.2,
              }}
            >
              Why attend?
            </h3>

            <p
              style={{
                maxWidth: "300px",
                margin: 0,
                color: "#AFB9C3",
                fontSize: "13px",
                lineHeight: 1.9,
              }}
            >
              Turn emerging ideas into meaningful conversations, stronger
              relationships and actionable opportunities.
            </p>
          </motion.div>

          <div>
            {whyAttend.map((w, i) => (
              <motion.div
                key={w}
                {...fadeUp(i * 0.06)}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "17px",
                  padding: "18px 0",
                  borderBottom:
                    i !== whyAttend.length - 1
                      ? "1px solid rgba(255,255,255,0.12)"
                      : "none",
                }}
              >
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    width: "25px",
                    height: "25px",
                    border: "1px solid rgba(217,181,116,0.55)",
                    borderRadius: "50%",
                    color: "#D9B574",
                    fontSize: "11px",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <p
                  style={{
                    margin: "1px 0 0",
                    color: "#E8E9E8",
                    fontSize: "13px",
                    lineHeight: 1.85,
                  }}
                >
                  {w}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing CTA */}
        <motion.div
          {...fadeUp(0.1)}
          style={{
            maxWidth: "760px",
            margin: "76px auto 0",
            textAlign: "center",
          }}
        >
          <span
            aria-hidden="true"
            style={{
              display: "block",
              width: "45px",
              height: "1px",
              margin: "0 auto 27px",
              background: "#B28F52",
            }}
          />

          <p
            style={{
              margin: "0 auto 28px",
              color: "#142333",
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(23px, 3.5vw, 35px)",
              fontWeight: 400,
              lineHeight: 1.5,
            }}
          >
            Don’t just watch the market evolve.
            <br />
            <span style={{ color: "#A98549", fontStyle: "italic" }}>
              Help shape what comes next.
            </span>
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button href="#register">Register as a Delegate</Button>
          </div>
        </motion.div>
      </div>

      <style>{`
        .audience-chips {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 12px;
        }

        .audience-role-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 17px;
        }

        @media (max-width: 900px) {
          .audience-chips {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .audience-role-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .audience-benefits {
            grid-template-columns: 1fr !important;
            gap: 25px !important;
          }
        }

        @media (max-width: 600px) {
          .audience-chips {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 9px;
          }

          .audience-role-grid {
            grid-template-columns: 1fr;
            gap: 13px;
          }

          .audience-heading-line {
            display: none;
          }
        }

        @media (max-width: 360px) {
          .audience-chips {
            grid-template-columns: 1fr;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .audience-chips > div,
          .audience-role-grid article {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
