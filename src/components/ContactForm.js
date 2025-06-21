import React, { useState } from 'react';
import './ContactForm.css';
import Header from "./Header";
import Footer from "./Footer";
import logo from "../assets/Logo-white.png";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitMessage({
        type: 'success',
        text: 'Takk for din melding! Vi svarer deg snart.'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitMessage({
        type: 'error',
        text: 'Noe gikk galt. Prøv igjen senere.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header logo={logo} />
      <div className="contact-page">
        <div className="contact-container">
          <section className="contact-intro">
            <h1>📬 Kontakt dinosfortune</h1>
            <p>Har du spørsmål, innspill eller trenger du hjelp? Vi er her for deg!</p>
            <p>Send oss en melding om alt fra ansvarlig spilling og personvern til tekniske spørsmål eller samarbeid.</p>
          </section>

          <div className="contact-grid">
            <section className="contact-info">
              <div className="info-card">
                <h2>🧾 Kontaktinformasjon</h2>
                <ul>
                  <li><span>📧</span> <strong>E-post:</strong> kontakt@dinosfortune.no</li>
                  <li><span>📞</span> <strong>Telefon:</strong> +47 22 83 70 10</li>
                  <li>
                    <span>📍</span> <strong>Adresse:</strong><br />
                    dinosfortune AS<br />
                    Dronning Eufemias gate 16<br />
                    0191 Oslo, Norge
                  </li>
                  <li>
                    <span>🕒</span> <strong>Åpningstider:</strong><br />
                    Mandag–Fredag: 09:00–17:00<br />
                    Lørdag–Søndag: Stengt
                  </li>
                </ul>
              </div>

              <div className="info-card important-info">
                <h2>💡 Viktig</h2>
                <p>dinosfortune tilbyr kun gratis sosiale casinospill for underholdning. Ingen pengespill, ingen kjøp, ingen pengegevinster.</p>
                <p>For hjelp med ansvarlig spilling, besøk: <a href="http://www.hjelpelinjen.no" target="_blank" rel="noopener noreferrer">www.hjelpelinjen.no</a></p>
              </div>

              <div className="info-card privacy-info">
                <h2>🛡️ Personvern</h2>
                <p>Lurer du på hvordan vi behandler dine data? Les vår <a href="/personvernregler">Personvernerklæring</a> og <a href="/tjenestevilkår">Vilkår for bruk</a>.</p>
              </div>
            </section>

            <section className="contact-form-section">
              <h2>✍️ Send en melding</h2>
              {submitMessage && (
                <div className={`message ${submitMessage.type}`}>
                  {submitMessage.type === 'success' ? 'Takk for din melding! Vi svarer deg snart.' : 'Noe gikk galt. Prøv igjen senere.'}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Navn"
                  />
                </div>
                
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="E-post"
                  />
                </div>
                
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Emne"
                  />
                </div>
                
                <div className="form-group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Melding"
                    rows="5"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sender...' : 'Send'}
                </button>
              </form>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactForm;