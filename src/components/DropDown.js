import React, { useEffect, useState } from "react";

const selectHandler = (e) => {
  console.log(e.target.value, this.index);
};

const DropDown = () => {
  const countries = [
    { name: "India", cc: "IN", cities: ["Delhi", "Chennai", "Mumbai"] },
    { name: "Pakistan", cc: "PK", cities: ["Lahore", "Karachi"] },
    { name: "Bangladesh", cc: "BG", cities: ["Dhaka", "Chittagong"] },
  ];
  const [city, setCity] = useState([countries[0].cities]);

  const countryChangeHandler = (e) => {
    const getCityObj = countries.filter(
      (item, index) => item.name === e.target.value
    );
    setCity(getCityObj[0].cities);
  };
  return (
    <div>
      <h3>Drop Down and Select Example Componet</h3>
      <label>Country List:</label> <br></br>
      <select
        className="p-2 m2 cursor-pointer"
        onChange={(e) => {
          countryChangeHandler(e);
        }}
      >
        {countries.map((item) => {
          return (
            <option
              className="p-2 cursor-pointer"
              key={item.name}
              value={item.name}
            >
              {" "}
              {item.name}{" "}
            </option>
          );
        })}
      </select>
      <label>City List:</label>
      <select className="p-2 m-2 cursor-pointer">
        {city.map((item, idx) => {
          return (
            <option className="cursor-pointer" key={item} value={item}>
              {" "}
              {item}{" "}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default DropDown;
