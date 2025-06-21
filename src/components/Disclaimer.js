import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import logo from "../assets/Logo-white.png";
import './Disclaimer.css';

const Disclaimer = () => {
  return (
    <>
      <Header logo={logo} />
      <div className="disclaimer-page">
        <div className="disclaimer-container">
          <div className="disclaimer-content">
            <section className="disclaimer-header">
              <h1>⚠️ Ansvarsfraskrivelse</h1>
              <p className="update-date">Sist oppdatert: 27. mars 2025</p>
              <p className="intro-text">
                dinosfortune AS tilbyr denne nettsiden som en gratis sosial underholdningsplattform.
              </p>
            </section>

            <section className="disclaimer-section gaming-section">
              <h2>🎮 Kun underholdning</h2>
              <ul>
                <li><span>💸</span> Ingen spill med ekte penger</li>
                <li><span>❌</span> Ingen innsats, ingen pengegevinster</li>
                <li><span>🆓</span> Alle spill er helt gratis</li>
                <li><span>🎯</span> Spill kun for moro skyld</li>
              </ul>
            </section>

            <section className="disclaimer-section legal-section">
              <h2>🧑‍⚖️ Juridisk informasjon</h2>
              <p>Vi kan ikke garantere:</p>
              <ul>
                <li>At spillene er feilfrie eller alltid tilgjengelige</li>
                <li>At spillopplevelsen gir gevinst i andre pengespill</li>
                <li>At all informasjon er fullstendig eller oppdatert</li>
              </ul>
              <p className="emphasis">Bruk av plattformen skjer på eget ansvar.</p>
            </section>

            <section className="disclaimer-section responsible-section">
              <h2>🧠 Spill ansvarlig</h2>
              <p>
                Selv om det ikke er pengespill, anbefaler vi alle å spille med måte og følge prinsippene for ansvarlig spilling.
              </p>
              <p>
                Trenger du hjelp? Besøk{' '}
                <a href="http://www.hjelpelinjen.no" target="_blank" rel="noopener noreferrer">
                  www.hjelpelinjen.no
                </a>
              </p>
            </section>

            <section className="disclaimer-section contact-section">
              <h2>📬 Kontakt oss</h2>
              <p>Har du spørsmål om denne ansvarsfraskrivelsen?</p>
              <div className="contact-info">
                <p className="company-name">dinosfortune AS</p>
                <p>
                  <span>📧</span>{' '}
                  <a href="mailto:kontakt@dinosfortune.no">kontakt@dinosfortune.no</a>
                </p>
                <p>
                  <span>📍</span> Dronning Eufemias gate 16, 0191 Oslo, Norge
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Disclaimer;
