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
        <h2>{restData.name}</h2>
        <p>
          <b>{restData.avgRating} star </b>
        </p>
        <p>{restData.cuisines[0] + ", " + restData.cuisines[1]}</p>
        <p>{restData.locality + " , " + restData.areaName}</p>
      </div>
      {/* <h1>hello</h1> */}
    </div>
  );
};

export default ResturantCard;
