import { useState } from "react";
import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import { fetchHistories } from "../services/ticketService";

const useGetHistories = (user_id) => {
  const queryClient = useQueryClient();
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, refetch } =
    useInfiniteQuery({
      queryKey: ["histories", user_id, searchQuery, filter],
      queryFn: async ({ pageParam = 1 }) => {
        const response = await fetchHistories(
          user_id,
          pageParam,
          searchQuery,
          filter
        );
        return response.data;
      },
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.length > 0 ? allPages.length + 1 : undefined;
      },
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
    });

  // Combine all fetched pages
  const histories = data?.pages?.flat() || [];

  // Load More Function
  const loadMoreHistories = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  const applyFilters = () => {
    queryClient.invalidateQueries(["histories", user_id]);
    refetch();
  };

  return {
    histories,
    loadMoreHistories,
    hasMore: hasNextPage,
    setSearchQuery,
    setFilter,
    applyFilters,
    isFetchingNextPage,
  };
};

export default useGetHistories;
