import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);

  const alphabet = [];
  for (let i = 0; i < 26; i++) {
    alphabet.push(String.fromCharCode(65 + i));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + search)
      .then((resp) => resp.json())
      .then((resp) => setData(resp.meals));
  };

  //Kaip iš select option ištraukti vertę?

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((resp) => resp.json())
      .then((resp) => {
        setCategories(resp.categories);
      });
  }, []);

  console.log(categories);

  return (
    <>
      <h1 className="mb-3">Meal database search</h1>
      <div className="d-flex gap-2">
        <form className="input-group" onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="Enter meal title"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="btn btn-primary">Search</button>
        </form>
        <Link to={"/random"} className="btn btn-success">
          I'm lucky
        </Link>
      </div>
      <div className="d-flex gap-3 mt-2 justify-content-center flex-wrap">
        {alphabet.map((letter, index) => (
          <Link key={index} to={"/letter/" + letter}>
            {letter}
          </Link>
        ))}
      </div>
      <div className="col-3">
        <select className="my-3 form-select">
          {categories.map((value, index) => (
            <option
              value={value.strCategory}
              key={index}
              // onChange={categoryItems}
            >
              {value.strCategory}
            </option>
          ))}
        </select>
      </div>
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

export default Home;
