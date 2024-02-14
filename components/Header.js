import { Link } from "react-router-dom"; // Helps to navigate from one component to another component

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="logoContainer">
        <img src="https://www.w3schools.com/html/img_girl.jpg" alt="logo" />
      </div>

      <div className="navItems">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/classcomponent">Class</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
