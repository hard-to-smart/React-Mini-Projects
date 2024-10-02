import React, { useEffect, useState } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    const record= setInterval(() => { 
      setTimer((previousTime)=>{
        if(previousTime === 1){
        clearInterval(record);
        }
        return (previousTime - 1)
      });
    }, 1000);

    return(()=> clearInterval(record))
  }, []);

  return <div className="circle">{timer}</div>;
};

export default Timer;
