import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Animate from "../../components/animate";
import HtmlHead from "../../components/Head";
import { EventDetail } from "../../interfaces/ComponentProps";
import { StyledShowDetail } from "../../src/styles/styledComponents/StyledMain";
import Image from "next/image";

const ShowDetail = () => {
  const router = useRouter();
  const [data, setData] = useState<EventDetail>();

  useEffect(() => {
    axios
      .get(`https://api.mediehuset.net/detutroligeteater/events/${router.query.id}`)
      .then((r) => setData(r.data.item))
      .catch((e) => console.error(e));
  }, [router.query.id]);
  console.log(data);

  if (data) {
    const startDateString = data.startdate;
    const endDateString = data.stopdate;
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
      <>
        <HtmlHead title="Forstillinger og Events" description="Se detaljer for en forstilling eller event" />
        <Animate>
          <StyledShowDetail>
            <section className="container">
              <div className="image_wrapper">
                <Image
                  src={data.image_large}
                  alt={data.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                />
              </div>
              <div className="top_info">
                <div className="stage_date">
                  <p className="stage">{data.stage_name}</p>
                  <p className="date">
                    {formattedStartDate} - {formattedEndDate}
                  </p>
                </div>
                <p className="price">BILLETPRIS: {data.price} DKK</p>
              </div>
            </section>
          </StyledShowDetail>
        </Animate>
      </>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default ShowDetail;
