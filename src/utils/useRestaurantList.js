import { useEffect, useState } from "react";
import restaurant from "../mockdata/restaurant";

const useRestaurantList = (apiUrl) => {
  const [restaurantList, setRestaurantList] = useState([]);
  const staticList =
    restaurant?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants;

  const fetchData = async () => {
    try {
      const response = await fetch(apiUrl);
      const jsonData = await response.json();
      //TO DO Set a promise and then get error, if error then go to static file
      const restList = staticList;
      setRestaurantList(restList);
    } catch (error) {
      // TODO DEFAULT
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return restaurantList;
};

export default useRestaurantList;
