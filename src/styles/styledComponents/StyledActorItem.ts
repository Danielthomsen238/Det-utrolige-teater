import styled from "styled-components";

const StyledActorItem = styled.div`
  position: relative;
  margin-top: 20px;
  display: flex;
  padding: 20px;
  .image_wrapper {
    position: relative;
    width: 300px;
    height: 300px;
  }
  .info {
    h2 {
      color: gray;
      font-weight: 500;
      margin-bottom: 20px;
    }
    p {
      color: ${(props) => props.theme.colors.primary};
    }
    margin-left: 20px;
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

  @media all and (max-width: 600px) {
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .info {
      margin-top: 20px;
      width: 90%;
    }
  }
`;

export { StyledActorItem };
