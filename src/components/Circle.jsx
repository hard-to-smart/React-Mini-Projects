import styled from 'styled-components';

const StyledCircle = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${({ color }) => color};
  border:1px;
  border-radius: 50%;
  position:absolute;
  left: ${({ x }) => x}px;
  top: ${({ y }) => y}px;
`

const Circle= ({x, y, color}) => {

  console.log(x, y, color);

  return (
    <StyledCircle x={x} y={y} color={color} >
    </StyledCircle>
  )
}

export default Circle