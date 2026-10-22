
"use client";

import { format, themes } from "@/lib/content";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function Programme() {
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

  const questions = [
    "What is changing?",
    "What is commercially viable?",
    "What happens next?",
  ];

  return (
    <section
      id="programme"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#F7F5F0",
        color: "#142333",
        padding: "clamp(76px, 9vw, 124px) 24px",
      }}
    >
      {/* Subtle decorative background */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, #D9B574, transparent)",
        }}
      />

      <div
        className="programme-container"
        style={{
          width: "100%",
          maxWidth: "1240px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Section heading */}
        <motion.div
          {...fadeUp()}
          style={{
            maxWidth: "790px",
            margin: "0 auto 62px",
            textAlign: "center",
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "24px",
              color: "#947443",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            <span
              style={{
                width: "30px",
                height: "1px",
                background: "#B99A61",
              }}
            />
            Key Themes &amp; Conference Programme
            <span
              style={{
                width: "30px",
                height: "1px",
                background: "#B99A61",
              }}
            />
          </span>

          <h2
            style={{
              margin: "0 auto 22px",
              maxWidth: "760px",
              color: "#102033",
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(37px, 5.2vw, 65px)",
              fontWeight: 400,
              lineHeight: 1.12,
              letterSpacing: "-1.8px",
            }}
          >
            The conversations that will shape{" "}
            <span style={{ color: "#A98549", fontStyle: "italic" }}>
              tomorrow.
            </span>
          </h2>

          <p
            style={{
              maxWidth: "690px",
              margin: "0 auto",
              color: "#68717A",
              fontSize: "15px",
              lineHeight: 1.95,
            }}
          >
            The token economy is evolving across payments, assets, settlement,
            security and financial infrastructure. Our programme focuses on
            the questions that matter to institutions today.
          </p>
        </motion.div>

        {/* Theme cards */}
        <div className="programme-theme-grid">
          {themes.map((t, i) => (
            <motion.article
              key={t.n}
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
                display: "flex",
                flexDirection: "column",
                minHeight: "290px",
                padding: "30px 27px",
                background: "#FFFFFF",
                border: "1px solid #E7E1D5",
                borderRadius: "3px",
                boxShadow: "0 8px 28px rgba(16, 32, 51, 0.025)",
                transition: "border-color 0.3s ease, box-shadow 0.3s ease",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "12px",
                  marginBottom: "31px",
                }}
              >
                <span
                  style={{
                    color: "#B08D50",
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: "35px",
                    lineHeight: 1,
                  }}
                >
                  {String(t.n).padStart(2, "0")}
                </span>

                <span
                  style={{
                    width: "42px",
                    height: "1px",
                    background: "#D9B574",
                  }}
                />
              </div>

              <span
                style={{
                  marginBottom: "12px",
                  color: "#967644",
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "2px",
                  lineHeight: 1.6,
                  textTransform: "uppercase",
                }}
              >
                {t.kicker}
              </span>

              <h3
                style={{
                  margin: "0 0 14px",
                  color: "#142333",
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "23px",
                  fontWeight: 400,
                  lineHeight: 1.35,
                }}
              >
                {t.title}
              </h3>

              <p
                style={{
                  margin: 0,
                  color: "#737B83",
                  fontSize: "13px",
                  lineHeight: 1.85,
                }}
              >
                {t.body}
              </p>

              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "2px",
                  background:
                    "linear-gradient(90deg, #B28F52, #E9D6AC, transparent)",
                }}
              />
            </motion.article>
          ))}
        </div>

        {/* Three guiding questions */}
        <motion.div
          {...fadeUp(0.1)}
          style={{
            marginTop: "68px",
            padding: "38px 34px 32px",
            background: "#102033",
            border: "1px solid rgba(217, 181, 116, 0.24)",
            borderRadius: "3px",
          }}
        >
          <div
            style={{
              marginBottom: "30px",
              color: "#D9B574",
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "2.8px",
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            A Programme Built Around Outcomes
          </div>

          <div className="programme-questions">
            {questions.map((q, i) => (
              <div
                key={q}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "15px",
                  minHeight: "54px",
                  padding: "10px 12px",
                  borderRight:
                    i !== questions.length - 1
                      ? "1px solid rgba(217,181,116,0.25)"
                      : "none",
                }}
              >
                <span
                  style={{
                    color: "#D9B574",
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: "25px",
                  }}
                >
                  0{i + 1}
                </span>

                <span
                  style={{
                    color: "#F6F2E9",
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: "17px",
                    lineHeight: 1.5,
                  }}
                >
                  {q}
                </span>
              </div>
            ))}
          </div>

          <p
            style={{
              margin: "25px 0 0",
              color: "#AEB7C0",
              fontSize: "12px",
              letterSpacing: "0.5px",
              textAlign: "center",
            }}
          >
            Every conversation should answer three questions.
          </p>
        </motion.div>

        {/* Conference format */}
        <div
          style={{
            marginTop: "94px",
            paddingTop: "66px",
            borderTop: "1px solid #DED7C9",
          }}
        >
          <motion.div
            {...fadeUp()}
            style={{
              maxWidth: "720px",
              margin: "0 auto 44px",
              textAlign: "center",
            }}
          >
            <span
              style={{
                display: "block",
                marginBottom: "16px",
                color: "#967644",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "2.5px",
                textTransform: "uppercase",
              }}
            >
              The Experience
            </span>

            <h3
              style={{
                margin: "0 0 17px",
                color: "#142333",
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(30px, 4vw, 44px)",
                fontWeight: 400,
                lineHeight: 1.2,
              }}
            >
              Two days. Big ideas.{" "}
              <span style={{ color: "#A98549", fontStyle: "italic" }}>
                Real opportunities.
              </span>
            </h3>

            <p
              style={{
                maxWidth: "600px",
                margin: "0 auto",
                color: "#68717A",
                fontSize: "14px",
                lineHeight: 1.9,
              }}
            >
              Explore the technologies, business models and partnerships
              transforming financial services.
            </p>
          </motion.div>

          <div className="programme-format-grid">
            {format.map((f, i) => (
              <motion.div
                key={f}
                {...fadeUp(i * 0.07)}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "17px",
                  padding: "24px 20px",
                  background: "rgba(255,255,255,0.58)",
                  borderTop: "1px solid #D9B574",
                  borderBottom: "1px solid #E7E1D5",
                }}
              >
                <span
                  style={{
                    color: "#A98549",
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: "23px",
                    lineHeight: 1.2,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span
                  style={{
                    color: "#243444",
                    fontSize: "13px",
                    fontWeight: 500,
                    lineHeight: 1.8,
                  }}
                >
                  {f}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.p
            {...fadeUp(0.1)}
            style={{
              margin: "38px auto 0",
              color: "#6D747B",
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(17px, 2.4vw, 21px)",
              fontStyle: "italic",
              lineHeight: 1.7,
              textAlign: "center",
            }}
          >
            Come to understand the future. Leave better connected to build it.
          </motion.p>
        </div>
      </div>

      <style>{`
        .programme-theme-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .programme-questions {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .programme-format-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
        }

        @media (max-width: 900px) {
          .programme-theme-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .programme-format-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 600px) {
          .programme-theme-grid,
          .programme-format-grid {
            grid-template-columns: 1fr;
          }

          .programme-questions {
            grid-template-columns: 1fr;
          }

          .programme-questions > div {
            justify-content: flex-start !important;
            border-right: none !important;
            border-bottom: 1px solid rgba(217,181,116,0.2);
            padding: 15px 5px !important;
          }

          .programme-questions > div:last-child {
            border-bottom: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .programme-theme-grid article {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
