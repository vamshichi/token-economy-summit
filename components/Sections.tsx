"use client";

import { motion } from "framer-motion";
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
  return (
    <section id="future" className="section">
      <div className="container narrow">
        <SectionHead
          eyebrow="The Shift"
          title={<>The future isn&apos;t just digital.<br />It&apos;s tokenized.</>}
        />
        <Reveal><p className="big-p">Money is evolving. Assets are transforming. Payments are becoming more connected. Financial infrastructure is being reimagined.</p></Reveal>
        <Reveal delay={0.1}><p className="pull">The question is no longer whether the token economy will evolve—but <em>who will shape it.</em></p></Reveal>
        <Reveal delay={0.1}>
          <p className="body-p">
            <strong>The Token Economy Summit &amp; Expo 2027</strong> brings together banking leaders, payment networks, fintech
            innovators, institutional investors and technology pioneers to explore the opportunities, challenges and commercial
            realities of the emerging token economy. From real-world asset tokenization to cross-border payments, programmable
            money and institutional digital-asset infrastructure, this is where emerging possibilities meet real-world business.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="four-more">
            {["Less speculation.", "More substance.", "More connections.", "More opportunity."].map((t, i) => (
              <motion.span key={t} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 * i }}>
                {t}
              </motion.span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────── Editions ───────── */
export function Editions() {
  return (
    <section id="editions" className="section">
      <div className="container">
        <SectionHead
          eyebrow="Global Editions"
          title={<>Three editions.<br />One global vision.</>}
          lead="The future of value has no borders. Explore our international editions and connect with the financial ecosystems shaping tomorrow."
        />
        <Stagger className="editions">
          {editions.map((e) => (
            <Item key={e.id}>
              <Tilt className={`edition ${e.featured ? "featured" : ""}`}>
                <span className="edition-label">{e.label}</span>
                <h3 className="edition-city gold-text">{e.city}</h3>
                <div className="edition-date">{e.date}<em> | </em>{e.place}</div>
                <p className="edition-head">{e.headline}</p>
                <p className="edition-body">{e.body}</p>
                <a href={e.href} className="text-link">{e.cta} <span>→</span></a>
                
              </Tilt>
            </Item>
          ))}
        </Stagger>
        <Reveal><p className="closing">Three financial ecosystems. One transformative conversation.</p></Reveal>
        <Reveal delay={0.1}>
          <p className="body-p center-p">
            The movement of value is global. The opportunities are regional. Each edition offers a distinct regional perspective
            while sharing a common focus: meaningful connections, commercially relevant innovation and the future of value.
          </p>
        </Reveal>
      </div>
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
