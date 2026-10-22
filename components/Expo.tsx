
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "./ui";
import { expoZones } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

export function Expo() {
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
      id="expo"
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
        {/* Main heading */}
        <motion.div
          {...fadeUp()}
          style={{
            maxWidth: "900px",
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
            Expo &amp; Innovation Showcase
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
            See the technology. Meet the builders.{" "}
            <span style={{ color: "#A98549", fontStyle: "italic" }}>
              Discover what’s possible.
            </span>
          </h2>

          <p
            style={{
              maxWidth: "760px",
              margin: "0 auto",
              color: "#68717A",
              fontSize: "14px",
              lineHeight: 2,
            }}
          >
            The Token Economy Expo brings emerging financial infrastructure
            to life. Explore the solutions helping institutions move money,
            represent assets, protect transactions and connect financial
            systems.
          </p>
        </motion.div>

        {/* Feature banner */}
        <motion.div
          {...fadeUp(0.08)}
          className="expo-feature"
          style={{
            position: "relative",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "center",
            gap: "35px",
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
              top: "-100px",
              width: "280px",
              height: "280px",
              border: "1px solid rgba(217,181,116,0.15)",
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
                marginBottom: "17px",
                color: "#D9B574",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "2.5px",
                textTransform: "uppercase",
              }}
            >
              Innovation in Action
            </span>

            <h3
              style={{
                margin: "0 0 19px",
                color: "#F7F4ED",
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(29px, 3.7vw, 43px)",
                fontWeight: 400,
                lineHeight: 1.25,
              }}
            >
              From breakthrough ideas to real-world applications.
            </h3>

            <div
              aria-hidden="true"
              style={{
                width: "54px",
                height: "2px",
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
            Explore the technologies, infrastructure and services reshaping
            financial markets. Connect directly with solution providers,
            understand their capabilities and discover how new approaches
            could support your organisation’s next stage of innovation.
          </p>
        </motion.div>

        {/* Innovation zones */}
        <div style={{ marginTop: "78px" }}>
          <motion.div
            {...fadeUp()}
            style={{
              display: "flex",
              alignItems: "end",
              justifyContent: "space-between",
              gap: "24px",
              marginBottom: "30px",
            }}
          >
            <div>
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
                Explore the Ecosystem
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
                Discover the Innovation Zones
              </h3>
            </div>

            <span
              className="expo-zone-note"
              style={{
                paddingBottom: "5px",
                color: "#8A7654",
                fontSize: "11px",
                letterSpacing: "0.5px",
                whiteSpace: "nowrap",
              }}
            >
              Explore. Connect. Innovate.
            </span>
          </motion.div>

          <div className="expo-zones-grid">
            {expoZones.map((z, i) => (
              <motion.article
                key={z.title}
                {...fadeUp(i * 0.06)}
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
                  minHeight: "240px",
                  padding: "27px 25px",
                  background: "#FFFFFF",
                  border: "1px solid #E5DED1",
                  boxShadow: "0 8px 25px rgba(16,32,51,0.025)",
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
                      color: "#B28F52",
                      fontFamily: "Georgia, 'Times New Roman', serif",
                      fontSize: "31px",
                      lineHeight: 1,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    style={{ color: "#A98549", flexShrink: 0 }}
                  >
                    <path
                      d="M7 17 17 7M9 7h8v8"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

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
                  {z.title}
                </h4>

                <p
                  style={{
                    margin: 0,
                    color: "#737B83",
                    fontSize: "13px",
                    lineHeight: 1.9,
                  }}
                >
                  {z.body}
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

        {/* Two audience pathways */}
        <div className="expo-audience-grid">
          <motion.article
            {...fadeUp()}
            style={{
              position: "relative",
              overflow: "hidden",
              padding: "clamp(27px, 4vw, 40px)",
              background: "#EDE7DC",
              border: "1px solid #DED4C2",
            }}
          >
            <span
              style={{
                display: "block",
                marginBottom: "22px",
                color: "#967644",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "2.5px",
                textTransform: "uppercase",
              }}
            >
              For Exhibitors
            </span>

            <h3
              style={{
                margin: "0 0 16px",
                color: "#142333",
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(25px, 3vw, 32px)",
                fontWeight: 400,
                lineHeight: 1.3,
              }}
            >
              Put your solution in the spotlight.
            </h3>

            <p
              style={{
                margin: 0,
                color: "#69727A",
                fontSize: "13px",
                lineHeight: 1.95,
              }}
            >
              Demonstrate your products. Engage with potential customers.
              Build relationships with financial institutions and technology
              buyers.
            </p>

            <div
              aria-hidden="true"
              style={{
                width: "45px",
                height: "2px",
                marginTop: "28px",
                background: "#B28F52",
              }}
            />
          </motion.article>

          <motion.article
            {...fadeUp(0.1)}
            style={{
              position: "relative",
              overflow: "hidden",
              padding: "clamp(27px, 4vw, 40px)",
              background: "#FFFFFF",
              border: "1px solid #E5DED1",
            }}
          >
            <span
              style={{
                display: "block",
                marginBottom: "22px",
                color: "#967644",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "2.5px",
                textTransform: "uppercase",
              }}
            >
              For Visitors
            </span>

            <h3
              style={{
                margin: "0 0 16px",
                color: "#142333",
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(25px, 3vw, 32px)",
                fontWeight: 400,
                lineHeight: 1.3,
              }}
            >
              Find the connections that move you forward.
            </h3>

            <p
              style={{
                margin: 0,
                color: "#737B83",
                fontSize: "13px",
                lineHeight: 1.95,
              }}
            >
              Discover solutions. Meet experts. Compare capabilities. Identify
              potential partners.
            </p>

            <div
              aria-hidden="true"
              style={{
                width: "45px",
                height: "2px",
                marginTop: "28px",
                background: "#B28F52",
              }}
            />
          </motion.article>
        </div>

        {/* Closing statement */}
        <motion.div
          {...fadeUp(0.1)}
          style={{
            maxWidth: "850px",
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
              margin: "0 auto 31px",
              color: "#142333",
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(22px, 3.5vw, 34px)",
              lineHeight: 1.5,
            }}
          >
            The future of finance isn’t just discussed here.
            <br />
            <span style={{ color: "#A98549", fontStyle: "italic" }}>
              It’s demonstrated.
            </span>
          </p>

          <div className="expo-cta-row">
            <Button
              href="#contact"
              onClick={() => chooseInterest("Exhibition")}
            >
              Book Exhibition Space
            </Button>

            <Button href="#register" variant="ghost">
              Register as an Expo Visitor
            </Button>
          </div>
        </motion.div>
      </div>

      <style>{`
        .expo-zones-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 17px;
        }

        .expo-audience-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
          margin-top: 65px;
        }

        .expo-cta-row {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 14px;
        }

        @media (max-width: 900px) {
          .expo-feature {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }

          .expo-zones-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 600px) {
          .expo-zones-grid,
          .expo-audience-grid {
            grid-template-columns: 1fr;
          }

          .expo-zone-note {
            display: none;
          }

          .expo-cta-row {
            flex-direction: column;
            align-items: stretch;
          }

          .expo-cta-row > * {
            max-width: 100%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .expo-zones-grid article {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
