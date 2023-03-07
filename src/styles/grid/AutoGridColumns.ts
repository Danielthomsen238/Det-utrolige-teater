import styled from "styled-components";

export const GridAutoColumnContainer = styled.section`
  margin-top: 50px;
  margin-bottom: 50px;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
`;
