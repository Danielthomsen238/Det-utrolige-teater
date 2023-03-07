import styled from "styled-components";

const StyledListItem = styled.div`
  margin-bottom: 10px;
  position: relative;
  display: flex;
  border: solid 1px ${(props) => props.theme.colors.secondary};
  width: 100%;
  .btn_container {
    position: absolute;
    right: 0;
  }
  .info {
    width: 30vw;
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
    }
  }
  .image_wrapper {
    position: relative;
    border: solid 5px ${(props) => props.theme.colors.secondary};
    width: 100px;
    height: 100px;
  }
`;

export { StyledListItem };
