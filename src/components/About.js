import DropDown from "./DropDown";
import Accordian from "./Accordian";
import { useState, useContext } from "react";
import UserInfoContext from "../utils/UserInfoContext";

const About = () => {
  const { loggedInUser, setUserName } = useContext(UserInfoContext); // setUserName is coming from parent passing as function

  return (
    <div className="w-full py-5">
      <div className="w-10/12 m-auto">
        <h3 className="p-2 m-2 text-lg shadow-sm">About Page</h3>
        <h4 className="text-lg pb-2 border-y-1">Accordian Functionality </h4>
        <Accordian />

        <h4 className="text-lg pb-2 border-y-1">
          Checking User Context Use case
        </h4>
        <p className=" pb-2 border-y-1"> User Info :{loggedInUser}</p>
      </div>

      <div className="w-10/12 m-auto">
        <h4 className="text-lg pb-2 border-y-1">
          Set User context Functionality
        </h4>

        <input
          type="text"
          className="border-2"
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}
        />
        <h2 className="text-lg pb-2 border-y-1">
          changing everywhere the user name: {loggedInUser}
        </h2>
      </div>
    </div>
  );
};

export default About;
