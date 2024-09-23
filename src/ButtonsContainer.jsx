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
    background-color:#343434;
`

const ButtonsContainer = () => {
  return (
    <StyledButtonsContainer>
        <Button label = "Reset" onClickFunction={()=>console.log("button Clicked")} disabled={true} />
        <Button label = "Undo" onClickFunction={()=>console.log("button Clicked")} disabled={true} />
        <Button label = "Redo" onClickFunction={()=>console.log("button Clicked")} disabled={true} />

    </StyledButtonsContainer>
  )
}

export default ButtonsContainer