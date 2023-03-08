import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Animate from "../../components/Animate";
import { Actor } from "../../interfaces/ComponentProps";
import { StyledActorsDetail } from "../../src/styles/styledComponents/StyledMain";

const ActorDetail = () => {
  const router = useRouter();
  const [data, setData] = useState<Actor>();
  useEffect(() => {
    axios
      .get(`https://api.mediehuset.net/detutroligeteater/actors/${router.query.id}`)
      .then((r) => setData(r.data.item))
      .catch((e) => console.error(e));
  }, [router.query.id]);
  console.log(data);
  let string = "Hello Hello";
  return (
    <Animate>
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
