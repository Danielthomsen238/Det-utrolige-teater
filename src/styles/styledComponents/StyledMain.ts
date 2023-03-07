import styled from "styled-components";

const StyledHome = styled.main`
  position: relative;
  h1 {
    display: none;
  }
  a {
    position: absolute;
    bottom: -50px;
    right: 0;
    background-color: ${(props) => props.theme.colors.secondary};
    color: white;
    padding: 10px 20px;
    margin-right: 15px;
  }
`;
const StyledShows = styled.main``;

const StyledActors = styled.main`
  margin: 0 auto;
  min-height: 100vh;
  margin-top: 50px;
  h1 {
    margin-left: 20px;
    color: ${(props) => props.theme.colors.primary};
  }
  border: solid 2px ${(props) => props.theme.colors.secondary};
`;

export { StyledHome, StyledShows, StyledActors };
