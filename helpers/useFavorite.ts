import { create } from "zustand";
import axios from "axios";

//define data structure
export interface FavoriteState {
  favorites: [];
  setFavorites: (event_id: any, token: any) => void;
  deleteFavorites: (event_id: any, token: any) => void;
  getFavorites: (token: any) => Promise<void>;
}
//zustand function for state management favorites, get, post, delete
export const useFavorite = create(
  (set): FavoriteState => ({
    favorites: [],
    setFavorites: (event_id, token) =>
      set(async (state: any) => {
        const payload = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        await axios.post(`https://api.mediehuset.net/detutroligeteater/favorites`, { event_id }, payload);
        return state.getFavorites(token);
      }),
    deleteFavorites: (event_id, token) =>
      set(async (state: any) => {
        const payload = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        await axios.delete(`https://api.mediehuset.net/detutroligeteater/favorites/${event_id}`, payload);
        return state.getFavorites(token);
      }),
    getFavorites: async (token: any) => {
      const payload = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const items = await axios.get(`https://api.mediehuset.net/detutroligeteater/favorites`, payload);

      set({ favorites: items.data.items });
    },
  })
);
