import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((resp) => resp.json())
      .then((resp) => setData(resp));
  }, []);

  return (
    <>
      <h1 className="text-center pb-5">Hey, besties! Welcome to my blog!</h1>
      <main className="row">
        <section className="col-9">
          {data.map((value) => (
            <div className="card rounded overflow-hidden shadow-sm">
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
                <div className="col-7 p-3 ">
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
        <aside className="col-3 ">
          <div className="bg-danger-subtle"></div>
        </aside>
      </main>
    </>
  );
};

export default Home;
