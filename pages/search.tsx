import HtmlHead from "../components/Head";
import ListItem from "../components/ListItem";
import { SearchState, useSearch } from "../helpers/useSearch";
import { StyledShows } from "../src/styles/styledComponents/StyledMain";

//search results
const Search = () => {
  const { events } = useSearch() as SearchState;
  return (
    <StyledShows>
      <HtmlHead title="Søge resultater" description="Søge resultater" />
      <h1>SØGE RESULTATER</h1>
      {events && events.map((item, idx: number) => <ListItem key={idx} data={item} />)}
    </StyledShows>
  );
};

export default Search;
