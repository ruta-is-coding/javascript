import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PhotoList from "../components/PhotoList/PhotoList";

const Home = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();

  const alphabet = [];
  for (let i = 0; i < 26; i++) {
    alphabet.push(String.fromCharCode(65 + i));
  }

  const selectCategory = (e) => {
    const optionValue = e.target.value;
    setSelectedCategory(optionValue);
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=" + optionValue)
      .then((resp) => resp.json())
      .then((resp) => {
        setData(resp.meals);
        setSearch("");
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSelectedCategory();
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + search)
      .then((resp) => resp.json())
      .then((resp) => {
        if (resp.meals) setData(resp.meals);
      });
  };

  //Kaip iš select option ištraukti vertę?

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((resp) => resp.json())
      .then((resp) => {
        setCategories(resp.categories);
      });
  }, []);

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
        <select className="my-3 form-select" onChange={selectCategory}>
          <option selected={!selectedCategory}>Select category</option>
          {categories.map((value, index) => (
            <option
              value={value.strCategory}
              key={index}
              selected={selectedCategory === value.strCategory}
            >
              {value.strCategory}
            </option>
          ))}
        </select>
      </div>
      <PhotoList data={data} />
    </>
  );
};

export default Home;
