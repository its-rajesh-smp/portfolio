// have to put corrrect links in email,messanger,whattsapp
import React, { useState } from "react";
import "./Contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { BsMessenger } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = async(e) => {
    e.preventDefault();
   
    async function sendDataToBackend (){
     
      try {
        const response = await axios.post("http://localhost:5000/send-email", {
          name,
          email,
          message,
        });
        console.log(response.data);
        setStatus(response.data);
       
      } catch (error) {
        setStatus(error.message);
      }
      
    }
    sendDataToBackend();

    setName("");
    setEmail("");
    setMessage("");
    
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>rajkumarjangam66@gmail.com</h5>
            <a href="mailto:rajkumarjangam66@gmail.com" target="_blank" >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsMessenger className="contact__option-icon" />
            <h4>Messanger</h4>
            <h5>Rajkumar Jangam</h5>
            <a href="https://m.me/rajkumar.jangam" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whattsapp</h4>
            <h5>9468575178</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+919468575178"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Your Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            id=""
            cols="30"
            rows="7"
            placeholder="Write Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
