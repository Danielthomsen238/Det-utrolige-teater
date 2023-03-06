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
`;

export { StyledHeader };
