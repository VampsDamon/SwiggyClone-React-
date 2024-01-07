import ResturantCard, { withPromotedLabel } from "./ResturantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { API_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { MOB_API_URL } from "../utils/constant";
// import UserContext from "../utils/UserContext";
import { useContext } from "react";
// import  from "./ResturantCard";
const searchData = (searchText, API_restro) => {
  return searchText !== ""
    ? API_restro.filter((rest) =>
        rest.info.name?.toLowerCase()?.includes(searchText?.toLowerCase())
      )
    : API_restro;
};

// const {loggedInUser,setUserName}=useContext(UserContext);
const Body = () => {
  const [restList, setRestList] = useState([]);
  const [searchText, SetsearchText] = useState("");
  const [API_restro, setAPI_restro] = useState([]);
  const onlineStatus = useOnlineStatus();
  const ResturantPromotedCard = withPromotedLabel(ResturantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data =
      window.innerWidth <= 768
        ? await fetch(MOB_API_URL)
        : await fetch(API_URL);
    const json = await data.json();
    setRestList(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setAPI_restro(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (onlineStatus == false)
    return (
      <h1 className="flex justify-center items-center font-extrabold text-4xl mt-14 h-dvh">
        You are offline Check your Internet Connectivity
      </h1>
    );

  if (API_restro.length === 0) {
    return <Shimmer />;
  }
  if (restList.length === 0) {
    return (
      <div className="emptylist">
        <h1>No resturant Found Refresh the Page</h1>
        <button
          className="filterData"
          onClick={() => {
            setRestList(API_restro);
            SetsearchText("");
          }}
        >
          Refresh
        </button>
      </div>
    );
  }
  return (
    <div className="body center">
      <div className="rest-fetures">
        <div className="search">
          <input
            className="search-input"
            type="text"
            name="SearchData"
            id=""
            value={searchText}
            placeholder="Serach Resturant"
            onChange={(e) => {
              SetsearchText(e.target.value);
              setRestList(searchData(e.target.value, API_restro));
            }}
          />
          <button
            className="filterData"
            onClick={() => setRestList(searchData(searchText, API_restro))}
          >
            Search
          </button>
        </div>
        <button
          className="filterData"
          onClick={() => {
            const tempList = [...restList];
            tempList.sort(
              (res1, res2) => res1.info.avgRating - res2.info.avgRating
            );
            setRestList(tempList);
          }}
        >
          Low to High
        </button>
        <button
          className="filterData"
          onClick={() => {
            const tempList = [...restList];
            tempList.sort(
              (res1, res2) => res2.info.avgRating - res1.info.avgRating
            );
            setRestList(tempList);
          }}
        >
          High to Low
        </button>
        
      </div>
      {
        <div className="cards">
          {restList.map((resturant) => (
            <Link
              className="restroLinks"
              key={resturant.info.id}
              to={"/resturants/" + resturant.info.id}
            >
              {resturant.info.veg ? (
                <ResturantPromotedCard restData={resturant.info} />
              ) : (
                <ResturantCard restData={resturant.info} />
              )}
            </Link>
          ))}
        </div>
      }
    </div>
  );
};

export default Body;
