import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../component/config";
import Shimmer from "../component/simmer";

const RestaurantMenu = () => {
  const param = useParams();
  // <h1>restaurant menu id : {param.id}</h1>
  const { id } = param;
  {/* <h1>restaurant menu id : {id}</h1> */}
  // console.log(param);
  const [restaurantDetails, setRestaurantDetails] = useState(null);
  const [restaurantMenu, setRestaurantMenu] = useState(null);

  useEffect(() => {
    getRestaurantMenu();
  }, []);
  async function getRestaurantMenu() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId="+id+"&catalog_qa=undefined&submitAction=ENTER"
      );
      const json = await data.json();
      setRestaurantDetails(json?.data?.cards[0]?.card?.card?.info);
      setRestaurantMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap);
      //   console.log(restaurantMenu.REGULAR.cards,"joijds");
      //   {console.log(Object.values(restaurantMenu.REGULAR.cards),"normal in useeffect")}
      // [2]?.card?.card?.itemCards
    } catch (error) {
      console.error("Error fetching initial data:", error);
    }
  }
  //   console.log(restaurantMenu,"joijds");
  return !restaurantDetails && !restaurantMenu ? (
    <Shimmer />
  ) : (
    <>
    <div className="restUpper">
      <div>
      {/* <h1 className="restID">restaurant menu id : {param.id}</h1> */}
      <h3>restaurant menu id : {id}</h3>
      {/* {console.log(restaurantMenu[0].card.info.name,"in")} */}
      <h1>{restaurantDetails.id}</h1>
      <h3 className="upperName">{restaurantDetails.name}</h3>
      <h3 className="upperArea">{restaurantDetails.areaName}</h3>
      {/* <h3>{restaurantDetails.costForTwo}</h3> */}
      <h3 className="upperCuisines">
        {restaurantDetails.cuisines && restaurantDetails.cuisines.join(" , ")}
      </h3>
      <h3 className="upperRating">{restaurantDetails.avgRating}</h3>
      </div>
      <div>
      <img className="upperImg" alt="img" src={IMG_CDN_URL + restaurantDetails?.cloudinaryImageId} />
      </div>
    </div>
      <div className="restCard">
        <h1>Card Names</h1>
        
          {/* {console.log(restaurantMenu.REGULAR.cards,"array")} */}
          {/* {console.log(Object.values(restaurantMenu.REGULAR))} */}
          {/* {console.log(Object.values(restaurantMenu.REGULAR.cards),"array")} */}

          {Object.values(restaurantMenu?.REGULAR?.cards).map(
            (restData, outerIndex) => (
              <div className="menuCard">
                {/* {console.log(Object.values(restData?.card?.card),"vvv")} */}

                <h2>{restData?.card?.card?.title}</h2>
                {restData?.card?.card?.itemCards &&
                Array.isArray(restData?.card?.card?.itemCards) ? (
                  <ul className="menuDesign">
                    {restData?.card?.card?.itemCards.map((item, innerIndex) => (
                      <div>
                        {/* <li className="menuList" key={innerIndex}> */}
                        <li
                          className={`menuList ${
                            innerIndex ===
                            restData.card.card.itemCards.length - 1
                              ? "last-item"
                              : ""
                          }`}
                          key={innerIndex}
                        >
                          {/* className="menuList last-item" */}
                          {/* <li className={"menuList" +(innerIndex === restData.card.card.itemCards.length - 1 ? 'last-item' : '')}  key={innerIndex}> */}
                          {/* className="menuListlast-item" */}
                          {console.log(innerIndex, "innerIndex")}
                          {console.log(
                            restData.card.card.itemCards.length,
                            "length"
                          )}
                          {/* {console.log(item.card.info.id,"category")} */}
                          <div className="menuMain">
                            <div className="menuName">
                              {item.card.info.name}
                              {/* {console.log(item.card.info.description,"category")} */}
                            </div>
                            <div className="menuDes">
                              {(item.card.info.description, "category")
                                ? item.card.info.description
                                : "No description"}
                            </div>
                          </div>
                          <div>
                            <img
                              alt="no image available"
                              src={IMG_CDN_URL + item.card.info.imageId}
                            />
                          </div>
                          {/* Render your item information here */}
                        </li>

                        {/* <div class="styles_divider__2JelH"></div> */}
                      </div>
                    ))}

                    <div className="main_border__1Cc4a"></div>
                  </ul>
                ) : (
                 ""
                )}

                {/* {restData?.REGULAR.map((item, innerIndex) => (
                      <div>'jnj'</div>
                    ))} */}
                {/* <li key={index}>{restData.card.card.title}</li> */}
              </div>
            )
          )}
       
      </div>
    </>
  );
};
export default RestaurantMenu;
