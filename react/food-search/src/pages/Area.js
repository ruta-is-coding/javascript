import { useParams } from "react-router-dom";

const Area = () => {
  const { name } = useParams();

  return <h1>Area: {name}</h1>;
};

export default Area;
