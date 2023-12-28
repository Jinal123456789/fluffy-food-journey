import React, { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../component/config";
import Shimmer from "../component/simmer.js";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";


// you can also write props into ()
// and you'll have to write rops.restaurant.info?.name
// you can also write {restaurant} into () and const {cloudinaryImageId, name, cuisines, avgRating} = restaurant.info; 
// and you'll need to just write name 

const RestrauntCard = ({cloudinaryImageId, name, cuisines, avgRating, id}) =>{ 
  // const RestrauntCard = ({avatar, first_name, email, id}) =>{ 
    // console.log(avatar,"hi hjkskdj");
    // const {cloudinaryImageId, name, cuisines, avgRating} = restaurant.info;
    return(
      <div className="card">
        <img src={IMG_CDN_URL+
        cloudinaryImageId}></img>
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{avgRating}</h4> 
        <h4>{id}</h4> 
      </div>
    //   <div className="card">
    //   <img src={avatar}></img>
    //   <h2>{first_name}</h2>
    //   <h3>{email}</h3>
    //   <h4>{id}</h4> 
    // </div>
    )
  }




function filterData(searchText, allRestaurants) {
  try {
    const filteredData = allRestaurants.filter((restaurant) =>
      restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );
    // console.log(filteredData, "filterData");
    return filteredData;
  } catch (error) {
    console.error(error);
    return [];
  }
}

const Body = () => {
  // let searchText = "KFC";
  const [searchText, setSearchText] = useState("KFC");
  const [allRestaurants, setallRestaurants] = useState([]);
  const [filteredRstaurants, setFilteredRestaurant] = useState([]);
  // console.log(filteredRstaurants, "datakkk");
  // const [searchClicked, setSearchClicked] = useState("true");
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      // console.log(json.data?.cards);
      // optional chaining
      setallRestaurants(
        json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurant(
        json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      
      // searchRestaurant(json.data);
      console.log( json.data,"hkhh");
    } catch (error) {
      console.error("Error fetching initial data:", error);
    }
  }

  // NOT RENDER COMPONENT (early render)
  if (!allRestaurants && filteredRstaurants)
    return <h1>No Restaurants are available Right now opens at 11.30AM</h1>;
  return allRestaurants && allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    // return(
    <>
    
      {/* {console.log(allRestaurants)}
      {console.log(filteredRstaurants,"filteredRstaurants")} */}
      <div className="searchBar">
        <input
          type="text"
          className="searchInput"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="bttn-search"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurant(data);
            // need to filter the data
            // update the state - restaurant
          }}
        >
          {" "}
          SEARCH
        </button>
      </div>
      {filteredRstaurants?.length === 0 && allRestaurants.length > 0 ? (
        <h1> No restaurant present under this Name... </h1>
      ) : (
        
        <div className="card-content">
        <div className="allCard">
          {/* you can also use loop to make it dynamic but we usually use map function for that or you can also use foreacch loop find that difference also */}

          {/* using map */}
          {filteredRstaurants?.map((resaturant) => {
            return (
              <Link to={"/restaurant/" + resaturant.info.id}>
              <RestrauntCard {...resaturant.info} key={resaturant.info.id} />
              </Link>
            );
          })}
        </div>
        </div>
      )}
    </>
  );
};

export default Body;
// restaurant with hardcoded data
//===============================
// const burgerking = {
//   name : "Burger King",
//   image : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
//   cusinies : ["American","snacks"],
//   ratings : "4.8"
// }
// const RestrauntCard = () =>{
//   return(
//     <div className="card">
//       <img src={burgerking.image}></img>
//       <h2>{burgerking.name}</h2>
//       <h3>{burgerking.cusinies.join(", ")}</h3>
//       <h4>{burgerking.ratings}</h4>
//     </div>
//   )
// }