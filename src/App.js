import React, { useState, useEffect } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer"
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import star from "./assets/star.png";
import gamebg from "./assets/gamebg.mp4";
import winbg from "./assets/winbg.mp4";
import logo from "./assets/Logo-white.png";
import heroVideo from "./assets/herobg.mp4";
import AgeVerificationPopup from "./components/AgeVerificationPopup";


function App() {
  const [showPopup, setShowPopup] = useState(true);
  const [showDenied, setShowDenied] = useState(false);
  const [verified, setVerified] = useState(false);

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
  };

  return (
    <>
      {showPopup && (
        <AgeVerificationPopup 
          onAccept={handleAccept}
          onReject={handleReject}
          showDenied={showDenied}
        />
      )}
      
      {(verified || !showPopup) && (
        <>
          <Header logo={logo}/>
          {/* Hero Section */}
          <div className="heroSection">
      {/* 1. Video Overlay */}
      <div className="video-overlay"></div>

      {/* 2. Background Video */}
      <video autoPlay loop muted playsInline className="background-video">
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 3. Hero Content */}
      <Container className="hero-content">
        <Row>
          <Col className="outerSection">
            <h1 className="h1Heading">Velkommen til DinosFortune </h1>
            <p className="subPara">
            Det ultimate sosiale casinospillet
            </p>
            <Link to="/spill" className="linkBtn">
              Start spillingen
            </Link>
          </Col>
        </Row>
      </Container>
    </div>

          {/* Second fold */}
          <div className="section">
            <div className="outerSection">
              <div className="sectionHead">
                <img src={star} alt="stjerne" />
                <h2 className="h2Heading">DE BESTE <span className="text-yellow">GRATIS CASINO-SPILLENE</span></h2>
                <img src={star} alt="stjerne" />
              </div>
              <p className="subPara">Ingen innskudd. Ingen risiko. Bare ren underholdning.</p>
              <div className="imagesSection">
              <video autoPlay loop muted playsInline className="game-video">
                  <source src={gamebg} type="video/mp4" />
                      Your browser does not support the video tag.
              </video>
              </div>
              <Link to="/spill" className="sectionBtn">Prøv gratis nå</Link>
            </div>
          {/* Third Fold */}
            <div className="outerSection">
            <h2 className="h2Heading">SPILL GRATIS – ALLTID</h2>
            <p className="subPara">Ingen betalinger, ingen innsats – bare sosial glede!</p>
            <video autoPlay loop muted playsInline className="game-video">
                  <source src={winbg} type="video/mp4" />
                      Your browser does not support the video tag.
              </video>
              <Link to="/spill" className="sectionBtn">Bli med og spill gratis</Link>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
