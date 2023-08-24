import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import VideoPlayers from "./Pages/VideoPlayers/VideoPlayers";
import ToDo from "./Pages/ToDoList/ToDoList";
import LandingPage from "./Pages/LandingPage/LandingPage";
import PasswordGenerator from "./Pages/PasswordGenerator/PasswordGenerator";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/password-generator" element={<PasswordGenerator />} />
        <Route path="/to-do-list" element={<ToDo />} />
        <Route path="/video-players" element={<VideoPlayers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
