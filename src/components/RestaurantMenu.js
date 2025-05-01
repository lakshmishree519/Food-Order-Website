import RestaurantCategory from "./RestaurantCategory";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { useState } from "react";


const RestaurantMenu = () => {
   const { resId } = useParams();
  const dummy = "Dummy Data";
const resInfo=useRestaurant(resId);
 const [showIndex, setShowIndex] = useState(null);


  if (resInfo === null) return <Shimmer />;

  const { name} =resInfo?.cards[0]?.card?.card?.info;

  
  const categories =  resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return(
    <div className="text-center">
         <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg"></p>
      {categories.map((category, index) => (
        // controlled component
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
          dummy={dummy}
        />
      ))}
    </div>
  );
  
};

export default RestaurantMenu;