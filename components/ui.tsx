"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode, type MouseEvent, type CSSProperties } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 18,
  className,
  style,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  style?: CSSProperties;
  as?: "div" | "li" | "p" | "span";
}) {
  const M = motion[as] as typeof motion.div;
  return (
    <M
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease }}
    >
      {children}
    </M>
  );
}

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};
export const rise: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

export function Stagger({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
    >
      {children}
    </motion.div>
  );
}

export function Item({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={rise}>
      {children}
    </motion.div>
  );
}

export function SectionHead({
  eyebrow,
  title,
  lead,
  center = true,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  center?: boolean;
}) {
  return (
    <div className={`section-head ${center ? "center" : ""}`}>
      <Reveal>
        <span className="eyebrow">
          <i /> {eyebrow} <i />
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="h2 gold-text">{title}</h2>
      </Reveal>
      <motion.div
        className="rule"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease, delay: 0.2 }}
      />
      {lead && (
        <Reveal delay={0.15}>
          <p className="lead">{lead}</p>
        </Reveal>
      )}
    </div>
  );
}

/** Card with a cursor-following gold spotlight. */
export function Spot({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li";
}) {
  const onMove = (e: MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <Tag className={`spot ${className}`} onMouseMove={onMove}>
      {children}
    </Tag>
  );
}

/** Static card wrapper (kept for API compatibility). */
export function Tilt({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`spot ${className}`}>{children}</div>;
}

export function Counter({ to, suffix = "", prefix = "" }: { to: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1800;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setV(Math.round(to * (1 - Math.pow(1 - p, 4))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return (
    <span ref={ref}>
      {prefix}
      {v}
      {suffix}
    </span>
  );
}

export function Button({
  href,
  children,
  variant = "gold",
  onClick,
  type,
}: {
  href?: string;
  children: ReactNode;
  variant?: "gold" | "ghost";
  onClick?: () => void;
  type?: "submit" | "button";
}) {
  const cls = `btn btn-${variant}`;
  const inner = (
    <>
      <span>{children}</span>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
  if (href)
    return (
      <a className={cls} href={href} onClick={onClick}>
        {inner}
      </a>
    );
  return (
    <button className={cls} type={type ?? "button"} onClick={onClick}>
      {inner}
    </button>
  );
}
