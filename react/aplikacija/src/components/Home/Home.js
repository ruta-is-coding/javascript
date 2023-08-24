import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <h1>Titulinis puslapis</h1>
      <Link to="/about-us">Apie mus</Link>
    </>
  );
};

export default Home;
