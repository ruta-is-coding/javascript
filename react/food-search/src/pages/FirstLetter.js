import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

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
      <h1>Filter by letter {letter}</h1>
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

export default FirstLetter;
