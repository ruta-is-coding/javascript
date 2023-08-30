import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton/BackButton";
import Description from "../components/Description/Description";

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

  return (
    <>
      <BackButton />
      {data && <Description data={data} />}
    </>
  );
};

export default Meal;
