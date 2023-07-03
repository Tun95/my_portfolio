import React from "react";
import "./contact.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import { request } from "../../base_url/Base_URL";

function Contact() {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, actions) => {
      try {
        const response = await axios.post(`${request}/api/message`, {
          name: values.name,
          email: values.email,
          subject: values.subject,
          message: values.message,
        });
        toast.success("Email sent successfully", { position: "bottom-center" });
        actions.resetForm();
      } catch (err) {
        toast.error("Message failed to send", { position: "bottom-center" });
      }
    },
  });

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
              href="https://wa.me/+2348160970232"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <span>
            <input
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors.name && formik.touched.name ? "input-error" : ""
              }
              placeholder="Your Full Name"
            />
            {formik.touched.name && formik.errors.name && (
              <small className="error">{formik.errors.name}*</small>
            )}
          </span>
          <span>
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors.email && formik.touched.email ? "input-error" : ""
              }
              placeholder="Your Email"
            />
            {formik.touched.email && formik.errors.email && (
              <small className="error">{formik.errors.email}*</small>
            )}
          </span>
          <span>
            <input
              type="text"
              name="subject"
              value={formik.values.subject}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors.subject && formik.touched.subject
                  ? "input-error"
                  : ""
              }
              placeholder="Your Message Subject Here"
            />
            {formik.touched.subject && formik.errors.subject && (
              <small className="error">{formik.errors.subject}*</small>
            )}
          </span>
          <span>
            <textarea
              name="message"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors.message && formik.touched.message
                  ? "input-error"
                  : ""
              }
              placeholder="Your Message"
            ></textarea>
            {formik.touched.message && formik.errors.message && (
              <small className="error">{formik.errors.message}*</small>
            )}
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
