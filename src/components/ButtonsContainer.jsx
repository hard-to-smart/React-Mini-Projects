import React from 'react'
import Timer from './Timer'

const ButtonsContainer = ({score, clicksCount}) => {
  return (
    <div className="buttons-container">
            <Timer/>
          <div>Score:</div>
          <div className='circle'>{score}</div>
          <div>Clicks:</div>
          <div className='circle'>{clicksCount}</div>
        </div> 
  )
}

export default ButtonsContainer