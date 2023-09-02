// Admino panelė
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Admin = () => {
  const [data, setData] = useState([]);
  const [message, setMessage] = useState();

  useEffect(() => {
    if (!message && typeof message === "boolean") return;

    fetch("http://localhost:3000/posts")
      .then((resp) => resp.json())
      .then((resp) => setData(resp));
  }, [message]);

  const handleDelete = (id) => {
    fetch("http://localhost:3000/posts/" + id, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then(() => {
        setMessage("A blog post successfully deleted");
        setTimeout(() => {
          setMessage(false);
        }, 3500);
      });
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h2>Admino panelė</h2>
        <Link to="/new-post" className="btn btn-success">
          New Post
        </Link>
      </div>

      {message && <div className="alert alert-success mt-3">{message}</div>}

      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((value, index) => (
            <tr key={index}>
              <td>{value.title}</td>
              <td>{value.author}</td>
              <td>{value.category}</td>
              <td>{value.date}</td>
              <td className="d-flex gap-3">
                <Link className="btn btn-warning" to={"/edit-post/" + value.id}>
                  Edit
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(value.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Admin;
