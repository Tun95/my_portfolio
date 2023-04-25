import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <a href="/#" className="footer_logo">
        STARLAB
      </a>
      <ul className="permalinks">
        <li>
          <a href="/#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        {/* <li>
          <a href="#testimonial">Testimonial</a>
        </li>{" "} */}
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a
          href="https://www.facebook.com/akande.tunji.94"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a
          href="https://twitter.com/joshuaTJ7"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <i className="fa-brands fa-twitter"></i>
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy; STARLAB_DEV Project. All right reserved</small>
      </div>
    </footer>
  );
}

export default Footer;
