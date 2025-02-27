import "../styles/board.scss";
import useGetCategories from "../hooks/useGetCategories";
import useGetTickets from "../hooks/useGetTickets";
import AddTicketForm from "../components/AddTicketForm";
import { useState, useEffect } from "react";
import useTicketStore from "../store/ticketStore";
import { useUpdateTicket } from "../hooks/useUpdateTicket";
import { useUpdateCategoryOrder } from "../hooks/useUpdateCategoryOrder";
import { debounce } from "lodash";
import Drawer from "../components/Drawer";
import Header from "../components/Header";
import Background from "../components/Background";
import Category from "../components/Category";

function Board() {
  const { categories, tickets } = useTicketStore();
  useGetCategories();
  useGetTickets();
  const updateTicket = useUpdateTicket();
  const updateCategoryOrder = useUpdateCategoryOrder();
  const [draggingTicketId, setDraggingTicketId] = useState(null);
  const [dragOverCategoryId, setDragOverCategoryId] = useState(null);
  const [draggingCategoryId, setDraggingCategoryId] = useState(null);
  const [editingTicketId, setEditingTicketId] = useState(null);
  const [draftDescription, setDraftDescription] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  // Handle category drag-and-drop
  const handleCategoryDragStart = (e, categoryId) => {
    setDraggingCategoryId(categoryId);
    e.dataTransfer.setData("categoryId", categoryId);
  };

  const handleCategoryDragOver = (e) => {
    e.preventDefault();
  };

  const handleCategoryDrop = async (e, targetCategoryId) => {
    e.preventDefault();
    e.stopPropagation();
    if (draggingCategoryId === targetCategoryId) return;

    // Find the dragged and target categories
    const draggedCategory = categories.find(
      (cat) => cat.id == draggingCategoryId
    );
    const targetCategory = categories.find((cat) => cat.id == targetCategoryId);

    // Swap their order values
    updateCategoryOrder.mutate({
      categoryId: draggingCategoryId,
      order: targetCategory.order,
    });
    updateCategoryOrder.mutate({
      categoryId: targetCategoryId,
      order: draggedCategory.order,
    });

    setDraggingCategoryId(null);
  };

  // Handle ticket drag-and-drop
  const handleTicketDragStart = (e, ticketId) => {
    setDraggingTicketId(ticketId);
    e.dataTransfer.setData("ticketId", ticketId);
  };

  const handleTicketDragOver = (e, categoryId) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOverCategoryId(categoryId);
  };

  const handleTicketDrop = (e, categoryId) => {
    e.preventDefault();
    e.stopPropagation();
    const currentTicket = tickets.find((item) => item.id === draggingTicketId);
    if (categoryId === currentTicket.category_id) return;
    handleUpdateTicket(draggingTicketId, { category_id: categoryId });
    setDraggingTicketId(null);
    setDragOverCategoryId(null);
  };

  // Handle priority drag-and-drop (reorder within the same category)
  const handlePriorityDragOver = (e) => {
    e.preventDefault();
  };

  const handlePriorityDrop = (e, targetTicketId) => {
    e.preventDefault();
    const draggedTicketId = e.dataTransfer.getData("ticketId");
    if (draggedTicketId === targetTicketId) return;

    // Find the dragged and target tickets
    const draggedTicket = tickets.find(
      (ticket) => ticket.id == draggedTicketId
    );
    const targetTicket = tickets.find((ticket) => ticket.id == targetTicketId);
    if (draggedTicket.category_id !== targetTicket.category_id) return; // should not trigger call if not same category
    // Swap their priority values
    handleUpdateTicketPriority(draggedTicketId, {
      ...draggedTicket,
      priority: targetTicket.priority,
    });
    handleUpdateTicketPriority(targetTicketId, {
      ...targetTicket,
      priority: draggedTicket.priority,
    });

    setDraggingTicketId(null);
  };

  const handlePriorityChange = (ticketId, newPriority) => {
    handleUpdateTicket(ticketId, { priority: newPriority });
  };

  const handleDescriptionEdit = (ticketId, description) => {
    setEditingTicketId(ticketId);
    setDraftDescription(description);
  };

  const autoSaveDescription = debounce((ticketId, description) => {
    handleUpdateTicket(ticketId, { description });
  }, 1000);

  useEffect(() => {
    if (editingTicketId && draftDescription !== "") {
      autoSaveDescription(editingTicketId, draftDescription);
    }
  }, [draftDescription, editingTicketId]);

  const handleUpdateTicket = async (ticketId, update) => {
    const currentTicket = tickets.find((item) => item.id === ticketId);
    const updated = { ...currentTicket, ...update };
    updateTicket.mutate({
      id: ticketId,
      ticket: updated,
    });
  };

  const handleUpdateTicketPriority = async (ticketId, updatedTicket) => {
    updateTicket.mutate({
      id: ticketId,
      ticket: updatedTicket,
    });
  };

  return (
    <>
      <Background />
      <div className="todo-container">
        <Header />
        <button onClick={openDrawer} className="add-ticket-button">
          Add Ticket
        </button>
        <Drawer isOpen={isDrawerOpen} onClose={closeDrawer}>
          <AddTicketForm onClose={closeDrawer} />
        </Drawer>
        <div className="board">
          {categories
            .sort((a, b) => a.order - b.order)
            .map((category) => (
              <Category
                key={category.id}
                category={category}
                tickets={tickets}
                draggingTicketId={draggingTicketId}
                dragOverCategoryId={dragOverCategoryId}
                handleTicketDragStart={handleTicketDragStart}
                handleTicketDragOver={handleTicketDragOver}
                handleTicketDrop={handleTicketDrop}
                handleCategoryDragStart={handleCategoryDragStart}
                handleCategoryDragOver={handleCategoryDragOver}
                handleCategoryDrop={handleCategoryDrop}
                editingTicketId={editingTicketId}
                draftDescription={draftDescription}
                setDraftDescription={setDraftDescription}
                handleDescriptionEdit={handleDescriptionEdit}
                handlePriorityChange={handlePriorityChange}
                handlePriorityDragOver={handlePriorityDragOver}
                handlePriorityDrop={handlePriorityDrop}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default Board;
