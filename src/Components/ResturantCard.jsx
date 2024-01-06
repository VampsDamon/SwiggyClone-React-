import { CDN_URL } from "../utils/constant";
const ResturantCard = ({ restData }) => {
  const { name, cloudinaryImageId, areaName, cuisines, avgRating, locality } =
    restData;

  return (
    <div className="resroCard">
      <div className="img-box">
        <img src={CDN_URL + restData.cloudinaryImageId} alt={restData.name} />
      </div>
      <div className="card-detailes">
        <h2 className="font-extrabold">{restData.name}</h2>
        <p className="font-semibold">
          <b>{restData.avgRating} star </b>
        </p>
        <p className="font-medium text-black">
          {restData.cuisines[0] + ", " + restData.cuisines[1]}
        </p>
        <p className="font-medium text-black">
          {restData.locality + " , " + restData.areaName}
        </p>
      </div>
      {/* <h1>hello</h1> */}
    </div>
  );
};


export const withPromotedLabel=(ResturantCard)=>{
   return (props)=>{
    return (
       <div className="">
        <label className="absolute bg-green-950 text-white p-1 m-1  rounded-md">Veg Restro</label>
        <ResturantCard {...props}/>
       </div>
    );
   };
};

export default ResturantCard;
