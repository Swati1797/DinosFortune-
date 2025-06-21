import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import logo from "../assets/Logo-white.png";
import './About.css';

const About = () => {
  return (
    <>
      <Header logo={logo} />
      <div className="about-page">
        <div className="about-container">
          {/* Hero Section */}
          <section className="about-hero">
            <h1>🙋 Om dinosfortune</h1>
            <p className="hero-tagline">Spill trygt, gratis og sosialt.</p>
            <div className="hero-description">
              <p>dinosfortune gir deg norske sosiale casinospill – helt uten pengebruk, kun for moro og fellesskap.</p>
            </div>
          </section>

          {/* Features Section */}
          <section className="features-section">
            <h2>Hvorfor velge oss?</h2>
            <div className="features-grid">
              <div className="feature-card">
                <span className="feature-icon">🆓</span>
                <h3>Alltid gratis spill</h3>
              </div>
              <div className="feature-card">
                <span className="feature-icon">🎲</span>
                <h3>Kun for underholdning</h3>
              </div>
              <div className="feature-card">
                <span className="feature-icon">❌</span>
                <h3>Ingen pengeinnsats</h3>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="values-section">
            <h2>🎯 Våre verdier</h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-header">
                  <span className="value-icon">🎮</span>
                  <h3>Spill for gøy</h3>
                </div>
                <p>Hos oss handler det om glede, ikke risiko eller tap.</p>
              </div>

              <div className="value-card">
                <div className="value-header">
                  <span className="value-icon">🔞</span>
                  <h3>Kun for voksne</h3>
                </div>
                <p>Plattformen er for deg over 18 år. Vi fremmer ansvarlig spilling.</p>
              </div>

              <div className="value-card">
                <div className="value-header">
                  <span className="value-icon">🛡️</span>
                  <h3>Sikkerhet først</h3>
                </div>
                <p>Ingen betalingsinfo lagres. All data er anonym og følger GDPR.</p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="contact-section">
            <h2>📍 Kontakt oss</h2>
            <div className="contact-card">
              <div className="company-info">
                <h3>dinosfortune AS</h3>
                <p>Dronning Eufemias gate 16</p>
                <p>0191 Oslo, Norge</p>
              </div>
              <div className="contact-details">
                <p><span>📧</span> E-post: <a href="mailto:kontakt@dinosfortune.no">kontakt@dinosfortune.no</a></p>
                <p><span>📞</span> Telefon: <a href="tel:+4722837010">+47 22 83 70 10</a></p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;