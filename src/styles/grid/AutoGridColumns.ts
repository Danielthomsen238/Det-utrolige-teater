import styled from "styled-components";

export const GridAutoColumnContainer = styled.section`
  margin-top: 50px;
  display: grid;
  gap: 4rem;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
`;
