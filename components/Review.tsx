import { ReviewProps } from "../interfaces/ComponentProps";
import { StyledReview } from "../src/styles/styledComponents/StyledReview";
import Rating from "@mui/material/Rating";

const Review = (props: ReviewProps) => {
  const {
    num_stars,
    user: { firstname, lastname },
    comment,
    created,
  } = props.data;

  return (
    <StyledReview>
      <Rating name="read-only" value={parseInt(num_stars)} readOnly />
      <p className="date">{created.substring(0, 10).replace(/-/g, ".")}</p>
      <p className="name">
        {firstname.toUpperCase()} {lastname.toUpperCase()}
      </p>
      <p className="comment">{comment}</p>
    </StyledReview>
  );
};

export default Review;
