import axios from "axios";
import { useEffect, useState } from "react";
import { StyledSeat, StyledTest } from "../src/styles/styledComponents/StyledTest";

const Test = () => {
  // Set up state to hold the data fetched from the API
  const [data, setData] = useState<any[]>();

  // Fetch the data from the API when the component mounts
  useEffect(() => {
    axios
      .get(`https://api.mediehuset.net/detutroligeteater/seats/3`)
      .then((r) => setData(r.data.items))
      .catch((e) => console.log(e));
  }, []);
  console.log(data);
  // reduce Group the data by line number
  const groupedData = data?.reduce((line: any, item: any) => {
    if (!line[item.line]) {
      line[item.line] = [];
    }
    line[item.line].push(item);
    return line;
  }, {});
  console.log(groupedData);
  return (
    // Render the seats using Styled Components and passing the length of the array to the styled-component
    <StyledTest length={Object.keys(groupedData).length}>
      {/*First check if the groupData is not undefined,
       then map over the entries for each entry, it creates a new div element with the line number
        and inside it maps over the seats in the current line
       */}
      {groupedData &&
        Object.entries(groupedData).map(([line, seats]: any) => (
          <div key={line}>
            {seats.map((seat: any) => (
              <StyledSeat isReserved={seat.is_reserved} key={seat.id}>
                {seat.number}
              </StyledSeat>
            ))}
          </div>
        ))}
    </StyledTest>
  );
};

export default Test;
