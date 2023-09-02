import { useState, useEffect } from "react";
// redirect hook (peradresavimui)
import { useNavigate, useParams } from "react-router-dom";

const EditPost = () => {
  const [data, setData] = useState({
    title: "",
    author: "",
    category: "",
    image: "",
    content: "",
    excerpt: "",
  }); //formos duomenys išsaugomi objekte
  const navigate = useNavigate(); //peradresavimui
  const { id } = useParams();

  useEffect(() => {
    fetch("http://localhost:3000/posts/" + id)
      .then((resp) => resp.json())
      .then((resp) => {
        delete resp.id;
        setData(resp);
      });
  }, []);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleform = (e) => {
    e.preventDefault();

    //Formos duomenų išsiuntimas
    fetch("http://localhost:3000/posts/" + id, {
      method: "PUT",
      //informacija priimame tik šiuo būdu
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(data), //prie body key nurodome informaciją, kurią norime persiųsti
    })
      .then((resp) => resp.json())
      .then(() => navigate("/admin"));
    //kai submitinsime formą, keliausime į /admin puslapį
    //pirmas parametras - to
  };

  return (
    <>
      <h2>Edit Post</h2>
      <form onSubmit={handleform}>
        <div className="mb-3">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            className="form-control"
            onChange={handleChange}
            value={data.title}
            required
          />
        </div>
        <div className="mb-3">
          <label>Author:</label>
          <input
            type="text"
            name="author"
            className="form-control"
            onChange={handleChange}
            value={data.author}
            required
          />
        </div>
        <div className="mb-3">
          <label>Category:</label>
          <input
            type="text"
            name="category"
            className="form-control"
            onChange={handleChange}
            value={data.category}
            required
          />
        </div>
        <div className="mb-3">
          <label>Image url:</label>
          <input
            type="text"
            name="image"
            className="form-control"
            onChange={handleChange}
            value={data.image}
            required
          />
        </div>
        <div className="mb-3">
          <label>Text content:</label>
          <textarea
            name="content"
            className="form-control"
            onChange={handleChange}
            value={data.content}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label>Excerpt:</label>
          <textarea
            name="excerpt"
            className="form-control"
            onChange={handleChange}
            value={data.excerpt}
            required
          ></textarea>
        </div>
        <button className="btn btn-success">Save</button>
      </form>
    </>
  );
};

export default EditPost;
