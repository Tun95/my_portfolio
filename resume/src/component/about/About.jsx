import React from "react";
import "./about.css";
import me from "../../asset/me.png";

function About() {
  return (
    <section id="about">
      <h5>Get To Know </h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={me} alt="about me" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <i className="fa-solid fa-award"></i>
              <h5>Experience</h5>
              <small>4+ Years Working</small>
            </article>
            <article className="about_card">
              <i className="fa-solid fa-users"></i>
              <h5>Clients</h5>
              <small></small>
            </article>
            <article className="about_card">
              <i className="fa-solid fa-folder"></i>
              <h5>Projects</h5>
              <small>??+ Completed in MERN</small>
            </article>
          </div>
          <p>
            Welcome to my portfolio! I'm Olatunji Akande, a MERN developer
            specializing in creating dynamic and interactive web applications.
            With expertise in MongoDB, Express, React, and Node.js, I combine my
            technical skills with a passion for delivering high-quality and
            innovative solutions. Let's explore my work together!
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
