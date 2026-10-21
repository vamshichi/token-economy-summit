"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/content";

export default function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setSolid(window.scrollY > 60);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <>
      <motion.header
        className={`nav ${solid ? "solid" : ""}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <a href="#top" className="nav-brand" aria-label="The Token Economy Summit — home">
          <Image src="/emblem.png" alt="" width={44} height={44} />
          <span>
            Token Economy <b>Summit</b>
          </span>
        </a>
        <nav className={`nav-links ${open ? "open" : ""}`}>
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#register" className="nav-cta" onClick={() => setOpen(false)}>
            Register
          </a>
        </nav>
        <button className={`burger ${open ? "open" : ""}`} onClick={() => setOpen(!open)} aria-label="Menu">
          <i />
          <i />
        </button>
      </motion.header>
    </>
  );
}
