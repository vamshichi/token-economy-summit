
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "./ui";
import { speakerExplore, speakerTypes } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

export function Speakers() {
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
      id="speakers"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "clamp(76px, 9vw, 124px) 24px",
        background: "#F7F5F0",
        color: "#142333",
      }}
    >
      {/* Refined gold divider */}
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
        {/* Section heading */}
        <motion.div
          {...fadeUp()}
          style={{
            maxWidth: "880px",
            margin: "0 auto 60px",
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
            Speakers &amp; Thought Leadership
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
              fontSize: "clamp(37px, 5.2vw, 64px)",
              fontWeight: 400,
              lineHeight: 1.13,
              letterSpacing: "-1.5px",
            }}
          >
            The minds moving{" "}
            <span style={{ color: "#A98549", fontStyle: "italic" }}>
              financial innovation
            </span>{" "}
            forward.
          </h2>

          <p
            style={{
              maxWidth: "750px",
              margin: "0 auto",
              color: "#68717A",
              fontSize: "14px",
              lineHeight: 2,
            }}
          >
            The token economy demands conversations that go beyond
            predictions. We seek practitioners, institutional leaders,
            technology pioneers and industry experts who can share real
            insights into implementation, adoption, risk and opportunity.
          </p>
        </motion.div>

        {/* Speaker philosophy banner */}
        <motion.div
          {...fadeUp(0.08)}
          className="speakers-feature"
          style={{
            position: "relative",
            display: "grid",
            gridTemplateColumns: "0.9fr 1.1fr",
            alignItems: "center",
            gap: "40px",
            overflow: "hidden",
            padding: "clamp(30px, 5vw, 55px)",
            background: "#102033",
            border: "1px solid rgba(217,181,116,0.3)",
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              right: "-70px",
              bottom: "-130px",
              width: "300px",
              height: "300px",
              border: "1px solid rgba(217,181,116,0.16)",
              borderRadius: "50%",
              boxShadow:
                "0 0 0 35px rgba(217,181,116,0.025), 0 0 0 70px rgba(217,181,116,0.02)",
              pointerEvents: "none",
            }}
          />

          <div style={{ position: "relative", zIndex: 1 }}>
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
              Beyond the Headlines
            </span>

            <h3
              style={{
                margin: 0,
                color: "#F7F4ED",
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(29px, 3.7vw, 44px)",
                fontWeight: 400,
                lineHeight: 1.25,
              }}
            >
              Ideas grounded in experience. Perspectives built for progress.
            </h3>

            <div
              aria-hidden="true"
              style={{
                width: "52px",
                height: "2px",
                marginTop: "25px",
                background: "#D9B574",
              }}
            />
          </div>

          <p
            style={{
              position: "relative",
              zIndex: 1,
              margin: 0,
              color: "#C2CBD3",
              fontSize: "14px",
              lineHeight: 2,
            }}
          >
            We value practical knowledge over speculation: what works, what
            remains challenging, how institutions can manage risk, and where
            meaningful opportunities are emerging across the token economy.
          </p>
        </motion.div>

        {/* Speaker profiles and topics */}
        <div className="speakers-content-grid">
          {/* Who should speak */}
          <motion.div
            {...fadeUp()}
            style={{
              padding: "clamp(27px, 4vw, 40px)",
              background: "#FFFFFF",
              border: "1px solid #E5DED1",
            }}
          >
            <span
              style={{
                display: "block",
                marginBottom: "13px",
                color: "#967644",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "2.5px",
                textTransform: "uppercase",
              }}
            >
              The Voices
            </span>

            <h3
              style={{
                margin: "0 0 28px",
                color: "#142333",
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(27px, 3vw, 35px)",
                fontWeight: 400,
                lineHeight: 1.25,
              }}
            >
              Who should speak?
            </h3>

            <div
              aria-hidden="true"
              style={{
                width: "100%",
                height: "1px",
                marginBottom: "12px",
                background: "#E9E1D3",
              }}
            />

            <div>
              {speakerTypes.map((s, i) => (
                <motion.div
                  key={s}
                  {...fadeUp(i * 0.05)}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "15px",
                    padding: "17px 0",
                    borderBottom:
                      i !== speakerTypes.length - 1
                        ? "1px solid #EEE9E0"
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
                      marginTop: "1px",
                      border: "1px solid #D9C6A2",
                      color: "#A98549",
                      fontSize: "11px",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <p
                    style={{
                      margin: "2px 0 0",
                      color: "#465563",
                      fontSize: "13px",
                      lineHeight: 1.85,
                    }}
                  >
                    {s}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* What we want to explore */}
          <motion.div
            {...fadeUp(0.1)}
            style={{
              padding: "clamp(27px, 4vw, 40px)",
              background: "#EEE9DF",
              border: "1px solid #DED4C2",
            }}
          >
            <span
              style={{
                display: "block",
                marginBottom: "13px",
                color: "#967644",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "2.5px",
                textTransform: "uppercase",
              }}
            >
              The Discussion
            </span>

            <h3
              style={{
                margin: "0 0 18px",
                color: "#142333",
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(27px, 3vw, 35px)",
                fontWeight: 400,
                lineHeight: 1.25,
              }}
            >
              What we want to explore
            </h3>

            <p
              style={{
                margin: "0 0 27px",
                color: "#737B83",
                fontSize: "13px",
                lineHeight: 1.9,
              }}
            >
              Bring forward the questions, lessons and insights that can help
              financial institutions turn innovation into practical outcomes.
            </p>

            <div className="speakers-topic-grid">
              {speakerExplore.map((s, i) => (
                <motion.div
                  key={s}
                  {...fadeUp(i * 0.045)}
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
                    minHeight: "54px",
                    padding: "13px 15px",
                    background: "rgba(255,255,255,0.65)",
                    border: "1px solid #DED4C2",
                    color: "#293A4A",
                    fontSize: "12px",
                    lineHeight: 1.65,
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
                  {s}
                </motion.div>
              ))}
            </div>

            <div
              style={{
                marginTop: "27px",
                paddingTop: "20px",
                borderTop: "1px solid #D8CEBC",
              }}
            >
              <p
                style={{
                  margin: 0,
                  color: "#77756E",
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "16px",
                  fontStyle: "italic",
                  lineHeight: 1.8,
                }}
              >
                Practical insight. Honest debate. A clearer path forward.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Speaker invitation CTA */}
        <motion.div
          {...fadeUp(0.1)}
          style={{
            maxWidth: "820px",
            margin: "76px auto 0",
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
              margin: "0 auto 28px",
              color: "#142333",
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(23px, 3.5vw, 34px)",
              lineHeight: 1.5,
            }}
          >
            Have a perspective that can move the industry forward?
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              href="#contact"
              onClick={() => chooseInterest("Speaking Opportunity")}
            >
              Express Speaker Interest
            </Button>
          </div>

          <p
            style={{
              margin: "20px auto 0",
              color: "#85847E",
              fontSize: "11px",
              lineHeight: 1.8,
            }}
          >
            Speaker participation is subject to review, invitation and
            confirmation.
          </p>
        </motion.div>
      </div>

      <style>{`
        .speakers-content-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
          margin-top: 68px;
        }

        .speakers-topic-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
        }

        @media (max-width: 900px) {
          .speakers-feature {
            grid-template-columns: 1fr !important;
            gap: 25px !important;
          }

          .speakers-content-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 520px) {
          .speakers-topic-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .speakers-topic-grid > div {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
