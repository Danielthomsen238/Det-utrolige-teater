import { create } from "zustand";

//define data structure
export interface toggleLogin {
  showLogin: boolean;
  toggleLogin: () => void;
}

//zustand toggle to show the login in the navbars
export const useLogin = create<toggleLogin>((set) => ({
  showLogin: false,
  toggleLogin: () =>
    set((state) => {
      return { showLogin: !state.showLogin };
    }),
}));
