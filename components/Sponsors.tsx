
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "./ui";
import { brandOutcomes, partners } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

export function Sponsors() {
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

  function chooseInterest(arg0: string): void {
    throw new Error("Function not implemented.");
  }

  return (
    <section
      id="sponsors"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "clamp(76px, 9vw, 124px) 24px",
        background: "#F7F5F0",
        color: "#142333",
      }}
    >
      {/* Fine gold section divider */}
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
        {/* Editorial heading */}
        <motion.div
          {...fadeUp()}
          style={{
            maxWidth: "850px",
            margin: "0 auto 35px",
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
            Sponsorship &amp; Partnerships
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
              fontSize: "clamp(36px, 5.2vw, 64px)",
              fontWeight: 400,
              lineHeight: 1.13,
              letterSpacing: "-1.5px",
            }}
          >
            Put your brand at the centre of{" "}
            <span style={{ color: "#A98549", fontStyle: "italic" }}>
              financial innovation.
            </span>
          </h2>

          <p
            style={{
              margin: 0,
              color: "#68717A",
              fontSize: "15px",
              lineHeight: 1.9,
            }}
          >
            Meet the market. Demonstrate your capabilities. Build what comes
            next.
          </p>
        </motion.div>

        {/* Introduction panel */}
        <motion.div
          {...fadeUp(0.08)}
          className="sponsor-intro"
          style={{
            display: "grid",
            gridTemplateColumns: "0.8fr 1.2fr",
            gap: "44px",
            alignItems: "center",
            marginTop: "48px",
            padding: "clamp(28px, 5vw, 54px)",
            background: "#102033",
            border: "1px solid rgba(217,181,116,0.25)",
          }}
        >
          <div>
            <span
              style={{
                display: "block",
                marginBottom: "18px",
                color: "#D9B574",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "2.5px",
                textTransform: "uppercase",
              }}
            >
              Strategic Visibility
            </span>

            <h3
              style={{
                margin: 0,
                color: "#F7F4ED",
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(29px, 3.8vw, 43px)",
                fontWeight: 400,
                lineHeight: 1.25,
              }}
            >
              Be part of the conversations shaping tomorrow’s finance.
            </h3>

            <div
              aria-hidden="true"
              style={{
                width: "55px",
                height: "2px",
                marginTop: "26px",
                background: "#D9B574",
              }}
            />
          </div>

          <p
            style={{
              margin: 0,
              color: "#C3CBD2",
              fontSize: "14px",
              lineHeight: 2,
            }}
          >
            The Token Economy Summit &amp; Expo connects solution providers
            with institutions and enterprises exploring the next generation
            of financial infrastructure. If your business serves banks,
            fintechs, payment networks, capital markets or digital-asset
            innovators, this is an opportunity to present your solutions to a
            relevant audience and explore meaningful business relationships.
          </p>
        </motion.div>

        {/* Brand outcomes */}
        <div style={{ marginTop: "82px" }}>
          <motion.div {...fadeUp()} style={{ marginBottom: "30px" }}>
            <span
              style={{
                display: "block",
                marginBottom: "12px",
                color: "#967644",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "2.5px",
                textTransform: "uppercase",
              }}
            >
              The Value of Partnership
            </span>

            <h3
              style={{
                margin: 0,
                color: "#142333",
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(30px, 4vw, 43px)",
                fontWeight: 400,
                lineHeight: 1.2,
              }}
            >
              What can your brand achieve?
            </h3>
          </motion.div>

          <div className="sponsor-outcomes-grid">
            {brandOutcomes.map((b, i) => (
              <motion.article
                key={b.title}
                {...fadeUp(i * 0.08)}
                whileHover={
                  reducedMotion
                    ? undefined
                    : {
                        y: -5,
                        transition: { duration: 0.25 },
                      }
                }
                style={{
                  position: "relative",
                  minHeight: "230px",
                  padding: "30px 27px",
                  background: "#FFFFFF",
                  border: "1px solid #E5DED1",
                  boxShadow: "0 8px 26px rgba(16,32,51,0.025)",
                }}
              >
                <span
                  style={{
                    display: "block",
                    marginBottom: "27px",
                    color: "#B28F52",
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: "32px",
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
                    fontSize: "22px",
                    fontWeight: 400,
                    lineHeight: 1.35,
                  }}
                >
                  {b.title}
                </h4>

                <p
                  style={{
                    margin: 0,
                    color: "#737B83",
                    fontSize: "13px",
                    lineHeight: 1.9,
                  }}
                >
                  {b.body}
                </p>

                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "52px",
                    height: "2px",
                    background: "#B28F52",
                  }}
                />
              </motion.article>
            ))}
          </div>
        </div>

        {/* Potential partners */}
        <div
          style={{
            marginTop: "82px",
            padding: "clamp(28px, 5vw, 48px)",
            background: "#EEE9DF",
            border: "1px solid #E0D7C7",
          }}
        >
          <motion.div
            {...fadeUp()}
            style={{
              maxWidth: "720px",
              margin: "0 auto 30px",
              textAlign: "center",
            }}
          >
            <span
              style={{
                display: "block",
                marginBottom: "12px",
                color: "#967644",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "2.5px",
                textTransform: "uppercase",
              }}
            >
              Across the Ecosystem
            </span>

            <h3
              style={{
                margin: "0 0 14px",
                color: "#142333",
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(29px, 4vw, 42px)",
                fontWeight: 400,
                lineHeight: 1.2,
              }}
            >
              Who should partner with us?
            </h3>

            <p
              style={{
                margin: 0,
                color: "#737B83",
                fontSize: "13px",
                lineHeight: 1.8,
              }}
            >
              Connect your expertise with the businesses advancing the token
              economy.
            </p>
          </motion.div>

          <div className="sponsor-partners-grid">
            {partners.map((p, i) => (
              <motion.div
                key={p}
                {...fadeUp(i * 0.035)}
                whileHover={
                  reducedMotion
                    ? undefined
                    : {
                        borderColor: "#B28F52",
                        transition: { duration: 0.2 },
                      }
                }
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  minHeight: "57px",
                  padding: "15px 17px",
                  background: "rgba(255,255,255,0.65)",
                  border: "1px solid #DED4C2",
                  color: "#293A4A",
                  fontSize: "12px",
                  fontWeight: 500,
                  lineHeight: 1.6,
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    width: "6px",
                    height: "6px",
                    flexShrink: 0,
                    background: "#B28F52",
                    transform: "rotate(45deg)",
                  }}
                />
                {p}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sponsorship package panel */}
        <motion.div
          {...fadeUp(0.08)}
          style={{
            position: "relative",
            overflow: "hidden",
            marginTop: "65px",
            padding: "clamp(30px, 5vw, 55px)",
            background: "#102033",
            border: "1px solid rgba(217,181,116,0.35)",
          }}
        >
          {/* Decorative corner line */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "110px",
              height: "110px",
              borderTop: "1px solid rgba(217,181,116,0.45)",
              borderRight: "1px solid rgba(217,181,116,0.45)",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              position: "relative",
              zIndex: 1,
              maxWidth: "850px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <span
              style={{
                display: "block",
                marginBottom: "17px",
                color: "#D9B574",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "2.7px",
                textTransform: "uppercase",
              }}
            >
              Tailored Partnership Opportunities
            </span>

            <h3
              style={{
                margin: "0 0 20px",
                color: "#F7F4ED",
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(30px, 4.5vw, 46px)",
                fontWeight: 400,
                lineHeight: 1.2,
              }}
            >
              Sponsorship Opportunities
            </h3>

            <p
              style={{
                maxWidth: "760px",
                margin: "0 auto 20px",
                color: "#C3CBD2",
                fontSize: "14px",
                lineHeight: 2,
              }}
            >
              Explore packages tailored to your commercial objectives,
              including speaking opportunities, exhibition presence, branding,
              executive networking and business-development programmes.
            </p>

            <div
              style={{
                maxWidth: "740px",
                margin: "0 auto",
                padding: "17px 20px",
                background: "rgba(255,255,255,0.045)",
                border: "1px solid rgba(255,255,255,0.09)",
              }}
            >
              <p
                style={{
                  margin: 0,
                  color: "#AEB9C3",
                  fontSize: "11px",
                  lineHeight: 1.9,
                }}
              >
                Deliverables, meeting arrangements and speaker opportunities
                will be defined in the sponsorship agreement and remain
                subject to confirmation and feasibility.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Closing statement and CTAs */}
        <motion.div
          {...fadeUp(0.1)}
          style={{
            maxWidth: "850px",
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
              background: "#B28F52",
            }}
          />

          <p
            style={{
              margin: "0 auto 30px",
              color: "#142333",
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(22px, 3.5vw, 34px)",
              lineHeight: 1.5,
            }}
          >
            Don’t just sponsor the conversation.
            <br />
            <span style={{ color: "#A98549", fontStyle: "italic" }}>
              Help shape the future of finance.
            </span>
          </p>

          <div className="sponsor-cta-row">
            <Button
              href="#contact"
              onClick={() => chooseInterest("Sponsorship")}
            >
              Request the Sponsorship Deck
            </Button>

            <Button
              href="#contact"
              variant="ghost"
              onClick={() => chooseInterest("Sponsorship")}
            >
              Discuss Partnership Opportunities
            </Button>
          </div>
        </motion.div>
      </div>

      <style>{`
        .sponsor-outcomes-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .sponsor-partners-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 11px;
        }

        .sponsor-cta-row {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 14px;
        }

        @media (max-width: 900px) {
          .sponsor-intro {
            grid-template-columns: 1fr !important;
            gap: 25px !important;
          }

          .sponsor-outcomes-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .sponsor-partners-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 600px) {
          .sponsor-outcomes-grid,
          .sponsor-partners-grid {
            grid-template-columns: 1fr;
          }

          .sponsor-cta-row {
            flex-direction: column;
            align-items: stretch;
          }

          .sponsor-cta-row > * {
            max-width: 100%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .sponsor-outcomes-grid article,
          .sponsor-partners-grid > div {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
