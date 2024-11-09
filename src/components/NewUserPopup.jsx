import React, { useState } from 'react'

const NewUserPopup = ({saveNameHandler, cancelHandler}) => {
    const [name, setName] = useState('');
    const saveHandler = ()=>
    {
        if(name.trim()){
            saveNameHandler(name.trim());
            console.log('save clicked')
        }
      
    }

    return (
        <div className='overlay'>
            <div className='modal'>
                <button className='cancel-icon' onClick={cancelHandler}>x</button>
                <div className='popup-header'>
                    New User
                </div>
                <div className='popup-content'>
                    <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name"/>
                </div>
                <div className='popup-footer'>
                    <button className='cancel-button' onClick={cancelHandler}>Cancel</button>
                    <button className='save-button' onClick={saveHandler}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default NewUserPopup