
"use client";

import { motion, useReducedMotion } from "framer-motion";
import ContactForm from "./ContactForm";
import { enquiries } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

export function Contact() {
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

  return (
    <section
      id="contact"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "clamp(76px, 9vw, 124px) 24px",
        background: "#F7F5F0",
        color: "#142333",
      }}
    >
      {/* Subtle gold divider */}
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
            maxWidth: "820px",
            margin: "0 auto 58px",
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
            Contact Us
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
              fontSize: "clamp(39px, 5.3vw, 65px)",
              fontWeight: 400,
              lineHeight: 1.13,
              letterSpacing: "-1.5px",
            }}
          >
            Let’s build{" "}
            <span style={{ color: "#A98549", fontStyle: "italic" }}>
              what’s next.
            </span>
          </h2>

          <p
            style={{
              maxWidth: "720px",
              margin: "0 auto",
              color: "#68717A",
              fontSize: "14px",
              lineHeight: 2,
            }}
          >
            Have a question? Interested in sponsorship? Looking to exhibit,
            speak, attend or explore a partnership? Our team would be happy
            to connect.
          </p>
        </motion.div>

        {/* Contact content */}
        <div className="contact-premium-grid">
          {/* Enquiry categories */}
          <motion.div
            {...fadeUp(0.05)}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            <div style={{ marginBottom: "10px" }}>
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
                How Can We Help?
              </span>

              <h3
                style={{
                  margin: 0,
                  color: "#142333",
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "clamp(27px, 3.5vw, 37px)",
                  fontWeight: 400,
                  lineHeight: 1.3,
                }}
              >
                The right conversation starts here.
              </h3>
            </div>

            {enquiries.map((e, i) => (
              <motion.article
                key={e.title}
                {...fadeUp(i * 0.06)}
                whileHover={
                  reducedMotion
                    ? undefined
                    : {
                        x: 4,
                        transition: { duration: 0.2 },
                      }
                }
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "18px",
                  padding: "22px 21px",
                  background: "#FFFFFF",
                  border: "1px solid #E5DED1",
                  boxShadow: "0 7px 24px rgba(16,32,51,0.025)",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    width: "37px",
                    height: "37px",
                    border: "1px solid #E3D3B5",
                    color: "#A98549",
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: "15px",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div>
                  <h4
                    style={{
                      margin: "0 0 8px",
                      color: "#142333",
                      fontFamily: "Georgia, 'Times New Roman', serif",
                      fontSize: "19px",
                      fontWeight: 400,
                      lineHeight: 1.4,
                    }}
                  >
                    {e.title}
                  </h4>

                  <p
                    style={{
                      margin: 0,
                      color: "#737B83",
                      fontSize: "12px",
                      lineHeight: 1.85,
                    }}
                  >
                    {e.body}
                  </p>
                </div>
              </motion.article>
            ))}

            {/* Event details */}
            <div
              style={{
                marginTop: "8px",
                padding: "25px",
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
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                }}
              >
                India Edition
              </span>

              <h4
                style={{
                  margin: "0 0 12px",
                  color: "#142333",
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "21px",
                  fontWeight: 400,
                  lineHeight: 1.4,
                }}
              >
                The Token Economy Summit &amp; Expo 2027
              </h4>

              <p
                style={{
                  margin: 0,
                  color: "#68717A",
                  fontSize: "12px",
                  lineHeight: 1.9,
                }}
              >
                24–25 February 2027
                <br />
                Mumbai, India
              </p>
            </div>
          </motion.div>

          {/* Existing contact form */}
          <motion.div
            {...fadeUp(0.12)}
            style={{
              position: "relative",
              alignSelf: "start",
              padding: "clamp(25px, 4vw, 43px)",
              background: "#102033",
              border: "1px solid rgba(217,181,116,0.35)",
              boxShadow: "0 22px 60px rgba(16,32,51,0.10)",
            }}
          >
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "76px",
                height: "76px",
                borderTop: "1px solid rgba(217,181,116,0.5)",
                borderRight: "1px solid rgba(217,181,116,0.5)",
                pointerEvents: "none",
              }}
            />

            <span
              style={{
                display: "block",
                marginBottom: "14px",
                color: "#D9B574",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "2.5px",
                textTransform: "uppercase",
              }}
            >
              Get in Touch
            </span>

            <h3
              style={{
                margin: "0 0 13px",
                color: "#F7F4ED",
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(28px, 3.5vw, 38px)",
                fontWeight: 400,
                lineHeight: 1.25,
              }}
            >
              Tell us what you have in mind.
            </h3>

            <p
              style={{
                margin: "0 0 30px",
                color: "#B5BEC7",
                fontSize: "12px",
                lineHeight: 1.9,
              }}
            >
              Share a few details, and our team can direct your enquiry to
              the appropriate contact.
            </p>

            <div className="contact-form-premium">
              <ContactForm />
            </div>

            <p
              style={{
                margin: "22px 0 0",
                color: "#AAB5BF",
                fontSize: "10px",
                lineHeight: 1.8,
              }}
            >
              Your information will be handled according to the event
              organiser’s applicable privacy practices.
            </p>
          </motion.div>
        </div>
      </div>

      <style>{`
        .contact-premium-grid {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          align-items: start;
          gap: 35px;
        }

        .contact-form-premium input,
        .contact-form-premium select,
        .contact-form-premium textarea {
          width: 100%;
          box-sizing: border-box;
          max-width: 100%;
        }

        @media (max-width: 900px) {
          .contact-premium-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
        }

        @media (max-width: 600px) {
          .contact-premium-grid {
            gap: 24px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .contact-premium-grid article {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
