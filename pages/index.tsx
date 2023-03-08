import axios from "axios";
import { useEffect, useState } from "react";
import HtmlHead from "../components/Head";
import Header from "../components/Header";
import { GridAutoColumnContainer } from "../src/styles/grid/AutoGridColumns";
import { Event } from "../interfaces/ComponentProps";
import Card from "../components/Card";
import Link from "next/link";
import { StyledHome } from "../src/styles/styledComponents/StyledMain";
import Animate from "../components/Animate";

const Home = () => {
  //useState to set the data from the axios fetch
  const [data, setData] = useState<Event[]>();
  //useEffect to run the fetch before render with empty dependenci array so it only runs 1 time (2 in development)
  useEffect(() => {
    axios
      .get("https://api.mediehuset.net/detutroligeteater/events?orderby=rand()")
      .then((response) => setData(response.data.items))
      .catch((e) => console.error(e));
  }, []);

  console.log(data);
  return (
    <Animate>
      <StyledHome>
        <HtmlHead title="Forside" description="Forside Det utrolige teater" />
        <GridAutoColumnContainer>
          {data &&
            data.map((item, idx: number) => {
              if (idx < 3) {
                return <Card key={idx} data={item} />;
              }
            })}
        </GridAutoColumnContainer>
        <div>
          <Link className="see_all_events" href="/shows">
            SE ALLE FORESTILLINGER
          </Link>
        </div>
      </StyledHome>
    </Animate>
  );
};

export default Home;
