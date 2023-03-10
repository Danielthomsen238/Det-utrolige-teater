import { create } from "zustand";
import axios from "axios";

//define the data structure for the zustand
export interface ReservationLine {
  reservation_line_id: string;
  seat_id: string;
  seat_line: string;
  seat_number: string;
}
//define the data structure for the zustand
export interface Reservation {
  address: string;
  city: string;
  created: string;
  email: string;
  event_id: string;
  event_title: string;
  firstname: string;
  stage: string;
  time: string;
  date: string;
  reservationlines: ReservationLine[];
  id: string;
  price: string;
  lastname: string;
  request: {
    type: string;
    url: string;
  };
  user_id: string;
  zipcode: string;
}
//define the data structure for the zustand
export interface ReservationState {
  reservations: Reservation[];
  getCombinedTickes: (token: any) => Promise<void>;
  deleteTicket: (id: any, token: any) => void;
}
//zustand function for state management
export const useCombinedTicket = create(
  (set): ReservationState => ({
    reservations: [],
    getCombinedTickes: async (token) => {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const items = await axios.get(`https://api.mediehuset.net/detutroligeteater/reservations`, config);

      // Create an array to store the combined tickets and their details
      const reservations = [];

      // Loop through each ticket and fetch its details
      if (items && items.data && items.data.items) {
        for (const ticket of items.data.items) {
          const details = await axios.get(`https://api.mediehuset.net/detutroligeteater/reservations/${ticket.id}`, config);
          const eventDetail = await axios.get(`https://api.mediehuset.net/detutroligeteater/events/${ticket.event_id}`);
          // Add the properties from the first fetch to the details object
          details.data.reservation.event_id = ticket.event_id;
          details.data.reservation.event_title = ticket.event_title;
          details.data.reservation.stage = eventDetail.data.item.stage_name;
          details.data.reservation.date = eventDetail.data.item.startdate;
          details.data.reservation.time = eventDetail.data.item.starttime;
          details.data.reservation.price = eventDetail.data.item.price;

          // Add the combined object to the reservations array
          reservations.push(details.data.reservation);
        }
      }

      // Update the state with the combined tickets and their details
      set({ reservations });
    },
    deleteTicket: (id, token) =>
      set(async (state: any) => {
        const payload = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        await axios.delete(`https://api.mediehuset.net/detutroligeteater/reservations/${id}`, payload);
        return state.getCombinedTickes(token);
      }),
  })
);
