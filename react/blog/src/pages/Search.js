import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Search = () => {
  const [data, setData] = useState([]);
  const { search } = useParams();

  useEffect(() => {
    fetch("http://localhost:3000/posts?title_like=" + search)
      .then((resp) => resp.json())
      .then((resp) => {
        setData(resp);
        console.log(data[0]);
      });
  }, []);

  return (
    <>
      <div className="d-flex flex-column gap-3 mb-5">
        <Link className="btn btn-danger" style={{ width: "10%" }} to="/">
          Back home
        </Link>
        <h1>Search results of: {search}</h1>
      </div>
      {data.map((value, index) => (
        <div className="card rounded overflow-hidden shadow-sm" key={index}>
          <div className="row">
            <div className="col-5">
              <img
                src={value.image}
                alt={value.title}
                style={{
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="col-7 p-4">
              <h3 className="pb-3">{value.title}</h3>
              <p>{value.excerpt}</p>
              <Link to={"/post/" + value.id} className="btn btn-danger">
                More
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Search;
