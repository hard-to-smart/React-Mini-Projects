import React from 'react'
import {useNavigate} from "react-router-dom"
const StartPage = () => {
    const navigate = useNavigate()
    const handleStartGame=()=>{
        navigate('/game')
    }
  return (
    <div className='start-page-container'>
        <button className='start-button' onClick={handleStartGame}> Start Game </button>
    </div>
  )
}

export default StartPage