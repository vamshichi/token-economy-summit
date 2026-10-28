
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const reducedMotion = useReducedMotion() ?? false;

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        className={`nav-premium ${solid ? "is-solid" : ""} ${
          open ? "menu-open" : ""
        }`}
        initial={reducedMotion ? false : { y: -35, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: reducedMotion ? 0 : 0.75,
          delay: reducedMotion ? 0 : 0.12,
          ease,
        }}
      >
        {/* Brand */}
        <a
          href="#top"
          className="nav-premium-brand"
          aria-label="The Token Economy Summit — home"
          onClick={() => setOpen(false)}
        >
          <span className="">
            <Image
              src="/logo.png"
              alt=""
              width={185}
              height={54}
              priority
            />
          </span>

        </a>

        {/* Desktop and mobile navigation */}
        <nav
          id="primary-navigation"
          className={`nav-premium-links ${open ? "is-open" : ""}`}
          aria-label="Main navigation"
          aria-hidden={undefined}
        >
          <div className="nav-premium-mobile-brand">
            <span>EXPLORE THE SUMMIT</span>
            <span className="nav-premium-mobile-line" />
          </div>

          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              tabIndex={open || undefined ? 0 : undefined}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#register"
            className="nav-premium-cta"
            onClick={() => setOpen(false)}
          >
            <span>Register</span>
            <span className="nav-premium-arrow" aria-hidden="true">
              ↗
            </span>
          </a>

          <div className="nav-premium-mobile-footer">
            <span>24–25 FEBRUARY 2027</span>
            <span>MUMBAI, INDIA</span>
          </div>
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className={`nav-premium-burger ${open ? "is-open" : ""}`}
          onClick={() => setOpen((previous) => !previous)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="primary-navigation"
        >
          <span />
          <span />
        </button>
      </motion.header>

      {/* Mobile backdrop */}
      <button
        type="button"
        className={`nav-premium-backdrop ${open ? "is-visible" : ""}`}
        aria-label="Close navigation menu"
        tabIndex={open ? 0 : -1}
        onClick={() => setOpen(false)}
      />

      <style>{`
        .nav-premium {
          position: fixed;
          top: 0;
          left: 0;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          box-sizing: border-box;
          min-height: 86px;
          padding: 0 clamp(22px, 5vw, 76px);
          background: linear-gradient(
            180deg,
            rgba(6, 15, 25, 0.56),
            rgba(6, 15, 25, 0.08)
          );
          border-bottom: 1px solid rgba(255, 255, 255, 0.12);
          transition:
            background 0.35s ease,
            border-color 0.35s ease,
            box-shadow 0.35s ease;
        }

        .nav-premium.is-solid {
          background: rgba(8, 19, 31, 0.96);
          border-bottom-color: rgba(217, 181, 116, 0.2);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
        }

        .nav-premium-brand {
          position: relative;
          z-index: 2;
          display: inline-flex;
          align-items: center;
          gap: 13px;
          flex-shrink: 0;
          color: #f7f4ed;
          text-decoration: none;
        }

        .nav-premium-emblem {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 47px;
          height: 47px;
          flex-shrink: 0;
          border: 1px solid rgba(217, 181, 116, 0.42);
          background: rgba(255, 255, 255, 0.025);
        }

        .nav-premium-emblem img {
          width: 36px;
          height: 36px;
          object-fit: contain;
        }

        .nav-premium-wordmark {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .nav-premium-name {
          color: #f7f4ed;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 17px;
          font-weight: 400;
          letter-spacing: 1.1px;
          line-height: 1.15;
          white-space: nowrap;
        }

        .nav-premium-subtitle {
          display: flex;
          align-items: center;
          gap: 7px;
          color: #d9b574;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 2.3px;
          line-height: 1.2;
          white-space: nowrap;
        }

        .nav-premium-subtitle i {
          display: inline-block;
          width: 14px;
          height: 1px;
          background: #d9b574;
        }

        .nav-premium-links {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: clamp(15px, 2vw, 29px);
          margin-left: 30px;
        }

        .nav-premium-links > a:not(.nav-premium-cta) {
          position: relative;
          padding: 12px 0;
          color: rgba(247, 244, 237, 0.84);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.35px;
          text-decoration: none;
          white-space: nowrap;
          transition: color 0.25s ease;
        }

        .nav-premium-links > a:not(.nav-premium-cta)::after {
          position: absolute;
          right: 0;
          bottom: 4px;
          left: 0;
          height: 1px;
          background: #d9b574;
          content: "";
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.25s ease;
        }

        .nav-premium-links > a:not(.nav-premium-cta):hover {
          color: #d9b574;
        }

        .nav-premium-links > a:not(.nav-premium-cta):hover::after {
          transform: scaleX(1);
        }

        .nav-premium-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          min-height: 43px;
          padding: 0 17px;
          border: 1px solid #c8a66c;
          background: #c8a66c;
          color: #101b28;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-decoration: none;
          white-space: nowrap;
          transition:
            background 0.25s ease,
            border-color 0.25s ease,
            color 0.25s ease;
        }

        .nav-premium-cta:hover {
          background: #e2c994;
          border-color: #e2c994;
        }

        .nav-premium-arrow {
          font-size: 15px;
          font-weight: 400;
          transition: transform 0.25s ease;
        }

        .nav-premium-cta:hover .nav-premium-arrow {
          transform: translate(2px, -2px);
        }

        .nav-premium-burger,
        .nav-premium-mobile-brand,
        .nav-premium-mobile-footer,
        .nav-premium-backdrop {
          display: none;
        }

        @media (max-width: 1100px) {
          .nav-premium {
            min-height: 78px;
          }

          .nav-premium-links {
            gap: 16px;
            margin-left: 20px;
          }

          .nav-premium-links > a:not(.nav-premium-cta) {
            font-size: 10px;
          }

          .nav-premium-name {
            font-size: 15px;
          }

          .nav-premium-subtitle {
            font-size: 8px;
            letter-spacing: 1.9px;
          }
        }

        @media (max-width: 900px) {
          .nav-premium {
            min-height: 76px;
            padding: 0 23px;
          }

          .nav-premium-burger {
            position: relative;
            z-index: 1002;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 6px;
            width: 45px;
            height: 45px;
            padding: 0;
            border: 1px solid rgba(217, 181, 116, 0.5);
            border-radius: 0;
            background: rgba(255, 255, 255, 0.025);
            cursor: pointer;
          }

          .nav-premium-burger span {
            display: block;
            width: 19px;
            height: 1px;
            background: #d9b574;
            transition:
              transform 0.25s ease,
              width 0.25s ease;
          }

          .nav-premium-burger.is-open span:first-child {
            transform: translateY(3.5px) rotate(45deg);
          }

          .nav-premium-burger.is-open span:last-child {
            transform: translateY(-3.5px) rotate(-45deg);
          }

          .nav-premium-links {
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            z-index: 1001;
            display: flex;
            flex-direction: column;
            align-items: stretch;
            justify-content: flex-start;
            gap: 0;
            width: min(390px, 88vw);
            height: 100dvh;
            box-sizing: border-box;
            margin: 0;
            padding: 105px 30px 28px;
            overflow-y: auto;
            background: #091522;
            border-left: 1px solid rgba(217, 181, 116, 0.28);
            box-shadow: -25px 0 70px rgba(0, 0, 0, 0.2);
            visibility: hidden;
            transform: translateX(102%);
            transition:
              transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
              visibility 0.35s;
          }

          .nav-premium-links.is-open {
            visibility: visible;
            transform: translateX(0);
          }

          .nav-premium-mobile-brand {
            display: flex;
            flex-direction: column;
            gap: 15px;
            margin-bottom: 22px;
            color: #d9b574;
            font-size: 10px;
            font-weight: 700;
            letter-spacing: 2.5px;
          }

          .nav-premium-mobile-line {
            width: 45px;
            height: 1px;
            background: rgba(217, 181, 116, 0.65);
          }

          .nav-premium-links > a:not(.nav-premium-cta) {
            padding: 17px 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.09);
            color: #f7f4ed;
            font-family: Georgia, "Times New Roman", serif;
            font-size: 19px;
            font-weight: 400;
            letter-spacing: 0;
            white-space: normal;
          }

          .nav-premium-links > a:not(.nav-premium-cta)::after {
            display: none;
          }

          .nav-premium-cta {
            justify-content: space-between;
            min-height: 51px;
            margin-top: 27px;
            padding: 0 19px;
          }

          .nav-premium-mobile-footer {
            display: flex;
            flex-direction: column;
            gap: 9px;
            margin-top: auto;
            padding-top: 35px;
            color: #aeb9c3;
            font-size: 9px;
            letter-spacing: 1.7px;
          }

          .nav-premium-backdrop.is-visible {
            position: fixed;
            inset: 0;
            z-index: 999;
            display: block;
            width: 100%;
            height: 100%;
            padding: 0;
            border: 0;
            background: rgba(2, 8, 14, 0.65);
            cursor: default;
            backdrop-filter: blur(3px);
            -webkit-backdrop-filter: blur(3px);
          }
        }

        @media (max-width: 420px) {
          .nav-premium {
            min-height: 70px;
            padding: 0 15px;
          }

          .nav-premium-emblem {
            width: 40px;
            height: 40px;
          }

          .nav-premium-emblem img {
            width: 31px;
            height: 31px;
          }

          .nav-premium-brand {
            gap: 9px;
          }

          .nav-premium-name {
            font-size: 14px;
            letter-spacing: 0.5px;
          }

          .nav-premium-subtitle {
            gap: 5px;
            font-size: 7px;
            letter-spacing: 1.6px;
          }

          .nav-premium-subtitle i {
            width: 9px;
          }

          .nav-premium-burger {
            width: 40px;
            height: 40px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .nav-premium,
          .nav-premium-links,
          .nav-premium-burger span,
          .nav-premium-links a,
          .nav-premium-cta,
          .nav-premium-arrow {
            transition: none !important;
          }
        }
      `}</style>
    </>
  );
}
