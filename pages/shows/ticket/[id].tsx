import axios from "axios";
import { NextPage } from "next";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Animate from "../../../components/Animate";
import HtmlHead from "../../../components/Head";
import { Ticket, useTicket } from "../../../helpers/useTicket";
import { EventDetail } from "../../../interfaces/ComponentProps";
import { StyledTicketPage } from "../../../src/styles/styledComponents/StyledMain";
import { StyledStage, StyledSeat } from "../../../src/styles/styledComponents/StyledStage";

//first step to buy ticket
const BuyTicket: NextPage = () => {
  //useSession for user information and token
  const { data: session, status } = useSession();
  //router to get id from params
  const router = useRouter();
  //store event detail from fetch
  const [data, setData] = useState<EventDetail>();
  //store seats array
  const [stage, setStage] = useState<any[]>();
  //useState to store selected seats (only to change class/background color)
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  //store formdata seats and seats information in zustand
  const { formData, seats, setFormData, setSeats, setSeatsInfo } = useTicket() as Ticket;

  //Function to set selected seats if not in the array, else remove from array
  const handleSelected = (item: string) => {
    if (Array.isArray(selectedItems) && selectedItems.includes(item)) {
      // If item is already in the array, remove it
      setSelectedItems(selectedItems.filter((selected) => selected !== item));
    } else {
      // If item is not in the array, add it
      setSelectedItems([...selectedItems, item]);
    }
  };
  //useEffect to fetch before render
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
  //check if data is true
  if (data) {
    //check if logged in
    if (!session) {
      //push if not
      router.push("/api/auth/signin?csrf=true");
    }
    //convert date to correct form
    const startDateString = data.startdate;
    const startDate = new Date(startDateString);
    const formattedStartDate = startDate.toLocaleDateString("da-DK", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    //function to add seats to seat array and seats info to seatsinfo array
    const handleClick = (id: number, price: number, line: number, seat: number) => {
      setFormData({ ...formData }); // Trigger a re-render to update the form data
      setSeats(id); // Add the new seat to the seats array
      setSeatsInfo({ price, line, seat });
    };

    //Reduce method to group seats with the same line in to one array
    const groupedData = stage?.reduce((line: any, item: any) => {
      //if array dont exist with initial value then create array
      if (!line[item.line]) {
        line[item.line] = [];
      }
      //and push the seats to array if the line is the same
      line[item.line].push(item);
      //then return array
      return line;
    }, {});

    //validate form before route to next step of buying tickets
    const submitToNextPage = (id: any) => {
      //using regex to validate email and checking if input is correct form
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
      if (seats.length === 0) {
        alert("Du skal vælge et sted at sidde");
        return;
      }
      router.push(`/shows/ticket/buy/${id}`);
    };
    return (
      <Animate>
        <StyledTicketPage>
          <HtmlHead title="Køb Billet" description="Køb billet" />
          <section className="ticket_form">
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
                <label className="lastname">
                  EMAIL <input type="text" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
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
                        //if seat is not reserved then you will be able to select the seat
                        onClick={() => {
                          if (seat.is_reserved < 1) {
                            handleClick(seat.id, parseInt(data.price), seat.line, seat.number);
                            handleSelected(seat.id);
                          }
                        }}
                        key={seat.number}
                        //if selected change background color
                        className={selectedItems.includes(seat.id) ? `seat_${seat.number} selected` : `seat_${seat.number} `}
                        //Increment margin with index * 15 if index is smaller then half of seats.length, decrement if its bigger then seats.length
                        style={{ marginTop: index < seats.length / 2 ? index * 15 : (seats.length - index - 1) * 15 }}
                      >
                        <StyledSeat isReserved={seat.is_reserved} key={seat.id}></StyledSeat>
                      </div>
                    ))}
                  </div>
                ))}
              <p className="bottom_p">VÆLGE SIDDEPLADSER</p>
            </StyledStage>
          )}
          <button className="approve" onClick={() => submitToNextPage(router.query.id)}>
            GODKEND BESTILLING
          </button>
        </StyledTicketPage>
      </Animate>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default BuyTicket;
