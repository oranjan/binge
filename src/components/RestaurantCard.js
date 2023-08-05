import { IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    //FXN
    return (
      <div className="restaurant-card">
        <img
          src={
            IMG_URL + props.resData?.cloudinaryImageId
          }
          alt=""
        />  
        <h2>{props.resData?.name}</h2>
        <h3>{props.resData?.deliveryTime} minutes</h3>
        <h3>{props.resData?.avgRating}</h3>
      </div>
    ); 
  };

  export default RestaurantCard;