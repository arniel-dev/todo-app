/* eslint-disable react-hooks/exhaustive-deps */
import { useQuery } from "@tanstack/react-query";
import useTicketStore from "../store/ticketStore";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { fetchTickets } from "../services/ticketService";

function useGetTickets() {
  const { setTickets } = useTicketStore();
  const { userInfo } = useAuth();
  const { data: tickets } = useQuery({
    queryKey: ["tickets", userInfo.user_id],
    queryFn: () => fetchTickets(userInfo.user_id),
    placeholderData: [],
  });
  useEffect(() => {
    if (tickets) setTickets(tickets);
  }, [tickets]);
  return { tickets };
}

export default useGetTickets;
