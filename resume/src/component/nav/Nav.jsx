import React from "react";
import { useState } from "react";
import "./nav.css";

function Nav() {
  const [activeNav, setActiveNav] = useState("/#");
  return (
    <nav>
      <a
        href="/#"
        onClick={() => setActiveNav("/#")}
        className={activeNav === "/#" ? "active" : ""}
      >
        <i className="fa-solid fa-house"></i>
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <i className="fa-solid fa-user"></i>
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <i className="fa-solid fa-book"></i>
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <i className="fa-solid fa-house-laptop"></i>
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <i className="fa-solid fa-phone"></i>
      </a>
    </nav>
  );
}

export default Nav;
