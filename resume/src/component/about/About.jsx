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
              <small>3+ Completed in MERN</small>
            </article>
          </div>
          <p>
            Hi, Welcome to my porfolio my name is Olatunji Akande. I am a
            professional UX-UI designer graphic designer, Full stack Website
            (MERN) and website developer (HTML, CSS and Javascript). My
            Speciality is in making websites on the basis of UX-UI, Full Stack
            (MERN) web app and graphical aspect. I have been doing this work for
            quite some time and I will provide you with the great services in
            simple and innovative way.
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
