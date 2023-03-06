import axios from "axios";
import { useEffect, useState } from "react";
import HtmlHead from "../components/Head";
import Header from "../components/Header";
import { GridAutoColumnContainer } from "../src/styles/grid/AutoGridColumns";
import { Event } from "../interfaces/ComponentProps";

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
    <>
      <HtmlHead title="Forside" description="Forside Det utrolige teater" />
      <Header />
      <GridAutoColumnContainer></GridAutoColumnContainer>
    </>
  );
};

export default Home;
