import { create } from "zustand";
import { handleTicketUpdate } from "../services/ticketService";

const useTicketStore = create((set) => ({
  categories: [],
  tickets: [],
  setCategories: (categories) => set({ categories }),
  setTickets: (tickets) => set({ tickets }),
  addTicket: (ticket) =>
    set((state) => ({ tickets: [...state.tickets, ticket] })),
  updateTicket: (ticketId, updates) =>
    set((state) => ({
      tickets: state.tickets.map((ticket) => {
        if (ticket.id === ticketId) {
          const updateTicket = { ...ticket, ...updates };
          handleTicketUpdate(ticketId, updateTicket);
          return updateTicket;
        } else {
          return ticket;
        }
      }),
    })),
}));

export default useTicketStore;
