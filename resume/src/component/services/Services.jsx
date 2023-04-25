import React from "react";
import "./services.css";

function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service_list">
            <li>
              <i className="fa-solid fa-check"></i>
              <p>Website Design</p>
            </li>
            <li>
              <i className="fa-solid fa-check"></i>
              <p>Mobile App Design</p>
            </li>
            <li>
              <i className="fa-solid fa-check"></i>
              <p>User Testing</p>
            </li>
            <li>
              <i className="fa-solid fa-check"></i>
              <p>Wireframes &amp; Blueprints</p>
            </li>
            <li>
              <i className="fa-solid fa-check"></i>
              <p>Cross Platform Compatibility</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <i className="fa-solid fa-check"></i>
              <p>Full-stack development</p>
            </li>
            <li>
              <i className="fa-solid fa-check"></i>
              <p>E-commerce development</p>
            </li>
            <li>
              <i className="fa-solid fa-check"></i>
              <p>Customized web app development</p>
            </li>
            <li>
              <i className="fa-solid fa-check"></i>
              <p>Stactic web service</p>
            </li>
            <li>
              <i className="fa-solid fa-check"></i>
              <p>QA &amp; Testing</p>
            </li>
            <li>
              <i className="fa-solid fa-check"></i>
              <p>Web Support and Maintenance</p>
            </li>
          </ul>
        </article>
        {/* END OF Web Development */}
        <article className="service">
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>
          {/* <ul className="service_list">
            <li>
              <i className="fa-solid fa-check"></i>
              <p>Animated Explainer Videos</p>
            </li>
            <li>
              <i className="fa-solid fa-check"></i>
              <p>Slideshares</p>
            </li>
            <li>
              <i className="fa-solid fa-check"></i>
              <p>Online Guides</p>
            </li>
            <li>
              <i className="fa-solid fa-check"></i>
              <p>Motion Graphics</p>
            </li>
            <li>
              <i className="fa-solid fa-check"></i>
              <p>Please Ignore this Section</p>
            </li>
          </ul> */}
        </article>
        {/* END OF Content Creation */}
      </div>
    </section>
  );
}

export default Services;
