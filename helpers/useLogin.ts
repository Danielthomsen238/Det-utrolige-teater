import { create } from "zustand";

export interface toggleLogin {
  showLogin: boolean;
  toggleLogin: () => void;
}

export const useLogin = create<toggleLogin>((set) => ({
  showLogin: false,
  toggleLogin: () =>
    set((state) => {
      return { showLogin: !state.showLogin };
    }),
}));
