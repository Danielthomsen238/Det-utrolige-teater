import { create } from "zustand";

//define data structure
export interface Switch {
  toggle: boolean;
  switchToggle: () => void;
}
//zustand function to toggle burger menu
export const useSwitch = create<Switch>((set) => ({
  toggle: false,
  switchToggle: () =>
    set((state) => {
      return { toggle: !state.toggle };
    }),
}));
