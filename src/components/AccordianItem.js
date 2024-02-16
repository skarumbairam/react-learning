const AccordianItem = (props) => {
  //const [showItem, setShowItem] = useState(false);
  const { title, description } = props.data;
  const { showItem, setShowIndex } = props;

  const clickHandler = () => {
    // setShowItem(!showItem);
    setShowIndex();
  };

  return (
    <div className="w-full">
      <div
        className=" bg-black text-white cursor-pointer"
        onClick={() => clickHandler()}
      >
        <h1>{title}</h1>
      </div>
      {showItem && (
        <div className="bg-gray-400 text-black">
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default AccordianItem;
