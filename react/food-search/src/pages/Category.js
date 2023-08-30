import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import BackButton from "../components/BackButton/BackButton";
import PhotoList from "../components/PhotoList/PhotoList";

const Category = () => {
  const [data, setData] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=" + name)
      .then((resp) => resp.json())
      .then((resp) => {
        setData(resp.meals);
      });
  });

  return (
    <>
      <BackButton />
      <h1>Category: {name}</h1>
      <PhotoList data={data} />
    </>
  );
};

export default Category;
