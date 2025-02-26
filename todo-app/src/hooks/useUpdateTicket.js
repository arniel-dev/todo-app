import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTicket } from "../services/ticketService";

export function useUpdateTicket() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateTicket,
    onSuccess: (updatedTicket) => {
      queryClient.setQueryData(["ticket", updatedTicket.id], updatedTicket);
      queryClient.invalidateQueries({ queryKey: ["tickets"] });
    },
  });
}
