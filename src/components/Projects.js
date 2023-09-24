import React from 'react'
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'
import ProjectCards from './ProjectCards';
// import colorGradient2 from "../assets/images/color-sharp2.png"
import "animate.css"
import TrackVisibiliy from "react-on-screen"
import { dataTab1, dataTab2 } from "../ProjectsData"

export default function Projects() {
    return (
        <section className="project" id='projects'>
            <Container>
                <Row>
                    <Col>
                        <TrackVisibiliy>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                    <h2>Projects</h2>
                                    <p>Below are some of the projects, I have been working on lately. Have a view of them...</p>
                                </div>}
                        </TrackVisibiliy>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            dataTab1.map((project, id) => {
                                                return (
                                                    <ProjectCards
                                                        key={id}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {
                                            dataTab2.map((project, id) => {
                                                return (
                                                    <ProjectCards
                                                        key={id}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row className='text-align-center align-items-center justify-content-center'>
                                        Nothing to show here
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            {/* <img className='background-image-right' src={colorGradient2} alt="Color Gradient" /> */}
        </section>
    )
}