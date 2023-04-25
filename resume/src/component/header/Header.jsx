import React from "react";
import CTA from "./CTA.jsx";
import "./header.css";
import me from "../../asset/me.png";
import HeaderSocial from "./HeaderSocial.jsx";

function Header() {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Olatunji Akande</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA />
        <HeaderSocial />
        {/* <div className="me">
          <img src={me} alt="me" />
        </div> */}
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
