import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { StyledHeader } from "../src/styles/styledComponents/StyledHeader";
import { Event } from "../interfaces/ComponentProps";

/*Header component */
const Header = () => {
  //useState to set the data from the axios fetch
  const [data, setData] = useState<Event[]>();
  //useEffect to run the fetch before render with empty dependenci array so it only runs 1 time (2 in development)
  useEffect(() => {
    axios
      .get("https://api.mediehuset.net/detutroligeteater/events")
      .then((response) => setData(response.data.items))
      .catch((e) => console.error(e));
  }, []);

  return (
    <StyledHeader>
      {data &&
        data.map((item, idx: number) => {
          if (idx === 0) {
            /*Here i use the toLocaleDateString method to convert the start and end date to another format*/
            const startDateString = item.startdate;
            const endDateString = item.stopdate;
            const startDate = new Date(startDateString);
            const endDate = new Date(endDateString);
            const formattedStartDate = startDate.toLocaleDateString("da-DK", {
              day: "numeric",
              month: "short",
              year: "numeric",
            });
            const formattedEndDate = endDate.toLocaleDateString("da-DK", {
              day: "numeric",
              month: "short",
              year: "numeric",
            });
            return (
              <div key={idx}>
                <div className="info">
                  <p className="stage">{item.stage_name.toUpperCase()}</p>
                  <p className="date">
                    {formattedStartDate.toUpperCase()} - {formattedEndDate.toUpperCase()}
                  </p>
                  <p className="title">{item.title}</p>
                  <p className="genre">{item.genre}</p>
                </div>
                <div className="image_wrapper">
                  <Image src={item.image_large} alt={item.title} fill />
                </div>
              </div>
            );
          }
        })}
    </StyledHeader>
  );
};

export default Header;
