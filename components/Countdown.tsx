"use client";

import { useEffect, useState } from "react";
import { EVENT_DATE_ISO } from "@/lib/content";

const pad = (n: number) => String(n).padStart(2, "0");

export default function Countdown() {
  const [t, setT] = useState<number | null>(null);
  useEffect(() => {
    const target = new Date(EVENT_DATE_ISO).getTime();
    const tick = () => setT(Math.max(0, target - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  const s = t === null ? null : Math.floor(t / 1000);
  const parts = [
    ["Days", s === null ? "--" : String(Math.floor(s / 86400))],
    ["Hours", s === null ? "--" : pad(Math.floor((s % 86400) / 3600))],
    ["Minutes", s === null ? "--" : pad(Math.floor((s % 3600) / 60))],
    ["Seconds", s === null ? "--" : pad(s % 60)],
  ];
  return (
    <div className="countdown" role="timer" aria-label="Time until the India edition">
      {parts.map(([l, v]) => (
        <div key={l} className="cd-cell">
          <strong>{v}</strong>
          <span>{l}</span>
        </div>
      ))}
    </div>
  );
}
