import star from "../images/star(1).png";

import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

import useRestroMenu from "../utils/useRestroMenu";
const RestroMenu = () => {
  const { resid } = useParams();
  const restroInfo = useRestroMenu(resid);

  if (restroInfo == null) return <Shimmer />;

  const { name, avgRating, cuisines, locality, costForTwoMessage } =
    restroInfo.cards[0]?.card?.card?.info;

  const itemCards =
    restroInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.itemCards ??
    restroInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.itemCards ??
    [];

  console.log(name + "  :-   " + itemCards);
  console.log(itemCards);
  return (
    <div className="restromenu center">
      <div className="rest-info">
        <div className="nameCus">
          <h1>{name}</h1>
          <h4>{cuisines.join(", ")}</h4>
          <p>{locality}</p>
        </div>
        <div className="ratting">
          <img src={star} alt="" />
          <h2>{avgRating}</h2>
        </div>
      </div>
      <div className="priceTime">
        <h2>27 MINS</h2>
        <h2>{costForTwoMessage}</h2>
      </div>
      <div className="menu-items">
        <h2>Menus</h2>
        <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>{item.card.info.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestroMenu;
