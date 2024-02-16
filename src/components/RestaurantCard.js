const RestaurantCard = (props) => {
  const { sla, avgRating, areaName, name, cuisines } = props.restData.info;
  return (
    <div className="w-60 bg-gray-100 flex flex-col mb-5 p-5">
      <div className="font-sans min-h-48 align-middle">
        <div className="">
          <h3 className=" text-lg">{name}</h3>
          <p className="text-base">{areaName}</p>
        </div>

        <div>
          <p className="text-sm">Cusines: {cuisines.join(",")}</p>
          <p className="text-sm">Rating : {avgRating}</p>
          <p className="text-sm"> deliveryTime : {sla.deliveryTime} mins</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
