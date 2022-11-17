import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
const Home = () => {
  const params = useParams();
  const [data, setData] = useState({});
  console.log(params);

  const getDataById = async (id) => {
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    setData(response.data);
  };

  useEffect(() => {
    getDataById(params.id);
  }, []);
  return (
    <div>
      {data && (
        <div>
          {data.brand}
          {data.title}
        </div>
      )}
    </div>
  );
};
export default Home;
