import styled from "styled-components";

//styling for the topbar on detail pages

const StyledShowsTopBar = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-size: 40px;
    color: ${(props) => props.theme.colors.primary};
  }
`;
export { StyledShowsTopBar };
