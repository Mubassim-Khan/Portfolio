import React, { useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/images/contact-img.svg";
import colorGradient2 from "../assets/images/color-sharp2.png";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const { firstName, lastName, email, message } = formDetails;
    if (!firstName || !lastName || !email || !message) {
      toast.error("Please fill out all required fields!");
      return;
    }

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.REACT_APP_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          toast.success("Message sent successfully");
        },
        (error) => {
          toast.error("Something went wrong");
          console.log(error);
        }
      );
    setFormDetails(formInitialDetails);
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col md={6}>
            <h2>Get in touch with me!</h2>
            <form onSubmit={sendEmail} ref={form}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    name="first_name"
                    placeholder="*First name"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                    minLength={3} required
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    name="last_name"
                    placeholder="*Last name"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                    minLength={3} required
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    name="email"
                    placeholder="*Email address"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    name="phone_no"
                    placeholder="Phone number"
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </Col>
                <Col>
                  <textarea
                    rows="6"
                    value={formDetails.message}
                    name="message"
                    placeholder="*Leave your message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                    minLength={10} required
                  ></textarea>
                  <button type="submit" value="send">
                    <span>Send</span>
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
      <img
        src={colorGradient2}
        alt="Color Gradient"
        className="background-image-right"
      />
    </section>
  );
}
