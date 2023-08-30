import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import BackButton from "../components/BackButton/BackButton";

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
      <div className="row mt-3">
        {data.map((value) => (
          <div className="col-6 mb-3" key={value.idMeal}>
            <Link to={"/meal/" + value.idMeal}>
              <img src={value.strMealThumb} alt={value.strMeal} />
            </Link>
            <h3>{value.strMeal}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default Ingredient;
