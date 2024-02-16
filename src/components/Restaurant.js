import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";

const Restaurant = () => {
  const { restId } = useParams();
  const [restInfo, setRestInfo] = useState([]);

  const location = useLocation();
  // Get a specific query parameter
  const getName = new URLSearchParams(location.search).get("name");
  const getId = new URLSearchParams(location.search).get("id");
  const restAPIKey =
    getName.split(" ").join("-").toLocaleLowerCase() + "-" + getId;

  const fetchRestInfo = async () => {
    const data = await fetch(
      "https://www.swiggy.com/restaurants/suvai-briyani-restaurant-palakarai-kk-nagar-trichy-523453"
    );
    const dataJson = await data.json();
    setRestInfo(dataJson);

    console.log(dataJson);
  };
  useEffect(() => {
    // fetchRestInfo();
  }, []);

  return (
    <div>
      <h1>Restaurant Info</h1>
      <h3>Restaurante Name : restInfo</h3>
      <h3>Menu : </h3>
    </div>
  );
};

export default Restaurant;
