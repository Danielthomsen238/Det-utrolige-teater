import styled from "styled-components";
//styling for show list item
const StyledListItem = styled.div`
  margin-bottom: 10px;
  position: relative;
  display: flex;
  border: solid 1px ${(props) => props.theme.colors.secondary};
  width: 100%;
  .btn_container {
    position: absolute;
    right: 0;
    width: 250px;
    display: flex;
    justify-content: space-evenly;
    top: 35%;
    a {
      padding: 10px 10px;
      color: white;
    }
    > :nth-child(1) {
      background-color: ${(props) => props.theme.colors.tetiear};
    }
    > :nth-child(2) {
      background-color: ${(props) => props.theme.colors.primary};
    }
  }
  .info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title {
      margin-left: 30px;
      width: 200px;
      height: 70px;

      border-right: solid 1px lightgray;
      display: flex;
      align-items: center;
      font-size: 30px;
      color: ${(props) => props.theme.colors.primary};
      p {
        font-family: "Playfair Display", serif;
      }
    }
    .date_stage {
      margin-left: 20px;
      .date {
        font-weight: 600;
      }
    }
  }
  .image_wrapper {
    position: relative;
    border: solid 5px ${(props) => props.theme.colors.secondary};
    width: 125px;
    height: 100px;
  }
  @media all and (max-width: 1200px) {
    height: 500px;
    width: fit-content;
    flex-direction: column;
    .btn_container {
      top: 450px;
    }
    .image_wrapper {
      margin: 0 auto;
      width: 300px;
      height: 250px;
    }
    .info {
      margin: 0;
      margin-top: 20px;
      flex-direction: column;
      text-align: center;
      width: 300px;
      .title {
        margin: 0;
        height: 85px;
        padding-bottom: 10px;
        border: none;

        border-bottom: solid 1px lightgray;
        justify-content: center;
        font-size: 35px;
        color: ${(props) => props.theme.colors.primary};
        p {
          font-family: "Playfair Display", serif;
        }
      }
      .date_stage {
        margin: 0;
        margin-top: 20px;
        .stage {
          font-size: 20px;
        }
        .date {
          font-size: 20px;
          font-weight: 600;
        }
      }
    }
    .btn_container {
      width: 300px;
    }
  }
`;

export { StyledListItem };
