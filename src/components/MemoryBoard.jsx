import React, { useState } from "react";
import { imageArray } from "../images";
import SingleCard from "../SingleCard";
import { shuffleArray } from "../RandomArrayGenerator";
const MemoryBoard = () => {
  const array = [...imageArray, ...imageArray];
  const randomArray = shuffleArray(array);
  const [isFlipped, setIsFlipped] = useState(false);
  const [clickedId, setClickedId] = useState(null);
  const handleCardClick=(e)=>{
    console.log(e)
    // setClickedId(id);
  }

  return (
    <div className="grid-mapping">
      {randomArray.map((image, index) => (
        <SingleCard
          key={index}
          path={image.path}
          id={image.id}
        //   isFlipped={id===clickedId}
          onClick={handleCardClick}
        />
      ))}
    </div>
  );
};

export default MemoryBoard;
