import { create } from "zustand";
import axios from "axios";

//define the data structure
export interface Event {
  id: string;
  title: string;
  description: string;
  image: string;
  image_small: string;
  image_medium: string;
  image_large: string;
  stage_id: string;
  stage_name: string;
  genre_id: string;
  genre: string;
  price: string;
  startdate: string;
  starttime: string;
  stopdate: string;
  duration_minutes: string;
}

//define the data structure
export interface SearchState {
  events: Event[];
  getSearch: (keyword: string) => Promise<void>;
}
//zustand function for search inpute
export const useSearch = create(
  (set): SearchState => ({
    events: [],
    getSearch: async (keyword) => {
      const items = await axios.get(`https://api.mediehuset.net/detutroligeteater/events/search/${keyword}`);
      set({ events: items.data.items });
    },
  })
);
