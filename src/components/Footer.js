import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from "../assets/Logo-white.png";
import plus from "../assets/18plus.png"

export default function Footer(){
    return(
        <footer>
            <Container>
                <Row>
                    <Col className="text-center py-5">
                    <Link to="/"><img src={logo} alt="Logo" /></Link>
                    </Col>
                </Row>
            </Container>

            {/* New Contact Information Section */}
            <Container className="contact-info-section py-5">
                <Row>
                    <Col md={4} className="contact-item">
                        <div className="contact-icon">
                            <i className="fas fa-phone" style={{ color: '#B4975A' }}></i>
                        </div>
                        <div className="contact-content">
                            <h4 className="contact-title">Telefon</h4>
                            <p className="contact-text">+47 22 83 70 10</p>
                        </div>
                    </Col>
                    <Col md={4} className="contact-item">
                        <div className="contact-icon">
                            <i className="fas fa-envelope" style={{ color: '#B4975A' }}></i>
                        </div>
                        <div className="contact-content">
                            <h4 className="contact-title">E-post</h4>
                            <p className="contact-text">kontakt@dinosfortune.no</p>
                        </div>
                    </Col>
                    <Col md={4} className="contact-item">
                        <div className="contact-icon">
                            <i className="fas fa-map-marker-alt" style={{ color: '#B4975A' }}></i>
                        </div>
                        <div className="contact-content">
                            <h4 className="contact-title">Adresse</h4>
                            <p className="contact-text">Dronning Eufemias gate 16,<br /> 0191 Oslo, Norge</p>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container className="footerTop py-4">
                <Row>
                    <Col xs={12} md={6} className="mb-3 mb-md-0">
                        <h3 className="h3Heading text-yellow">Vi fremmer ansvarlig spilling</h3>
                        <p className="footerSub">Les mer på vår side om Ansvarlig Sosialt Spill.</p>
                    </Col>
                    <Col xs={10} md={5} className="mb-3 mb-md-0">
                        <p className="highlight mobile-full-width">
                            <Link to="/ansvarlig-sosialt-spill">Les om ansvarlig spill</Link>
                        </p>
                    </Col>
                    <Col xs={2} md={1} className="text-right">
                        <img src={plus} alt="18+" className="age-restriction" />
                    </Col>
                </Row>
            </Container>
            
            <Container className="footerMiddle pb-4">
                <Row>
                    <Col xs={12} md={9} className="mb-4 mb-md-0">
                        <div className="disclaimer-text">
                            <p>dinosfortune er et gratis sosialt kasino kun for underholdning.</p>
                            <p>Ingen ekte penger, ingen pengepremier, ingen kjøp.</p>
                            <p>Spillene er kun for voksne over 18 år.</p>
                            <p>Fremgang i spillene gir ingen fordeler i pengespill.</p>
                            <p className="disclaimer-footer">Vi oppfordrer til ansvarlig spill – dette er kun for moro skyld.</p>
                        </div>
                    </Col>
                    
                    <Col xs={12} md={3} className="footer-links-col">
                        <ul className="footer-links">
                            <Link to="/tjenestevilkår"><li>Tjenestevilkår</li></Link>
                            <Link to="/ansvarlig-sosialt-spill"><li>Ansvarlig Sosialt Spill</li></Link>
                            <Link to="/personvernregler"><li>Personvernregler</li></Link>
                            <Link to="/kontakt-oss"><li>Kontakt oss</li></Link>
                            <Link to="/ansvarsfraskrivelse"><li>Ansvarsfraskrivelse</li></Link>
                            <Link to="/om-oss"><li>Om oss</li></Link>
                        </ul>
                    </Col>
                </Row>
            </Container>
            
            <Container className="footerBottom py-3">
                <Row>
                    <Col className="text-center">
                        <p className="copyright">© 2025 dinosfortune AS – Kun for underholdning. Ingen pengespill. Ingen ekte penger. Ingen pengepremier.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}