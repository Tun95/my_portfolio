import React, { useReducer, useState } from "react";
import "./contact.css";
import { useFormik } from "formik";
import { contactSchema } from "../../schema";
import axios from "axios";
import { toast } from "react-toastify";
import { request } from "../../base_url/Base_URL";

const reducer = (state, action) => {
  switch (action.type) {
    case "POST_REQUEST":
      return { ...state, loading: true };
    case "POST_SUCCESS":
      return { ...state, loading: false };
    case "POST_FAIL":
      return { ...state, loading: false };

    default:
      return state;
  }
};
function Contact() {
  const [{ loading, error }, dispatch] = useReducer(reducer, {
    loading: true,
    error: "",
  });

  //SUBMIT FUNCTION
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();

  const submitHandler = async (e, actions) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) {
      toast.error("one or more field is required", {
        position: "bottom-center",
      });
    } else {
      try {
        const { data } = axios.post(`${request}/api/message`, {
          name,
          email,
          subject,
          message,
        });
        dispatch({ type: "POST_SUCCESS", payload: data });
        toast.success("Email sent successfully", { position: "bottom-center" });
      } catch (err) {
        dispatch({ type: "POST_FAIL" });
        toast.error("Message fail to send", { position: "bottom-center" });
      }
    }
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <i className="fa-regular fa-envelope icon"></i>
            <h4>Email</h4>
            <h5>akandetunji2@gmail.com</h5>
            <a href="mailto: akandetunji2@gmail.com">Send a message</a>
          </article>
          <article className="contact_option">
            <i className="fa-brands fa-facebook-messenger icon"></i>
            <h4>Messenger</h4>
            <h5>MaXman Xman</h5>
            <a
              href="https://m.me/MaXman.Xman"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <i className="fa-brands fa-whatsapp icon"></i>
            <h4>WhatsApp</h4>
            {/* <h5>+2349160921639</h5> */}
            <a
              href="https://wa.me/+2349160921639"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        <form action="" onSubmit={submitHandler}>
          <span>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Full name"
            />
          </span>
          <span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              placeholder="Your Email"
            />
          </span>
          <span>
            <input
              type="text"
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Your Message Subject Here"
            />{" "}
          </span>
          <span>
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message"
            ></textarea>
          </span>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
