import { useState, useEffect } from "react";
import "./App.css";

function App() {
  function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const [passwordLength, setPasswordLength] = useState(10);
  const [password, setPassword] = useState("");
  const [isNumbers, setIsNumbers] = useState(true);
  const [isSymbols, setIsSymbols] = useState(true);
  const [data, setData] = useState([]);

  // Generate password
  useEffect(() => {
    // patikriname ar yra local storage duomenu
    let getData = JSON.parse(localStorage.getItem("passwords"));
    if (getData) setData(getData);
    else {
      setData([]);
    }
    // generuojame pasvorduka
    let pasvordukas = "";
    if (isNumbers) {
      for (let i = 0; i < passwordLength; i++) {
        pasvordukas += rand(0, 9);
      }
      setPassword(pasvordukas);
    }
    data.push(pasvordukas);
    localStorage.setItem("passwords", JSON.stringify(data));
    console.log(data);
  }, [passwordLength]);

  // Pasiimame duomenis iš local storage

  return (
    <div className="container mt-5">
      <h1>Need a password? Try the 1Password Strong Password Generator.</h1>
      <p>Generate secure, random passwords to stay safe online.</p>
      {/* Password input */}
      <div>
        <label htmlFor="password">Generated password:</label>
        <input
          type="text"
          className="form-control"
          id="password"
          value={password}
          readOnly
        />
      </div>

      <div className="container border rounded" id="passwordOptions">
        {/* Set password length */}
        <div className="form-group d-flex gap-2">
          <label htmlFor="length">Length </label>
          <input
            id="length"
            type="number"
            value={passwordLength}
            min="1"
            className="form-control form-control-sm"
            onChange={(e) => {
              setPasswordLength(e.target.value);
            }}
          />
        </div>

        {/* Numbers checkbox */}
        <div className="d-flex align-items-center">
          <label className="form-check-label d-flex gap-2">
            <input
              type="checkbox"
              className="form-check-input"
              checked={isNumbers}
              onChange={(e) => {
                e.target.checked = setIsNumbers(!isNumbers);
              }}
            ></input>
            Numbers
          </label>
        </div>

        {/* Symbols checkbox */}
        <div className="d-flex align-items-center">
          <label className="form-check-label d-flex gap-2">
            <input
              type="checkbox"
              className="form-check-input"
              checked={isSymbols}
              onChange={(e) => {
                e.target.checked = setIsSymbols(!isSymbols);
              }}
            ></input>
            Symbols
          </label>
        </div>
      </div>

      <div className="container mt-5">
        <h2>10 Last Generated Passwords:</h2>
        {/* <div className="container">
          {data.map((item) => {
            <li>{data.item}</li>;
          })}
        </div> */}
      </div>
    </div>
  );
}

export default App;
