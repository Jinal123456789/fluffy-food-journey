import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/header.js";
import Footer from "./component/footer.js";
import About from "./component/about.js";
import Contact from "./component/contact.js";
import { IMG_CDN_URL } from "./component/config.js";
import { restaurantList } from "./component/config.js";
import Body from "./component/body.js";
import Error from "./component/error.js";
import Profile from "./component/profile.js";
import RestaurantMenu from "./component/restaurantMenu.js";
import { createBrowserRouter , Outlet, RouterProvider} from "react-router-dom";



const styleobj = {
  backgroundColor: "red",
};
// function filterData(searchText,allRestaurants) {

//   const filterData = allRestaurants.filter((Restaurant) => Restaurant.info.name.includes(searchText));
//   console.log(Restaurant,"filterData");
//   return filterData;
// }


const ApplayOut = () => {
  return (
    <>
      <Header />
      {/* <Body />
      <About/>
      <Contact/> */}
      <Outlet/>
      <Footer />
    </>
  );
};

const appRouter =  createBrowserRouter([
  {
    path: "/",
    element: <ApplayOut/>,
    errorElement: <Error/>,
    children:
      [
        {
          path: "/",
          element: <Body/>,
          errorElement: <Error/>,
        },
      { 
        path: "/about",
        element: <About/>,
        errorElement: <Error/>,
        // children:
        // [
        //   {
        //     path:"profile",
        //     element: <Profile/>,
        //     errorElement: <Error/>,
        //   },
        // ],
      },
      {
        path: "/contact",
        element: <Contact/>,
        errorElement: <Error/>,
        
      },
      {
        path: "restaurant/:id",
        element: <RestaurantMenu/>,
        errorElement: <Error/>,

      },
    ],
  },
  

]);



const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<ApplayOut />);
root.render(<RouterProvider router={appRouter} />);

