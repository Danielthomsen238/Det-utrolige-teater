import { useEffect, useState } from "react";
import HtmlHead from "../components/Head";
import { StyledListShows } from "../src/styles/styledComponents/StyledListShows";
import { StyledShows } from "../src/styles/styledComponents/StyledMain";
import { StyledShowsTopBar } from "../src/styles/styledComponents/StyledShowsTopBar";
import { Event } from "../interfaces/ComponentProps";
import axios from "axios";
import ListItem from "../components/ListItem";
import Animate from "../components/Animate";
import { NextPage } from "next";

//shows page
const Shows: NextPage = () => {
  //select input
  const [selectedOption, setSelectedOption] = useState<string>("");
  //store event data from fetch
  const [data, setData] = useState<Event[]>();
  //useEffect to fetch before render
  useEffect(() => {
    //using template string to add the search params
    axios
      .get(`https://api.mediehuset.net/detutroligeteater/events${selectedOption === "?dir=ASC" || selectedOption === "?dir=DESC" ? selectedOption : ""}`)
      .then((r) => {
        //using the select input to sort
        if (selectedOption === "pris-faldende") {
          setData(r.data.items.sort((a: any, b: any) => b.price - a.price));
        } else if (selectedOption === "pris-stigende") {
          setData(r.data.items.sort((a: any, b: any) => a.price - b.price));
        } else {
          setData(r.data.items);
        }
      })
      .catch((e) => console.error(e));
  }, [selectedOption]);

  return (
    <Animate>
      <StyledShows>
        <HtmlHead title="Forstillinger og Events" description="Se alle Forstillinger og events her" />
        <StyledShowsTopBar>
          <select name="sort-by" id="sort-by" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
            <option value="">Filter</option>
            <option value="pris-faldende">Sorter efter pris (faldende)</option>
            <option value="pris-stigende">Sorter efter pris (stigende)</option>
            <option value="?dir=ASC">Sorter efter titel (A-Å)</option>
            <option value="?dir=DESC">Sorter efter titel (Å-A)</option>
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
