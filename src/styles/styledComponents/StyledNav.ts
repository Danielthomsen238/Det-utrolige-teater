import styled from "styled-components";

interface NavProps {
  show: boolean;
}

const StyledNav = styled.nav<NavProps>`
  position: relative;
  width: 100%;
  margin-top: 20px;

  .logo {
    position: relative;
    width: 290px;
    height: 120px;
  }
  .nav {
    background-color: ${(props) => props.theme.colors.background};
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    .links {
      margin-top: 20px;
      transition: 300ms ease-in-out;
      height: ${(props) => (props.show ? "30vw" : "0vw")};
      overflow: hidden;
      z-index: 5;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      a {
        font-size: 5vw;
        color: #707070;
        &:hover {
          color: #d39d5b;
        }
      }
    }
  }

  .burger {
    height: 30px;
    width: 40px;
    z-index: 6;
    position: absolute;
    top: 40%;
    right: 15px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    div {
      transition: ease-in-out 300ms;
      border-radius: 5px;
      width: 40px;
      height: 5px;
      background-color: black;
    }
    > :nth-child(1) {
      position: absolute;
      bottom: ${(props) => (props.show ? "10px" : "0px")};
      transform: ${(props) => (props.show ? "rotate(50deg)" : "rotate(0deg)")};
    }
    > :nth-child(2) {
      position: absolute;
      bottom: 10px;
      right: 0px;
      opacity: ${(props) => (props.show ? "0" : "1")};
    }
    > :nth-child(3) {
      position: absolute;
      bottom: ${(props) => (props.show ? "10px" : "20px")};
      transform: ${(props) => (props.show ? "rotate(-50deg)" : "rotate(0deg)")};
    }
  }
  @media all and (min-width: ${(props) => props.theme.breakpoints.m}) {
    margin-top: 20px;
    .nav {
      margin-top: -25px;
      .links {
        transition: 300ms ease-in-out;
        height: 100%;
        position: relative;
        z-index: 5;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-content: flex-end;
        background-color: transparent;
        a {
          margin-right: 20px;
          font-size: 1.7vw;
        }
      }
    }
    .burger {
      display: none;
    }
  }
`;

export { StyledNav };
