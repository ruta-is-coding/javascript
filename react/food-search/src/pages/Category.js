import { useParams } from "react-router-dom";

const Category = () => {
  const { name } = useParams();

  return <h1>Category: {name}</h1>;
};

export default Category;
