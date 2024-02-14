const RestaurantCard = (props) => {
  const { sla, avgRating, areaName, name, cuisines } = props.restData.info;
  console.log(props.restData);
  return (
    <div className="restCardContainer">
      <div className="restCard">
        <div className="restText">
          <h3>{name}</h3>
          <p>{areaName}</p>
          <p>
            Cusines: <i>{cuisines.join(",")}</i>
          </p>
          <p>Rating : {avgRating}</p>
          <p> deliveryTime : {sla.deliveryTime} mins</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
