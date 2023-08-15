
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data?.json();
    setResInfo(json?.data)
  }

  if (resInfo == null) {       // might be null/undefined so == used 
    return <Shimmer />
  }

  const { name, cuisines, costForTwoMessage, avgRating }
    = resInfo?.cards[0]?.card?.card?.info

  let { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;


  return (
    <div>

      <h2>{name} </h2>
      <p>{cuisines.join()}</p>
      <p>{costForTwoMessage}</p>
      <p>{avgRating} ⭐</p>
      {itemCards ? <h2>Menu</h2> : ""}

      {itemCards?.map((item) => {
        return <li key={item?.card?.info?.id}> {item?.card?.info?.name}
          {" Rs. "} {item?.card?.info?.price / 100}  </li>
      })}





    </div>
  )
}

export default RestaurantMenu;
