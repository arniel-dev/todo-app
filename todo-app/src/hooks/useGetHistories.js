/* eslint-disable react-hooks/exhaustive-deps */
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import { fetchHistories } from "../services/ticketService";

function useGetHistories() {
  const { userInfo } = useAuth();
  const { data: histories } = useQuery({
    queryKey: ["histories", userInfo.user_id],
    queryFn: () => fetchHistories(userInfo.user_id),
    placeholderData: [],
  });

  return { histories };
}

export default useGetHistories;
