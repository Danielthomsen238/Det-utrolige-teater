import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: ${(props) => props.theme.colors.tetiear};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

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
`;

export { StyledFooter };
