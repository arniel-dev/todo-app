/* eslint-disable react-hooks/exhaustive-deps */
import { useQuery } from "@tanstack/react-query";
import useTicketStore from "../store/ticketStore";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { generateDefaultCategories } from "../services/ticketService";

function useGenerateDefaultCategories() {
  const { setCategories } = useTicketStore();
  const { userInfo } = useAuth();
  const { data: categories, refetch } = useQuery({
    queryKey: ["categories", userInfo.user_id],
    queryFn: () => generateDefaultCategories(userInfo.user_id),
    placeholderData: [],
    enabled: false,
  });
  useEffect(() => {
    if (categories) setCategories(categories);
  }, [categories]);
  return { categories, refetch };
}

export default useGenerateDefaultCategories;
