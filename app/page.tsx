import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
// import {
//   Contact,
// } from "@/components/Sections";
import {Future} from "@/components/Future";
import { Editions } from "@/components/Editions";
import { WhyNow } from "@/components/WhyNow";
import { About } from "@/components/About";
import { India } from "@/components/India";
import { Stats } from "@/components/Stats";
import { Programme } from "@/components/Programme";
import { Audience } from "@/components/Audience";
import { Sponsors } from "@/components/Sponsors";
import { Expo } from "@/components/Expo";
import { Speakers } from "@/components/Speakers";
import { Register } from "@/components/Register";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Future />
        <Editions />
        <WhyNow />
        <About />
        <India />
        <Stats />
        <Programme />
        <Audience />
        <Sponsors />
        <Expo />
        <Speakers />
        <Register />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
