import Image from "next/image";
import Link from "next/link";
import { ActorItemProps } from "../interfaces/ComponentProps";
import { StyledActorItem } from "../src/styles/styledComponents/StyledActorItem";

const ActorItem = (props: ActorItemProps) => {
  const { id, name, image, description } = props.data;

  const maxLength = 700; // Set maximum length of string
  let smallDescription: string;

  if (description.length > maxLength) {
    smallDescription = description.slice(0, maxLength - 3) + "..."; // Cut the string and add "..."
    return (
      <StyledActorItem>
        <div className="image_wrapper">
          <Image
            src={image}
            fill
            priority
            alt={`image_of_${name}`}
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
          />
        </div>
        <div className="info">
          <h2>{name.toUpperCase()}</h2>
          <p>{smallDescription}</p>
        </div>
        <Link href={`/actors/${id}`}>LÆS MERE</Link>
      </StyledActorItem>
    );
  } else {
    return (
      <StyledActorItem>
        <div className="image_wrapper">
          <Image
            src={image}
            fill
            priority
            alt={`image_of_${name}`}
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
          />
        </div>
        <div className="info">
          <h2>{name.toUpperCase()}</h2>
          <p>{description}</p>
        </div>
        <Link href={`/actors/${id}`}>LÆS MERE</Link>
      </StyledActorItem>
    );
  }
};

export default ActorItem;
