import { IMG_CDN_URL } from "../constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

// Restaurant card component: Image, name, cuisine
const RestaurantCard = (
  {
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  sla,
  costForTwo,
  avgRatingString,
}) => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img src={IMG_CDN_URL + cloudinaryImageId} className="rounded-lg"/>
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{areaName}</h5>
      <span>
        <ul>
          <li><h4
          style={
            avgRatingString < 4
              ? { backgroundColor: "var(--light-red)" }
              : avgRatingString === "--"
                ? { backgroundColor: "white", color: "black" }
                : { color: "black" }
          }
        >
          <i className="fa-solid fa-star"></i>{avgRatingString}
        </h4></li>
        <li>
          <h4>{sla?.lastMileTravelString ?? '2.0 km'}</h4>
        </li>
        <li><h4>{costForTwo ?? '₹200 for two'}</h4></li>
        <li><h4>User : {loggedInUser} </h4></li>
        </ul>
      </span>
    </div>
  );
};



export default RestaurantCard;