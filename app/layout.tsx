import type { Metadata, Viewport } from "next";
import "@fontsource/cinzel/600.css";
import "@fontsource/cinzel/800.css";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Token Economy Summit & Expo 2027 — Value, Reimagined",
  description:
    "Payments. Tokenization. Digital Assets. The Future of Finance. Mumbai 24–25 Feb 2027 · Dubai 7–8 Apr 2027 · Singapore 24–25 Jun 2027.",
  openGraph: {
    title: "The Token Economy Summit & Expo 2027",
    description: "Value, Reimagined. One ecosystem. Three global destinations.",
    images: ["/logo.png"],
  },
};
export const viewport: Viewport = { themeColor: "#000000" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
