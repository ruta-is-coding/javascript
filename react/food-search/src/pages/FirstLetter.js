import { useParams, Link } from "react-router-dom";

const FirstLetter = () => {
  const { letter } = useParams();

  return <h1>Filter by letter {letter}</h1>;
};

export default FirstLetter;
