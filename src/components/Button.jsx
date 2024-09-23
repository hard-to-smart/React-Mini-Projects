import styled from "styled-components"

const StyledButton = styled.button`
padding: 10px 15px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  z-index:1;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;


  &:hover {
    background-color: #2980b9;
  }

  &:disabled {
    background-color: #bdc3c7;
    cursor: not-allowed;
  }
`;
const Button = ({label,   onClickFunction , disabled}) => {
  return (
    <StyledButton disabled={disabled} onClick={onClickFunction}>
        {label}
    </StyledButton>
  )
}

export default Button