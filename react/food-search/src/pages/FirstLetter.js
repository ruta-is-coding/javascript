import { useParams, Link } from "react-router-dom";

const FirstLetter = () => {
  const { letter } = useParams();

  const alphabet = [];
  for (let i = 0; i < 26; i++) alphabet.push(String.fromCharCode(65 + i));

  return <h1>Filter by letter {letter}</h1>;
};

export default FirstLetter;
