import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/search/" + search);
  };

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((resp) => resp.json())
      .then((resp) => setData(resp));
  }, []);

  return (
    <>
      <div className="d-flex justify-content-end gap-3">
        <Link to="/new-post" className="btn btn-success">
          New Post
        </Link>
        <Link to="/admin" className="btn btn-success">
          Admin{" "}
        </Link>
      </div>
      <h1 className="text-center pb-5">Hey, besties! Welcome to my blog!</h1>
      <main className="row mb-5">
        <section className="col-9 d-flex flex-column gap-3">
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
        </section>
        <aside className="col-3 bg-danger-subtle py-3 rounded shadow-sm border">
          <form className="searchBar" onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
        </aside>
      </main>
    </>
  );
};

export default Home;
