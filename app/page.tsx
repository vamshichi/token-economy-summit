import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import {
  About, Audience, Contact, Editions, Expo, Future, India, Programme, Register, Speakers, Sponsors, Stats, WhyNow,
} from "@/components/Sections";

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
