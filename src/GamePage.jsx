import React from "react";
import SingleCard from "./SingleCard";
import MemoryBoard from "./components/MemoryBoard";

const GamePage = () => {

  return (

    <div className="w-screen h-screen justify-center flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center">
        How good's your memory?
      </h1>
      <h2 className="text-center font-semibold text-2xl text-gray-700 ">
        Find all pairs in least time and with minimum clicks
      </h2>

        <MemoryBoard/>
        {/* {imageArray.map((image, index) =>  
          <SingleCard key={index} path={image.path} />
        )}
        {imageArray2.map((image, index) =>  
          <SingleCard key={index} path={image.path} />
        )} */}
        {/* </div> */}
        {/* <div className="flex flex-col flex-wrap gap-2 ">
        
        </div> */}
        {/* <div className="w-[100px]">
          <div>timer</div>
          <div>Clicks:</div>
          <div>clicks</div>
          <div>Score:</div>
          <div>score</div>
        </div> */}
    </div>
  );
};

export default GamePage;
