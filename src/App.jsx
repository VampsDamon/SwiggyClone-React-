import React, { useContext, useEffect, useState } from "react";
import * as ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Cart from "./Components/Cart";
import About from "./Components/About";
import Error from "./Components/Error";
import RestroMenu from "./Components/RestroMenu";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";

const AppLayout = () =>{ 
   const [userName,setUserName]=useState();
  //Auttthentication done
  useEffect(()=>{
    //API Calls and return userInfo in as data
     const data={
      name:"Shahid Khan"
     }
     //Set the User Name
     setUserName(data.name);
  },[])
  return (
    <div className="app">
      <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
        <Header />
        <div className="appOutlet">
          <Outlet />
        </div>
        <Footer />
      </UserContext.Provider>
    </div>
  );};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path:"/",
        element:<Body/>
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path:"/resturants/:resid",
        element:<RestroMenu/>
      }
    ],
    errorElement: <Error />,
  }
]);

const roo = document.getElementById("root");
const root = ReactDOM.createRoot(roo);
root.render(
  <RouterProvider router={router} />
  );
