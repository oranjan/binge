import { useParams } from "react-router-dom";
import { useState } from "react";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [isVisible, setIsVisible] = useState(null);

  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId); // abstracted fetch functionality into custom hook
  if (resInfo == null) { // might be null/undefined so == used 
    return <Shimmer />;
  }

  const {
    name,
    cuisines,
    avgRating,
    totalRatingsString
  } = resInfo?.cards[0]?.card?.card?.info;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) => category?.card?.card?.["@type"]
        === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")


  // console.log(categories[1].card.card.title);
  return (
    <div className="w-6/12 mx-auto py-4 ">

      <div className="p-4 border-b border-dashed border-neutral-300 w-10/12 mx-auto ">
        <div className="flex justify-between text-2xl font-bold text-slate-800  mb-2">
          <h1 className="font-bold">{name} </h1>
          <h1>{avgRating} ✪</h1>
        </div>

        <div className="flex justify-between text-sm font-normal text-gray-500">
          <p> {cuisines.join(", ")} </p>

          <p>{totalRatingsString}</p>
        </div>

      </div>
      {categories?.map((category, index) => <RestaurantCategory
        key={category?.card?.card?.title}
        data={category?.card?.card}
        setIsVisible={()=>setIsVisible(index)}
        isVisible={isVisible===index}
      />)
      }
      {/*no key so passed the name of  category or res*/}
    </div>
  );
}

export default RestaurantMenu;
