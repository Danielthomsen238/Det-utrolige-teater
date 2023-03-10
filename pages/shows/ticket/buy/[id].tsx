import axios from "axios";
import { NextPage } from "next";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Animate from "../../../../components/Animate";
import HtmlHead from "../../../../components/Head";
import { Ticket, useTicket } from "../../../../helpers/useTicket";
import { EventDetail } from "../../../../interfaces/ComponentProps";
import { StyledBuyPage, StyledTicketComplete } from "../../../../src/styles/styledComponents/StyledMain";

//Final step of buying ticket
const CompleteBuy: NextPage = () => {
  //router to get id from params
  const router = useRouter();
  //useSession to get user information and token
  const { data: session, status } = useSession();
  //useState toggle to show another section when you buy ticket
  const [buy, setBuy] = useState<boolean>(false);
  //store eventdetail
  const [data, setData] = useState<EventDetail>();
  //zustand to get the formdata seat and seatsinfo from last page
  const { formData, seats, seatsInfo } = useTicket() as Ticket;

  //useEffect to fetch before render
  useEffect(() => {
    if (router.query.id) {
      axios
        .get(`https://api.mediehuset.net/detutroligeteater/events/${router.query.id}`)
        .then((r) => setData(r.data.item))
        .catch((e) => console.error(e));
    }
  }, [router.query.id]);

  //post if formdata is valid
  const handleSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.zipCode.length !== 4) {
      alert("Zip code must be 4 characters long.");
      return;
    }
    if (parseInt(formData.houseNumber) < 0) {
      alert("House number must be greater than or equal to 0.");
      return;
    }
    if (formData.quantity === 0) {
      alert("Quantity cannot be 0.");
      return;
    }
    if (!emailRegex.test(formData.email)) {
      alert("Email must be valid and contain an '@' symbol.");
      return;
    }
    //payload to post
    const payload = {
      firstname: formData.firstName,
      lastname: formData.lastName,
      address: `${formData.streetName} ${formData.houseNumber}`,
      zipcode: formData.zipCode,
      email: formData.email,
      city: formData.city,
      event_id: router.query.id,
      seats,
    };
    //header config
    const config = {
      headers: {
        Authorization: `Bearer ${session?.user.token}`,
      },
    };
    axios
      .post(`https://api.mediehuset.net/detutroligeteater/reservations`, payload, config)
      .then((r) => {
        console.log(r);
        //change jsx when promis is succesfull
        setBuy((state) => !state);
      })
      .catch((e) => console.log(e));
  };
  //check if data is true before trying to render
  if (data) {
    const startDateString = data.startdate;
    const startDate = new Date(startDateString);
    const formattedStartDate = startDate.toLocaleDateString("da-DK", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    return (
      //change jsx when post promise is successfull
      <Animate>
        {buy ? (
          <StyledTicketComplete>
            <HtmlHead title="Billetter købt" description="sidste stage af købe billetter" />
            <h1>Tak for din bestilling</h1>
          </StyledTicketComplete>
        ) : (
          <StyledBuyPage>
            <HtmlHead title="Køb Billetter" description="Godkend køb af billetter" />

            <div className="image_wrapper">
              <div>
                <Image
                  src={data.image_large}
                  fill
                  priority
                  alt={data.title}
                  sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                />
              </div>
            </div>
            <section className="ticket">
              <h1 className="top_title">Godkend ordre</h1>
              <div className="info">
                <h2 className="mid_title">PRODUKTER</h2>
                <p className="event">
                  <span>FORSTILLING:</span> {data.title.toUpperCase()}
                </p>
                <p className="stage">
                  <span>SCENE:</span> {data.stage_name.toUpperCase()}
                </p>
                <p className="date">
                  <span>DATO:</span> {formattedStartDate.toUpperCase()} KL {data.starttime.substring(0, 5)}
                </p>
                <table>
                  <thead>
                    <tr>
                      <th>SÆDE</th>
                      <th>RÆKKE</th>
                      <th>PRIS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {seatsInfo &&
                      seatsInfo.map((item, idx: number) => {
                        return (
                          <tr key={idx}>
                            <td>{item.seat}</td>
                            <td>{item.line}</td>
                            <td>{item.price},00 DKK</td>
                          </tr>
                        );
                      })}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td>PRIS I ALT</td>
                      <td></td>
                      <td>{parseInt(data.price) * seatsInfo.length},00 DKK</td>
                    </tr>
                  </tfoot>
                </table>
                <p className="moms">pris inkl. moms & billetgebyr</p>
              </div>
              <div className="customer_info">
                <h2>KUNDE:</h2>
                <p>
                  {formData.firstName.toUpperCase()} {formData.lastName.toUpperCase()}
                </p>
                <p>
                  {formData.streetName.toUpperCase()} {formData.houseNumber}
                </p>
                <p>
                  {formData.zipCode} {formData.city.toUpperCase()}
                </p>
                <p>
                  EMAIL: <span>{formData.email.toUpperCase()}</span>
                </p>
                <h3>BILLETTERNE SENDE ELEKTRONISK TIL DIN MAIL</h3>
              </div>
            </section>
            <div className="btn_container">
              <Link href={`/shows/ticket/${data.id}`}>TILBAGE</Link>
              <button onClick={() => handleSubmit()}>GODKEND BESTILLING</button>
            </div>
          </StyledBuyPage>
        )}
      </Animate>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default CompleteBuy;
