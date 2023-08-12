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
          <small>
            Procances is a versatile ecommerce platform, supporting multiple
            vendors and currencies. With 6 payment options—PayPal, Paystack,
            Paytm, Razorpay, Stripe, and Cash on Delivery. To login as admin:
            <br />
            <strong>Email: </strong>shopmate400@gmail.com <br />
            <strong>Password: </strong>Shopmate400
          </small>
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
          <small>
            The Geegpay Clone is a React-based replica of Geegpay, incorporating
            MUI icons. This clone replicates Geegpay's functionality while
            utilizing React's flexibility. With MUI icons, it maintains a
            consistent design language. It offers a familiar experience while
            being customizable to suit specific requirements.
          </small>
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
          <small>
            Crafted with React and Redux, the Game Review website UI offers
            gamers an engaging platform to explore insightful game reviews. Its
            dynamic interface ensures smooth navigation, while Redux efficiently
            manages the app's state, enhancing user experience and interaction.
          </small>
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
          <small>
            The Game Review Admin Panel, powered by React and Redux, delivers
            comprehensive control over the platform. With intuitive design and
            state management, it empowers administrators to manage content, user
            interactions, and data efficiently. Streamlining tasks, it ensures
            seamless administration for an enriched gaming community.
          </small>
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
          <small>
            The Courier website, crafted using React and Material-UI with
            dynamic animation libraries, offers a user-friendly interface for
            seamless package tracking. Combining intuitive design with motion,
            it enhances the user experience while efficiently managing shipments
            and deliveries, catering to a modern and efficient courier service.
          </small>
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
          <small>
            PlayOnFlix, a React-based movie review platform, delivers an
            immersive film experience. Seamlessly integrated with trailer
            viewing, it offers comprehensive reviews, ratings, and insightful
            comments from users. Engaging UI and smooth interactions redefine
            how movie enthusiasts explore, critique, and enjoy their favorite
            films.
          </small>
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
          <small>
            ShopMate 2, a React-powered multi-purpose eCommerce platform,
            revolutionizes online shopping. With its intuitive interface,
            responsive design, and seamless navigation, users can explore a vast
            range of products effortlessly. Powered by React, it ensures a
            dynamic and engaging shopping experience, making ShopMate 2 the
            ultimate destination for modern online retail
          </small>
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
          <small>
            ShopMate, a versatile MERN-based eCommerce platform, redefines
            online fashion shopping. Seamlessly integrating multiple vendors and
            offering a wide array of clothing, it provides a comprehensive
            shopping experience. With PayPal integration, secure transactions
            are guaranteed, making ShopMate the go-to destination for fashion
            enthusiasts seeking quality and style.
          </small>
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
              href="https://shopmate-one.vercel.app/"
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
