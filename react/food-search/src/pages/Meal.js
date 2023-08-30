import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import BackButton from "../components/BackButton/BackButton";

const Meal = () => {
  const [data, setData] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id)
      .then((resp) => resp.json())
      .then((resp) => {
        const meal = resp.meals[0];
        //meal.strYoutube = 'https://www.youtube.com/embed/' + meal.strYoutube.split('?v=')[1];
        meal.strYoutube = meal.strYoutube.replace("watch?v=", "embed/");
        setData(meal);
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
            <Link to={"/ingredient/" + ingredient}>{ingredient}</Link>
            <span> {measure}</span>
          </li>
        );
    }

    return ingredients;
  };

  return (
    <>
      <BackButton />
      <h1>Meal info:</h1>
      {data && (
        <div className="row mt-3">
          <div className="col-6 mb-3">
            <img src={data.strMealThumb} alt={data.strMeal} className="mb-3" />
            <iframe
              width="100%"
              height="315"
              src={data.strYoutube}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="col-6">
            <h2>{data.strMeal}</h2>
            <ul>
              <li>
                <span>Category: </span>
                <Link to={"/category/" + data.strCategory}>
                  {data.strCategory}
                </Link>
              </li>
              <li>
                <span>Area: </span>
                <Link to={"/area/" + data.strArea}>{data.strArea}</Link>
              </li>
            </ul>
            <h3>Ingredients: </h3>
            <Ingredients />
          </div>
        </div>
      )}
    </>
  );
};

export default Meal;
