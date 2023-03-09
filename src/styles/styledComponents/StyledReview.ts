import styled from "styled-components";

const StyledReview = styled.div`
  border-top: solid lightgray 1px;
  padding-top: 20px;
  margin-top: 20px;
  .name {
    font-weight: 500;
  }
  .comment {
    margin-top: 10px;
    color: ${(props) => props.theme.colors.primary};
  }
`;

export { StyledReview };
