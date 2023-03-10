import { create } from "zustand";

//define data structure
interface Seats {
  seat: number;
  line: number;
  price: number;
}

//define data structure
export interface Ticket {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    streetName: string;
    houseNumber: string;
    zipCode: string;
    city: string;
    quantity: number;
  };
  seats: number[];
  seatsInfo: Seats[];
  setFormData: (formData: Ticket["formData"]) => void;
  setSeats: (newSeat: number) => void;
  setSeatsInfo: (newSeat: Seats) => void;
}
//zustand function to store formdata and seats
export const useTicket = create<Ticket>((set) => ({
  formData: {
    firstName: "",
    lastName: "",
    streetName: "",
    email: "",
    houseNumber: "",
    zipCode: "",
    city: "",
    quantity: 0,
  },
  seats: [],
  seatsInfo: [],
  setFormData: (formData) =>
    set((state) => {
      return { ...state, formData };
    }),
  setSeats: (newSeat) =>
    set((state) => {
      const seatExists = state.seats.includes(newSeat);
      const updatedSeats = seatExists ? state.seats.filter((seat) => seat !== newSeat) : state.seats.concat(newSeat);
      return { ...state, seats: updatedSeats };
    }),
  setSeatsInfo: (newSeat) =>
    set((state) => {
      const seatExists = state.seatsInfo.some((seat) => seat.seat === newSeat.seat && seat.line === newSeat.line);
      const updatedSeats = seatExists
        ? state.seatsInfo.filter((seat) => seat.seat !== newSeat.seat || seat.line !== newSeat.line)
        : state.seatsInfo.concat(newSeat);
      return { ...state, seatsInfo: updatedSeats };
    }),
}));
