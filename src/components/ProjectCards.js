import React from 'react'
import { Col, Button } from 'react-bootstrap'
import noImage from "../assets/images/no-preview-img.jpg"

export default function ProjectCards({ title, description, imgURL, githubURL, webURL }) {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgURL ? imgURL : noImage} alt="Cards" className='proj-img' />
                <div className="proj-txtx">
                    <h4 className='mt-1'>{title}</h4>
                    <span>{description}</span>
                    <div className='align-items-center justify-content-center mt-1 mb-1'>
                        <Button className='mb-1' href={githubURL} target='blank'>View Github Repository</Button>
                        {
                            webURL === "" ? "" : <Button className='mt-1 mb-1' href={webURL} target='blank'>View Deployed Website</Button>
                        }
                    </div>
                </div>
            </div>
        </Col>
    )
}