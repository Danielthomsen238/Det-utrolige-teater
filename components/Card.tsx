import Image from "next/image";
import { CardProps } from "../interfaces/ComponentProps";
import { StyledCard } from "../src/styles/styledComponents/StyledCard";

const Card = (props: CardProps) => {
  const { image_large, startdate, stopdate, stage_name, title, genre } = props.data;

  /*Here i use the toLocaleDateString method to convert the start and end date to another format*/
  const startDateString = startdate;
  const endDateString = stopdate;
  const startDate = new Date(startDateString);
  const endDate = new Date(endDateString);
  const formattedStartDate = startDate.toLocaleDateString("da-DK", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  const formattedEndDate = endDate.toLocaleDateString("da-DK", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <StyledCard>
      <div className="image_wrapper">
        <Image src={image_large} alt={title} fill priority />
      </div>
      <div className="info">
        <p className="stage">{stage_name.toUpperCase()}</p>
        <p className="date">
          {formattedStartDate.toUpperCase()} - {formattedEndDate.toUpperCase()}
        </p>
        <p className="title">{title}</p>
        <p className="genre">{genre.toUpperCase()}</p>
      </div>
      <div className="btn_container">
        <button>LÆS MERE</button>
        <button>KØB BILLET</button>
      </div>
    </StyledCard>
  );
};

export default Card;
