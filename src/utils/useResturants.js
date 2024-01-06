import { useState,useEffect } from "react";
import { API_URL } from "../utils/constant";
const useResturants=()=>{
    const [resturants,setResturants]=useState([]);

    useEffect(()=>{
        fetchResturants();
    },[])

    const fetchResturants=async ()=>{
        const data=await fetch(API_URL);
        const json=await data.json();

        setResturants(json.data);
    }
    return resturants;
}

export default useResturants;