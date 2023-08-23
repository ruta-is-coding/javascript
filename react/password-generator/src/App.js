import "./App.css";
import Checkbox from "./Checkbox/Checkbox";
import Length from "./Length/Length";
import PasswordInput from "./Password/Password";

function App() {
  return (
    <div className="container mt-5">
      <h1>Need a password? Try the 1Password Strong Password Generator.</h1>
      <p>Generate secure, random passwords to stay safe online.</p>
      <PasswordInput />
      <div className="container border rounded" id="passwordOptions">
        <Length />
        <Checkbox label="Numbers" />
        <Checkbox label="Symbols" />
      </div>
      <div className="container mt-3">
        <h2>10 Last Generated Passwords:</h2>
        <div className="container"></div>
      </div>
    </div>
  );
}

export default App;
