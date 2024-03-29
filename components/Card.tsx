import Image from "next/image";
import Link from "next/link";
import { CardProps } from "../interfaces/ComponentProps";
import { StyledCard } from "../src/styles/styledComponents/StyledCard";

//card component for the 3 show on the frontpage
const Card = (props: CardProps) => {
  //destruct props
  const { id, image_large, startdate, stopdate, stage_name, title, genre } = props.data;

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
        <Image
          src={image_large}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          priority
        />
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
        <Link href={`/shows/${id}`}>LÆS MERE</Link>
        <Link href={`/shows/ticket/${id}`}>KØB BILLET</Link>
      </div>
    </StyledCard>
  );
};

export default Card;
