  import React, { useEffect, useState } from "react";
  import { useNavigate } from "react-router-dom";
  const Timer = ({ score }) => {
    const [timer, setTimer] = useState(30);
    const navigate = useNavigate();
    useEffect(() => {
      const record = setInterval(() => {
        setTimer((prev) => {
          if (prev === 1) {
            clearInterval(record);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(record);
    }, []);

    useEffect(() => {
     let timeout = setTimeout(()=>{
      if(score === 6){
        alert("You win")
        navigate('/')
      }
      else if(timer === 0){
        alert("Game Over")
        navigate('/')
      }
     })
     return () => clearTimeout(timeout)
    }, [score, timer]);

    return <div className="circle">{timer}</div>;
  };

  export default Timer;
