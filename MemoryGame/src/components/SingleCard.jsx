import React from "react";
import mystery from "../assets/mystery.jpg"
const SingleCard = ({image, handleStoreInCards}) => {
  const handleCardClick = () => {
    handleStoreInCards(image)
  };

  return (
    <div className="flip-card" onClick={image.flipBack ? handleCardClick : null} >
      <div className={`flip-card-inner ${image.isFlipped ? "flipped" : ""}`}>
        <div className="flip-card-front">
          <img src={mystery} style={{ width: "180px", height: "180px" }} />
        </div> 
        <div className="flip-card-back">
          <img src={image.path} style={{ width: "160px", height: "160px", borderRadius:'10px'}} />
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
