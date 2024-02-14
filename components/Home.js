import RestaurantCard from "./RestaurantCard";
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { REST_API_URL_ZOMOTTO, REST_API_URL_SWIGGY } from "../constants";

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [renderCardList, setRenderCardList] = useState([]);
  const [dataList, setDataList] = useState([]);

  const fetchData = async () => {
    const response = await fetch(REST_API_URL_SWIGGY);
    const dataList = await response.json();
    // const restList = dataList?.page_data?.sections?.SECTION_ENTITIES_DATA;
    const restList =
      dataList?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setDataList(restList);
    setRenderCardList(restList);
  };

  useEffect(() => {
    console.log(dataList.length);
    fetchData();
  }, []);

  return dataList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="bodyContainer">
      <div className="search">
        <input
          className="searchBox"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="btn"
          onClick={(e) => {
            const searchListData = dataList.filter((data) =>
              data.info.name
                .toLocaleLowerCase()
                .includes(searchText.toLocaleLowerCase())
            );
            setRenderCardList(searchListData);
          }}
        >
          Search
        </button>
        <button
          className="btn"
          onClick={() => {
            const filterList = dataList.filter(
              (rest) => rest.info.avgRating >= 4
            );
            // setSearchText(" ");
            setRenderCardList(filterList);
          }}
        >
          Filter Top Rated
        </button>
      </div>
      <div className="restroContainer">
        {renderCardList.map((restaurant) => {
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
  );
};

export default Home;
