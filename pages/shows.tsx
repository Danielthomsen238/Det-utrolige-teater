import { useEffect, useState } from "react";
import HtmlHead from "../components/Head";
import { StyledListShows } from "../src/styles/styledComponents/StyledListShows";
import { StyledShows } from "../src/styles/styledComponents/StyledMain";
import { StyledShowsTopBar } from "../src/styles/styledComponents/StyledShowsTopBar";
import { Event } from "../interfaces/ComponentProps";
import axios from "axios";
import ListItem from "../components/ListItem";
import Animate from "../components/Animate";

const Shows = () => {
  const [selectedOption, setSelectedOption] = useState<string>("filter");
  const [data, setData] = useState<Event[]>();
  useEffect(() => {
    axios
      .get(`https://api.mediehuset.net/detutroligeteater/events`)
      .then((r) => setData(r.data.items))
      .catch((e) => console.error(e));
  }, []);
  console.log(data);
  return (
    <Animate>
      <StyledShows>
        <HtmlHead title="Forstillinger og Events" description="Se alle Forstillinger og events her" />
        <StyledShowsTopBar>
          <select name="sort-by" id="sort-by" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
            <option value="Filter">Filter</option>
            <option value="popularitet">Sorter efter popularitet</option>
            <option value="pris-faldende">Sorter efter pris (faldende)</option>
            <option value="pris-stigende">Sorter efter pris (stigende)</option>
            <option value="title-a-aa">Sorter efter titel (A-Å)</option>
            <option value="title-aa-a">Sorter efter titel (Å-A)</option>
          </select>
          <h1>Oversigt</h1>
        </StyledShowsTopBar>
        <StyledListShows>
          {data &&
            data.map((item, idx: number) => {
              return <ListItem key={idx} data={item} />;
            })}
        </StyledListShows>
      </StyledShows>
    </Animate>
  );
};

export default Shows;
