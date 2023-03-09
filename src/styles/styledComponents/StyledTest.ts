import styled from "styled-components";
interface Lines {
  length: number;
}
const StyledTest = styled.main<Lines>`
  margin-top: 200px;
  width: 700px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  div {
    height: 50px;
    gap: 5px;
    display: flex;
    div {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }
`;
interface Seat {
  isReserved: number;
}

const StyledSeat = styled.div<Seat>`
  background-color: ${(props) => (props.isReserved > 0 ? "red" : "gray")};
`;
export { StyledTest, StyledSeat };
