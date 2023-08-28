import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const RandomMeal = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((resp) => resp.json())
      .then((resp) => {
        setData(resp.meals[0]);
        console.log(data);
      });
  }, []);

  const Ingredients = () => {
    const ingredients = [];

    for (let i = 1; i <= 20; i++) {
      const ingredient = data["strIngredient" + i];
      const measure = data["strMeasure" + i];

      ingredient &&
        ingredients.push(
          <li key={i}>
            {ingredient} {measure}
          </li>
        );
    }

    return ingredients;
  };

  return (
    <>
      {data && (
        <>
          <h1>{data.strMeal}</h1>
          <div className="row mt-5">
            <div className="col-6 mb-3">
              <img src={data.strMealThumb} alt={data.strMeal} />
            </div>
            <div className="col-6 mb-3">
              <h3>Info: </h3>
              <div>
                <span>Category: </span>
                <Link to={"/category/" + data.strCategory}>
                  {data.strCategory}
                </Link>
              </div>
              <div>Area: {data.strArea}</div>
              <h3>Ingredients: </h3>
              <Ingredients />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default RandomMeal;
