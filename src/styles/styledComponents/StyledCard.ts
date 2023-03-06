import styled from "styled-components";

const StyledCard = styled.div`
  margin: 0 auto;
  width: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: solid 1px ${(props) => props.theme.colors.secondary};
  .image_wrapper {
    position: relative;
    width: 350px;
    height: 350px;
    border: solid 5px ${(props) => props.theme.colors.secondary};
  }
  .info {
    text-align: right;
    color: black;
    z-index: 5;
    width: 100%;
    height: 60vw;

    .stage {
      margin-top: 50px;
      margin-bottom: 5px;
      margin-right: 10px;
    }
    .date {
      position: relative;
      margin-bottom: 20px;
      margin-right: 10px;
      font-weight: 600;
      &::after {
        position: absolute;
        bottom: -5px;
        right: 0;
        content: "";
        width: 270px;
        height: 2px;
        background-color: lightgray;
      }
    }

    .title {
      font-size: 9vw;
      margin-right: 10px;
      color: ${(props) => props.theme.colors.primary};
    }
    .genre {
      margin-right: 10px;
      font-size: 4vw;
    }
  }

  @media all and (min-width: ${(props) => props.theme.breakpoints.m}) {
    .info {
      z-index: 5;
      width: 100%;
      height: 22vw;

      .stage {
        font-size: 1vw;
      }
      .date {
        position: relative;
        font-size: 1.2vw;
        font-weight: 600;
        &::after {
          position: absolute;
          bottom: -5px;
          right: 0;
          content: "";
          width: 270px;
          height: 2px;
          background-color: lightgray;
        }
      }

      .title {
        font-size: 4vw;
        margin-right: 10px;
        color: ${(props) => props.theme.colors.primary};
      }
      .genre {
        font-size: 1.5vw;
      }
    }
  }
  .btn_container {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 20px;
    button {
      border: none;
      padding: 10px 20px;
      color: white;
    }
    > :nth-child(1) {
      background-color: ${(props) => props.theme.colors.tetiear};
    }
    > :nth-child(2) {
      background-color: ${(props) => props.theme.colors.primary};
    }
  }
`;

export { StyledCard };
