import axios from "axios";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Animate from "../../components/Animate";
import HtmlHead from "../../components/Head";
import { Actor } from "../../interfaces/ComponentProps";
import { StyledActorsDetail } from "../../src/styles/styledComponents/StyledMain";

//actor detail page
const ActorDetail: NextPage = () => {
  //router to get id from params
  const router = useRouter();
  //useState to store actor data
  const [data, setData] = useState<Actor>();

  //useEffect to fetch before render
  useEffect(() => {
    //check if the params is set before trying to fetch else it might give error on reload
    if (router.query.id) {
      axios
        .get(`https://api.mediehuset.net/detutroligeteater/actors/${router.query.id}`)
        .then((r) => setData(r.data.item))
        .catch((e) => console.error(e));
    }
    //run the useEffect on every change to params
  }, [router.query.id]);

  return (
    <Animate>
      <HtmlHead title="Skuespiller" description="Se detalje omkring en skuespiller" />
      <StyledActorsDetail>
        {data && (
          <div className="container">
            <div className="image_wrapper">
              <Image
                src={data.image}
                fill
                priority
                alt={`image_of_${data.name}`}
                sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
              />
            </div>
            <div className="info">
              <h1>{data.name.toUpperCase()}</h1>
              <pre>{data.description}</pre>
            </div>
            <Link href={`/actors`}>ALLE SKUESPILLERE</Link>
          </div>
        )}
      </StyledActorsDetail>
    </Animate>
  );
};

export default ActorDetail;
