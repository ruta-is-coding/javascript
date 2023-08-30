import { Link } from "react-router-dom";

const PhotoList = ({ data }) => {
  return (
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
  );
};

export default PhotoList;
