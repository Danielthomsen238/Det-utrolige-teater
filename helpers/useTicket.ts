import { create } from "zustand";

export interface Ticket {
  formData: {
    firstName: string;
    lastName: string;
    streetName: string;
    houseNumber: string;
    zipCode: string;
    city: string;
    quantity: number;
  };
  seats: number[];
  setFormData: (formData: Ticket["formData"]) => void;
  setSeats: (newSeat: number) => void;
}

export const useTicket = create<Ticket>((set) => ({
  formData: {
    firstName: "",
    lastName: "",
    streetName: "",
    houseNumber: "",
    zipCode: "",
    city: "",
    quantity: 0,
  },
  seats: [],
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
}));
