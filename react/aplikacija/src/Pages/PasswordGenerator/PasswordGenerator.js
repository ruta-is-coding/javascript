import { useState, useEffect } from "react";
import "./PasswordGenerator.css";

const PasswordGenerator = () => {
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
  const [reset, setReset] = useState(false);

  // Generate password
  useEffect(() => {
    // generuojame pasvorduka
    let pasvordukas = "";
    let symbols =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()~`{}[]_-+=:;'<,>.?/";
    let numbersAndSymbols = symbols + "0123456789";

    // Jeigu uždėta varnelė ant numbers
    if (isNumbers && !isSymbols) {
      for (let i = 0; i < passwordLength; i++) {
        pasvordukas += rand(0, 9);
      }
      setPassword(pasvordukas);
    }

    // Jeigu uždėta varnelė ant symbols
    if (!isNumbers && isSymbols) {
      for (let i = 0; i < passwordLength; i++) {
        pasvordukas += symbols[rand(0, symbols.length - 1)];
      }
      setPassword(pasvordukas);
    }

    // Jeigu uždėtos varnelės ant numbers ir symbols
    if (isSymbols && isNumbers) {
      for (let i = 0; i < passwordLength; i++) {
        pasvordukas += numbersAndSymbols[rand(0, numbersAndSymbols.length - 1)];
      }
      setPassword(pasvordukas);
    }

    // patikriname, ar yra informacijos local storage ir ją iššifruojame

    let getData = JSON.parse(localStorage.getItem("passwords"));
    if (getData) {
      getData.push(pasvordukas);
    } else {
      getData = [pasvordukas];
    }

    // papildome masyvą, užšifruojame
    localStorage.setItem("passwords", JSON.stringify(getData));

    //Pakeitimu atvaizdavimas
    setData(getData);

    //reset'inimas
    setReset(false);
  }, [passwordLength]);

  return (
    <div className="passwordGenerator">
      <div className="container pt-5">
        <h1>Need a password? Try the 1Password Strong Password Generator.</h1>
        <p>Generate secure, random passwords to stay safe online.</p>
        {/* Password input */}
        <div>
          <label htmlFor="password">Generated password:</label>
          <input
            type="text"
            className="form-control"
            id="password"
            value={reset ? "" : password}
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={19}
            height={19}
            fill="currentColor"
            className="trash"
            viewBox="0 0 16 16"
            onClick={() => {
              //mygtukas reset
              setReset(true);
              setData([]);
              localStorage.clear();
            }}
          >
            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
          </svg>
        </div>

        <div className="container mt-5">
          <h2>10 Last Generated Passwords:</h2>
          <div className="container listItems my-3">
            {reset
              ? ""
              : [...data.slice(-10)]
                  .reverse()
                  .map((item, index) => <li key={index}>{item}</li>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
