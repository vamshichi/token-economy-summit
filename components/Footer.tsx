import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Image src="/logo.png" alt="The Token Economy Summit" width={320} height={128} className="footer-logo" />
          <p className="footer-tag"><em>Value, Reimagined: Payments, Tokenization &amp; the Digital Asset Economy.</em></p>
          <p className="footer-p">Connecting the institutions, innovators and decision-makers shaping the next generation of financial infrastructure.</p>
        </div>
        <div>
          <h5>Explore Editions</h5>
          <ul>
            <li><a href="#india">India — Mumbai</a></li>
            <li><a href="#editions">UAE — Dubai</a></li>
            <li><a href="#editions">Singapore</a></li>
          </ul>
        </div>
        <div>
          <h5>Quick Links</h5>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#programme">Programme</a></li>
            <li><a href="#speakers">Speakers</a></li>
            <li><a href="#sponsors">Sponsors</a></li>
            <li><a href="#expo">Expo</a></li>
            <li><a href="#register">Register</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <em>The future of value is being built now. Be part of it.</em>
        <span>© 2027 THE TOKEN ECONOMY SUMMIT &amp; EXPO. All rights reserved.</span>
      </div>
    </footer>
  );
}
