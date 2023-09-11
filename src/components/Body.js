import RestaurantCard, { wrappedCard } from "./RestaurantCard";
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus"
import { RES_CARDS_URL } from "../utils/constants";



function Body() {
  const [filteredRestaurant, setFilteredRestaurant] = useState();
  const [restaurants, setRestaurants] = useState([]);


  const [searchText, setSearchText] = useState([]);

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    getData();
  }, []);

  const VegRestaurants = wrappedCard(RestaurantCard);

  const getData = async () => {
    const data = await fetch(RES_CARDS_URL);
    const json = await data.json();

    async function checkJsonData(jsonData) {
      for (let i = 0; i < jsonData?.data?.cards.length; i++) {

        // initialize checkData for Swiggy Restaurant data
        let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        // if checkData is not undefined then return it
        if (checkData !== undefined) {
          return checkData;
        }
      }
    }

    // call the checkJsonData() function which return Swiggy Restaurant data
    const resData = await checkJsonData(json);


    setFilteredRestaurant(resData);

    setRestaurants(resData);
  };


  if (!onlineStatus) {
    return <h2 className="p-10 text-xl font-bold">
      😒Make sure you're online. Binge 🍰🍪🍔🍕😋
      works best with an internet connection.</h2>;
  }

  return !restaurants ? <Shimmer /> : (
    <div className="body pt-1  ">

      <div className="searchAndFilter flex justify-between ">

        <div className="search p-1 ">

          <input className="ml-4 mr-0.5  border-2 shadow-xl border-solid border-stone-700 rounded-md"
            type="text" value={searchText} placeholder="  Search restaurant"
            name="search-input-box"
            onChange={event => setSearchText(event.target.value)} />

          <button className="ml- py-1 px-2 bg-stone-700 rounded-md text-white"
            onClick={() => {
              if(searchText.length){
                const filteredList = restaurants?.
                filter((item) => item?.info?.name?.
                  toLowerCase()?.includes(searchText?.
                    toLowerCase()));

              setFilteredRestaurant(filteredList);
              }
            }}>
            Search </button>

            <button 
            className="ml-4 bg-stone-700  text-white p-1 rounded-md"
            onClick={()=> setFilteredRestaurant(restaurants) }
            >All Restros</button>

        </div>
        <div className="filter p-1 mr-6">
          <button
            className="filter-btn  ml-2 p-1  bg-stone-700 rounded-md text-white"
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

      </div>

      <div className="res-container flex flex-wrap p-1 m-1 gap-2">
        {filteredRestaurant?.map((restaurant) => {
          return <Link to=
            {"restaurants/" + restaurant?.info?.id} key={restaurant?.info?.id}>
            {restaurant.info.veg ?
              <VegRestaurants resData={restaurant?.info} /> :
              <RestaurantCard resData={restaurant?.info} />}
          </Link>;

        })}
      </div>


    </div>
  );
}

export default Body;
