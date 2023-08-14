import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer"
import { useEffect, useState } from "react";

const Body = () => {
  const [filteredRestaurant, setFilteredRestaurant] = useState();
  const [restaurants, setRestaurants] = useState([]);

  const [searchText, setSearchText] = useState([]);





  useEffect(() => {
    getData();
  }, [])


  const getData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6691565&lng=77.45375779999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

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
          return <RestaurantCard key={restaurant?.info?.id} resData={restaurant?.info} />;
        })}
      </div>


    </div>
  );
};

export default Body;
