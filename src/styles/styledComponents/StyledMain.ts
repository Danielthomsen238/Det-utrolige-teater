import styled from "styled-components";

const StyledHome = styled.main`
  position: relative;
  h1 {
    display: none;
  }
  .see_all_events {
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

const StyledShowDetail = styled.main`
  margin-top: 50px;
  .container {
    border: solid 1px ${(props) => props.theme.colors.secondary};
    .image_wrapper {
      position: relative;
      width: 100%;
      height: 40vw;
      border: solid 15px ${(props) => props.theme.colors.secondary};
      svg {
        top: 2vw;
        right: 2vw;
        position: absolute;
        z-index: 20;
        width: 3vw;
        height: 3vw;
        color: ${(props) => props.theme.colors.primary};
      }
    }
    .top_info {
      margin: 0 auto;
      width: 73vw;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: solid 1px lightgray;
    }
  }
`;

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
      h1 {
        color: gray;
        font-weight: 400;
        margin-bottom: 20px;
      }
      pre {
        white-space: pre-wrap;
        color: ${(props) => props.theme.colors.primary};
      }
      width: 70%;
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
    margin-left: 25px;
    font-weight: 500;
    font-size: 40px;
    color: ${(props) => props.theme.colors.primary};
  }
  border: solid 2px ${(props) => props.theme.colors.secondary};
`;

export { StyledHome, StyledShows, StyledActors, StyledActorsDetail, StyledShowDetail };
