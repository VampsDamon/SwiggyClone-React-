import star from "../images/star(1).png";

import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

import useRestroMenu from "../utils/useRestroMenu";
import ResturantsItems from "./ResturantItems";
import { useState } from "react";
const RestroMenu = () => {
  const { resid } = useParams();
  const restroInfo = useRestroMenu(resid);
  const [showCards, setShowCards] = useState(0);

  if (restroInfo == null) return <Shimmer />;

  const { name, avgRating, cuisines, locality, costForTwoMessage } =
    restroInfo.cards[0]?.card?.card?.info;

  const categoryList =
    restroInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (cat) =>
        cat?.card?.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="restromenu center">
      <div className="rest-info text-black ">
        <div className="nameCus ">
          <h1 className="font-extrabold">{name}</h1>
          <h4 className="text-green-800">{cuisines.join(", ")}</h4>
          <p className="font-medium">{locality}</p>
        </div>
        <div className="ratting">
          <img src={star} alt="" />
          <h2 className="font-bold">{avgRating}</h2>
        </div>
      </div>
      <div className="priceTime">
        <h2 className="font-bold">27 MINS</h2>
        <h2 className="font-bold">{costForTwoMessage}</h2>
      </div>
      <div className="menu-items">
        <h2 className="font-bold text-xl text-center">Menus</h2>
        <div>
          {categoryList.map((category, index) => (
            <ResturantsItems
              key={category.card.card.title}
              data={category}
              showRes={index === showCards ? true : false}
              setShowCard={() =>
                index === showCards ? setShowCards(null) : setShowCards(index)
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestroMenu;
