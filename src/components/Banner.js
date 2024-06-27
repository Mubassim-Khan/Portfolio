import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import headerImg from '../assets/images/header-img.svg'
import "animate.css"
import TrackVisibiliy from "react-on-screen"
import { HashLink } from "react-router-hash-link"
import { BrowserRouter } from "react-router-dom"

export default function Banner() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["MERN Stack Developer", "Data Analyist", "Student", "AI Enthusiast", "Web Developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(200 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) }
        // eslint-disable-next-line
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updatedText);

        if (isDeleting) {
            setDelta(100); // Increase delta for slower deleting
        } else {
            setDelta(200 - Math.random() * 100); // Decrease delta for faster typing
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(200 - Math.random() * 100);
        }
    }

    return (
        <BrowserRouter>
            <section className="banner" id='home'>
                <Container>
                    <Row className='align-items-center'>
                        <Col xs={12} md={6} xl={7}>
                            <TrackVisibiliy>
                                {({ isVisible }) =>
                                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                        <span className="tagLine">Welcome to my Portfolio</span>
                                        <h1>{`Hi, I'm a `} <span className="wrap">{text}</span> </h1>
                                        <p>My name is Mubassim Ahmed Khan, pursuing BSCS (Bachelors of Science in Computer Science) at University of Karachi.</p>
                                        <button>
                                            <HashLink className='connect-btn' to="#connect">Let's Connect</HashLink>
                                            <ArrowRightCircle size={25} />
                                        </button>
                                    </div>}
                            </TrackVisibiliy>
                        </Col>
                        <Col xs={12} md={6} xl={5}>
                            <TrackVisibiliy>
                                {({ isVisible }) =>
                                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                        <img src={headerImg} alt="Header Img" />
                                    </div>}
                            </TrackVisibiliy>
                        </Col>
                    </Row>
                </Container>
            </section>
        </BrowserRouter>
    )
}