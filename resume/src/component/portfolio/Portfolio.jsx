import React from "react";
import "./portfolio.css";
import shop from "../../asset/shop.jpg";
import shop2 from "../../asset/shop2.png";
import courier from "../../asset/courier.jpg";
import play from "../../asset/play.jpg";
import game from "../../asset/game.jpg";
import gamead from "../../asset/gamead.jpg";
import geegpay from "../../asset/geegpay.png";
import procanes from "../../asset/procanes.png";

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={procanes} alt="port1" />
          </div>
          <h3>ProCanes</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/Tun95/procane"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://procane.vercel.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={geegpay} alt="port1" />
          </div>
          <h3>Geegpay Clone</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/Tun95/geegpay_clone"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://geegpay-clone.vercel.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={game} alt="port1" />
          </div>
          <h3>Game Review Frontend</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/Tun95/game_rev-frontend"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              href="https://game-rev-frontend.vercel.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={gamead} alt="port1" />
          </div>
          <h3>Game Review Admin Panel</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/Tun95/game_rev-admin-pannel"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              href="https://game-rev-admin-pannel.vercel.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={courier} alt="port1" />
          </div>
          <h3>Courier Website Frontend </h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/Tun95/Courier__Shopmate"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              href="https://courier-shopmate.vercel.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={play} alt="port1" />
          </div>
          <h3>PlayONFlix Movie Website</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/Tun95/movie_mern_client"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              href="https://playon-flix-movie-webapp.vercel.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={shop2} alt="port1" />
          </div>
          <h3>Shopmate 2</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/Tun95/shopmate-two-app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://shopmate-alpha.vercel.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={shop} alt="port1" />
          </div>
          <h3>Shopmate (1)</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/Tun95/shopmate"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://shopmate-0b17.onrender.com/"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Portfolio;
