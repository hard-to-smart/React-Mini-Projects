import React, { useState } from "react";
const MemoryDiv = ({ path }) => {

const [innerPointer, setInnerPointer] = useState(false);

  return (
    <div class="flip-card">
      <div class="flip-card-inner">
        <div className="flip-card-front"></div>
        <div class="flip-card-back">
          <img src={path} style={{ width: "200px", height: "200px" }} />
        </div>
      </div>
    </div>
  );
};

export default MemoryDiv;
