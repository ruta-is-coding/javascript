import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header/Header";

// React naudoja virtualų DOM (ReactDOM)
// createRoot nurodo, kuris elementas bus pagrindinis
const root = ReactDOM.createRoot(document.getElementById("root"));
// Kreipimasis į komponentą iš didžiosios raidės, savaime užsidarančiame elemente <App/>
root.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);
