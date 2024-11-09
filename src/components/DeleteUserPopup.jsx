import React from 'react'

const DeleteUserPopup = ({name, cancelHandler, deleteHandler}) => {
  return (
    <div className='overlay'>
        <div className='modal'>
            <div className='popup-header'>
                Delete User
            </div>
            <div className='popup-content'>
                Are you sure you want to delete the user ?
            </div>
            <div className='popup-footer'>
                <button className='cancel-button' onClick={cancelHandler}>Cancel</button>
                <button className='delete-button' onClick={()=>deleteHandler(name)}>Delete</button>
                </div>
        </div>
    </div>
  )
}

export default DeleteUserPopup