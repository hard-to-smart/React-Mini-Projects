import React, { useEffect, useState } from "react";
import { imageArray } from "../images";
import SingleCard from "../SingleCard";
import { shuffleArray } from "../RandomArrayGenerator";


const MemoryBoard = ({setClicksCount, setScore, score}) => {

  const array = [...imageArray, ...imageArray.map((el)=>({...el, id:el.id + 6}))];
  const [randomArray, setRandomArray] = useState(shuffleArray(array))

  const [card1Flipped, setCard1Flipped] = useState(null);
  const [card2Flipped, setCard2Flipped] = useState(null);

  const handleFlip=(image)=>{
    if(card1Flipped){
      setCard2Flipped(image);
      setRandomArray(randomArray.map((eachImage)=>
      eachImage.id === image.id ? {...eachImage, isFlipped: true} : eachImage
      ))
    }
    else{
      setCard1Flipped(image)
      setRandomArray(randomArray.map((eachImage)=> eachImage.id === image.id ? {...eachImage, isFlipped:true} : eachImage))
    }
    setClicksCount((prev)=> prev + 1)
  }

  useEffect(()=>{
    if(card1Flipped && card2Flipped){
    if(card1Flipped === card2Flipped){
      console.log(score)
      setScore((prev)=> prev+1)
      handleClearFlipCards();
    }
    else{
      setTimeout(()=>{
        setRandomArray(randomArray.map((eachImage) => eachImage.id === card2Flipped.id || eachImage.id === card1Flipped.id ? {...eachImage, isFlipped:false} : eachImage))
        handleClearFlipCards();

      }, 1000)
    }
  }
  }, [card1Flipped, card2Flipped])

  function handleClearFlipCards(){
    setCard1Flipped(null)
    setCard2Flipped(null)
  }

  return (
    <div className="grid-mapping">
      {randomArray.map((image, index) => (
        <SingleCard
          key={index}
          image={image}
          id={index}
          handleFlip={handleFlip}
        />
      ))}
    </div>
  );
};

export default MemoryBoard;
