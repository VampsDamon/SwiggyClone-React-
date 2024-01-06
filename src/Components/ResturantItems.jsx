import { useState } from "react";
import ResturnatCategory from "./ResturantCategory";

const ResturantsItems = ({ data, showRes,setShowCard }) => {
  const [showRes2, setShowRes2] = useState(false);
  const clickHandeler = () => {
    setShowRes2(!showRes);
    setShowCard();
  };
  return (
    <div className="p-2 m-2 bg-gray-300 rounded-md">
      <div
        className="heading flex justify-between  cursor-pointer "
        onClick={clickHandeler}
      >
        <div className="font-bold">{data.card.card.title}</div>
        <div className="arrow">🔽</div>
      </div>
      {showRes && <ResturnatCategory info={data.card.card.itemCards} />}
    </div>
  );
};

export default ResturantsItems;
