import "../styles/board.scss";
import useGetCategories from "../hooks/useGetCategories";
import useGetTickets from "../hooks/useGetTickets";
import AddTicketForm from "../components/AddTicketForm";
import { useState } from "react";
import useTicketStore from "../store/ticketStore";
import { useUpdateTicket } from "../hooks/useUpdateTicket";
import { useUpdateCategoryOrder } from "../hooks/useUpdateCategoryOrder";

function Board() {
  const { categories, tickets } = useTicketStore();
  useGetCategories();
  useGetTickets();
  const updateTicket = useUpdateTicket();
  const updateCategoryOrder = useUpdateCategoryOrder();
  const [draggingTicketId, setDraggingTicketId] = useState(null);
  const [dragOverCategoryId, setDragOverCategoryId] = useState(null);
  const [draggingCategoryId, setDraggingCategoryId] = useState(null);
  const priorityMap = {
    Low: 1,
    Medium: 2,
    High: 3,
  };
  // Handle category drag-and-drop
  const handleCategoryDragStart = (e, categoryId) => {
    setDraggingCategoryId(categoryId);
    e.dataTransfer.setData("categoryId", categoryId);
  };

  const handleCategoryDragOver = (e) => {
    e.preventDefault(); // Allow dropping
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

  // Handle priority change via dropdown
  const handlePriorityChange = (ticketId, newPriority) => {
    handleUpdateTicket(ticketId, { priority: newPriority });
  };

  // Update ticket in the backend and Zustand store
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
    <div className="">
      <h1>To-Do Board</h1>
      <AddTicketForm />
      <div className="board">
        {categories
          .sort((a, b) => a.order - b.order)
          .map((category) => (
            <div
              key={category.id}
              className={`category-column ${
                dragOverCategoryId === category.id ? "drag-over" : ""
              }`}
              draggable
              onDragStart={(e) => handleCategoryDragStart(e, category.id)}
              onDragOver={handleCategoryDragOver}
              onDrop={(e) => handleCategoryDrop(e, category.id)}
            >
              <h2>{category.name}</h2>
              <div
                style={{ height: "100%" }}
                onDragOver={(e) => handleTicketDragOver(e, category.id)}
                onDrop={(e) => handleTicketDrop(e, category.id)}
              >
                <div className="tickets-list">
                  {tickets
                    .filter((ticket) => ticket.category_id === category.id)
                    .sort((a, b) =>
                      priorityMap[a.priority] > priorityMap[b.priority] ? -1 : 1
                    ) // Sort tickets by priority decending order
                    .map((ticket) => (
                      <div
                        key={ticket.id}
                        className={`ticket-card ${
                          draggingTicketId === ticket.id ? "dragging" : ""
                        }`}
                        draggable
                        onDragStart={(e) => handleTicketDragStart(e, ticket.id)}
                        onDragOver={handlePriorityDragOver}
                        onDrop={(e) => handlePriorityDrop(e, ticket.id)}
                      >
                        <h3>{ticket.title}</h3>
                        <p>{ticket.description}</p>
                        <div className="ticket-meta">
                          <span>
                            Due: {new Date(ticket.expiry_date).toLocaleString()}
                          </span>
                          <span>
                            Priority:
                            <select
                              value={ticket.priority}
                              onChange={(e) =>
                                handlePriorityChange(ticket.id, e.target.value)
                              }
                            >
                              <option value="Low">Low</option>
                              <option value="Medium">Medium</option>
                              <option value="High">High</option>
                            </select>
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Board;
