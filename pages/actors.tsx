import { StyledActors } from "../src/styles/styledComponents/StyledMain";
import HtmlHead from "../components/Head";
import { useEffect, useState } from "react";
import axios from "axios";
import ActorItem from "../components/ActorItem";
import { Actor } from "../interfaces/ComponentProps";
import Animate from "../components/Animate";
import { NextPage } from "next";

//actore page
const Actors: NextPage = () => {
  //store actore data from fetch
  const [data, setData] = useState<Actor[]>();

  //useEffect to fetch before render
  useEffect(() => {
    axios
      .get(`https://api.mediehuset.net/detutroligeteater/actors`)
      .then((r) => setData(r.data.items))
      .catch((e) => console.error(e));
  }, []);

  return (
    <Animate>
      <StyledActors>
        <HtmlHead title="Skuespillere" description="List over skuespillere" />
        <h1>Skuespillere</h1>
        {data &&
          data.map((item, idx: number) => {
            return <ActorItem key={idx} data={item} />;
          })}
      </StyledActors>
    </Animate>
  );
};

export default Actors;
