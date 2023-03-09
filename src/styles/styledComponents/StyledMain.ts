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
    .info {
      padding: 1vw;
      .title_buy_ticket {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .description {
        margin-top: 1vw;
        white-space: pre-wrap;
        color: ${(props) => props.theme.colors.primary};
      }
      .duration {
        margin-top: 1vw;
        color: ${(props) => props.theme.colors.primary};
      }
    }
    .actors_h2 {
      padding-left: 1vw;
      padding-bottom: 20px;
      font-weight: 400;
    }
    .actors {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;
      padding-bottom: 20px;
      border-bottom: dashed 1px ${(props) => props.theme.colors.primary};
      .actor_item {
        .actor_img_wrapper {
          position: relative;
          width: 175px;
          height: 175px;
        }
        text-align: center;
        border: solid 1px ${(props) => props.theme.colors.primary};
        .actor_name {
          width: 175px;
          padding: 10px 0;
          color: ${(props) => props.theme.colors.primary};
          font-size: 20px;
        }
      }
    }
    .reviews {
      padding: 1vw;
      h2 {
        margin: 0;
        font-weight: 400;
        margin-top: 20px;
      }
    }
    .post_review {
      background-color: ${(props) => props.theme.colors.secondary};
      padding: 20px;
      p {
        color: white;
      }
      .rating {
        margin-top: 20px;
        color: white;
        width: 230px;
        justify-content: space-between;
        display: flex;
        align-items: center;
      }
      .input_container {
        margin-top: 15px;
        display: flex;
        flex-direction: column;
        gap: 15px;
        input {
          border-radius: 5px;
          border: solid 1px ${(props) => props.theme.colors.secondary};
          padding-left: 10px;
          width: 89%;
          height: 40px;
        }
        div {
          display: flex;
          gap: 10px;
          textarea {
            border-radius: 5px;
            border: solid 1px ${(props) => props.theme.colors.secondary};
            padding-left: 10px;
            padding-top: 10px;
            width: 90%;
            height: 200px;
            resize: none;
          }
          button {
            align-self: flex-end;
            height: 40px;
            width: 10%;
            color: white;
            background-color: ${(props) => props.theme.colors.primary};
            border: none;
            cursor: pointer;
          }
        }
      }
    }
    .login_review {
      background-color: ${(props) => props.theme.colors.secondary};
      padding: 20px;
      p {
        color: white;
        margin-bottom: 20px;
      }
      .login {
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
    }
  }
  @media all and (max-width: 800px) {
    .container {
      .top_info {
        margin: 0 auto;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: solid 1px lightgray;
      }
      .image_wrapper {
        position: relative;
        width: 100%;
        height: 70vw;
        border: solid 15px ${(props) => props.theme.colors.secondary};
        svg {
          top: 2vw;
          right: 2vw;
          position: absolute;
          z-index: 20;
          width: 7vw;
          height: 7vw;
          color: ${(props) => props.theme.colors.primary};
        }
      }
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
const StyledTicketPage = styled.main`
  border: solid 1px ${(props) => props.theme.colors.secondary};
  margin-top: 40px;
  .ticket_form {
    display: flex;
    border-bottom: dashed 1px ${(props) => props.theme.colors.secondary};
    padding-bottom: 40px;
    .image_wrapper {
      position: relative;
      width: 500px;
      overflow: hidden;
      border: solid 10px ${(props) => props.theme.colors.secondary};
      div {
        left: -200px;
        position: relative;
        width: 75vw;
        height: 40vw;
      }
    }
    .form_container {
      padding: 20px;

      width: 70%;
      display: flex;
      flex-direction: column;
      h1 {
        text-align: right;
        font-size: 40px;
        padding-bottom: 20px;
        font-weight: 500;
        color: ${(props) => props.theme.colors.primary};
        border-bottom: solid lightgray 1px;
      }
      .title {
        width: 100%;
        font-size: 30px;
        font-weight: 500;
        text-align: right;
        margin-top: 35px;
      }
      .stage_time {
        margin-top: 5px;
        text-align: right;
        font-size: 22px;
      }
      form {
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 10px;
        input {
          width: 33vw;
          height: 40px;
          border: solid 2px lightgray;
          border-radius: 4px;
          color: ${(props) => props.theme.colors.primary};
          font-size: 22px;
          padding-left: 10px;
        }
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        label {
          font-size: 22px;
        }
        .road {
          input {
            width: 16.5vw;
            border: none;
          }
          > :nth-child(1) {
            border-top: solid 2px lightgray;
            border-left: solid 2px lightgray;
            border-bottom: solid 2px lightgray;
            border-right: solid 2px lightgray;
            border-radius: 4px 0 0 4px;
          }
          > :nth-child(2) {
            border-top: solid 2px lightgray;
            border-right: solid 2px lightgray;
            border-bottom: solid 2px lightgray;
            border-radius: 0 4px 4px 0;
          }
        }
        .city {
          input {
            width: 16.5vw;
            border: none;
          }
          > :nth-child(1) {
            border-top: solid 2px lightgray;
            border-left: solid 2px lightgray;
            border-bottom: solid 2px lightgray;
            border-right: solid 2px lightgray;
            border-radius: 4px 0 0 4px;
          }
          > :nth-child(2) {
            border-top: solid 2px lightgray;
            border-right: solid 2px lightgray;
            border-bottom: solid 2px lightgray;
            border-radius: 0 4px 4px 0;
          }
        }
        .quantity {
          margin-top: 100px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 375px;
          .container {
            display: flex;
            align-items: center;

            div {
              background-color: lightgray;
              height: 40px;
              width: 40px;
              display: flex;
              align-items: center;
              justify-content: center;
              border: solid 2px lightgray;
              cursor: pointer;
            }
            > :nth-child(1) {
              border-radius: 4px 0 0 4px;
            }
            > :nth-child(3) {
              border-radius: 0 4px 4px 0;
            }
          }
          input {
            border: none;
            border-top: solid 2px lightgray;
            border-bottom: solid 2px lightgray;
            width: 40px;
            border-radius: 0;
            color: black;
          }
          .price {
            font-weight: 600;
            .moms {
              font-weight: 300;
              font-size: 12px;
            }
          }
        }
      }
    }
  }
`;
export { StyledHome, StyledShows, StyledActors, StyledActorsDetail, StyledShowDetail, StyledTicketPage };
