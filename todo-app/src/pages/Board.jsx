import "../styles/board.scss";
import useGetCategories from "../hooks/useGetCategories";
import useGetTickets from "../hooks/useGetTickets";
import AddTicketForm from "../components/AddTicketForm";
import { useState } from "react";
import useTicketStore from "../store/ticketStore";
import { useUpdateTicket } from "../hooks/useUpdateTicket";
import { useUpdateCategory } from "../hooks/useUpdateCategory";
import Drawer from "../components/Drawer";
import Header from "../components/Header";
import Background from "../components/Background";
import Category from "../components/Category";

import {
  faPlus,
  faCheckSquare,
  faList,
  faHistory,
} from "@fortawesome/free-solid-svg-icons";
import CategoryManagement from "../components/CategoryManagement";
import FloatingMenuButton from "../components/FloatingMenuButton";
import { toast } from "react-toastify";
import { ticketToastMessage } from "../utils/ticketUpdateUtils";
import HistoryLog from "../components/HistoryLog";
import Button from "../components/Button";
import useGenerateDefaultCategories from "../hooks/useGenerateDefaultCategories";

function Board() {
  const { categories, tickets } = useTicketStore();
  useGetCategories();
  useGetTickets();
  const { refetch } = useGenerateDefaultCategories();
  const updateTicket = useUpdateTicket();
  const updateCategoryMutation = useUpdateCategory();
  const [draggingTicketId, setDraggingTicketId] = useState(null);
  const [dragOverCategoryId, setDragOverCategoryId] = useState(null);
  const [draggingCategoryId, setDraggingCategoryId] = useState(null);
  const [editingTicketId, setEditingTicketId] = useState(null);
  const [draftDescription, setDraftDescription] = useState("");
  const [isAddTicketDrawerOpen, setIsAddTicketDrawerOpen] = useState(false);
  const [isAddCategoryDrawerOpen, setIsAddCategoryDrawerOpen] = useState(false);
  const [isHistoryDrawerOpen, setIsHistoryDrawerOpen] = useState(false);

  const openAddTicket = () => setIsAddTicketDrawerOpen(true);
  const openAddCategory = () => setIsAddCategoryDrawerOpen(true);
  const openHistory = () => setIsHistoryDrawerOpen(true);
  const closeDrawer = () => {
    setIsAddTicketDrawerOpen(false);
    setIsAddCategoryDrawerOpen(false);
    setIsHistoryDrawerOpen(false);
  };

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
    updateCategoryMutation.mutate({
      categoryId: draggingCategoryId,
      order: targetCategory.order,
    });
    updateCategoryMutation.mutate({
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
    if (updateTicket.isSuccess) {
      ticketToastMessage(
        currentTicket,
        { category_id: categoryId },
        categories
      );
    }
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
    if (draggedTicket.priority === targetTicket.priority) {
      setDraggingTicketId(null);
      setDragOverCategoryId(null);
      return; // should not trigger call if same priority
    }

    // Swap their priority values
    handleDragTicketPriority(draggedTicketId, {
      ...draggedTicket,
      priority: targetTicket.priority,
    });
    handleDragTicketPriority(targetTicketId, {
      ...targetTicket,
      priority: draggedTicket.priority,
    });
    if (updateTicket.isSuccess) {
      toast.success(
        `Ticket "${draggedTicket.title}" priority updated to "${targetTicket.priority}"`
      );
      toast.success(
        `Ticket "${targetTicket.title}" priority updated to "${draggedTicket.priority}"`
      );
    }
    setDraggingTicketId(null);
    setDragOverCategoryId(null);
  };

  const handlePriorityChange = (ticketId, newPriority) => {
    handleUpdateTicket(ticketId, { priority: newPriority });
  };

  const handleDescriptionEdit = (ticketId, description) => {
    setEditingTicketId(ticketId);
    setDraftDescription(description);
  };

  const handleUpdateTicket = async (ticketId, update) => {
    const currentTicket = tickets.find((item) => item.id === ticketId);

    const updated = { ...currentTicket, ...update };
    updateTicket.mutate({
      id: ticketId,
      ticket: updated,
    });
    if (updateTicket.isSuccess) {
      ticketToastMessage(currentTicket, update);
    }
  };

  const handleDragTicketPriority = async (ticketId, updatedTicket) => {
    updateTicket.mutate({
      id: ticketId,
      ticket: updatedTicket,
    });
  };
  const menuItems = [
    {
      icon: faCheckSquare,
      label: "Add Ticket",
      onClick: openAddTicket,
      bgColor: "var(--primary-color)",
      ariaLabel: "Add Ticket",
    },
    {
      icon: faList,
      label: "Add Category",
      onClick: openAddCategory,
      bgColor: "var(--primary-color)",
      ariaLabel: "Add Category",
    },
    {
      icon: faHistory,
      label: "Activity Logs",
      onClick: openHistory,
      bgColor: "var(--primary-color)",
      ariaLabel: "Add Category",
    },
  ];
  const handleGenerate = (e) => {
    e.preventDefault();
    refetch();
  };

  return (
    <>
      <Background />
      <div className="todo-container">
        <Header />
        <FloatingMenuButton mainIcon={faPlus} items={menuItems} />
        <Drawer isOpen={isAddTicketDrawerOpen} onClose={closeDrawer}>
          <AddTicketForm onClose={closeDrawer} />
        </Drawer>
        <Drawer isOpen={isAddCategoryDrawerOpen} onClose={closeDrawer}>
          <CategoryManagement onClose={closeDrawer} />
        </Drawer>
        <Drawer
          isOpen={isHistoryDrawerOpen}
          onClose={closeDrawer}
          customWidth={"55vw"}
        >
          <HistoryLog onClose={closeDrawer} />
        </Drawer>

        <div className="board">
          {categories
            .sort((a, b) => a.order - b.order)
            .map((category) => (
              <Category
                key={category.id}
                category={category}
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
                handleUpdateTicket={handleUpdateTicket}
              />
            ))}
          {categories?.length < 1 && (
            <Button className="button" onClick={(e) => handleGenerate(e)}>
              Generate Default Category
            </Button>
          )}
        </div>
      </div>
    </>
  );
}

export default Board;
