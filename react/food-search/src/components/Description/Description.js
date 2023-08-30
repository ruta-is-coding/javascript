import { Link } from "react-router-dom";

const Description = ({ data }) => {
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
      <h1>{data.strMeal}</h1>
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
        <div className="col-6 mb-3">
          <h3>Info:</h3>
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
    </>
  );
};

export default Description;
