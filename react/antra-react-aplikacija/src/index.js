import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header/Header";
import Home from "./components/home/home";
import About from "./components/about/about";
import Service from "./components/service/service";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

// React naudoja virtualų DOM (ReactDOM)
// createRoot nurodo, kuris elementas bus pagrindinis
const root = ReactDOM.createRoot(document.getElementById("root"));
// Kreipimasis į komponentą iš didžiosios raidės, savaime užsidarančiame elemente <App/>
root.render(
  <React.StrictMode>
    <Header />
    <Home />
    <About />
    <Service />
    <Contact />
    <Footer />
  </React.StrictMode>
);
