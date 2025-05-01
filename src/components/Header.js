import { useState, useContext } from "react";
import FoodFireLogo from "../Images/Food Fire Logo.png";
import { Link } from "react-router-dom"; // imported Link for client side routing
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

// Title component for display logo
const Title = () => (
  <a href="/">
    <img
      className="logo"
      src={FoodFireLogo}
      alt="Food Fire Logo"
      title="Food Fire Logo"
    />
  </a>
);


const Header = () => {

   const onlineStatus = useOnlineStatus();
   const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
            <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to="/cart">Cart - ({cartItems.length} items)</Link>
          </li>
          <li className="px-4">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;