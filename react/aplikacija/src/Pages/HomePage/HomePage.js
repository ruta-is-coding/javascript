import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div className="container mt-5">
      <h1 className="my-3">React projects:</h1>
      {/* Links */}
      <div className="list-group">
        <Link
          to="/landing-page"
          className="list-group-item list-group-item-action list-group-item-danger"
        >
          Landing Page
        </Link>
        <Link
          to="/video-players"
          className="list-group-item list-group-item-action list-group-item-warning"
        >
          Video Players
        </Link>
        <Link
          to="/to-do-list"
          className="list-group-item list-group-item-action list-group-item-success"
        >
          To-Do List
        </Link>
        <Link
          to="/password-generator"
          className="list-group-item list-group-item-action list-group-item-info"
        >
          Password Generator
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
