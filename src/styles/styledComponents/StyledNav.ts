import styled from "styled-components";

interface NavProps {
  showBurger: boolean;
  showLogin: boolean;
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
  .login {
    display: ${(props) => (props.showLogin ? "block" : "none")};
    position: absolute;
    top: 200px;
    z-index: 10;
    right: 20%;
    background-color: ${(props) => props.theme.colors.secondary};
    padding: 20px 20px;
    input {
      height: 30px;
    }
    div {
      margin-top: 5px;
      input {
        height: 30px;
        margin-right: 5px;
      }
      button {
        background-color: #61e692;
        border: none;
        height: 30px;
        padding: 0 10px;
        cursor: pointer;
      }
    }
  }
  .search {
    position: absolute;
    top: 0;
    right: 0;
    input {
      padding-left: 5px;
      width: 150px;
      border: none;
      border-bottom: 1px solid lightgray;
    }
    button {
      border: none;
      border-bottom: 1px solid lightgray;
      background-color: white;
      svg {
        margin-bottom: -5px;
        color: gray;
      }
    }
  }
  .nav {
    background-color: ${(props) => props.theme.colors.background};
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    .links {
      margin-top: 10px;
      transition: 300ms ease-in-out;
      height: ${(props) => (props.showBurger ? "25vw" : "0vw")};
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
      p {
        cursor: pointer;
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
    top: 30%;
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
      bottom: ${(props) => (props.showBurger ? "10px" : "0px")};
      transform: ${(props) => (props.showBurger ? "rotate(50deg)" : "rotate(0deg)")};
    }
    > :nth-child(2) {
      position: absolute;
      bottom: 10px;
      right: 0px;
      opacity: ${(props) => (props.showBurger ? "0" : "1")};
    }
    > :nth-child(3) {
      position: absolute;
      bottom: ${(props) => (props.showBurger ? "10px" : "20px")};
      transform: ${(props) => (props.showBurger ? "rotate(-50deg)" : "rotate(0deg)")};
    }
  }

  @media all and (min-width: 1450px) {
    margin-top: 20px;
    .login {
      position: absolute;
      top: 50px;
      z-index: 10;
      right: 0;
      background-color: ${(props) => props.theme.colors.secondary};
      padding: 20px 20px;
      input {
        height: 30px;
      }
      div {
        margin-top: 5px;
        input {
          height: 30px;
          margin-right: 5px;
        }
        button {
          background-color: #61e692;
          border: none;
          height: 30px;
          padding: 0 10px;
          cursor: pointer;
        }
      }
    }
    .nav {
      margin-top: -40px;
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
        p {
          font-size: 1.7vw;
          color: #707070;
          &:hover {
            color: #d39d5b;
          }
        }
      }
    }

    .burger {
      display: none;
    }
  }
`;

export { StyledNav };
