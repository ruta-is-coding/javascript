// Admino panelė
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Admin = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((resp) => resp.json())
      .then((resp) => setData(resp));
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h2>Admino panelė</h2>
        <Link to="/new-post" className="btn btn-success">
          New Post
        </Link>
      </div>
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
          {data.map((value) => (
            <tr>
              <td>{value.title}</td>
              <td>{value.author}</td>
              <td>{value.category}</td>
              <td>{value.date}</td>
              <td className="d-flex gap-3">
                <Link className="btn btn-warning">Edit</Link>
                <Link className="btn btn-danger">Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Admin;
