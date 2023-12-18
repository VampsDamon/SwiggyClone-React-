import { useState, useEffect } from "react";
import { fetchMenuAPI } from "../utils/constant";
const useRestroMenu = (resId) => {
  const [restroInfo, setRestroInfo] = useState(null);
  useEffect(() => {
    getRestroMenu();
  }, []);

  const getRestroMenu = async () => {
    const data = await fetch(fetchMenuAPI + resId);
    const json = await data.json();
    console.log("Fetching the data" + json);
    setRestroInfo(json?.data);
  };
  return restroInfo;
};
export default useRestroMenu;
