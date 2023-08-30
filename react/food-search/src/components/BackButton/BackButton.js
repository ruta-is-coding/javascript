import { Link } from "react-router-dom";
import "./BackButton.css";

const BackButton = () => {
  return (
    <Link to={"/"} className="backButton btn btn-light">
      Back to the homepage
    </Link>
  );
};

export default BackButton;
