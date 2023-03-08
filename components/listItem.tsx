import { StyledListItem } from "../src/styles/styledComponents/StyledListItem";
import { CardProps } from "../interfaces/ComponentProps";
import Image from "next/image";
import Link from "next/link";

const ListItem = (props: CardProps) => {
  const { id, image_large, title, stage_name, startdate, stopdate } = props.data;

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
    <StyledListItem>
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
        <div className="title">
          <p>{title}</p>
        </div>

        <div className="date_stage">
          <p className="stage">{stage_name.toUpperCase()}</p>
          <p className="date">
            {formattedStartDate.toUpperCase()} - {formattedEndDate.toUpperCase()}
          </p>
        </div>
      </div>
      <div className="btn_container">
        <Link href={`/shows/${id}`}>LÆS MERE</Link>
        <Link href="/">KØB BILLET</Link>
      </div>
    </StyledListItem>
  );
};

export default ListItem;
