import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorGradient from "../assets/images/color-sharp.png"
import { Col, Container, Row } from 'react-bootstrap';
import { LanguageSkills } from '../SkillsData';

export default function Skills() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };

    return (
        <section className="skill" id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>I have a bunch of skills in programming languages, some of them are mentioned below.</p>
                            <Carousel responsive={responsive} infinite={true} swipeable={true} draggable={false} className='skill-slider'>
                                {LanguageSkills.map((skill, key) => {
                                    return (
                                        <div className="item" key={skill.id}>
                                            <img src={skill.imgURL} alt="Skill Meter" />
                                            <h5>{skill.name}</h5>
                                        </div>
                                    )
                                })}
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img src={colorGradient} alt="Gradient Img" className='background-image-left' />
        </section>
    )
}