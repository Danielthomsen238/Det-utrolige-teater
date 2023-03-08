import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Animate from "../../components/Animate";
import HtmlHead from "../../components/Head";
import { EventDetail, Reviews } from "../../interfaces/ComponentProps";
import { StyledShowDetail } from "../../src/styles/styledComponents/StyledMain";
import Image from "next/image";
import Favorite from "../../components/Favorite";
import Link from "next/link";
import Rating from "@mui/material/Rating";
import Review from "../../components/Review";

const ShowDetail = () => {
  const router = useRouter();
  const [data, setData] = useState<EventDetail>();
  const [reviews, setReviews] = useState<Reviews[]>();

  useEffect(() => {
    axios
      .get(`https://api.mediehuset.net/detutroligeteater/events/${router.query.id}`)
      .then((r) => setData(r.data.item))
      .catch((e) => console.error(e));

    axios
      .get(`https://api.mediehuset.net/detutroligeteater/reviews?event_id=${router.query.id}`)
      .then((r) => setReviews(r.data.items))
      .catch((e) => console.error(e));
  }, [router.query.id]);

  console.log(reviews);

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
                <Favorite event_id={data.id} />
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
              <article className="info">
                <div className="title_buy_ticket">
                  <div className="title_genre">
                    <h1 className="title">{data.title}</h1>
                    <p className="genre">{data.genre}</p>
                  </div>
                  <Link href="">KØB BILLET</Link>
                </div>
                <pre className="description">{data.description}</pre>
                <p className="duration">Varighed ca. {data.duration_minutes} minutter</p>
              </article>
              <h2 className="actors_h2">Medvirkende</h2>
              <section className="actors">
                {data.actors.map((item, idx: number) => {
                  return (
                    <div key={idx} className="actor_item">
                      <div className="actor_img_wrapper">
                        <Image
                          src={item.image}
                          alt={`image_of_${item.name}`}
                          fill
                          priority
                          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                        />
                      </div>
                      <p className="actor_name">{item.name}</p>
                    </div>
                  );
                })}
              </section>
              <section className="reviews">
                <h2>ANMELDELSER</h2>
                {reviews &&
                  reviews.map((item, idx: number) => {
                    return <Review data={item} key={idx} />;
                  })}
              </section>
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
