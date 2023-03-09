import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import HtmlHead from "../../../components/Head";
import { EventDetail } from "../../../interfaces/ComponentProps";
import { StyledTicketPage } from "../../../src/styles/styledComponents/StyledMain";

const BuyTicket = () => {
  const router = useRouter();
  const [data, setData] = useState<EventDetail>();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    streetName: "",
    houseNumber: "",
    zipCode: "",
    city: "",
    quantity: 0,
  });

  useEffect(() => {
    if (router.query.id) {
      axios
        .get(`https://api.mediehuset.net/detutroligeteater/events/${router.query.id}`)
        .then((r) => setData(r.data.item))
        .catch((e) => console.error(e));
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
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
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
      console.log(formData);
    };
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
      </StyledTicketPage>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default BuyTicket;
