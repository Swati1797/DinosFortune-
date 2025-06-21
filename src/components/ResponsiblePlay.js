import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./Header";
import Footer from "./Footer";
import logo from "../assets/Logo-white.png";

const ResponsiblePlay = () => {
  return (
    <>
      <Header logo={logo} />
      <div className="terms-service">
        <Container>
          <Row className="justify-content-center">
            <Col md={10} lg={8}>
              <div className="terms-content mt-4 mb-5 p-4">
                <h1 className="text-center mb-4">🎯 Ansvarlig spilling</h1>
                <p className="version-info text-center mb-4">
                  Sist oppdatert: 27. mars 2025
                </p>

                <p>Hos dinosfortune ønsker vi at spilling skal være morsomt, trygt og sosialt. Våre spill er alltid gratis og uten mulighet for pengeinnsats.</p>

                <h2>💡 Hva er ansvarlig spilling?</h2>
                <p>Ansvarlig spilling betyr å spille for underholdning, uten at det påvirker hverdagen, økonomien eller relasjonene dine.</p>
                <p>Selv om våre spill ikke involverer penger, er det viktig å ha sunne spillevaner.</p>

                <h2>✅ Våre prinsipper for ansvarlig spilling</h2>
                <ul>
                  <li>🎮 Spill for gøy – ikke for å løse problemer</li>
                  <li>🧘 Ta pauser og unngå lange spilløkter</li>
                  <li>⏰ Sett tidsgrenser og hold deg til dem</li>
                  <li>👀 Vær oppmerksom på tegn til avhengighet</li>
                  <li>🔞 Plattformen er kun for brukere over 18 år</li>
                </ul>

                <h2>⚠️ Bekymret for spillvaner?</h2>
                <p>Hvis du eller noen du kjenner sliter med spillvaner, anbefaler vi å søke hjelp.</p>
                <p>Hjelpelinjen.no tilbyr gratis og anonym rådgivning:</p>
                <p>🔗 <a href="http://www.hjelpelinjen.no" target="_blank" rel="noopener noreferrer">www.hjelpelinjen.no</a></p>
                <p>📞 800 800 40 (døgnåpent)</p>

                <h2>🔒 Spill trygt på dinosfortune</h2>
                <ul>
                  <li>Kun gratis sosiale casinospill</li>
                  <li>Ingen innsats, kjøp eller pengegevinster</li>
                  <li>Fremgang i spillene gir ingen fordel i pengespill</li>
                </ul>

                <h2>🧠 Tips for sunn spilling</h2>
                <ul>
                  <li>Spill sammen med venner</li>
                  <li>Sett egne grenser for tid og hyppighet</li>
                  <li>Husk: Det er bare et spill, ikke en konkurranse</li>
                </ul>

                <h2>📩 Kontakt</h2>
                <p>Har du spørsmål eller trenger du hjelp?</p>
                <p>dinosfortune AS</p>
                <p>📧 kontakt@dinosfortune.no</p>
                <p>📍 Dronning Eufemias gate 16, 0191 Oslo, Norge</p>
                <p>📞 +47 22 83 70 10</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default ResponsiblePlay;