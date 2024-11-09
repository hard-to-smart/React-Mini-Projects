import styled from "styled-components"
import Button from "./components/Button"

const StyledButtonsContainer = styled.div`
    width: fit;
    height: 50px;
    display: flex;
    position:fixed;
    gap: 2em;
    margin-top:0;
    margin-left:0;
`

const ButtonsContainer = ( {circlesArray, transferArray ,setCirclesArray, setTransferArray , resetUndoDisabled, redoDisabled}) => {

  function onReset(e){
    e.stopPropagation()
    console.log("reset clicked")
    setCirclesArray([])
    setTransferArray([])
  }

  function onUndo(e){
    e.stopPropagation()
    console.log("undo clicked")
    if(circlesArray.length >=1){
    const temp =  circlesArray.pop()
    setCirclesArray([...circlesArray])
    setTransferArray([...transferArray, temp])
    console.log(circlesArray, transferArray)
    }
    // else{
    //   setResetUndoDisabled(true)
    // }
  }



  function onRedo(e){
    e.stopPropagation()
    console.log("redo clicked")
    if(transferArray.length >=1 ){
      const temp =  transferArray.pop()
      setTransferArray([...transferArray])
      setCirclesArray([...circlesArray, temp ])
    }
    // else{
    //   setRedoDisabled(true)
    // }
  }


  return (
  <StyledButtonsContainer>
        <Button label = "Reset" onClickFunction={(e) => onReset(e)} disabled={resetUndoDisabled}  />
        <Button label = "Undo" onClickFunction={(e) =>onUndo(e)} disabled={resetUndoDisabled} />
        <Button label = "Redo" onClickFunction={(e) => onRedo(e)}  disabled={redoDisabled}/>
    </StyledButtonsContainer>
  )
}

export default ButtonsContainer