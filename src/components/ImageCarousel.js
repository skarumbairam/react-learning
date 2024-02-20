import { useState } from "react";

const image = ["Image Url 1", "Image Url 2", "Image Url 3", "Image Url 4"];
const ImageCarousel = () => {
  let [count, setCount] = useState(0);
  const [imageUrl, setImageUrl] = useState(image[count]);

  const previouseClickHandler = () => {
    setCount(count - 1);
    if (count <= 0) {
      setCount(3);
    }
  };

  const nextClickHandler = () => {
    setCount(count + 1);
    if (count >= 3) {
      setCount(0);
    }
  };

  return (
    <div className="w-80 flex">
      <button
        className="p-2 m-2 cursor-pointer"
        onClick={() => previouseClickHandler()}
      >
        Previous
      </button>
      <div>
        <img className="p-2 m-2" src={image[count]} alt="image" />
        <span>
          {count} : {image[count]}
        </span>
      </div>

      <button
        className="p-2 m-2 cursor-pointer"
        onClick={() => nextClickHandler()}
      >
        Next
      </button>
    </div>
  );
};

export default ImageCarousel;
