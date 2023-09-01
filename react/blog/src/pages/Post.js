import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser"; //teksto (stringo) parsinimas į HTML

const Post = () => {
  const { id } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/posts/" + id)
      .then((resp) => resp.json())
      .then((resp) => setData(resp));
  }, []);

  return (
    data && (
      <div className="mx-auto col-6">
        <h2 className="text-center pb-3">{data.title}</h2>
        <div className="d-flex justify-content-between">
          <span className="bg-danger-subtle px-2 py-1 rounded">
            Author: {data.author}
          </span>
          <time className="bg-danger-subtle px-2 py-1 rounded">
            Date: {data.date}
          </time>
          <span className="bg-danger-subtle px-2 py-1 rounded">
            Category: {data.category}
          </span>
        </div>
        <img src={data.image} alt={data.title} className="pt-5" />
        {/* teksto (stringo) parsinimas į HTML */}
        {parse(data.content)}
      </div>
    )
  );
};

export default Post;
