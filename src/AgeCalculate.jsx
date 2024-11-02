import React, { useState } from "react";
import Display from "./Display";

const AgeCalculate = ({age, setClosePopup} ) => {
  const handleClosePopup = () =>{
    setClosePopup(true);
  }
  return (
    <div className="overlay">
      <div
        className="card"
        style={{ position: "relative", border: "2px solid black" }}
      >
        {age >= 18 ? (
          <h2>You are eligible to vote</h2>
        ) : (
          <h2>You are not eligible to vote</h2>
        )}
        <div className="cross" onClick={handleClosePopup}>
          X
        </div>
      </div>
    </div>
  );
};

export default AgeCalculate;
