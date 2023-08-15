import { IMG_URL } from "../utils/constants";


const RestaurantCard = (props) => {
  const{cloudinaryImageId,name,avgRating}=props.resData;
    return (
      <div className="restaurant-card">
        <img
          src={
            IMG_URL +cloudinaryImageId
          }
          alt=""
        />  
        <h2>{name}</h2>
        <h3>{avgRating}⭐</h3>
      </div>
    ); 
  };

  export default RestaurantCard;