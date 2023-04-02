import React, { useState } from "react";
import { render } from "react-dom";
import instaImg from "./instagram.png";
import fbImg from "./facebook.png";
import lnkdImg from "./linkedin.png";
import Button from '../CustomElements/Button'
import emailjs from "emailjs-com";
import "./contact.css";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

function Contact() {
  let [emailValidationResult, setEmail] = useState("");

 
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_8yob0er",
        "template_ikzbfqz",
        e.target,
        "n9K4-DTMTio0S7b7e"
      )
      .then((res) => {
        if (res.text == "OK") alert("Email Sent Successfully!");
      })
      .catch((err) => console.log(err));
    e.target.reset();
  }

  function emailValidation(e) {
    if (e.target.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      console.log(e.target.value);
      setEmail("Correct");
    } else {
      setEmail("Input Correct Email!");
    }
  }

  return (
    <>
    <Navbar/>
    <div className="contact_maincontainer">
      <div className="contact_container">
      <div className="contactPage" id="contactMe" align="center">
      <div className="contactData">
        <h1 className="hire" align="center">
          Contact Us
        </h1>
        <p className="hireText">Please email your feedback and queries.</p>
        <br></br>
        <a href="https://www.instagram.com/" target="_blank">
          <img src={instaImg} alt="my insta handle"></img>
        </a>
        <a href="https://www.facebook.com/" target="_blank">
          <img src={fbImg} alt="my fb handle"></img>
        </a>
        <a href="https://www.linkedin.com/in/" target="_blank">
          <img src={lnkdImg} alt="my linkedin handle"></img>
        </a>
      </div>
      <div>
        <form className="contactBox" align="center" onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            className="contactName"
            placeholder="Your name *"
            style={{ paddingLeft: "1.5%" }}
            required
          />
          <input
            name="user_email"
            type="text"
            
            placeholder="Your Email *"
            onChange={emailValidation}
            style={{ paddingLeft: "1.5%" }}
            required
          />
          {emailValidationResult!="Correct"&&<span>{emailValidationResult}</span>}

          <input
            name="subject"
            type="text"
            className="contactSubject"
            placeholder="Write a Subject"
            style={{ paddingLeft: "1.5%" }}
            required
          />
          <textarea
            name="message"
            id="message"
            placeholder="Write Your message"
            style={{ paddingLeft: "1.5%", paddingTop: "1%" }}
            required
          ></textarea>
          <Button type="submit" color="white"
            bgcolor="#706953"
            height="40px"
            width="100px"
            border="#706953">
            Submit
          </Button>
        </form>
      </div>
    </div>
    </div>
    </div>
    <Footer/>
    </>
  );
}

export default Contact;
