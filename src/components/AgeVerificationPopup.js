import React from 'react';
import { Link } from 'react-router-dom';
import './AgeVerificationPopup.css';

const AgeVerificationPopup = ({ onAccept, onReject, showDenied }) => {
  return (
    <div className="verification-popup">
      {!showDenied ? (
        <div className="popup-content">
          <h2>🔞 Aldersbekreftelse</h2>
          <h3>Velkommen til dinosfortune!</h3>
          <p>For å bruke dinosfortune må du være over 18 år. Plattformen er kun for underholdning – ingen pengebruk, ingen gevinster.</p>
          
          <ul className="feature-list">
            <li><span>❌</span> Ingen pengespill</li>
            <li><span>❌</span> Ingen kjøp</li>
            <li><span>✅</span> Helt gratis</li>
            <li><span>🔞</span> Kun for 18+</li>
            <li><span>🧠</span> Spill ansvarlig</li>
          </ul>

          <p className="consent-text">
            Ved å godta bekrefter du at du er over 18 år og aksepterer våre:
          </p>
          <ul className="terms-list">
            <li>
              <Link to="/ansvarsfraskrivelse" target="_blank" rel="noopener noreferrer">
                Ansvarsfraskrivelse
              </Link>
            </li>
            <li>
              <Link to="/ansvarlig-sosialt-spill" target="_blank" rel="noopener noreferrer">
                Ansvarlig spill
              </Link>
            </li>
            <li>
              <Link to="/personvernregler" target="_blank" rel="noopener noreferrer">
                Personvern
              </Link>
            </li>
          </ul>

          <div className="popup-buttons">
            <button className="accept-button" onClick={onAccept}>
              ✅ Godta
            </button>
            <button className="reject-button" onClick={onReject}>
              Avvis
            </button>
          </div>
        </div>
      ) : (
        <div className="popup-content denied">
          <h2>⚠️ Tilgang avslått</h2>
          <p>Du har ikke godtatt vilkårene. Du får derfor ikke tilgang til denne siden.</p>
          <p>dinosfortune er kun for underholdning og for brukere over 18 år. Ingen ekte penger, ingen innsats, ingen gevinster.</p>
          <p className="redirect-text">🔙 Du sendes til forsiden...</p>
        </div>
      )}
    </div>
  );
};

export default AgeVerificationPopup;