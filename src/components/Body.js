import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus"

const Body = () => {
  const [filteredRestaurant, setFilteredRestaurant] = useState();
  const [restaurants, setRestaurants] = useState([]);

  const [searchText, setSearchText] = useState([]);

  const onlineStatus= useOnlineStatus();

  useEffect(() => {
    getData();
  }, [])


  const getData = async () => {
    const data = await fetch("https://corsproxy.io/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D28.6691565%26lng%3D77.45375779999999%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING");
    const json = await data.json();
    setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }
  

  if(!onlineStatus)
  { return  <h2>
    😒Make sure you're online. Binge 🍰🍪🍔🍕😋 works best with an internet connection.</h2>}

  return !restaurants ? <Shimmer /> : (
    <div className="body">

      <div className="search">
        <input type="text" value={searchText} placeholder="Search"
          onChange={event => setSearchText(event.target.value)} />

        <button onClick={() => {
          const filteredList = restaurants?.filter((item) =>
            item?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase()));
          setFilteredRestaurant(filteredList)
        }}>
          Search </button>

      </div>

      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurant?.map((restaurant) => {
          return <Link to=
          {"restaurants/"+restaurant?.info?.id} key={restaurant?.info?.id}>
            <RestaurantCard resData={restaurant?.info} />
          </Link>

        })}
      </div>


    </div>
  );
};

export default Body;
