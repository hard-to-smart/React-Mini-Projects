import React, { useEffect, useState } from 'react'
import AgeCalculate from './AgeCalculate'

const Display = () => {

  const [showInfo, setShowInfo] = useState(false) 
  const [error, setError] = useState(false)
  const [age, setAge] = useState(null);
  const [closePopup, setClosePopup] = useState(false);
  const handleShowInfo=()=>{
    setShowInfo((prev)=> !prev);
  }

  const handleFetchUserAge=(e)=>{
    e.preventDefault()
    const formData = new FormData(e.target);
    const date = formData.get('date');
    handleGetAge(date);
  }

const handleGetAge = (userdob) => {
    if (!userdob) {
      setError(true);
      return;
    }
    const currentDate = new Date();
    const birthDate = new Date(userdob);
    const ageDiff = currentDate - birthDate;
    const ageInYears = new Date(ageDiff).getUTCFullYear() - 1970;
    setAge(ageInYears);
};

  return (
    <>
    <div className='wrapper'>
    <div className="card">
      <h2>Find if you are eligible to use our service</h2>
        <form onSubmit={handleFetchUserAge}>
          <label htmlFor='date'> What is your date of birth ?</label>

            <input id="date" name='date' type='date'/>
            {error && <span className='error'> Date of Birth is required</span> }
            <button type='submit'>Check</button>
        </form>
        <h3 onClick={handleShowInfo}>Why do we need to check this?</h3>
        { showInfo &&
        <p id='info'>
            Your date of birth determines if you can use our platform. You must be at least 18 years old to use our services.
        </p>
        }
    </div>
    </div>
     { age && !closePopup &&
      <AgeCalculate age={age} setClosePopup = {setClosePopup}/>
     }
     </>
  )
}

export default Display
