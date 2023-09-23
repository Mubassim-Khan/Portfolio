import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
// import Logo from "../assets/images/logo.svg"
import footerIcon1 from "../assets/images/nav-icon1.svg"
import githubIcon from "../assets/images/githubIcon.svg"
import footerIcon3 from "../assets/images/nav-icon3.svg"
import { BrowserRouter, Link } from "react-router-dom"

export default function Footer() {
    return (
        <BrowserRouter>
            <footer className="footer">
                <Container>
                    <Row className="align-items-center justify-content-center">
                        <Col sm={6}>
                            {/* <img src={Logo} alt="Logo" /> */}
                        </Col>
                        <Col sm={6} className="text-center text-sm-end">
                            <div className="social-icons">
                                <Link to="https://www.linkedin.com/in/mubassim-ahmed-khan/">
                                    <img src={footerIcon1} alt="LinkedIn" />
                                </Link>
                                <Link to="https://www.github.com/Mubassim-Khan">
                                    <img src={githubIcon} alt="GitHub" />
                                </Link>
                                <Link to="https://www.instagram.com/mubassimkhan_08/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D">
                                    <img src={footerIcon3} alt="Instagram" />
                                </Link>
                            </div>
                            <p>Copyright 2023. All Rights Reserved</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </BrowserRouter>
    )
}
