import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meterImg1 from '../assets/images/meter1.svg'
import meterImg2 from '../assets/images/meter2.svg'
import meterImg3 from '../assets/images/meter3.svg'
import colorGradient from "../assets/images/color-sharp.png"
import { Col, Container, Row } from 'react-bootstrap';

export default function Skills() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>I have a bunch of skills in the field of Web Development & Data Structures, some of them are mentioned below.</p>
                            <Carousel responsive={responsive} infinite={true} swipeable={true} draggable={false} className='skill-slider'>
                                <div className="item">
                                    <img src={meterImg3} alt="Skill Meter" />
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meterImg2} alt="Skill Meter" />
                                    <h5>Data Science</h5>
                                </div>
                                {/* <div className="item">
                                    <img src={meterImg2} alt="Skill Meter" />
                                    <h5>Data Stuctures & Algorithms</h5>
                                </div> */}
                                <div className="item">
                                    <img src={meterImg1} alt="Skill Meter" />
                                    <h5>Front-End Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meterImg3} alt="Skill Meter" />
                                    <h5>Java</h5>
                                </div>
                                <div className="item">
                                    <img src={meterImg2} alt="Skill Meter" />
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <img src={meterImg1} alt="Skill Meter" />
                                    <h5>React JS</h5>
                                </div>
                                <div className="item">
                                    <img src={meterImg1} alt="Skill Meter" />
                                    <h5>Javascript</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img src={colorGradient} alt="Gradient Img" className='background-image-left' />
        </section>
    )
}