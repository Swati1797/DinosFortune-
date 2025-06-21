import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./Header";
import Footer from "./Footer";
import "./Policy.css";
import logo from "../assets/Logo-white.png";
import { Link } from "react-router-dom";

const TermsService = () => {
  return (
    <>
      <Header logo={logo}/>
      <div className="terms-service">
        <Container>
          <Row className="justify-content-center">
            <Col md={10} lg={8}>
              <div className="terms-content mt-4 mb-5 p-4">
                <h1 className="text-center mb-4">Vilkår for bruk</h1>
                <p className="version-info text-center mb-4">
                  Sist oppdatert: 27. mars 2025
                </p>

                <p>Velkommen til dinosfortune! Ved å bruke denne nettsiden og våre spill, godtar du disse vilkårene. Hvis du ikke godtar vilkårene, vennligst ikke bruk tjenesten.</p>

                <h2>🎮 1. Om tjenesten</h2>
                <ul>
                  <li>dinosfortune tilbyr kun gratis sosiale casinospill.</li>
                  <li>Det er ikke mulig å satse, kjøpe eller vinne ekte penger eller fysiske premier.</li>
                  <li>Dette er ikke et nettcasino eller pengespill etter norsk lov.</li>
                  <li>Spillene er kun for underholdning og har ingen økonomisk verdi.</li>
                </ul>

                <h2>🔞 2. Aldersgrense</h2>
                <ul>
                  <li>Tjenesten er kun for personer over 18 år.</li>
                  <li>Ved bruk bekrefter du at du er myndig i ditt land.</li>
                </ul>

                <h2>💳 3. Ingen penger, ingen kjøp</h2>
                <ul>
                  <li>💸 Ingen innskudd</li>
                  <li>🛒 Ingen betalingsløsninger</li>
                  <li>🎁 Ingen pengegevinster eller varer</li>
                  <li>dinosfortune er helt gratis og har ingen funksjoner knyttet til ekte penger.</li>
                </ul>

                <h2>🧠 4. Ansvarlig bruk</h2>
                <p>Vi anbefaler alle å spille ansvarlig og med måte.</p>
                <p>Opplever du problemer med spilling? Kontakt <a href="http://www.hjelpelinjen.no" target="_blank" rel="noopener noreferrer">www.hjelpelinjen.no</a> for gratis og anonym hjelp.</p>

                <h2>🔐 5. Personvern og cookies</h2>
                <p>Vi bruker cookies og samler inn anonym bruksdata for å forbedre tjenesten.</p>
                <p>Les mer i vår <Link to="/personvernregler">Personvernerklæring</Link>.</p>

                <h2>🔁 6. Endringer i vilkårene</h2>
                <p>Vi kan oppdatere vilkårene uten forvarsel. Ved videre bruk godtar du endringene.</p>

                <h2>📬 7. Kontakt</h2>
                <p>Har du spørsmål om vilkårene?</p>
                <p>dinosfortune AS</p>
                <p>Adresse: Dronning Eufemias gate 16, 0191 Oslo, Norge</p>
                <p>E-post: kontakt@dinosfortune.no</p>
                <p>Telefon: +47 22 83 70 10</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default TermsService;