import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

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
      <h1>Category: {name}</h1>
      <div className="row mt-5">
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

export default Category;
