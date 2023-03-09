import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import HtmlHead from "../../../components/Head";
import { Ticket, useTicket } from "../../../helpers/useTicket";
import { EventDetail } from "../../../interfaces/ComponentProps";
import { StyledTicketPage } from "../../../src/styles/styledComponents/StyledMain";
import { StyledStage, StyledSeat } from "../../../src/styles/styledComponents/StyledStage";

const BuyTicket = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [data, setData] = useState<EventDetail>();
  const [stage, setStage] = useState<any[]>();
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleSelected = (item: string) => {
    if (Array.isArray(selectedItems) && selectedItems.includes(item)) {
      // If item is already in the array, remove it
      setSelectedItems(selectedItems.filter((selected) => selected !== item));
    } else {
      // If item is not in the array, add it
      setSelectedItems([...selectedItems, item]);
    }
  };

  const { formData, seats, setFormData, setSeats } = useTicket() as Ticket;

  useEffect(() => {
    if (router.query.id) {
      axios
        .get(`https://api.mediehuset.net/detutroligeteater/events/${router.query.id}`)
        .then((r) => setData(r.data.item))
        .catch((e) => console.error(e));
    }
  }, [router.query.id]);
  useEffect(() => {
    if (router.query.id) {
      axios
        .get(`https://api.mediehuset.net/detutroligeteater/seats/${router.query.id}`)
        .then((r) => setStage(r.data.items))
        .catch((e) => console.log(e));
    }
  }, [router.query.id]);

  if (data) {
    const startDateString = data.startdate;
    const startDate = new Date(startDateString);
    const formattedStartDate = startDate.toLocaleDateString("da-DK", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    const handleClick = (id: number) => {
      setFormData({ ...formData }); // Trigger a re-render to update the form data
      setSeats(id); // Add the new seat to the seats array
    };
    console.log(seats);
    const handleSubmit = () => {
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
      // Submit the form
      const payload = {
        firstname: formData.firstName,
        lastname: formData.lastName,
        address: `${formData.streetName} ${formData.houseNumber}`,
        zipcode: formData.zipCode,
        email: "test@test.com",
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

    const groupedData = stage?.reduce((line: any, item: any) => {
      if (!line[item.line]) {
        line[item.line] = [];
      }
      line[item.line].push(item);
      return line;
    }, {});
    return (
      <StyledTicketPage>
        <HtmlHead title="Køb Billet" description="Køb billet" />
        <section className="ticket_form">
          <div className="image_wrapper">
            <div>
              <Image src={data.image_large} fill priority alt={data.title} />
            </div>
          </div>
          <div className="form_container">
            <h1>KØB BILLET</h1>
            <p className="title">{data.title.toUpperCase()}</p>
            <p className="stage_time">
              {data.stage_name.toUpperCase()} {formattedStartDate.substring(0, 7).toUpperCase()} {data.starttime.substring(0, 5)}
            </p>
            <form>
              <label className="firstname">
                FORNAVN <input type="text" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
              </label>
              <label className="lastname">
                EFTERNAVN <input type="text" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
              </label>
              <label className="road">
                VEJNAVN & NR <input type="text" value={formData.streetName} onChange={(e) => setFormData({ ...formData, streetName: e.target.value })} />
                <input type="number" value={formData.houseNumber} onChange={(e) => setFormData({ ...formData, houseNumber: e.target.value })} />
              </label>
              <label className="city">
                POSTNR & BY <input type="number" value={formData.zipCode} onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })} />
                <input type="text" value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} />
              </label>
              <label className="quantity">
                ANTAL
                <div className="container">
                  <div
                    onClick={() => {
                      if (formData.quantity > 0) {
                        setFormData({ ...formData, quantity: formData.quantity - 1 });
                      }
                    }}
                  >
                    -
                  </div>
                  <input type="number" value={formData.quantity} min={0} disabled />
                  <div onClick={(e) => setFormData({ ...formData, quantity: formData.quantity + 1 })}>+</div>{" "}
                </div>
                <div className="price">
                  <p>PRIS {data.price} DKK</p>
                  <p className="moms">PRIS INKL MOMS</p>
                </div>
              </label>
            </form>
          </div>
        </section>
        {groupedData && ( // Render the seats using Styled Components and passing the length of the array to the styled-component
          <StyledStage length={groupedData[Object.keys(groupedData)[0]].length}>
            <div className="stage_title">
              <h3>{data.stage_name}</h3>
            </div>
            {/*First check if the groupData is not undefined,
       then map over the entries for each entry, it creates a new div element with the line number
        and inside it maps over the seats in the current line
       */}
            {groupedData &&
              Object.entries(groupedData).map(([line, seats]: any) => (
                <div className={`line_${line}`} key={line}>
                  {seats.map((seat: any, index: number) => (
                    <div
                      onClick={() => {
                        if (seat.is_reserved < 1) {
                          handleClick(seat.id);
                          handleSelected(seat.id);
                        }
                      }}
                      key={seat.number}
                      className={selectedItems.includes(seat.id) ? `seat_${seat.number} selected` : `seat_${seat.number} `}
                      style={{ marginTop: index < seats.length / 2 ? index * 15 : (seats.length - index - 1) * 15 }}
                    >
                      <StyledSeat isReserved={seat.is_reserved} key={seat.id}></StyledSeat>
                    </div>
                  ))}
                </div>
              ))}
            <p className="bottom_p">VÆLGE SIDDEPLADSER</p>
            <button onClick={() => handleSubmit()}>submite</button>
          </StyledStage>
        )}
      </StyledTicketPage>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default BuyTicket;
