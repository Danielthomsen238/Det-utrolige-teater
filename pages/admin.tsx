import axios from "axios";
import { signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { ReservationState, useCombinedTicket } from "../helpers/useCombinedTicket";
import { StyledAdminPage } from "../src/styles/styledComponents/StyledMain";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { FavoriteState, useFavorite } from "../helpers/useFavorite";
import { Reviews } from "../interfaces/ComponentProps";
import { Rating } from "@mui/material";
import { NextPage } from "next";
import HtmlHead from "../components/Head";

//admin page
const Admin = () => {
  //useSession to get user info and token
  const { data: session, status } = useSession();
  //store reviews
  const [reviews, setReviews] = useState<Reviews[]>();
  //runEffect to trigger useEffect
  const [runEffect, setRunEffect] = useState<boolean>(false);
  //zustand function that combines data from 3 api´s and delete reservation
  const { getCombinedTickes, reservations, deleteTicket } = useCombinedTicket() as ReservationState;
  //zustand to get favorite and delete
  const { getFavorites, favorites, deleteFavorites } = useFavorite() as FavoriteState;

  //delete review function
  const deleteReview = (id: any) => {
    fetch(`https://api.mediehuset.net/detutroligeteater/reviews/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${session?.user.token}`,
      },
    })
      .then((response) => {
        console.log(response);
        setRunEffect((state) => !state);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //useEffect to fetch favorites, reviews and reservations
  useEffect(() => {
    getCombinedTickes(session?.user.token);
    getFavorites(session?.user.token);
    fetch(`https://api.mediehuset.net/detutroligeteater/reviews`)
      .then((response) => response.json())
      .then((data) => setReviews(data.items))
      .catch((error) => console.log(error));
  }, [session?.user.token, getCombinedTickes, getFavorites, runEffect]);

  return (
    <StyledAdminPage>
      <HtmlHead title="Min side" description="Admin panel" />
      <div className="top_bar">
        <h2>MIN SIDE</h2>
        <div>
          <p>Du er logge på som {session?.user.firstname}</p>
          <button onClick={() => signOut()}>LOG UD</button>
        </div>
      </div>

      <div className="tickets">
        <svg xmlns="http://www.w3.org/2000/svg" width="47.292" height="39.224" viewBox="0 0 47.292 39.224">
          <path
            id="Icon_awesome-ticket-alt"
            data-name="Icon awesome-ticket-alt"
            d="M9,11.25H31.5v13.5H9ZM37.125,18A3.375,3.375,0,0,0,40.5,21.375v6.75A3.375,3.375,0,0,1,37.125,31.5H3.375A3.375,3.375,0,0,1,0,28.125v-6.75a3.375,3.375,0,0,0,0-6.75V7.875A3.375,3.375,0,0,1,3.375,4.5h33.75A3.375,3.375,0,0,1,40.5,7.875v6.75A3.375,3.375,0,0,0,37.125,18ZM33.75,10.688A1.687,1.687,0,0,0,32.063,9H8.438A1.687,1.687,0,0,0,6.75,10.688V25.313A1.687,1.687,0,0,0,8.438,27H32.063a1.687,1.687,0,0,0,1.688-1.687Z"
            transform="translate(-1.539 9.623) rotate(-20)"
            fill="#ad7a51"
          />
        </svg>
        <h2>MINE RESERVATIONER</h2>
      </div>
      <div className="table_container">
        <table>
          <thead>
            <tr>
              <th>DATO & TID</th>
              <th>FORSTILLINGER</th>
              <th>SCENE</th>
              <th>ANTAL</th>
              <th>PRIS</th>
              <th>REDIGERE</th>
            </tr>
          </thead>
          <tbody>
            {reservations &&
              reservations.map((item, idx: number) => {
                const startDateString = item.date;
                const startDate = new Date(startDateString);
                const formattedStartDate = startDate.toLocaleDateString("da-DK", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                });
                return (
                  <tr key={idx}>
                    <td>
                      {formattedStartDate} {item.time.substring(0, 5)}
                    </td>
                    <td>{item.event_title}</td>
                    <td>{item.stage}</td>
                    <td>{item.reservationlines.length}</td>
                    <td>{parseInt(item.price) * item.reservationlines.length} DKK</td>
                    <td>
                      <DeleteForeverIcon className="trash" onClick={() => deleteTicket(item.id, session?.user.token)} />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <div className="favoritter">
        <svg xmlns="http://www.w3.org/2000/svg" width="49.871" height="48.415" viewBox="0 0 49.871 48.415">
          <path
            id="Icon_metro-favorite"
            data-name="Icon metro-favorite"
            d="M24.308,41.6l-2.779-2.52C11.658,30.116,5.141,24.2,5.141,16.968A10.427,10.427,0,0,1,15.683,6.427a11.5,11.5,0,0,1,8.625,4,11.5,11.5,0,0,1,8.625-4A10.427,10.427,0,0,1,43.474,16.968c0,7.235-6.517,13.148-16.387,22.108L24.308,41.6Z"
            transform="matrix(0.899, -0.438, 0.438, 0.899, -7.438, 13.281)"
            fill="#ad7a51"
          />
        </svg>
        <h2>MINE FAVORITTER</h2>
      </div>
      <div className="table_container">
        <table>
          <thead>
            <tr>
              <th>FORSTILLINGER</th>
              <th>REDIGERE</th>
            </tr>
          </thead>
          <tbody>
            {favorites &&
              favorites.map((item: any, idx) => {
                return (
                  <tr key={idx}>
                    <td>
                      {item.title}, {item.stage_name}
                    </td>

                    <td>
                      <DeleteForeverIcon className="trash" onClick={() => deleteFavorites(item.event_id, session?.user.token)} />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <div className="reviews">
        <svg xmlns="http://www.w3.org/2000/svg" width="55.89" height="55.006" viewBox="0 0 55.89 55.006">
          <path
            id="Icon_awesome-star"
            data-name="Icon awesome-star"
            d="M20.473,1.419l-5.2,10.552-11.644,1.7A2.552,2.552,0,0,0,2.214,18.02l8.424,8.209-1.992,11.6a2.549,2.549,0,0,0,3.7,2.686L22.76,35.035,33.177,40.51a2.551,2.551,0,0,0,3.7-2.686l-1.992-11.6,8.424-8.209A2.552,2.552,0,0,0,41.9,13.668l-11.644-1.7-5.2-10.552a2.552,2.552,0,0,0-4.575,0Z"
            transform="translate(-1.306 18.629) rotate(-25)"
            fill="#ad7a51"
          />
        </svg>

        <h2>MINE ANMELDELSER</h2>
      </div>
      <div className="table_container">
        <table>
          <thead>
            <tr>
              <th>FORSTILLINGER</th>
              <th>EMNE</th>
              <th>ANTAL STJERNER</th>
              <th>REDIGERE</th>
            </tr>
          </thead>
          <tbody>
            {reviews &&
              reviews.map((item, idx: number) => {
                if (item.user_id === session?.user.userID.toString()) {
                  return (
                    <tr key={idx}>
                      <td>{item.event_title}</td>
                      <td>{item.subject}</td>
                      <td>
                        <Rating readOnly value={parseInt(item.num_stars)} />
                      </td>

                      <td>
                        {" "}
                        <DeleteForeverIcon className="trash" onClick={() => deleteReview(item.id)} />
                      </td>
                    </tr>
                  );
                }
              })}
          </tbody>
        </table>
      </div>
    </StyledAdminPage>
  );
};
// to protect page if not logged in
Admin.auth = true;
export default Admin;
