import styled from "styled-components";

export const GridAutoColumnContainer = styled.section`
  padding: 1em;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
`;
