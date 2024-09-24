import styled from "styled-components"
import Button from "./components/Button"
import { cloneElement } from "react"

const StyledButtonsContainer = styled.div`
    width: fit;
    height: 50px;
    display: flex;
    position:fixed;
    gap: 2em;
    margin-top:0;
    margin-left:0;
    background-color:#343434;
`

const ButtonsContainer = ( {circlesArray, transferArray ,setCirclesArray, setTrasferArray, checkResetUndoLength, checkRedoLength }) => {

  function onReset(e){
    e.stopPropagation()
    console.log("reset clicked")
    setCirclesArray([])
    setTrasferArray([])
  }
  console.log("clicked on reset",circlesArray, transferArray);

  function onUndo(e){
    e.stopPropagation()
    console.log("undo clicked")
    if(circlesArray.length !== 0){
    const temp = circlesArray.pop()
    transferArray.push(temp)
    }
  }

  function onRedo(e){
    e.stopPropagation()
    console.log("redo clicked")
    if(transferArray.length !== 0 ){
      const temp = transferArray.pop()
      circlesArray.push(temp)
    }
  }


  return (
    <StyledButtonsContainer>
        <Button label = "Reset" onClickFunction={(e) => onReset(e)} disabled={checkResetUndoLength} />
        <Button label = "Undo" onClickFunction={(e) =>onUndo(e)} disabled={checkResetUndoLength} />
        <Button label = "Redo" onClickFunction={(e) => onRedo(e)}  disabled={checkRedoLength}/>
    </StyledButtonsContainer>
  )
}

export default ButtonsContainer