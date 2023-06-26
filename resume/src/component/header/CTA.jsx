import React from "react";
import TunjiAkande from "../../asset/TunjiAkande.pdf";

function CTA() {
  return (
    <div className="cta">
      <a href={TunjiAkande} download={TunjiAkande} className="btn">
        Download
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
}

export default CTA;
