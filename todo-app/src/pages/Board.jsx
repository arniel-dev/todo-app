import "../styles/board.scss";
import useGetCategories from "../hooks/useGetCategories";
import useGetTickets from "../hooks/useGetTickets";
import AddTicketForm from "../components/AddTicketForm";
import { useState } from "react";
import useTicketStore from "../store/ticketStore";
function Board() {
  const { categories, tickets, updateTicket } = useTicketStore();
  useGetCategories();
  useGetTickets();
  const [draggingTicketId, setDraggingTicketId] = useState(null);
  const [dragOverCategoryId, setDragOverCategoryId] = useState(null);

  const handleDragStart = (e, ticketId) => {
    console.log("ticketId", ticketId);
    setDraggingTicketId(ticketId);
  };

  const handleDragOver = (e, categoryId) => {
    e.preventDefault();
    setDragOverCategoryId(categoryId);
  };

  const handleDrop = (e, categoryId) => {
    e.preventDefault();
    console.log("draggingTicketId", draggingTicketId, categoryId);

    updateTicket(draggingTicketId, { category_id: categoryId });
    setDraggingTicketId(null);
    setDragOverCategoryId(null);
  };
  return (
    <div className="container">
      <h1>To-Do Board</h1>
      <AddTicketForm />
      <div className="board">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`category-column ${
              dragOverCategoryId === category.id ? "drag-over" : ""
            }`}
            onDragOver={(e) => handleDragOver(e, category.id)}
            onDrop={(e) => handleDrop(e, category.id)}
          >
            <h2>{category.name}</h2>
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
                    onDragStart={(e) => handleDragStart(e, ticket.id)}
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
        ))}
      </div>
    </div>
  );
}
export default Board;
