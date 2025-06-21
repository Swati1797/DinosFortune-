import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from "./Footer";
import "../index.css";
import "./Game.css";
import Header from './Header';
import AgeVerificationPopup from "./AgeVerificationPopup";

const Game = () => {
  const [showPopup, setShowPopup] = useState(true);
  const [showDenied, setShowDenied] = useState(false);
  const [verified, setVerified] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user has already verified
    const isVerified = localStorage.getItem('ageVerified');
    if (isVerified === 'true') {
      setVerified(true);
      setShowPopup(false);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('ageVerified', 'true');
    setVerified(true);
    setShowPopup(false);
  };

  const handleReject = () => {
    setShowDenied(true);
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  return (
    <div className="game-page">
      {showPopup && (
        <AgeVerificationPopup 
          onAccept={handleAccept}
          onReject={handleReject}
          showDenied={showDenied}
        />
      )}
      
      {(verified || !showPopup) && (
        <>
          <Header />
          <main className="game-container">
            <iframe 
              src="/CasinoGame/index.html"
              title="Game"
              className="game-frame"
              allow="autoplay"
              frameBorder="0"
            />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Game;