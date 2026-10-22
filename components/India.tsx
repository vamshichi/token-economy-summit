
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button, Counter } from "./ui";
import { indiaWhy } from "@/lib/content";

// Keep your existing indiaWhy data and Counter import.

const ease = [0.22, 1, 0.36, 1] as const;

export function India() {
  const reducedMotion = useReducedMotion() ?? false;

  const reveal = (delay = 0) => ({
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
      duration: reducedMotion ? 0 : 0.75,
      delay: reducedMotion ? 0 : delay,
      ease,
    },
  });

  const gold = "#D9B574";
  const ivory = "#F7F4ED";
  const muted = "#B8C3CF";

  return (
    <section
      id="india"
      style={{
        position: "relative",
        isolation: "isolate",
        overflow: "hidden",
        padding: "clamp(85px, 10vw, 140px) 0",
        background: "#081421",
        color: ivory,
      }}
    >
      {/* Mumbai skyline background */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: -2,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=2400&q=85')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Cinematic overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: -1,
          background: `
            linear-gradient(
              90deg,
              rgba(5, 14, 25, 0.97) 0%,
              rgba(5, 14, 25, 0.92) 42%,
              rgba(5, 14, 25, 0.77) 75%,
              rgba(5, 14, 25, 0.68) 100%
            ),
            linear-gradient(
              0deg,
              rgba(5, 14, 25, 0.9),
              transparent 55%,
              rgba(5, 14, 25, 0.4)
            )
          `,
        }}
      />

      <div
        style={{
          position: "relative",
          width: "min(1200px, calc(100% - 48px))",
          margin: "0 auto",
        }}
      >
        {/* Heading */}
        <motion.div {...reveal()}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 22,
              color: gold,
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
            }}
          >
            <span
              style={{
                width: 35,
                height: 1,
                background: gold,
              }}
            />
            INDIA EDITION — MUMBAI
          </div>

          <h2
            style={{
              maxWidth: 850,
              margin: "0 0 24px",
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: "clamp(43px, 6vw, 76px)",
              fontWeight: 400,
              lineHeight: 1.08,
              letterSpacing: "-0.045em",
            }}
          >
            India's financial future.
            <br />
            <span style={{ color: gold }}>
              Reimagined.
            </span>
          </h2>

          <p
            style={{
              maxWidth: 760,
              margin: "0 0 58px",
              color: muted,
              fontSize: 16,
              lineHeight: 1.9,
            }}
          >
            India has built an extraordinary digital-payments
            foundation. The next opportunity is to explore how
            payments, tokenization and programmable financial
            infrastructure can create new possibilities for
            institutions and businesses.
          </p>
        </motion.div>

        {/* Two-column content */}
        <div
          className="india-content-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 0.9fr",
            alignItems: "start",
            gap: "clamp(35px, 6vw, 85px)",
          }}
        >
          {/* Why India */}
          <motion.div {...reveal(0.1)}>
            <h3
              style={{
                margin: "0 0 28px",
                color: gold,
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: "clamp(28px, 3vw, 37px)",
                fontWeight: 400,
                lineHeight: 1.25,
              }}
            >
              Why India. Why Now?
            </h3>

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
              }}
            >
              {indiaWhy.map((text, index) => (
                <motion.li
                  key={text}
                  {...reveal(index * 0.07)}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 15,
                    padding: "16px 0",
                    borderBottom:
                      "1px solid rgba(255,255,255,0.12)",
                    color: "#E0E5EC",
                    fontSize: 14,
                    lineHeight: 1.85,
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 23,
                      height: 23,
                      marginTop: 2,
                      border: "1px solid rgba(217,181,116,0.45)",
                      borderRadius: "50%",
                      color: gold,
                      fontSize: 12,
                    }}
                  >
                    ✓
                  </span>
                  <span>{text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Event information panel */}
          <motion.div
            {...reveal(0.18)}
            style={{
              padding: "clamp(25px, 4vw, 42px)",
              border: "1px solid rgba(217,181,116,0.35)",
              background: "rgba(8,20,33,0.82)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              boxShadow: "0 20px 55px rgba(0,0,0,0.12)",
            }}
          >
            <div
              style={{
                marginBottom: 15,
                color: gold,
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: "0.18em",
              }}
            >
              THE INDIA EDITION
            </div>

            <h3
              style={{
                margin: "0 0 30px",
                color: ivory,
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: "clamp(26px, 3vw, 36px)",
                fontWeight: 400,
                lineHeight: 1.25,
              }}
            >
              At a Glance
            </h3>

            <dl style={{ margin: 0 }}>
              {[
                {
                  label: "Dates",
                  value: "24–25 February 2027",
                },
                {
                  label: "Location",
                  value: "Mumbai, India",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="india-detail-row"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    gap: 20,
                    padding: "15px 0",
                    borderBottom:
                      "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  <dt
                    style={{
                      color: muted,
                      fontSize: 12,
                    }}
                  >
                    {item.label}
                  </dt>

                  <dd
                    style={{
                      margin: 0,
                      color: ivory,
                      fontSize: 14,
                      fontWeight: 500,
                      textAlign: "right",
                    }}
                  >
                    {item.value}
                  </dd>
                </div>
              ))}

              <div
                className="india-detail-row"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  gap: 20,
                  padding: "17px 0",
                  borderBottom:
                    "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <dt
                  style={{
                    color: muted,
                    fontSize: 12,
                  }}
                >
                  Paid delegate target
                </dt>

                <dd
                  style={{
                    margin: 0,
                    color: gold,
                    fontSize: 21,
                    fontFamily: 'Georgia, "Times New Roman", serif',
                    textAlign: "right",
                    whiteSpace: "nowrap",
                  }}
                >
                  <Counter to={250} />–
                  <Counter to={300} />
                </dd>
              </div>

              <div
                className="india-detail-row"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  gap: 20,
                  padding: "17px 0",
                }}
              >
                <dt
                  style={{
                    color: muted,
                    fontSize: 12,
                  }}
                >
                  Expo visitor target
                </dt>

                <dd
                  style={{
                    margin: 0,
                    color: gold,
                    fontSize: 21,
                    fontFamily: 'Georgia, "Times New Roman", serif',
                    textAlign: "right",
                    whiteSpace: "nowrap",
                  }}
                >
                  <Counter to={500} />–
                  <Counter to={600} />
                </dd>
              </div>
            </dl>

            <p
              style={{
                margin: "22px 0 0",
                paddingTop: 16,
                borderTop:
                  "1px solid rgba(217,181,116,0.18)",
                color: "#A5B0BF",
                fontSize: 11,
                lineHeight: 1.75,
              }}
            >
              Attendance figures are event targets,
              not confirmed registrations.
            </p>
          </motion.div>
        </div>

        {/* Bottom conversion area */}
        <motion.div
          {...reveal(0.15)}
          style={{
            maxWidth: 870,
            margin: "clamp(65px, 8vw, 100px) auto 0",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: 45,
              height: 1,
              margin: "0 auto 25px",
              background: gold,
            }}
          />

          <h3
            style={{
              margin: "0 0 18px",
              color: ivory,
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: "clamp(28px, 3.5vw, 42px)",
              fontWeight: 400,
              lineHeight: 1.3,
            }}
          >
            What will you gain?
          </h3>

          <p
            style={{
              maxWidth: 760,
              margin: "0 auto 25px",
              color: muted,
              fontSize: 15,
              lineHeight: 1.95,
            }}
          >
            Discover new market opportunities, learn from
            industry practitioners, evaluate solutions,
            meet potential partners and identify practical
            next steps for your organisation.
          </p>

          <p
            style={{
              maxWidth: 820,
              margin: "0 auto 32px",
              color: gold,
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: "clamp(21px, 2.6vw, 29px)",
              lineHeight: 1.5,
            }}
          >
            India is building the digital-finance foundation.
            Join the conversation shaping what comes next.
          </p>

          <div
            className="india-cta-row"
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            <Button href="#register">
              Register for India
            </Button>

            <Button href="#sponsors" variant="ghost">
              Explore Sponsorship
            </Button>

            <Button href="#expo" variant="ghost">
              Exhibit at the Summit
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Responsive adjustments */}
      <style>{`
        @media (max-width: 800px) {
          #india .india-content-grid {
            grid-template-columns: minmax(0, 1fr) !important;
          }
        }

        @media (max-width: 600px) {
          #india .india-detail-row {
            align-items: flex-start !important;
            flex-direction: column !important;
            gap: 6px !important;
          }

          #india .india-detail-row dd {
            text-align: left !important;
          }

          #india .india-cta-row {
            flex-direction: column !important;
            align-items: stretch !important;
          }

          #india .india-cta-row > * {
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
