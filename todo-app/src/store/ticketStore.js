import { create } from "zustand";
import { ticketToastMessage } from "../utils/ticketUpdateUtils";
import { toast } from "react-toastify";

const useTicketStore = create((set, get) => ({
  categories: [],
  tickets: [],
  editingDescriptionId: null,
  draggingTicketId: null,
  dragOverCategoryId: null,
  draggingCategoryId: null,
  draftDescription: "",
  draftTitle: "",
  isAddTicketDrawerOpen: false,
  isAddCategoryDrawerOpen: false,
  isHistoryDrawerOpen: false,
  enableEditTitleId: null,

  //setter
  setCategories: (categories) => set({ categories }),
  setTickets: (tickets) => set({ tickets }),
  setEditingTicketId: (value) => set(() => ({ editingDescriptionId: value })),
  setDraggingTicketId: (value) => set(() => ({ draggingTicketId: value })),
  setDragOverCategoryId: (value) => set(() => ({ dragOverCategoryId: value })),
  setDraggingCategoryId: (value) => set(() => ({ draggingCategoryId: value })),
  setDraftDescription: (value) => set(() => ({ draftDescription: value })),
  setDraftTitle: (value) => set(() => ({ draftTitle: value })),
  setEnableEditTitleId: (value) => set(() => ({ enableEditTitleId: value })),
  setIsAddTicketDrawerOpen: (value) =>
    set(() => ({ isAddTicketDrawerOpen: value })),
  setIsAddCategoryDrawerOpen: (value) =>
    set(() => ({ isAddCategoryDrawerOpen: value })),
  setIsHistoryDrawerOpen: (value) =>
    set(() => ({ isHistoryDrawerOpen: value })),

  // Handler for category drop
  handleCategoryDrop: async (e, targetCategoryId, updateCategoryMutation) => {
    e.preventDefault();
    e.stopPropagation();

    const { draggingCategoryId, categories } = get();

    if (draggingCategoryId === targetCategoryId) return;

    // Find the dragged and target categories
    const draggedCategory = categories.find(
      (cat) => cat.id == draggingCategoryId
    );
    const targetCategory = categories.find((cat) => cat.id == targetCategoryId);

    if (!draggedCategory || !targetCategory) return;

    // Swap their order values using the mutation
    updateCategoryMutation.mutate({
      categoryId: draggingCategoryId,
      order: targetCategory.order,
    });
    updateCategoryMutation.mutate({
      categoryId: targetCategoryId,
      order: draggedCategory.order,
    });

    // Reset dragging state
    set({ draggingCategoryId: null });
  },

  // Handler for ticket drop
  handleTicketDrop: async (e, categoryId, updateTicketMutation) => {
    e.preventDefault();
    e.stopPropagation();
    const {
      tickets,
      draggingTicketId,
      categories,
      setDraggingTicketId,
      setDragOverCategoryId,
    } = get();
    if (draggingTicketId === null) return;
    const currentTicket = tickets.find((item) => item.id === draggingTicketId);
    if (categoryId === currentTicket?.category_id) return;

    const updated = { ...currentTicket, ...{ category_id: categoryId } };
    updateTicketMutation.mutate({
      id: draggingTicketId,
      ticket: updated,
    });
    if (updateTicketMutation.isSuccess) {
      ticketToastMessage(
        currentTicket,
        { category_id: categoryId },
        categories
      );
    }
    setDraggingTicketId(null);
    setDragOverCategoryId(null);
  },

  // Handler for ticket priority drop
  handlePriorityDrop: (e, targetTicketId, updateTicketMutation) => {
    e.preventDefault();
    const {
      tickets,
      draggingTicketId,
      setDraggingTicketId,
      setDragOverCategoryId,
    } = get();
    const draggedTicketId = draggingTicketId;
    if (draggingTicketId === targetTicketId) return;

    // Find the dragged and target tickets
    const draggedTicket = tickets.find(
      (ticket) => ticket.id == draggingTicketId
    );
    const targetTicket = tickets.find((ticket) => ticket.id == targetTicketId);

    if (draggedTicket.category_id !== targetTicket.category_id) return; // should not trigger call if not same category
    if (draggedTicket.priority === targetTicket.priority) {
      setDraggingTicketId(null);
      setDragOverCategoryId(null);
      return; // should not trigger call if same priority
    }

    // Swap their priority values
    updateTicketMutation.mutate({
      id: draggedTicketId,
      ticket: {
        ...draggedTicket,
        priority: targetTicket.priority,
      },
    });
    updateTicketMutation.mutate({
      id: targetTicketId,
      ticket: {
        ...targetTicket,
        priority: draggedTicket.priority,
      },
    });

    if (updateTicketMutation.isSuccess) {
      toast.success(
        `Ticket "${draggedTicket.title}" priority updated to "${targetTicket.priority}"`
      );
      toast.success(
        `Ticket "${targetTicket.title}" priority updated to "${draggedTicket.priority}"`
      );
    }
    setDraggingTicketId(null);
    setDragOverCategoryId(null);
  },

  //common ticket update
  handleUpdateTicket: async (ticketId, update, updateTicketMutation) => {
    const { tickets } = get();
    if (ticketId === null) return;
    const currentTicket = tickets.find((item) => item.id === ticketId);

    const updated = { ...currentTicket, ...update };
    updateTicketMutation.mutate({
      id: ticketId,
      ticket: updated,
    });
    if (updateTicketMutation.isSuccess) {
      ticketToastMessage(currentTicket, update);
    }
  },

  handleDescriptionEdit: (ticketId, description) => {
    const { setEditingTicketId, setDraftDescription } = get();
    setEditingTicketId(ticketId);
    setDraftDescription(description);
  },
  handleTitleEdit: (ticketId, title) => {
    const { setEnableEditTitleId, setDraftTitle } = get();
    setEnableEditTitleId(ticketId);
    setDraftTitle(title);
  },
}));

export default useTicketStore;
