import "./App.css";
import { useState } from "react";

function App() {
  const [text, setText] = useState("Tekstas");

  return (
    <div className="container">
      <h2>Teksto atvaizdavimas</h2>
      <form className="mt-3">
        <input
          type="text"
          className="form-control"
          onChange={(e) => setText(e.target.value)}
        />
        <div className="mt-2">{text}</div>
      </form>
    </div>
  );
}

export default App;
