import styled from "styled-components";

//styling for actor list item

const StyledActorItem = styled.div`
  position: relative;
  margin-top: 20px;
  display: flex;
  padding: 20px;
  justify-content: space-between;
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
      font-family: "Playfair Display", serif;
      color: ${(props) => props.theme.colors.primary};
    }
    width: 50%;
  }

  &:after {
    position: absolute;
    content: "";
    background-color: lightgray;
    bottom: 0;
    right: 2%;
    height: 1px;
    width: 96%;
  }

  a {
    align-self: flex-end;
    margin-bottom: 20px;
    padding: 10px 20px;
    background-color: ${(props) => props.theme.colors.tetiear};
    color: white;
  }

  @media all and (max-width: 1200px) {
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

    a {
      margin-top: 50px;
      align-self: center;
    }
  }
`;

export { StyledActorItem };
