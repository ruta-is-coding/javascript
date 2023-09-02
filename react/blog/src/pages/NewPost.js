import { useState } from "react";
// redirect hook (peradresavimui)
import { useNavigate } from "react-router-dom";

const NewPost = () => {
  const [data, setData] = useState({}); //formos duomenys išsaugomi objekte
  const navigate = useNavigate(); //peradresavimui

  const handleChange = (e) => {
    //išspreadiname visus prieš tai buvusius duomenis
    //key - e.target.name
    //value - e.target.value
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleform = (e) => {
    e.preventDefault();
    //Datos generavimas
    const date = new Date();
    //Datos konvertavimas ir priskyrimas prie data objekto key date
    data.date = date.toLocaleDateString("lt-LT");

    //Formos duomenų išsiuntimas
    fetch("http://localhost:3000/posts", {
      method: "POST",
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
      <h2>New Post</h2>
      <form onSubmit={handleform}>
        <div className="mb-3">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            className="form-control"
            onChange={handleChange}
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
            required
          />
        </div>
        <div className="mb-3">
          <label>Text content:</label>
          <textarea
            name="content"
            className="form-control"
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label>Excerpt:</label>
          <textarea
            name="excerpt"
            className="form-control"
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button className="btn btn-success">Save</button>
      </form>
    </>
  );
};

export default NewPost;
