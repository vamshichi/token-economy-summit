"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  audience, brandOutcomes, differentiators, editions, enquiries, expoZones, format, indiaWhy, partners,
  registerOptions, speakerExplore, speakerTypes, themes, whoYouMeet, whyAttend, whyNow,
} from "@/lib/content";
import { Button, Counter, Item, Reveal, SectionHead, Spot, Stagger, Tilt } from "./ui";
import ContactForm from "./ContactForm";

const chooseInterest = (interest: string) => {
  window.dispatchEvent(new CustomEvent("tes:interest", { detail: interest }));
};

/* ───────── Marquee ───────── */
export function Marquee() {
  const items = themes.map((t) => t.kicker);
  const row = [...items, ...items];
  return (
    <div className="marquee" aria-hidden>
      <div className="marquee-track">
        {row.map((t, i) => (
          <span key={i}>
            {t} <b>◆</b>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ───────── Future is tokenized ───────── */



export function Future() {
  const reducedMotion = useReducedMotion() ?? false;

  const reveal = (delay = 0) => ({
    initial: { opacity: 0, y: reducedMotion ? 0 : 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: {
      duration: reducedMotion ? 0 : 0.7,
      delay: reducedMotion ? 0 : delay,
      // ease,
    },
  });

  const statements = [
    "Less speculation.",
    "More substance.",
    "More connections.",
    "More opportunity.",
  ];

  return (
    <section
      id="future"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "clamp(80px, 10vw, 140px) 0",
        background: "#F7F5F0",
        color: "#101A27",
      }}
    >
      <div
        style={{
          width: "min(1240px, calc(100% - 48px))",
          margin: "0 auto",
        }}
      >
        {/* Section heading */}
        <motion.div {...reveal()}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 24,
              color: "#92713C",
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
            }}
          >
            <span
              style={{
                width: 34,
                height: 1,
                background: "#B99960",
              }}
            />
            The Shift
          </div>

          <h2
            style={{
              maxWidth: 850,
              margin: "0 0 64px",
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: "clamp(42px, 6vw, 76px)",
              fontWeight: 400,
              letterSpacing: "-0.045em",
              lineHeight: 1.08,
            }}
          >
            The future isn’t just digital.
            <br />
            <span style={{ color: "#A17B40" }}>
              It’s tokenized.
            </span>
          </h2>
        </motion.div>

        {/* Editorial two-column layout */}
        <div
          className="future-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 0.88fr",
            alignItems: "start",
            gap: "clamp(36px, 7vw, 100px)",
          }}
        >
          {/* Left: story */}
          <div>
            <motion.p
              {...reveal(0.05)}
              style={{
                margin: "0 0 30px",
                color: "#354253",
                fontSize: "clamp(19px, 2.1vw, 25px)",
                lineHeight: 1.75,
                fontWeight: 400,
              }}
            >
              Money is evolving. Assets are transforming. Payments
              are becoming more connected. Financial infrastructure
              is being reimagined.
            </motion.p>

            <motion.div
              {...reveal(0.12)}
              style={{
                margin: "0 0 32px",
                padding: "6px 0 6px 24px",
                borderLeft: "2px solid #B99960",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: "clamp(24px, 3vw, 35px)",
                  fontWeight: 400,
                  lineHeight: 1.45,
                  color: "#172638",
                }}
              >
                The question is no longer whether the token economy
                will evolve—but{" "}
                <em style={{ color: "#A17B40" }}>
                  who will shape it.
                </em>
              </p>
            </motion.div>

            <motion.p
              {...reveal(0.19)}
              style={{
                margin: 0,
                color: "#596474",
                fontSize: 15,
                lineHeight: 1.95,
              }}
            >
              <strong style={{ color: "#172638" }}>
                The Token Economy Summit &amp; Expo 2027
              </strong>{" "}
              brings together banking leaders, payment networks,
              fintech innovators, institutional investors and
              technology pioneers to explore the opportunities,
              challenges and commercial realities of the emerging
              token economy. From real-world asset tokenization to
              cross-border payments, programmable money and
              institutional digital-asset infrastructure, this is
              where emerging possibilities meet real-world business.
            </motion.p>
          </div>

          {/* Right: financial visual */}
          <motion.div
            {...reveal(0.15)}
            style={{
              position: "relative",
              minWidth: 0,
            }}
          >
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                aspectRatio: "4 / 5",
                background: "#101C2A",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=85"
                alt="Abstract digital network representing tokenized financial infrastructure"
                loading="lazy"
                style={{
                  display: "block",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                  position: "absolute",
                  inset: 0,
                }}
              />

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(8,18,31,0.05) 25%, rgba(8,18,31,0.92) 100%)",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  left: 25,
                  right: 25,
                  bottom: 28,
                  color: "#F7F5F0",
                }}
              >
                <div
                  style={{
                    width: 35,
                    height: 1,
                    marginBottom: 17,
                    background: "#D9B574",
                  }}
                />

                <p
                  style={{
                    margin: "0 0 10px",
                    color: "#D9B574",
                    fontSize: 10,
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                  }}
                >
                  THE NEXT FINANCIAL ERA
                </p>

                <h3
                  style={{
                    maxWidth: 340,
                    margin: 0,
                    fontFamily: 'Georgia, "Times New Roman", serif',
                    fontSize: "clamp(27px, 3vw, 38px)",
                    lineHeight: 1.2,
                    fontWeight: 400,
                  }}
                >
                  Turning digital value into real-world possibility.
                </h3>
              </div>
            </div>

            {/* Understated image caption */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: 12,
                paddingTop: 14,
                color: "#7C8490",
                fontSize: 9,
                letterSpacing: "0.12em",
                lineHeight: 1.7,
              }}
            >
              <span>FINANCIAL INFRASTRUCTURE</span>
              <span>01 / THE SHIFT</span>
            </div>
          </motion.div>
        </div>

        {/* Four closing statements */}
        <motion.div
          {...reveal(0.12)}
          className="future-statements"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            marginTop: 75,
            borderTop: "1px solid #DCD7CC",
            borderBottom: "1px solid #DCD7CC",
          }}
        >
          {statements.map((statement, index) => (
            <motion.div
              key={statement}
              {...reveal(index * 0.08)}
              style={{
                padding: "25px 18px",
                borderRight:
                  index !== statements.length - 1
                    ? "1px solid #DCD7CC"
                    : "none",
                textAlign: "center",
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: "clamp(16px, 2vw, 22px)",
                lineHeight: 1.5,
                color: index === 1 || index === 3
                  ? "#98733D"
                  : "#172638",
              }}
            >
              {statement}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Responsive styles only; all design values remain inline */}
      <style>{`
        @media (max-width: 760px) {
          #future .future-grid {
            grid-template-columns: minmax(0, 1fr) !important;
            gap: 38px !important;
          }

          #future .future-statements {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            margin-top: 48px !important;
          }

          #future .future-statements > div {
            border-bottom: 1px solid #DCD7CC;
            padding: 20px 10px !important;
          }

          #future .future-statements > div:nth-child(2) {
            border-right: none !important;
          }

          #future .future-statements > div:nth-child(3),
          #future .future-statements > div:nth-child(4) {
            border-bottom: none;
          }

          #future img {
            object-position: center 45%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          #future * {
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </section>
  );
}


/* ───────── Editions ───────── */
export function Editions() {
  const reducedMotion = useReducedMotion() ?? false;

  const fade = (delay = 0) => ({
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
      duration: reducedMotion ? 0 : 0.7,
      delay: reducedMotion ? 0 : delay,
      // ease,
    },
  });

  const cityImages: Record<string, string> = {
    // Replace these keys with the exact values in editions[].city.
    Mumbai:
      "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1000&q=85",
    Singapore:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1000&q=85",
    Dubai:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=85",
  };

  return (
    <section
      id="editions"
      style={{
        padding: "clamp(80px, 9vw, 130px) 0",
        background: "#F7F5F0",
        color: "#142033",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "min(1240px, calc(100% - 48px))",
          margin: "0 auto",
        }}
      >
        {/* Section heading */}
        <motion.div {...fade()}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 22,
              color: "#96733D",
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
            }}
          >
            <span
              style={{
                width: 34,
                height: 1,
                background: "#B99A62",
              }}
            />
            Global Editions
          </div>

          <h2
            style={{
              margin: "0 0 22px",
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: "clamp(42px, 6vw, 76px)",
              fontWeight: 400,
              lineHeight: 1.08,
              letterSpacing: "-0.045em",
            }}
          >
            Three editions.
            <br />
            <span style={{ color: "#A17B40" }}>
              One global vision.
            </span>
          </h2>

          <p
            style={{
              maxWidth: 630,
              margin: "0 0 55px",
              color: "#647080",
              fontSize: 16,
              lineHeight: 1.85,
            }}
          >
            The future of value has no borders. Explore our
            international editions and connect with the financial
            ecosystems shaping tomorrow.
          </p>
        </motion.div>

        {/* Edition cards */}
        <div
          className="edition-grid"
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(3, minmax(0, 1fr))",
            gap: 22,
            alignItems: "stretch",
          }}
        >
          {editions.map((e, index) => {
            const image =
              cityImages[e.city] ??
              cityImages[e.city.trim()] ??
              "";

            return (
              <motion.article
                key={e.id}
                {...fade(index * 0.12)}
                whileHover={
                  reducedMotion
                    ? undefined
                    : { y: -5 }
                }
                transition={{
                  duration: 0.3,
                  // ease,
                }}
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  minWidth: 0,
                  overflow: "hidden",
                  background: e.featured
                    ? "#101D2C"
                    : "#FFFFFF",
                  color: e.featured
                    ? "#F7F5F0"
                    : "#142033",
                  border: e.featured
                    ? "1px solid #A98A51"
                    : "1px solid #E6E0D5",
                  boxShadow: e.featured
                    ? "0 16px 44px rgba(16,29,44,0.12)"
                    : "0 8px 28px rgba(16,29,44,0.035)",
                }}
              >
                {/* City photography */}
                <div
                  style={{
                    position: "relative",
                    height: 210,
                    overflow: "hidden",
                    background: "#152234",
                  }}
                >
                  {image && (
                    <img
                      src={image}
                      alt={`${e.city} city skyline`}
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "block",
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    />
                  )}

                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, rgba(7,17,29,0.05) 15%, rgba(7,17,29,0.72) 100%)",
                    }}
                  />

                  {/* Edition label */}
                  <span
                    style={{
                      position: "absolute",
                      top: 18,
                      left: 18,
                      padding: "8px 11px",
                      background: e.featured
                        ? "#D9B574"
                        : "rgba(7,17,29,0.82)",
                      color: e.featured
                        ? "#101D2C"
                        : "#F7F5F0",
                      fontSize: 9,
                      fontWeight: 600,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                    }}
                  >
                    {e.label}
                  </span>

                  {/* City name */}
                  <h3
                    style={{
                      position: "absolute",
                      left: 22,
                      right: 18,
                      bottom: 17,
                      margin: 0,
                      color: "#F7F5F0",
                      fontFamily:
                        'Georgia, "Times New Roman", serif',
                      fontSize: "clamp(30px, 3vw, 42px)",
                      lineHeight: 1.05,
                      fontWeight: 400,
                      letterSpacing: "-0.035em",
                    }}
                  >
                    {e.city}
                  </h3>
                </div>

                {/* Card content */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    flex: 1,
                    padding: "25px 24px 27px",
                  }}
                >
                  <div
                    style={{
                      marginBottom: 20,
                      color: e.featured
                        ? "#D9B574"
                        : "#96733D",
                      fontSize: 11,
                      fontWeight: 600,
                      lineHeight: 1.8,
                      letterSpacing: "0.035em",
                    }}
                  >
                    {e.date}
                    <span
                      style={{
                        margin: "0 8px",
                        opacity: 0.6,
                      }}
                    >
                      |
                    </span>
                    {e.place}
                  </div>

                  <h4
                    style={{
                      margin: "0 0 13px",
                      fontFamily:
                        'Georgia, "Times New Roman", serif',
                      fontSize: 23,
                      fontWeight: 400,
                      lineHeight: 1.4,
                      color: e.featured
                        ? "#F7F5F0"
                        : "#142033",
                    }}
                  >
                    {e.headline}
                  </h4>

                  <p
                    style={{
                      margin: "0 0 28px",
                      color: e.featured
                        ? "#C0C8D3"
                        : "#687383",
                      fontSize: 14,
                      lineHeight: 1.9,
                    }}
                  >
                    {e.body}
                  </p>

                  <a
                    href={e.href}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 12,
                      marginTop: "auto",
                      paddingBottom: 5,
                      borderBottom: `1px solid ${
                        e.featured ? "#D9B574" : "#B99A62"
                      }`,
                      color: e.featured
                        ? "#D9B574"
                        : "#8D6B35",
                      textDecoration: "none",
                      fontSize: 12,
                      fontWeight: 600,
                      letterSpacing: "0.025em",
                    }}
                  >
                    {e.cta}
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Closing statement */}
        <motion.div
          {...fade(0.15)}
          style={{
            marginTop: 65,
            paddingTop: 35,
            borderTop: "1px solid #DDD7CB",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              margin: "0 0 18px",
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: "clamp(25px, 3.5vw, 38px)",
              fontWeight: 400,
              lineHeight: 1.35,
              color: "#142033",
            }}
          >
            Three financial ecosystems.
            <br />
            <span style={{ color: "#A17B40" }}>
              One transformative conversation.
            </span>
          </h3>

          <p
            style={{
              maxWidth: 780,
              margin: "0 auto",
              color: "#687383",
              fontSize: 14,
              lineHeight: 1.95,
            }}
          >
            The movement of value is global. The opportunities are
            regional. Each edition offers a distinct regional
            perspective while sharing a common focus: meaningful
            connections, commercially relevant innovation and the
            future of value.
          </p>
        </motion.div>
      </div>

      {/* Responsive layout */}
      <style>{`
        @media (max-width: 900px) {
          #editions .edition-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }

        @media (max-width: 600px) {
          #editions .edition-grid {
            grid-template-columns: minmax(0, 1fr) !important;
            gap: 20px !important;
          }

          #editions .edition-grid article > div:first-child {
            height: 225px !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          #editions article {
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}

/* ───────── Why now ───────── */
export function WhyNow() {
  return (
    <section className="section alt">
      <div className="container">
        <SectionHead eyebrow="Why Now" title="Why the Token Economy. Why Now?" />
        <Stagger className="cards five">
          {whyNow.map((w, i) => (
            <Item key={w.title}>
              <Spot className="card tall">
                <span className="num-ghost">{String(i + 1).padStart(2, "0")}</span>
                <h3>{w.title}</h3>
                <p>{w.body}</p>
              </Spot>
            </Item>
          ))}
        </Stagger>
        <Reveal className="center-btn"><Button href="#programme" variant="ghost">Explore the Key Themes</Button></Reveal>
      </div>
    </section>
  );
}

/* ───────── About ───────── */
export function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHead
          eyebrow="About the Summit"
          title="Redefining how the world moves value."
          lead="A business-focused platform exploring the convergence of digital payments, asset tokenization, programmable finance and institutional digital-asset infrastructure."
        />
        <div className="about-grid">
          <Reveal>
            <Spot className="card mv"><h4>Our Mission</h4><p>To accelerate meaningful conversations, strategic partnerships and practical adoption across the evolving token economy.</p></Spot>
          </Reveal>
          <Reveal delay={0.1}>
            <Spot className="card mv"><h4>Our Vision</h4><p>To become a leading international meeting platform for the institutions and innovators shaping the next generation of financial infrastructure.</p></Spot>
          </Reveal>
        </div>
        <Reveal>
          <h3 className="sub-h gold-text">Finance First. Technology Forward. Business Focused.</h3>
          <p className="body-p center-p">We bring together the financial institutions, technology providers, investors, issuers and enterprise decision-makers working to transform how value is created, represented, transferred and managed. We go beyond cryptocurrency conversations to examine the broader transformation of financial systems.</p>
        </Reveal>
        <Stagger className="bridges">
          {differentiators.map(([a, b]) => (
            <Item key={a}>
              <div className="bridge">
                <span>{a}</span>
                <i><b /></i>
                <span>{b}</span>
              </div>
            </Item>
          ))}
        </Stagger>
        <Reveal><p className="closing">The future of finance will be shaped not by technology alone, but by the partnerships, infrastructure and trust that make adoption possible.</p></Reveal>
      </div>
    </section>
  );
}

/* ───────── India ───────── */
export function India() {
  return (
    <section id="india" className="section india">
      <div className="container">
        <SectionHead
          eyebrow="India Edition — Mumbai"
          title="India's financial future. Reimagined."
          lead="India has built an extraordinary digital-payments foundation. The next opportunity is to explore how payments, tokenization and programmable financial infrastructure can create new possibilities for institutions and businesses."
        />
        <div className="india-grid">
          <Reveal>
            <h3 className="sub-h left gold-text">Why India. Why Now?</h3>
            <ul className="ticks">
              {indiaWhy.map((t) => (<li key={t}>{t}</li>))}
            </ul>
          </Reveal>
          <Reveal delay={0.12}>
            <Spot className="glance">
              <h4>The India Edition at a Glance</h4>
              <dl>
                <div><dt>Dates</dt><dd>24–25 February 2027</dd></div>
                <div><dt>Location</dt><dd>Mumbai, India</dd></div>
                <div><dt>Paid delegate target</dt><dd><Counter to={250} />–<Counter to={300} /></dd></div>
                <div><dt>Expo visitor target</dt><dd><Counter to={500} />–<Counter to={600} /></dd></div>
              </dl>
              <small>Attendance figures are event targets, not confirmed registrations.</small>
            </Spot>
          </Reveal>
        </div>
        <Reveal>
          <p className="body-p center-p">
            <strong>What will you gain?</strong> Discover new market opportunities, learn from industry practitioners, evaluate
            solutions, meet potential partners and identify practical next steps for your organisation.
          </p>
          <p className="closing">India is building the digital-finance foundation. Join the conversation shaping what comes next.</p>
          <div className="cta-row center">
            <Button href="#register">Register for India</Button>
            <Button href="#sponsors" variant="ghost">Explore Sponsorship</Button>
            <Button href="#expo" variant="ghost">Exhibit at the Summit</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────── Stats ───────── */
export function Stats() {
  const stats = [
    { to: 2, label: "Days" },
    { to: 3, label: "Global Editions" },
    { to: 8, label: "Core Themes" },
    { to: 5, label: "Expo Innovation Zones" },
  ];
  return (
    <section className="stats">
      <div className="container stats-row">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.1}>
            <div className="stat"><strong className="gold-text"><Counter to={s.to} /></strong><span>{s.label}</span></div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ───────── Programme ───────── */
export function Programme() {
  return (
    <section id="programme" className="section alt">
      <div className="container">
        <SectionHead
          eyebrow="Key Themes & Conference Programme"
          title="The conversations that will shape tomorrow."
          lead="The token economy is evolving across payments, assets, settlement, security and financial infrastructure. Our programme focuses on the questions that matter to institutions today."
        />
        <Stagger className="themes">
          {themes.map((t) => (
            <Item key={t.n}>
              <Spot className="theme">
                <span className="theme-n">{t.n}</span>
                <span className="theme-k">{t.kicker}</span>
                <h3>{t.title}</h3>
                <p>{t.body}</p>
              </Spot>
            </Item>
          ))}
        </Stagger>
        <Reveal>
          <div className="three-q">
            {["What is changing?", "What is commercially viable?", "What happens next?"].map((q, i) => (
              <div key={q}><b>{i + 1}</b>{q}</div>
            ))}
          </div>
          <p className="closing">Every conversation should answer three questions.</p>
        </Reveal>

        <div className="format">
          <Reveal>
            <h3 className="sub-h gold-text">Two days. Big ideas. Real opportunities.</h3>
            <p className="body-p center-p">Explore the technologies, business models and partnerships transforming financial services.</p>
          </Reveal>
          <Stagger className="format-grid">
            {format.map((f, i) => (
              <Item key={f}><div className="format-item"><span>{String(i + 1).padStart(2, "0")}</span>{f}</div></Item>
            ))}
          </Stagger>
          <Reveal><p className="closing">Come to understand the future. Leave better connected to build it.</p></Reveal>
        </div>
      </div>
    </section>
  );
}

/* ───────── Audience ───────── */
export function Audience() {
  return (
    <section id="audience" className="section">
      <div className="container">
        <SectionHead
          eyebrow="Who Will You Meet?"
          title="Your industry. Your decision-makers. Your next opportunity."
          lead="The people building, funding, regulating and adopting the next generation of financial infrastructure."
        />
        <Stagger className="chips">
          {whoYouMeet.map((w) => (<Item key={w}><span className="chip">{w}</span></Item>))}
        </Stagger>
        <Reveal><p className="closing">Your next customer. Your next partner. Your next opportunity.</p></Reveal>

        <h3 className="sub-h gold-text" style={{ marginTop: "5rem" }}>Who should attend?</h3>
        <Stagger className="cards flexrow">
          {audience.map((a) => (
            <Item key={a.title}>
              <Spot className="card"><h3>{a.title}</h3><p>{a.body}</p></Spot>
            </Item>
          ))}
        </Stagger>

        <div className="why-attend">
          <Reveal><h3 className="sub-h left gold-text">Why attend?</h3></Reveal>
          <Stagger className="why-list">
            {whyAttend.map((w) => (<Item key={w}><div className="why-item">{w}</div></Item>))}
          </Stagger>
        </div>
        <Reveal>
          <p className="closing">Don&apos;t just watch the market evolve. Help shape what comes next.</p>
          <div className="cta-row center"><Button href="#register">Register as a Delegate</Button></div>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────── Sponsors ───────── */
export function Sponsors() {
  return (
    <section id="sponsors" className="section alt">
      <div className="container">
        <SectionHead
          eyebrow="Sponsorship & Partnerships"
          title="Put your brand at the centre of financial innovation."
          lead="Meet the market. Demonstrate your capabilities. Build what comes next."
        />
        <Reveal>
          <p className="body-p center-p">
            The Token Economy Summit &amp; Expo connects solution providers with the institutions and enterprises exploring the
            next generation of financial infrastructure. If your business serves banks, fintechs, payment networks, capital
            markets or digital-asset innovators, this is an opportunity to put your solutions in front of a relevant audience.
          </p>
        </Reveal>
        <h3 className="sub-h gold-text">What can your brand achieve?</h3>
        <Stagger className="cards three">
          {brandOutcomes.map((b) => (
            <Item key={b.title}><Spot className="card"><h3>{b.title}</h3><p>{b.body}</p></Spot></Item>
          ))}
        </Stagger>

        <h3 className="sub-h gold-text" style={{ marginTop: "5rem" }}>Who should partner with us?</h3>
        <Stagger className="chips">
          {partners.map((p) => (<Item key={p}><span className="chip">{p}</span></Item>))}
        </Stagger>

        <Reveal>
          <div className="package">
            <h4>Sponsorship Opportunities</h4>
            <p>Explore packages tailored to your commercial objectives, including speaking opportunities, exhibition presence, branding, executive networking and business-development programmes.</p>
            <small>Deliverables, meeting arrangements and speaker opportunities will be defined in the sponsorship agreement and remain subject to confirmation and feasibility.</small>
          </div>
          <p className="closing">Don&apos;t just sponsor the conversation. Help shape the future of finance.</p>
          <div className="cta-row center">
            <Button href="#contact" onClick={() => chooseInterest("Sponsorship")}>Request the Sponsorship Deck</Button>
            <Button href="#contact" variant="ghost" onClick={() => chooseInterest("Sponsorship")}>Discuss Partnership Opportunities</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────── Expo ───────── */
export function Expo() {
  return (
    <section id="expo" className="section">
      <div className="container">
        <SectionHead
          eyebrow="Expo & Innovation Showcase"
          title="See the technology. Meet the builders. Discover what's possible."
          lead="The Token Economy Expo brings emerging financial infrastructure to life. Explore the solutions helping institutions move money, represent assets, protect transactions and connect financial systems."
        />
        <h3 className="sub-h gold-text">Discover the Innovation Zones</h3>
        <Stagger className="zones">
          {expoZones.map((z, i) => (
            <Item key={z.title}>
              <Spot className="zone">
                <span className="zone-n">{String(i + 1).padStart(2, "0")}</span>
                <div><h3>{z.title}</h3><p>{z.body}</p></div>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Spot>
            </Item>
          ))}
        </Stagger>
        <div className="two-col">
          <Reveal><Spot className="card"><h4>For Exhibitors</h4><p>Demonstrate your products. Engage with potential customers. Build relationships with financial institutions and technology buyers.</p></Spot></Reveal>
          <Reveal delay={0.1}><Spot className="card"><h4>For Visitors</h4><p>Discover solutions. Meet experts. Compare capabilities. Identify potential partners.</p></Spot></Reveal>
        </div>
        <Reveal>
          <p className="closing">The future of finance isn&apos;t just discussed here. It&apos;s demonstrated.</p>
          <div className="cta-row center">
            <Button href="#contact" onClick={() => chooseInterest("Exhibition")}>Book Exhibition Space</Button>
            <Button href="#register" variant="ghost">Register as an Expo Visitor</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────── Speakers ───────── */
export function Speakers() {
  return (
    <section id="speakers" className="section alt">
      <div className="container">
        <SectionHead
          eyebrow="Speakers & Thought Leadership"
          title="The minds moving financial innovation forward."
          lead="The token economy demands conversations that go beyond predictions. We seek practitioners, institutional leaders, technology pioneers and industry experts who can share real insights into implementation, adoption, risk and opportunity."
        />
        <div className="two-col wide">
          <Reveal>
            <h3 className="sub-h left gold-text">Who should speak?</h3>
            <ul className="ticks">{speakerTypes.map((s) => (<li key={s}>{s}</li>))}</ul>
          </Reveal>
          <Reveal delay={0.1}>
            <h3 className="sub-h left gold-text">What we want to explore</h3>
            <div className="chips left">
              {speakerExplore.map((s) => (<span className="chip" key={s}>{s}</span>))}
            </div>
          </Reveal>
        </div>
        <Reveal>
          <p className="closing">Have a perspective that can move the industry forward?</p>
          <div className="cta-row center">
            <Button href="#contact" onClick={() => chooseInterest("Speaking Opportunity")}>Express Speaker Interest</Button>
          </div>
          <p className="fine">Speaker participation is subject to review, invitation and confirmation.</p>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────── Register ───────── */
export function Register() {
  return (
    <section id="register" className="section register">
      <div className="container">
        <SectionHead
          eyebrow="Registration"
          title="Your next opportunity starts here."
          lead="Join the institutions, innovators and decision-makers exploring the next generation of financial infrastructure. Choose how you want to participate."
        />
        <Stagger className="cards four">
          {registerOptions.map((r) => (
            <Item key={r.title}>
              <Tilt className="card reg">
                <h3>{r.title}</h3>
                <p>{r.body}</p>
                <a href="#contact" className="text-link" onClick={() => chooseInterest(r.interest)}>{r.cta} <span>→</span></a>
              </Tilt>
            </Item>
          ))}
        </Stagger>
        <Reveal>
          <div className="india-details">
            <small>India Edition Details</small>
            <strong className="gold-text">The Token Economy Summit &amp; Expo 2027</strong>
            <span>24–25 February 2027 · Mumbai, India</span>
          </div>
          <p className="closing">The future is moving. Make sure you&apos;re part of the conversation.</p>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────── Contact ───────── */
export function Contact() {
  return (
    <section id="contact" className="section alt">
      <div className="container">
        <SectionHead
          eyebrow="Contact Us"
          title="Let's build what's next."
          lead="Have a question? Interested in sponsorship? Looking to exhibit, speak, attend or explore a partnership? Our team would be happy to connect."
        />
        <div className="contact-grid">
          <Stagger className="enq">
            {enquiries.map((e) => (
              <Item key={e.title}><div className="enq-item"><h4>{e.title}</h4><p>{e.body}</p></div></Item>
            ))}
          </Stagger>
          <Reveal delay={0.1}><ContactForm /></Reveal>
        </div>
      </div>
    </section>
  );
}
