import React, {useState} from 'react'
import AvatarIcon from './components/AvatarIcon'
import NewUserPopup from './components/NewUserPopup'
import DeleteUserPopup from './components/DeleteUserPopup'
import { colorPalettes } from './components/ColorPalettes'
const Display = () => {
  const [nameArray, setNameArray] = useState([])
  const [showNewUserPopup, setShowNewUserPopup] = useState(false)
  const [showDeleteUserPopup, setShowDeleteUserPopup] = useState(false)
  const [nametoDelete, setNametoDelete] = useState('')

  // new user functions
  const saveNameHandler = (name) => {
      setNameArray((prevNames)=>[...prevNames, name])
      setShowNewUserPopup(false)
  }

  // delete user functions
  const deleteIconHandler= (name) =>{
    setShowDeleteUserPopup(true);
    setNametoDelete(name);
  }

  const deleteHandler = (name) =>{
    setNameArray((prevNames)=>prevNames.filter((n)=>n!==name))
    setShowDeleteUserPopup(false)
  }
  return (

    <div className='display-body'>
      <div className='display-container'>
        {nameArray.map((name, index)=>(
          <AvatarIcon key={index} initial={name.slice(0,1).toUpperCase()} ondeleteIconClick={()=>deleteIconHandler(name)} backgroundColor={colorPalettes.background}
          foregroundColor={colorPalettes.foreground}/>
        ))}
        <button className='add-button' onClick={()=>setShowNewUserPopup(true)}>+</button>
        {
          showNewUserPopup && (
           <NewUserPopup cancelHandler={()=>{setShowNewUserPopup(false)}} saveNameHandler={saveNameHandler}/>
          )
        }

        {
          showDeleteUserPopup && (
            <DeleteUserPopup name={nametoDelete} cancelHandler={()=>setShowDeleteUserPopup(false)} deleteHandler= {deleteHandler}/>
          )
        }
      </div>
    </div>
  )
}

export default Display