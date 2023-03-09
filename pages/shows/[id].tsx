import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Animate from "../../components/Animate";
import HtmlHead from "../../components/Head";
import { EventDetail, ReviewForm, Reviews } from "../../interfaces/ComponentProps";
import { StyledShowDetail } from "../../src/styles/styledComponents/StyledMain";
import Image from "next/image";
import Favorite from "../../components/Favorite";
import Link from "next/link";
import Review from "../../components/Review";
import { signIn, useSession } from "next-auth/react";
import { Rating } from "@mui/material";

const ShowDetail = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [data, setData] = useState<EventDetail>();
  const [reviews, setReviews] = useState<Reviews[]>();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [value, setValue] = useState<number | null>(0);
  const [formData, setFormData] = useState<ReviewForm>({ subject: "", comment: "" });
  const [runEffect, setRunEffect] = useState<boolean>(false);
  useEffect(() => {
    if (router.query.id) {
      axios
        .get(`https://api.mediehuset.net/detutroligeteater/events/${router.query.id}`)
        .then((r) => setData(r.data.item))
        .catch((e) => console.error(e));

      axios
        .get(`https://api.mediehuset.net/detutroligeteater/reviews?event_id=${router.query.id}`)
        .then((r) => setReviews(r.data.items))
        .catch((e) => console.error(e));
    }
  }, [router.query.id, runEffect]);

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
    const handleLogin = () => {
      if (!username) {
        alert("Please enter your username");
        return;
      }
      if (!password) {
        alert("Please enter your password");
        return;
      }
      signIn("credentials", { username, password });
    };
    const validateForm = () => {
      if (!formData.subject) {
        alert("Please enter a subject for your review.");
        return;
      }
      if (!formData.comment) {
        alert("Please enter a comment for your review.");
        return;
      }
      if (!value) {
        alert("Please select a rating for your review.");
        return;
      }
      const payload = {
        ...formData,
        num_stars: value,
        event_id: router.query.id,
      };
      console.log(payload);
      const config = {
        headers: {
          Authorization: `Bearer ${session?.user.token}`,
        },
      };
      axios
        .post(`https://api.mediehuset.net/detutroligeteater/reviews`, payload, config)
        .then((r) => {
          console.log(r);
          setRunEffect((state) => !state);
          setFormData({ comment: "", subject: "" });
          setValue(0);
        })
        .catch((e) => console.error(e));
    };
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
                  <Link href={`/shows/ticket/${data.id}`}>KØB BILLET</Link>
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
              {status === "authenticated" ? (
                <section className="post_review">
                  <p>Skriv en anmeldelse</p>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      validateForm();
                    }}
                  >
                    <label className="rating">
                      Antal stjerner:
                      <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                      />
                    </label>
                    <div className="input_container">
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData((prevState) => ({ ...prevState, subject: e.target.value }))}
                        placeholder="Emne"
                      />
                      <div>
                        <textarea
                          value={formData.comment}
                          onChange={(e) => setFormData((prevState) => ({ ...prevState, comment: e.target.value }))}
                          placeholder="Kommentar"
                        />
                        <button type="submit">Send</button>
                      </div>
                    </div>
                  </form>
                </section>
              ) : (
                <section className="login_review">
                  <p>Skriv en anmeldelse</p>
                  <p>Du skal være logget ind for at skrive en anmeldelse</p>
                  <div className="login">
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <div>
                      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                      <button onClick={() => handleLogin()}>Login</button>
                    </div>
                  </div>
                </section>
              )}
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
