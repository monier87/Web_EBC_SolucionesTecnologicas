import { useRef, useState } from "react";
import { Row, Col } from "react-flexbox-grid";
import emailjs from '@emailjs/browser';
import "./contact.scss";
import Title from "../ui-components/title/title";
import ContactInfo from './contactInfo/contactInfo';
import ContactSocial from './contactInfo/contactSocial';
import Modal from '../contact-modal/Modal';

import ContactBackground from '../../assets/contact/bg.png';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);

  const form = useRef();

  const inputHandler = (event) => {
    const { name, value } = event.target;
    if (name === "user_name") setName(value);
    else if (name === "user_email") setEmail(value);
    else if (name === "message") setMessage(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm('service_5ga4l79', 'template_bfkjmed', form.current, {
        publicKey: '5pqnba4Z3-Tp54zsW',
      })
      .then(
        () => {
          setSending(false);
          setSuccessModal(true);
          resetForm();
        },
        (error) => {
          setSending(false);
          setErrorModal(true);
          resetForm();
          console.error('FAILED...', error.text);
        }
      );
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const closeModal = () => {
    setSuccessModal(false);
    setErrorModal(false);
  };

  let submitButtonRender = (
    <div className="small__button">
      <button aria-label="send message" type="submit" value="Send Message">
        Enviar Mensaje
      </button>
    </div>
  );

  if (sending) {
    submitButtonRender = (
      <div className="small__button sending-btn">
        <div className="flex-center">
          <div className="sbl-circ"></div>
        </div>
      </div>
    );
  }

  let modalRender = null;

  if (successModal) {
    modalRender = <Modal closeModal={closeModal} status="success" />;
  } else if (errorModal) {
    modalRender = <Modal closeModal={closeModal} status="error" />;
  }

  return (
    <div id="contact">
      {modalRender}
      <div className="wrapper">
        <Title title="Contactanos." />
        <p className="font12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt<br></br>ut labore et dolore magna aliqua.
        </p>

        <Row className="padding40">
          <Col md={12} lg={6}>
            <form ref={form} onSubmit={handleSubmit}>
              <h4 className="font30 weight800 padding30">Envianos un Mensaje.</h4>
              <input type="text" placeholder="Nombre" required name="user_name" value={name} onChange={inputHandler} />
              <input type="email" placeholder="Email" required name="user_email" value={email} onChange={inputHandler} />
              <textarea
                rows="6"
                cols="50"
                placeholder="Mensaje﻿..."
                required
                name="message"
                value={message}
                onChange={inputHandler}
              ></textarea>
              {submitButtonRender}
            </form>
          </Col>
          <Col md={12} lg={6}>
            <div className="flex-center">
              <img src={ContactBackground} alt="contact background" />
            </div>
          </Col>
        </Row>
        <ContactInfo />
        <ContactSocial />
      </div>
    </div>
  );
};

export default Contact;
