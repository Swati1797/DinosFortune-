import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./Header";
import Footer from "./Footer";
import logo from "../assets/Logo-white.png";

const PrivacyPolicy = () => {
  return (
    <>
      <Header logo={logo} />
      <div className="terms-service">
        <Container>
          <Row className="justify-content-center">
            <Col md={10} lg={8}>
              <div className="terms-content mt-4 mb-5 p-4">
                <h1 className="text-center mb-4">🔐 Personvernerklæring</h1>
                <p className="version-info text-center mb-4">
                  Sist oppdatert: 27. mars 2025
                </p>

                <p>Vi i dinosfortune tar personvernet ditt på alvor. Her forklarer vi hvordan vi samler inn, bruker og beskytter informasjonen din når du besøker oss.</p>
                <p>dinosfortune er en gratis sosial casinoplattform – ingen pengespill, ingen kjøp, ingen pengegevinster.</p>

                <h2>🧾 1. Hvilken informasjon samler vi inn?</h2>
                <p>Vi samler kun inn anonym bruksdata for å forbedre tjenesten, som:</p>
                <ul>
                  <li>🌐 Nettleser og enhet</li>
                  <li>🕒 Tid og varighet for besøk</li>
                  <li>📄 Hvilke sider du besøker</li>
                  <li>📍 Omtrentlig plassering (basert på IP)</li>
                </ul>
                <p>Vi samler ikke inn navn, adresse eller betalingsinformasjon.</p>

                <h2>🍪 2. Informasjonskapsler (cookies)</h2>
                <p>Vi bruker cookies for å forstå bruksmønstre, forbedre funksjonalitet og måle trafikk.</p>
                <p>Du kan selv kontrollere eller slette cookies i nettleseren din.</p>

                <h2>🧠 3. Hvordan bruker vi data?</h2>
                <p>Data brukes kun til:</p>
                <ul>
                  <li>📊 Statistikk og analyse (f.eks. Google Analytics)</li>
                  <li>🔧 Teknisk forbedring av nettstedet</li>
                  <li>🛡️ Sikkerhet og beskyttelse mot misbruk</li>
                </ul>
                <p>Vi selger eller deler ikke data med tredjeparter, med mindre det er nødvendig for drift.</p>

                <h2>🎰 4. Ingen pengespill</h2>
                <p>dinosfortune tilbyr kun gratis spill. Det er ikke mulig å satse, kjøpe eller vinne ekte penger eller premier.</p>

                <h2>🧑‍⚖️ 5. Dine rettigheter</h2>
                <p>Du har rett til:</p>
                <ul>
                  <li>📝 Innsyn i hvilke data vi har</li>
                  <li>✏️ Rette feil</li>
                  <li>❌ Be om sletting av data</li>
                  <li>🛑 Begrense eller motsette deg visse former for bruk</li>
                </ul>
                <p>Kontakt oss for å utøve dine rettigheter.</p>

                <h2>🧷 6. Sikkerhet</h2>
                <p>Vi bruker moderne sikkerhetstiltak for å beskytte dine data mot uautorisert tilgang eller tap.</p>

                <h2>🌍 7. Lagring og behandling</h2>
                <p>All databehandling skjer i henhold til GDPR, og data lagres innenfor EØS.</p>

                <h2>📬 8. Kontakt</h2>
                <p>Har du spørsmål om personvern eller dine data?</p>
                <p>dinosfortune AS</p>
                <p>📧 E-post: kontakt@dinosfortune.no</p>
                <p>📍 Dronning Eufemias gate 16, 0191 Oslo, Norge</p>
                <p>📞 Telefon: +47 22 83 70 10</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;