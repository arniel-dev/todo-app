import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCategoryOrder } from "../services/ticketService";

export function useUpdateCategoryOrder() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateCategoryOrder,
    onSuccess: (updatedCategory) => {
      queryClient.setQueryData(
        ["category", updatedCategory.id],
        updatedCategory
      );
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
  });
}
