import React, { useState } from "react";

const SingleCard = ({ path , isFlipped, setIsFlipped}) => {
  // const handleCardFlip = () => {
  //   setIsFlipped(!isFlipped);
  //   console.log("click");
  // };

  return (
    <div className="flip-card" >
      <div className={`flip-card-inner ${isFlipped ? "flipped" : ""}`}>
        <div className="flip-card-front"></div>
        <div className="flip-card-back">
          <img src={path} style={{ width: "200px", height: "200px" }} />
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
