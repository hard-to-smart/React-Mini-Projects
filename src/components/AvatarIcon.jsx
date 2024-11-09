import React from 'react'

const AvatarIcon = ({initial, ondeleteIconClick, backgroundColor, foregroundColor}) => {
  return (
    <div className='avatar-icon'>
        <button className='cancel-icon' onClick={ondeleteIconClick} style={{backgroundColor:backgroundColor}}>x</button>
        <p style={{color: foregroundColor}}>
            {initial}
        </p>
    </div>
  )
}

export default AvatarIcon