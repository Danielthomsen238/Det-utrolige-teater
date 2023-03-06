import styled from "styled-components";

export const GridAutoColumnContainer = styled.section`
  padding: 1em;
  display: grid;
  gap: 2em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(250px, 400px));
`;
