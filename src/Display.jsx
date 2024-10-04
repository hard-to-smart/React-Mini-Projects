import React, { useEffect, useState } from 'react'

const Display = () => {
  const [showInfo, setShowInfo] = useState(false)
  const [userDate, setUserDate] = useState({})
  const [currentDate, setCurrentDate] = useState(new Date())
  const [age, setAge] = useState(null);

  const handleShowInfo=()=>{
    setShowInfo((prev)=> !prev);
  }
  const handleFetchUserAge=(e)=>{
    e.preventDefault()
    const formData = new FormData(e.target);
    const date = formData.get('date');
    setUserDate(date);
  }

useEffect(() => {
    setCurrentDate(new Date());
}, []);

useEffect(()=>{

  handleGetAge(userDate, currentDate);
}, [userDate, currentDate])

const handleGetAge = (dob, currentDate) => {
    const birthDate = new Date(dob);
    const ageDiff = currentDate - birthDate;
    console.log(ageDiff)
    const ageInYears = new Date(ageDiff).getUTCFullYear() - 1970;
    setAge(ageInYears);
};

console.log(currentDate, userDate, age);


  return (
    <div className='wrapper'>
    <card className="card">
      <h2>Find if you are eligible to use our service</h2>
        <form onSubmit={handleFetchUserAge}>
          <label htmlFor='date'> What is your date of birth ?</label>

            <input id="date" name='date' type='date' />
            <button type='submit'>Check</button>
        </form>
        <h3 onClick={handleShowInfo}>Why do we need to check this?</h3>
        { showInfo &&
        <p id='info'>
            Your date of birth determines if you can use our platform. You must be at least 18 years old to use our services.
        </p>
        }
        {age !== null ? (
          age >= 18 ? (
            <p>You are eligible to vote</p>
          ) : (
            <p>You are ineligible to vote</p>
          )
        ) : null}
    </card>
    </div>
  )
}

export default Display
