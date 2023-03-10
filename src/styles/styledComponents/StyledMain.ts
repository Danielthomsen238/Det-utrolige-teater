import styled from "styled-components";
//Styling for all main tags
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
const StyledShows = styled.main`
  margin-top: 30px;
`;

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

      .stage {
        font-weight: 600;
      }
    }
    .info {
      padding: 1vw;
      .title_buy_ticket {
        a {
          padding: 10px 20px;
          background-color: ${(props) => props.theme.colors.primary};
          color: white;
        }
        display: flex;
        justify-content: space-between;
        align-items: center;
        .title {
          font-size: 35px;
          color: ${(props) => props.theme.colors.primary};
        }
        .genre {
          font-size: 25px;
          font-weight: 500;
        }
      }

      .description {
        margin-top: 1vw;
        font-size: 22px;
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
        font-family: "Playfair Display", serif;
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
  position: relative;
  border: solid 1px ${(props) => props.theme.colors.secondary};
  margin-top: 40px;
  margin-bottom: 40px;
  .approve {
    position: absolute;
    right: 0;
    border: none;
    cursor: pointer;
    bottom: -50px;
    background-color: ${(props) => props.theme.colors.secondary};
    padding: 10px 10px;
    color: white;
  }
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
        height: 45vw;
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

  @media all and (max-width: 1400px) {
    .ticket_form {
      width: 74.5vw;
      display: flex;
      flex-direction: column;
      .image_wrapper {
        position: relative;
        width: 100%;
        overflow: hidden;
        border: solid 10px ${(props) => props.theme.colors.secondary};
        div {
          left: 0;
          position: relative;
          width: 100%;
          height: 45vw;
        }
      }
      .form_container {
        width: 100%;
        form {
          margin-top: 40px;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 10px;
          input {
            width: 55vw;
            height: 40px;
            font-size: 22px;
            padding-left: 10px;
          }

          label {
            font-size: 18px;
          }
          .road {
            input {
              width: 27.5vw;
            }
          }
          .city {
            input {
              width: 27.5vw;
            }
          }
          .quantity {
            margin-top: 100px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 325px;
            .container {
              div {
                height: 40px;
                width: 40px;
              }
            }
            input {
              width: 40px;
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
  }
  @media all and (max-width: 800px) {
    .ticket_form {
      width: 97.5vw;
      display: flex;
      flex-direction: column;
      .image_wrapper {
        position: relative;
        width: 100%;
        overflow: hidden;
        border: solid 10px ${(props) => props.theme.colors.secondary};
        div {
          left: 0;
          position: relative;
          width: 100%;
          height: 45vw;
        }
      }
    }
  }
`;

const StyledBuyPage = styled.main`
  position: relative;
  border: solid 1px ${(props) => props.theme.colors.primary};
  margin-top: 40px;
  margin-bottom: 40px;
  display: flex;
  .image_wrapper {
    position: relative;
    width: 500px;
    height: 60vw;
    overflow: hidden;
    border: solid 10px ${(props) => props.theme.colors.secondary};
    div {
      left: -200px;
      position: relative;
      width: 75vw;
      height: 70vw;
    }
  }
  .ticket {
    padding-right: 20px;
    padding-left: 20px;
    width: 70%;
    text-align: right;
    .top_title {
      color: ${(props) => props.theme.colors.primary};
      font-size: 40px;
      margin-top: 20px;
      font-weight: 500;
      padding-bottom: 20px;
      border-bottom: solid 1px lightgrey;
    }
    .info {
      text-align: left;
      .mid_title {
        margin-top: 20px;
        margin-bottom: 20px;
      }
      .event {
        span {
          font-weight: 700;
          margin-right: 10px;
        }
      }
      .stage {
        span {
          font-weight: 700;
          margin-right: 10px;
        }
      }
      .date {
        span {
          font-weight: 700;
          margin-right: 10px;
        }
      }
      table {
        font-size: 22px;
        margin-top: 30px;
        width: 100%;
        td:nth-child(2) {
          width: 40%;
        }
        thead {
          th {
            font-weight: 600;
            border-bottom: solid 1px black;
          }
        }
        tbody {
          tr:not(:last-child) {
            td {
              border-bottom: solid 1px gray;
              padding-bottom: 5px;
            }
          }
          td {
            padding-bottom: 5px;
          }
        }

        tfoot {
          td {
            font-weight: 600;
            border-bottom: solid 1px black;
            border-top: solid 1px black;
            padding-bottom: 5px;
          }
        }
      }
      .moms {
        text-align: right;
      }
    }
    .customer_info {
      text-align: left;
      span {
        color: ${(props) => props.theme.colors.secondary};
      }
      h2 {
        margin-bottom: 10px;
      }
      h3 {
        margin-top: 20px;
        font-weight: 400;
      }
    }
  }
  .btn_container {
    position: absolute;
    display: flex;
    justify-content: space-between;
    bottom: -60px;
    right: 0;
    width: 300px;
    a {
      padding: 10px 20px;
      background-color: ${(props) => props.theme.colors.primary};
      color: white;
    }
    button {
      padding: 10px 20px;
      background-color: ${(props) => props.theme.colors.primary};
      color: white;
      border: none;
      cursor: pointer;
    }
  }
  @media all and (max-width: 1000px) {
    flex-direction: column;
    .image_wrapper {
      width: 74.5vw;
      div {
        left: 0;
        width: 100%;
        height: 60vw;
      }
    }
    .ticket {
      width: 100%;
      .info {
        table {
          font-size: 22px;
          margin-top: 30px;
          width: 100%;
          td:nth-child(2) {
            width: 30%;
          }
          td:nth-child(1) {
            width: 30%;
          }
          thead {
            th {
              font-weight: 600;
              border-bottom: solid 1px black;
            }
          }
          tbody {
            tr:not(:last-child) {
              td {
                border-bottom: solid 1px gray;
                padding-bottom: 5px;
              }
            }
            td {
              padding-bottom: 5px;
            }
          }

          tfoot {
            td {
              font-weight: 600;
              border-bottom: solid 1px black;
              border-top: solid 1px black;
              padding-bottom: 5px;
            }
          }
        }
      }
    }
  }
  @media all and (max-width: 800px) {
    flex-direction: column;
    .image_wrapper {
      width: 97.5vw;
      div {
        left: 0;
        width: 100%;
        height: 60vw;
      }
    }
  }
`;

const StyledTicketComplete = styled.main`
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 1px ${(props) => props.theme.colors.secondary};
  height: 40vh;
  h1 {
    color: ${(props) => props.theme.colors.primary};
    font-size: 60px;
    font-weight: 400;
  }
  @media all and (max-width: 600px) {
    h1 {
      color: ${(props) => props.theme.colors.primary};
      font-size: 35px;
      font-weight: 400;
    }
  }
`;
const StyledAdminPage = styled.main`
  margin-top: 50px;
  padding: 20px;
  border: solid 1px ${(props) => props.theme.colors.secondary};
  .top_bar {
    display: flex;
    justify-content: space-between;
    width: 100%;
    h2 {
      font-size: 40px;
      color: ${(props) => props.theme.colors.primary};
    }
    div {
      display: flex;
      flex-direction: column;

      button {
        align-self: flex-end;
        width: 100px;
        background-color: ${(props) => props.theme.colors.primary};
        color: white;
        border: none;
        cursor: pointer;
        padding: 10px 20px;
      }
    }
  }
  h2 {
    font-weight: 300;
  }

  .tickets {
    margin-top: 50px;
    width: 320px;
    justify-content: space-between;
    align-items: center;
    display: flex;
  }
  .favoritter {
    margin-top: 50px;
    width: 270px;
    justify-content: space-between;
    align-items: center;
    display: flex;
  }
  .reviews {
    margin-top: 50px;
    width: 305px;
    justify-content: space-between;
    align-items: center;
    display: flex;
  }
  .table_container {
    margin: 0 auto;
    width: 71vw;
    overflow-x: scroll;
    overflow-y: auto;

    ::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }

    /* track */
    ::-webkit-scrollbar-track {
      background-color: white;
    }

    /* thumb */
    ::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme.colors.primary};
      border-radius: 5px;
    }

    /* on hover */
    ::-webkit-scrollbar-thumb:hover {
      background-color: ${(props) => props.theme.colors.secondary};
    }
  }

  table {
    font-size: 22px;
    margin-top: 10px;
    width: 1075px;
    td:nth-child(2) {
    }
    th:last-child {
      text-align: right;
    }
    thead {
      th {
        text-align: left;
        font-weight: 600;
        border-bottom: solid 1px gray;
      }
    }
    tbody {
      td {
        border-bottom: solid 1px gray;
      }

      td:last-child {
        height: 45px;
        display: flex;
        justify-content: flex-end;
      }
      td {
        svg {
          margin-top: 10px;
          color: black;
        }
        .trash {
          color: red;
          cursor: pointer;
        }
      }
    }
  }
`;
export { StyledAdminPage, StyledTicketComplete, StyledBuyPage, StyledHome, StyledShows, StyledActors, StyledActorsDetail, StyledShowDetail, StyledTicketPage };
