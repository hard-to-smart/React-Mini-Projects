import React, { useState } from "react";
import MemoryBoard from "./components/MemoryBoard";
import ButtonsContainer from "./components/ButtonsContainer";

const GamePage = () => {
  const [score, setScore] = useState(0);
  const [clicksCount, setClicksCount] = useState(0);
  return (
    <div className="body-container">
      <h1 className="text-3xl font-bold text-center">
        How good's your memory?
      </h1>
      <h2 className="text-center font-semibold text-2xl text-gray-700 ">
        Find all pairs in least time and with minimum clicks
      </h2>
        <div className="main-container">
        <MemoryBoard setScore={setScore} setClicksCount={setClicksCount} score={score}/>
        <ButtonsContainer clicksCount={clicksCount} score={score}/>
        </div>
    </div>
  );
};

export default GamePage;
