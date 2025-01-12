import { Col, Container, Row } from "react-bootstrap";
import { BrowserRouter, Link } from "react-router-dom";

import { links } from "../SocialLinks";

export default function Footer() {
  return (
    <BrowserRouter>
      <footer className="footer">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col sm={6}>{/* <img src={Logo} alt="Logo" /> */}</Col>
            <Col sm={6} className="text-center text-sm-end">
              <div className="social-icons">
                {links.slice(0, 2).map((link, id) => {
                  return (
                    <Link
                      key={id}
                      to={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={link.imgSrc} alt={link.alt} />
                    </Link>
                  );
                })}
              </div>
              <p>Copyright 2024. All Rights Reserved</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </BrowserRouter>
  );
}
