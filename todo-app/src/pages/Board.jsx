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
  //Ticket
  const handleTicketDragStart = (e, ticketId) => {
    setDraggingTicketId(ticketId);
  };

  const handleTicketDragOver = (e, categoryId) => {
    e.preventDefault();
    setDragOverCategoryId(categoryId);
  };

  const handleTicketDrop = (e, categoryId) => {
    e.preventDefault();

    handleUpdateTicket(draggingTicketId, { category_id: categoryId });
    setDraggingTicketId(null);
    setDragOverCategoryId(null);
  };
  const handleUpdateTicket = (ticketId, update) => {
    const currentTicket = tickets.find((item) => item.id === ticketId);
    updateTicket.mutate({
      id: ticketId,
      ticket: { ...currentTicket, ...update },
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
                    .map((ticket) => (
                      <div
                        key={ticket.id}
                        className={`ticket-card ${
                          draggingTicketId === ticket.id ? "dragging" : ""
                        }`}
                        draggable
                        onDragStart={(e) => handleTicketDragStart(e, ticket.id)}
                      >
                        <h3>{ticket.title}</h3>
                        <p>{ticket.description}</p>
                        <div className="ticket-meta">
                          <span>
                            Due: {new Date(ticket.expiry_date).toLocaleString()}
                          </span>
                          <span>Priority: {ticket.priority}</span>
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
