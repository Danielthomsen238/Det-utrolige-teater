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

const StyledActorsDetail = styled.main`
  min-height: 10vh;
  .container {
    position: relative;
    margin-top: 20px;
    display: flex;
    padding: 20px;
    justify-content: space-between;
    border: solid 1px ${(props) => props.theme.colors.primary};
    .image_wrapper {
      position: relative;
      width: 300px;
      height: 300px;
    }
    .info {
      padding: 0 20px;
      h2 {
        color: gray;
        font-weight: 500;
        margin-bottom: 20px;
      }
      p {
        color: ${(props) => props.theme.colors.primary};
      }
      width: 65%;
    }
  }

  a {
    position: absolute;
    bottom: -50px;
    right: 0;
    padding: 10px 20px;
    background-color: ${(props) => props.theme.colors.secondary};
    color: white;
  }
  @media all and (max-width: 1200px) {
    .container {
      margin: 0 auto;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .info {
        margin-top: 20px;
        width: 90%;
        h2 {
          text-align: center;
        }
      }
    }
  }
`;

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

export { StyledHome, StyledShows, StyledActors, StyledActorsDetail };
