import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTicket } from "../services/ticketService";

export function useAddTicket() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTicket,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tickets"] });
    },
  });
}
