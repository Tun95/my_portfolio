import "./App.css";
import About from "./component/about/About";
import Contact from "./component/contact/Contact";
import Experience from "./component/experience/Experience";
import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";
import Nav from "./component/nav/Nav";
import Portfolio from "./component/portfolio/Portfolio";
import Services from "./component/services/Services";
import Testimonial from "./component/testimonials/Testimonial";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      {/* <Testimonial /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default App;
