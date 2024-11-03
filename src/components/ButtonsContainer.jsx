import Timer from './Timer'

const ButtonsContainer = ({score, clicksCount}) => {
  return (
    <div className="buttons-container">
          <div>Timer:</div>
            <Timer score={score}/>
          <div>Score:</div>
          <div className='circle'>{score}</div>
          <div>Clicks:</div>
          <div className='circle'>{clicksCount}</div>
        </div> 
  )
}

export default ButtonsContainer