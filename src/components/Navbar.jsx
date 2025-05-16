import { useEffect, useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { BrowserRouter, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { links } from "../SocialLinks";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <BrowserRouter>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          {/* <Navbar.Brand to="#home">
          <img className="navbar-logo" src={Logo} alt="Logo" />
        </Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggle-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
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
              <span>
                <HashLink to="#connect">
                  <button className="vvd">Let's Connect</button>
                </HashLink>
              </span>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </BrowserRouter>
  );
}
