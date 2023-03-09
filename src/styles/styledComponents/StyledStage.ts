import styled from "styled-components";
interface Lines {
  length: number;
}
const StyledStage = styled.main<Lines>`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70vh;
  gap: 5px;
  .stage_title {
    margin-top: 30px;
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    width: 70vw;
    background-color: ${(props) => props.theme.colors.secondary};
  }
  div {
    height: 50px;
    gap: 5px;
    display: flex;
    div {
      position: relative;
      z-index: 20;
      width: 50px;
      height: 50px;
      border: solid 1px ${(props) => props.theme.colors.primary};
      border-radius: 50%;
      &:hover {
        background-color: ${(props) => props.theme.colors.primary};
      }
    }
  }
  .bottom_p {
    margin-top: 50px;
  }
  .selected {
    background-color: red;
  }
`;
interface Seat {
  isReserved: number;
}

const StyledSeat = styled.div<Seat>`
  background-color: ${(props) => (props.isReserved > 0 ? props.theme.colors.primary : "")};
  cursor: ${(props) => (props.isReserved > 0 ? "mouse" : "pointer")};
`;
export { StyledStage, StyledSeat };
