import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCategory } from "../services/ticketService";

export function useAddCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
  });
}
