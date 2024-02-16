import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import useRestaurantList from "../utils/useRestaurantList";
import { REST_API_URL_SWIGGY } from "../constants";

const Home = () => {
  const dataList = useRestaurantList(REST_API_URL_SWIGGY); // custom Hook
  const [renderList, setRenderList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setRenderList(dataList);
  }, []);

  return dataList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="w-full py-5">
      <div className="w-10/12 m-auto flex">
        <div className="p-2">
          <input
            className="border-2 border-solid rounded-lg p-1"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
        </div>

        <button
          className="rounded-lg m-2 bg-neutral-300 px-3"
          onClick={(e) => {
            if (searchText === "") return;
            const serachListItems = dataList.filter((data) =>
              data.info.name
                .toLocaleLowerCase()
                .includes(searchText.toLocaleLowerCase())
            );
            setRenderList(serachListItems);
          }}
        >
          Search
        </button>

        <button
          className="rounded-lg m-2 bg-neutral-300 px-3"
          onClick={() => {
            setSearchText("");
            const filterList = dataList.filter(
              (rest) => rest.info.avgRating > 4.3
            );
            setRenderList(filterList);
          }}
        >
          Filter Top Rated
        </button>
      </div>

      <div className="w-full py-5">
        <div className="w-10/12 m-auto flex flex-wrap my-8 justify-between">
          {dataList.map((restaurant) => {
            const restaurentName = restaurant.info.name;
            const id = restaurant.info.id;
            return (
              <Link
                key={restaurant.info.id}
                to={{
                  pathname: "/restaurant/" + restaurant.info.id,
                  search: "?name=" + restaurentName + "&id=" + id,
                }}
              >
                <RestaurantCard restData={restaurant} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
