import styled from "styled-components";

const StyledHeader = styled.header`
  div {
    position: relative;
    .info {
      text-align: right;
      position: absolute;
      color: black;
      z-index: 5;
      background-color: #eeeee4bf;
      width: 100%;
      height: 100%;
      border: solid 5px ${(props) => props.theme.colors.primary};

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
          width: 60vw;
          height: 2px;
          background-color: ${(props) => props.theme.colors.secondary};
        }
      }

      .title {
        font-size: 10vw;
        margin-right: 10px;
        color: ${(props) => props.theme.colors.secondary};
      }
      .genre {
        margin-right: 10px;
        font-size: 6vw;
      }
    }
    .image_wrapper {
      position: relative;
      width: 100%;
      height: 50vw;
      border: solid 5px #ad7a51;
    }
  }
  @media all and (min-width: ${(props) => props.theme.breakpoints.m}) {
    div {
      position: relative;
      display: flex;
      .info {
        width: 20vw;
        position: static;
        flex-direction: column;
        background-color: white;
        text-align: right;
        color: black;
        border: solid 1px ${(props) => props.theme.colors.primary};
        height: 30vw;
        .stage {
          font-size: 1.2vw;
          margin-top: 150px;
          margin-bottom: 5px;
          margin-right: 20px;
        }
        .date {
          font-size: 1.3vw;
          position: relative;
          margin-bottom: 20px;
          margin-right: 20px;
          font-weight: 600;
          &::after {
            position: absolute;
            bottom: -5px;
            right: 0;
            content: "";
            width: 17vw;
            height: 2px;
            background-color: lightgray;
          }
        }

        .title {
          font-size: 5vw;
          margin-right: 20px;
          color: ${(props) => props.theme.colors.secondary};
        }
        .genre {
          margin-right: 20px;
          font-size: 3vw;
        }
      }
      .image_wrapper {
        position: relative;
        width: 60vw;
        height: 30vw;
        border: solid 5px #ad7a51;
      }
    }
  }
`;

export { StyledHeader };
