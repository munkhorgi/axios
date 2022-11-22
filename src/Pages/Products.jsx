import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import Users from "./Users";
const Products = () => {
  const [data, setData] = useState([]);
  const [id, setId] = useState();
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
    <div>
     <input
        id="input"
        type="text"
        onChange={(e) => setId(e.target.value)}
      ></input>
      <Button onChange={getData}>get</Button>
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
    </div>
  );
};
export default Products;
