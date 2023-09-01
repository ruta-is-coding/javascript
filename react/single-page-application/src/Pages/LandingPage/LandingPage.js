import Header from "../../Components/Header/Header";
import Home from "../../Components/home/home";
import About from "../../Components/about/about";
import Service from "../../Components/service/service";
import Contact from "../../Components/contact/contact";
import Footer from "../../Components/footer/footer";
import BackButton from "../../Components/backButton/backButton";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <>
      <BackButton fillColor="white" />
      <div className="landingPage">
        <Header />
        <Home />
        <About />
        <Service />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
