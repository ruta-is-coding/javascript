import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "./components/Container/Container";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Admin from "./pages/Admin";
import NewPost from "./pages/NewPost";
import EditPost from "./pages/EditPost";
import "./App.css";

//nd. - paieška ir filtravimas pagal kategorijas (aside)

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/new-post" element={<NewPost />} />
          <Route path="/edit-post/:id" element={<EditPost />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
