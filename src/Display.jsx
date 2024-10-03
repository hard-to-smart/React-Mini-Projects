import React from 'react'

const Display = () => {
  return (
    <div className='wrapper'>
    <card className="card">
        <form>
            <input type='date'/>
            <button type='submit'>Check</button>
        </form>
        <h3>Why do we need to check this?</h3>
        <p>
            Your date of birth determines if you can use our platform. You must be at least 18 years old to use our services.
        </p>
    </card>
    </div>
  )
}

export default Display