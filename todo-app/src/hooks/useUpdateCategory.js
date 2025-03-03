import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCategory } from "../services/ticketService";

export function useUpdateCategory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateCategory,
    onSuccess: (updatedCategory) => {
      queryClient.setQueryData(
        ["category", updatedCategory.id],
        updatedCategory
      );
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
  });
}
