import { useState, useEffect } from "react";
import BackButton from "../components/BackButton/BackButton";
import Description from "../components/Description/Description";

const RandomMeal = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((resp) => resp.json())
      .then((resp) => {
        const meal = resp.meals[0];
        meal.strYoutube = meal.strYoutube.replace("watch?v=", "embed/");
        setData(meal);
      });
  }, []);

  return (
    <>
      <BackButton />
      {data && <Description data={data} />}
    </>
  );
};

export default RandomMeal;
