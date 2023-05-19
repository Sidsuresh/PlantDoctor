import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import Header from "../Header/Header";

//Extra css
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    setIsLoading(true);

    emailjs
      .sendForm(
        "service_74qqclf",
        "template_ugnc5dr",
        form.current,
        "EbZ_a6KLGfcjQnNHI"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsLoading(false);
          toast("Message was sent");
        },
        (error) => {
          console.log(error.text);
          setIsLoading(false);
          toast("Some error occured");
        }
      );
  }

  return (
    <div className="contact-page">
      <Header />
      <div className="contact-container">
        {/* <div className="contact-title">CONTACT-ME</div> */}
        <div className="contact-content">
          <div className="contact-bg"></div>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <input
                placeholder="Your Name"
                type="text"
                id="name"
                name="name"
                required
              />
              <input
                placeholder="Your Email"
                type="email"
                id="email"
                name="email"
                required
              />
              <textarea
                placeholder="Your Message"
                id="msg"
                name="msg"
                required
              ></textarea>
              <input
                type="submit"
                value={isLoading ? "Sending ... " : "Send"}
              />
            </form>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Contact;
