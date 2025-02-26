import { create } from "zustand";

const useTicketStore = create((set) => ({
  categories: [],
  tickets: [],
  setCategories: (categories) => set({ categories }),
  setTickets: (tickets) => set({ tickets }),
}));

export default useTicketStore;
