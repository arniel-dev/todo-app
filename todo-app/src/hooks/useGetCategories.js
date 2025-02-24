/* eslint-disable react-hooks/exhaustive-deps */
import { useQuery } from "@tanstack/react-query";
import useTicketStore from "../store/ticketStore";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { fetchCategories } from "../services/ticketService";

function useGetCategories() {
  const { setCategories } = useTicketStore();
  const { userInfo } = useAuth();
  const { data: categories } = useQuery({
    queryKey: ["categories", userInfo.user_id],
    queryFn: () => fetchCategories(userInfo.user_id),
    placeholderData: [],
  });
  useEffect(() => {
    if (categories) setCategories(categories);
  }, [categories]);
  return { categories };
}

export default useGetCategories;
