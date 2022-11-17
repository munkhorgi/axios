import { useEffect, useState } from "react";
import axios from "axios";
import Users from "./Users";
const Products = () => {
  const [data, setData] = useState([]);

  const instance = axios.create({
    baseURL: "https://dummyjson.com/products",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const getData = async () => {
    const rosponse = await instance.get();
    console.log(rosponse.data);
    setData(rosponse.data.products);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="grid-container">
      {data &&
        data.map((user) => {
          return (
            <div>
              <Users user={user} />
            </div>
          );
        })}
    </div>
  );
};
export default Products;
