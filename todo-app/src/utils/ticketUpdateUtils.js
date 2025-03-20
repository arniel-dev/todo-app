import { toast } from "react-toastify";
export const ticketToastMessage = (currentTicket, update, categories = []) => {
  if (update?.priority) {
    toast.success(
      `Ticket "${currentTicket.title}" priority updated to "${update?.priority}"`
    );
  }
  if (update?.description) {
    toast.success(
      `Ticket "${currentTicket.title}" description updated to "${update?.description}"`
    );
  }
  if (update?.category_id && categories.length > 0) {
    const category = categories?.find(
      (item) => item.id === update?.category_id
    );
    toast.success(
      `Ticket "${currentTicket?.title}" Category label was updated to "${category?.name}"`
    );
  }
};
