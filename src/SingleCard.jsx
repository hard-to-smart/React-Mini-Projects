import React, { useEffect, useState } from "react";

const SingleCard = ({image, handleFlip}) => {
  
  const handleCardClick = () => {
    handleFlip(image)
  };

  

  return (
    <div className="flip-card" onClick={handleCardClick}>
      <div className={`flip-card-inner ${image.isFlipped ? "flipped" : ""}`}>
        <div className="flip-card-front"></div>
        <div className="flip-card-back">
          <img src={image.path} style={{ width: "200px", height: "200px" }} />
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
