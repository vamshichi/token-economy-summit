
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Footer() {
  const reducedMotion = useReducedMotion() ?? false;

  const fadeUp = (delay = 0) => ({
    initial: reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: {
      duration: reducedMotion ? 0 : 0.7,
      delay: reducedMotion ? 0 : delay,
      ease,
    },
  });

  const editions = [
    { label: "India", location: "Mumbai", href: "#india" },
    { label: "UAE", location: "Dubai", href: "#editions" },
    { label: "Singapore", location: "Singapore", href: "#editions" },
  ];

  const quickLinks = [
    { label: "About the Summit", href: "#about" },
    { label: "Programme", href: "#programme" },
    { label: "Speakers", href: "#speakers" },
    { label: "Sponsorship", href: "#sponsors" },
    { label: "Innovation Expo", href: "#expo" },
    { label: "Registration", href: "#register" },
    { label: "Contact Us", href: "#contact" },
  ];

  return (
    <footer
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#081421",
        color: "#F7F4ED",
      }}
    >
      {/* Gold divider */}
      <div
        aria-hidden="true"
        style={{
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, #D9B574, transparent)",
        }}
      />

      {/* Main footer */}
      <div
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "clamp(55px, 7vw, 88px) clamp(22px, 5vw, 76px) 55px",
        }}
      >
        <div className="footer-premium-grid">
          {/* Brand column */}
          <motion.div {...fadeUp()}>
            <a
              href="#top"
              aria-label="The Token Economy Summit home"
              style={{
                display: "inline-flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <Image
                src="/logo.png"
                alt="The Token Economy Summit"
                width={320}
                height={128}
                className="footer-premium-logo"
                style={{
                  display: "block",
                  width: "min(100%, 270px)",
                  height: "auto",
                  objectFit: "contain",
                  objectPosition: "left center",
                }}
              />
            </a>

            <div
              aria-hidden="true"
              style={{
                width: "48px",
                height: "1px",
                margin: "25px 0 22px",
                background: "#D9B574",
              }}
            />

            <p
              style={{
                maxWidth: "360px",
                margin: "0 0 17px",
                color: "#D9B574",
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "16px",
                fontStyle: "italic",
                lineHeight: 1.8,
              }}
            >
              Value, Reimagined: Payments, Tokenization &amp; the Digital Asset
              Economy.
            </p>

            <p
              style={{
                maxWidth: "350px",
                margin: 0,
                color: "#AAB5BF",
                fontSize: "12px",
                lineHeight: 2,
              }}
            >
              Connecting the institutions, innovators and decision-makers
              shaping the next generation of financial infrastructure.
            </p>
          </motion.div>

          {/* Editions */}
          <motion.div {...fadeUp(0.08)}>
            <h3 className="footer-premium-heading">
              Explore Editions
            </h3>

            <span className="footer-premium-heading-line" />

            <ul className="footer-premium-list">
              {editions.map((edition) => (
                <li key={edition.label}>
                  <a href={edition.href}>
                    <span className="footer-premium-link-arrow">↗</span>
                    <span>
                      <span className="footer-edition-label">
                        {edition.label}
                      </span>
                      <span className="footer-edition-location">
                        {edition.location}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick links */}
          <motion.div {...fadeUp(0.16)}>
            <h3 className="footer-premium-heading">
              Quick Links
            </h3>

            <span className="footer-premium-heading-line" />

            <ul className="footer-premium-list footer-quick-links">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>
                    <span className="footer-premium-link-arrow">↗</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Event highlight */}
        <motion.div
          {...fadeUp(0.1)}
          className="footer-event-strip"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
            marginTop: "65px",
            padding: "24px 28px",
            borderTop: "1px solid rgba(217,181,116,0.25)",
            borderBottom: "1px solid rgba(217,181,116,0.25)",
            background: "rgba(255,255,255,0.025)",
          }}
        >
          <div>
            <span
              style={{
                display: "block",
                marginBottom: "8px",
                color: "#D9B574",
                fontSize: "9px",
                fontWeight: 700,
                letterSpacing: "2.3px",
                textTransform: "uppercase",
              }}
            >
              India Edition · 2027
            </span>

            <p
              style={{
                margin: 0,
                color: "#F7F4ED",
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "clamp(17px, 2.5vw, 22px)",
                lineHeight: 1.5,
              }}
            >
              The future of value is being built now. Be part of it.
            </p>
          </div>

          <a href="#register" className="footer-premium-cta">
            Join the Summit
            <span aria-hidden="true">↗</span>
          </a>
        </motion.div>

        {/* Copyright bar */}
        <div className="footer-premium-bottom">
          <span>
            © 2027 The Token Economy Summit &amp; Expo. All rights reserved.
          </span>

          <a href="#top" className="footer-back-top">
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>

      <style>{`
        .footer-premium-grid {
          display: grid;
          grid-template-columns: 1.5fr 0.8fr 0.8fr;
          gap: clamp(35px, 6vw, 85px);
        }

        .footer-premium-heading {
          margin: 8px 0 18px;
          color: #F7F4ED;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 19px;
          font-weight: 400;
          line-height: 1.4;
        }

        .footer-premium-heading-line {
          display: block;
          width: 33px;
          height: 1px;
          margin-bottom: 23px;
          background: #D9B574;
        }

        .footer-premium-list {
          display: flex;
          flex-direction: column;
          gap: 17px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .footer-premium-list li a {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: #AAB5BF;
          font-size: 12px;
          line-height: 1.65;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .footer-premium-list li a:hover,
        .footer-back-top:hover {
          color: #D9B574;
        }

        .footer-premium-link-arrow {
          flex-shrink: 0;
          color: #B28F52;
          font-size: 13px;
          transition: transform 0.2s ease;
        }

        .footer-premium-list li a:hover .footer-premium-link-arrow {
          transform: translate(2px, -2px);
        }

        .footer-edition-label,
        .footer-edition-location {
          display: block;
        }

        .footer-edition-label {
          color: #E8E9E8;
        }

        .footer-edition-location {
          margin-top: 3px;
          color: #8996A3;
          font-size: 11px;
        }

        .footer-premium-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 23px;
          flex-shrink: 0;
          min-height: 45px;
          padding: 0 18px;
          border: 1px solid #C8A66C;
          background: #C8A66C;
          color: #101B28;
          font-size: 11px;
          font-weight: 700;
          text-decoration: none;
          transition:
            background 0.2s ease,
            border-color 0.2s ease;
        }

        .footer-premium-cta:hover {
          background: #E2C994;
          border-color: #E2C994;
        }

        .footer-premium-cta span {
          font-size: 15px;
        }

        .footer-premium-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding-top: 27px;
          margin-top: 28px;
          border-top: 1px solid rgba(255,255,255,0.1);
          color: #8996A3;
          font-size: 10px;
          line-height: 1.8;
          letter-spacing: 0.2px;
        }

        .footer-back-top {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          color: #C5B28F;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .footer-back-top span {
          font-size: 14px;
        }

        @media (max-width: 800px) {
          .footer-premium-grid {
            grid-template-columns: 1fr 1fr;
            gap: 42px 30px;
          }

          .footer-premium-grid > div:first-child {
            grid-column: 1 / -1;
          }

          .footer-event-strip {
            align-items: flex-start !important;
            flex-direction: column;
          }
        }

        @media (max-width: 520px) {
          .footer-premium-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }

          .footer-premium-grid > div:first-child {
            grid-column: auto;
          }

          .footer-premium-bottom {
            align-items: flex-start;
            flex-direction: column;
            gap: 13px;
          }

          .footer-premium-cta {
            width: 100%;
            box-sizing: border-box;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .footer-premium-list li a,
          .footer-premium-link-arrow,
          .footer-premium-cta,
          .footer-back-top {
            transition: none !important;
          }
        }
      `}</style>
    </footer>
  );
}
