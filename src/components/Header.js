import { Link } from "react-router-dom"; // Helps to navigate from one component to another component
import { useContext } from "react";
import UserInfoContext from "../utils/UserInfoContext";

const Header = () => {
  const data = useContext(UserInfoContext);

  return (
    <div className="w-full bg-neutral-700 text-white">
      <div className="w-10/12 m-auto flex justify-between">
        <div className="w-20">
          <img src="https://www.w3schools.com/html/img_girl.jpg" alt="logo" />
        </div>

        <div className="flex items-cente mr-14">
          <ul className="flex items-center">
            <li className="p-2">
              <Link to="/">Home</Link>
            </li>
            <li className="p-2">
              <Link to="/about">About</Link>
            </li>
            <li className="p-2">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="p-2">
              <Link to="/classcomponent">Class</Link>
            </li>
            <li className="p-2">User : {data?.loggedInUser}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
