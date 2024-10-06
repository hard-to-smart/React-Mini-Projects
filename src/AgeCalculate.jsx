import React from 'react'
import Display from './Display'

const AgeCalculate = ({age}) => {
  return (
    <div className='overlay'>
    <div className='card' style={{display:'absolute', border:'2px solid black' }}>
      {
        age >=18 ? (
          <h2>You are eligible to vote</h2>
        ) :
        (
          <h2>You are not eligible to vote</h2>
        )
      }
    </div>
    </div>
  )
}

export default AgeCalculate