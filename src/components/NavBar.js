import { useEffect, useState } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
// import Logo from '../assets/images/logo.png';
import navIcon1 from '../assets/images/nav-icon1.svg'
import navIcon3 from '../assets/images/nav-icon3.svg'
import githubIcon from "../assets/images/githubIcon.svg"
import { BrowserRouter, Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <BrowserRouter>
      <Navbar expand="md" className={scrolled ? "scrolled" : ''}>
        <Container>
          {/* <Navbar.Brand to="#home">
          <img className="navbar-logo" src={Logo} alt="Logo" />
        </Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggle-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icons">
                <Link to="https://www.linkedin.com/in/mubassim-ahmed-khan/">
                  <img src={navIcon1} alt="LinkedIn" />
                </Link>
                <Link to="https://www.github.com/Mubassim-Khan">
                  <img src={githubIcon} alt="GitHub" />
                </Link>
                <Link to="https://www.instagram.com/mubassimkhan_08/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D">
                  <img src={navIcon3} alt="Instagram" />
                </Link>
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