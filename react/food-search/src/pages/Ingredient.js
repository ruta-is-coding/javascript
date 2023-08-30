import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import BackButton from "../components/BackButton/BackButton";
import PhotoList from "../components/PhotoList/PhotoList";

const Ingredient = () => {
  const [data, setData] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=" + name)
      .then((resp) => resp.json())
      .then((resp) => {
        setData(resp.meals);
      });
  });

  return (
    <>
      <BackButton />
      <h1>Ingredient: {name}</h1>
      <PhotoList data={data} />
    </>
  );
};

export default Ingredient;
