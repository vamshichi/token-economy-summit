"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "./ui";
import Countdown from "./Countdown";

const ease = [0.22, 1, 0.36, 1] as const;
const fade = (delay: number) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease },
});

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <motion.div className="hero-logo" {...fade(0.1)}>
          <Image src="/logo.png" alt="The Token Economy Summit" width={1400} height={560} priority sizes="(max-width: 900px) 80vw, 520px" />
        </motion.div>

        <motion.h1 className="hero-title" {...fade(0.3)}>
          Value, Reimagined.
        </motion.h1>
        <motion.p className="hero-sub" {...fade(0.4)}>
          Payments · Tokenization · Digital Assets · The Future of Finance
        </motion.p>
        <motion.p className="hero-copy" {...fade(0.5)}>
          The next evolution of financial infrastructure is here. Discover how digital payments, tokenized assets and
          programmable finance are redefining the movement of value. Join the institutions, innovators and
          decision-makers building what comes next.
        </motion.p>

        <motion.div className="date-line" {...fade(0.6)}>
          <span>24–25 February 2027</span>
          <i />
          <span>Mumbai, India</span>
        </motion.div>

        <motion.div className="cta-row" {...fade(0.7)}>
          <Button href="#register">Register as a Delegate</Button>
          <Button href="#sponsors" variant="ghost">Explore Sponsorship</Button>
          <Button href="#expo" variant="ghost">Discover the Expo</Button>
        </motion.div>

        <motion.div {...fade(0.85)}>
          <Countdown />
        </motion.div>
      </div>
    </section>
  );
}
