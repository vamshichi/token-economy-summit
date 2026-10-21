"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, type FormEvent } from "react";
import { interestOptions } from "@/lib/content";
import { Button } from "./ui";

export default function ContactForm() {
  const [interest, setInterest] = useState("");
  const [sent, setSent] = useState(false);

  // Pre-select interest when a registration card is clicked.
  useEffect(() => {
    const h = (e: Event) => setInterest((e as CustomEvent<string>).detail);
    window.addEventListener("tes:interest", h);
    return () => window.removeEventListener("tes:interest", h);
  }, []);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: wire to your backend / email service / CRM.
    setSent(true);
  };

  return (
    <div className="form-card">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div key="ok" className="form-ok" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
              <motion.circle cx="32" cy="32" r="29" stroke="url(#g)" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.9 }} />
              <motion.path d="M19 33l9 9 17-19" stroke="url(#g)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.7, delay: 0.7 }} />
              <defs>
                <linearGradient id="g" x1="0" y1="0" x2="64" y2="64">
                  <stop stopColor="#f6dc8c" />
                  <stop offset="1" stopColor="#b8861f" />
                </linearGradient>
              </defs>
            </svg>
            <h3>Thank you.</h3>
            <p>Our team will be in touch shortly.</p>
          </motion.div>
        ) : (
          <motion.form key="form" onSubmit={submit} exit={{ opacity: 0 }}>
            <div className="grid-2">
              <label>
                <span>Full Name</span>
                <input name="name" required autoComplete="name" />
              </label>
              <label>
                <span>Job Title</span>
                <input name="title" autoComplete="organization-title" />
              </label>
              <label>
                <span>Company</span>
                <input name="company" autoComplete="organization" />
              </label>
              <label>
                <span>Business Email</span>
                <input name="email" type="email" required autoComplete="email" />
              </label>
              <label>
                <span>Country</span>
                <input name="country" autoComplete="country-name" />
              </label>
              <label>
                <span>Area of Interest</span>
                <select name="interest" value={interest} onChange={(e) => setInterest(e.target.value)} required>
                  <option value="" disabled>
                    Select…
                  </option>
                  {interestOptions.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </label>
            </div>
            <label>
              <span>Message</span>
              <textarea name="message" rows={4} />
            </label>
            <Button type="submit">Contact the Team</Button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
