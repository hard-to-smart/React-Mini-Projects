import React, { useEffect, useState } from "react";
import { imageArray } from "../images";
import SingleCard from "./SingleCard";
import { shuffleArray } from "../RandomArrayGenerator";

const MemoryBoard = ({ setClicksCount, setScore, score }) => {
  // firstly we duplicate the images array
  const array = [
    ...imageArray,
    ...imageArray.map((el) => ({ ...el, id: el.id + 6 })),
  ];
  // then we randomize the order of the images
  const [randomArray, setRandomArray] = useState([]);
  // we declare 2 cards to record them when flipped
  const [card1flipped, setCard1Flipped] = useState();
  const [card2flipped, setCard2Flipped] = useState();
  useEffect(() => {
    const shuffledArray = shuffleArray(array);
    setRandomArray(shuffledArray);
    setCard1Flipped(null);
    setCard2Flipped(null);
  }, []);

  // then we define a function to flip the card and increment the count
  const handleFlip = (image) => {

    setRandomArray((prev) => {
      return prev.map((el) => {
        if (el.id === image.id) {
          return { ...el, isFlipped: !el.isFlipped };
        } else {
          return el;
        }
      });
    });
    setClicksCount((prev) => prev + 1);
  };
  // next we will only allow 2 flips in a row
  const handleStoreInCards = (image) => {
    if (card1flipped && card2flipped) {
      return;
    }
    if (card1flipped) {
      setCard2Flipped(image);
      handleFlip(image);
      if (card1flipped.path === image.path) {
        setScore((prev) => prev + 1);
        setRandomArray((prev) =>
        prev.map((el) =>
          el.id === card1flipped.id || el.id === image.id
            ? { ...el, flipBack: false }
            : el
        )
      );
        setCard1Flipped(null);
        setCard2Flipped(null);
      } else {
        //flip both cards back
        const timeout = setTimeout(() => {
          setRandomArray((prev) => {
            return prev.map((el) => {
              if (el.id === card1flipped.id) {
                return { ...el, isFlipped: !el.isFlipped };
              } else if (el.id === image.id) {
                return { ...el, isFlipped: !el.isFlipped };
              } else {
                return el;
              }
            });
          });
          setCard1Flipped(null);
          setCard2Flipped(null);
        }, 1000);
        return () => clearTimeout(timeout);
      }
    } else {
      setCard1Flipped(image);
      handleFlip(image);
    }
  };

  return (
    <div className="grid-mapping">
      {randomArray.map((image, index) => (
        <SingleCard
          key={index}
          image={image}
          id={image.id}
          handleStoreInCards={handleStoreInCards}
        />
      ))}
    </div>
  );
};

export default MemoryBoard;
