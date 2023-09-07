import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
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
      (category) => category?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

  // console.log(categories[1].card.card.title);
  return (
    <div className="w-6/12 mx-auto py-4 ">

      <div className="p-4 shadow-md border-b border-dashed border-neutral-300 ">
        <div className="flex justify-between text-lg font-bold text-slate-800  pb-1">
          <h1 className="text-xl font-bold">{name} </h1>
          <h1>{avgRating}✪</h1>
        </div>

        <div className="flex justify-between text-sm font-normal text-gray-500">
          <p> {cuisines.join(", ")} </p>

          <p>{totalRatingsString}</p>
        </div>

      </div>

      {categories?.map((category) => <RestaurantCategory data={category?.card?.card} />)}

    </div>
  );
}

export default RestaurantMenu;
