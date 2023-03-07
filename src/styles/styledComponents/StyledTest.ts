import styled from "styled-components";
interface Lines {
  length: number;
}
const StyledTest = styled.main<Lines>`
  margin-top: 200px;
  width: 700px;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  div {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    margin-bottom: 5px;
  }
  /* First half of the seats
  i loop over the first half seats and use margin to incrementaly move them down to create a half ellipse kinda shape
  */

  ${({ length }) => {
    const halfLength = Math.ceil(length / 2);
    const marginStep = 10;
    let margin = 0;
    let styles = "";

    for (let i = 0; i < halfLength; i++) {
      styles += `.line_${i + 1} {  margin-top: ${margin}px; } `;
      margin += marginStep;
    }

    return styles;
  }}

  /* Second half of the seats
  same as the other but just decrement
  */

  ${({ length }) => {
    const halfLength = Math.ceil(length / 2);
    const marginStep = 10;
    let margin = marginStep * (halfLength - 1);
    let styles = "";

    for (let i = halfLength; i < length; i++) {
      styles += `.line_${i + 1} {  margin-top: ${margin}px; } `;
      margin -= marginStep;
    }

    return styles;
  }}
`;
interface Seat {
  isReserved: number;
}

const StyledSeat = styled.div<Seat>`
  background-color: ${(props) => (props.isReserved > 0 ? "red" : "gray")};
`;
export { StyledTest, StyledSeat };
