import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import BackButton from "../components/BackButton/BackButton";
import PhotoList from "../components/PhotoList/PhotoList";

const FirstLetter = () => {
  const [data, setData] = useState([]);
  const { letter } = useParams();

  useEffect(() => {
    fetch("https:/www.themealdb.com/api/json/v1/1/search.php?f=" + letter)
      .then((resp) => resp.json())
      .then((resp) => {
        setData(resp.meals);
        console.log(resp);
      });
  }, []);

  return (
    <>
      <BackButton />
      <h1>Filter by letter {letter}</h1>
      <PhotoList data={data} />
    </>
  );
};

export default FirstLetter;
