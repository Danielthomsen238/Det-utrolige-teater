import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Animate from "../../../../components/Animate";
import { Ticket, useTicket } from "../../../../helpers/useTicket";
import { EventDetail } from "../../../../interfaces/ComponentProps";
import { StyledBuyPage } from "../../../../src/styles/styledComponents/StyledMain";

const CompleteBuy = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [data, setData] = useState<EventDetail>();
  const { formData, seats, setFormData, setSeats, seatsInfo } = useTicket() as Ticket;
  useEffect(() => {
    if (router.query.id) {
      axios
        .get(`https://api.mediehuset.net/detutroligeteater/events/${router.query.id}`)
        .then((r) => setData(r.data.item))
        .catch((e) => console.error(e));
    }
  }, [router.query.id]);

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
    // Submit the form
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
    console.log(payload);
    const config = {
      headers: {
        Authorization: `Bearer ${session?.user.token}`,
      },
    };
    axios
      .post(`https://api.mediehuset.net/detutroligeteater/reservations`, payload, config)
      .then((r) => console.log(r))
      .catch((e) => console.log(e));
  };

  if (data) {
    const startDateString = data.startdate;
    const startDate = new Date(startDateString);
    const formattedStartDate = startDate.toLocaleDateString("da-DK", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    return (
      <Animate>
        <StyledBuyPage>
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
                <span>FORSTILLING:</span> {data.title}
              </p>
              <p className="stage">
                <span>SCENE:</span> {data.stage_name}
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
          </section>
        </StyledBuyPage>
      </Animate>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default CompleteBuy;
