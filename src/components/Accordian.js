import { useState } from "react";
import AccordianItem from "./AccordianItem";

const accordianItems = [
  { title: "Item 1", description: "Lerom Ipsom Text Lerom Ipsom Text Lerom" },
  { title: "Item 2", description: "Lerom Ipsom Text" },
  { title: "Item 3", description: "Lerom Ipsom Text" },
];

const Accordian = (props) => {
  const [showIndex, setShowIndex] = useState(0);

  const setShowIndexParent = (index) => {
    setShowIndex(index);
  };

  return (
    <div>
      {accordianItems.map((accItem, index) => {
        return (
          <AccordianItem
            key={`${accItem.title}-${index}`}
            data={accItem}
            showItem={index === showIndex ? true : false}
            setShowIndex={() => setShowIndexParent(index)}
          />
        );
      })}
    </div>
  );
};

export default Accordian;
