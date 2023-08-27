import { IMG_URL } from "../utils/constants";


function RestaurantCard(props) {

  const { cloudinaryImageId, name, avgRating, areaName, cuisines } = props.resData;
  return (
    <div className="restaurant-card w-48 p-1 rounded-md shadow-lg m-1  font-thin">
      <img
        className="w-48 rounded-lg p-1"
        src={IMG_URL + cloudinaryImageId}
        alt="" />
      <h2 className="font-semibold">{name}</h2>
      <h3>{avgRating} ★</h3>
      <h3>{areaName}</h3>
      <h3>{cuisines[0]}</h3>
    </div>
  );
}

  export default RestaurantCard;