import styled from "styled-components";

const StyledFooter = styled.footer`
  margin-top: 50px;
  background-color: ${(props) => props.theme.colors.tetiear};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  min-height: 30vh;
  ul {
    > :nth-child(1) {
      font-size: 5vw;
      margin: 10px 0;
      font-weight: 600;
    }
    a {
      font-family: "Titillium Web", sans-serif;
      color: white;
    }
    li {
      margin-bottom: 2px;
      color: white;
    }
  }
  div {
    width: 45vw;
  }
  .social {
    margin-top: 20px;
    a {
      svg {
        width: 50px;
        height: 50px;
      }
      color: white;
    }
  }

  @media all and (min-width: ${(props) => props.theme.breakpoints.m}) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    ul {
      > :nth-child(1) {
        font-size: 1.2vw;
      }
    }
    div {
      width: 15vw;
    }
    .administration {
      position: absolute;
      top: 125px;
      left: 24.5vw;
    }
    .social {
      margin-right: -10vw;
      margin-top: 20px;
    }
  }
`;

export { StyledFooter };
