import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../styles/card.scss";
import { useDeleteTicket } from "../hooks/useDeleteTicket";

const Card = ({
  ticket,
  isDragging,
  onDragStart,
  onDragOver,
  onDrop,
  editingTicketId,
  draftDescription,
  handleDescriptionEdit,
  handlePriorityChange,
  handleUpdateTicket,
}) => {
  const deleteMutation = useDeleteTicket();
  const [localDraftDescription, setLocalDraftDescription] =
    useState(draftDescription);

  // Sync localDraftDescription with draftDescription when editingTicketId changes
  useEffect(() => {
    if (editingTicketId === ticket.id) {
      setLocalDraftDescription(draftDescription);
    }
  }, [editingTicketId, draftDescription, ticket.id]);

  // Handle description change locally
  const handleDescriptionChange = (e) => {
    setLocalDraftDescription(e.target.value);
  };

  const handleDescriptionBlur = () => {
    if (localDraftDescription !== ticket.description) {
      handleUpdateTicket(ticket.id, { description: localDraftDescription });
    }
    handleDescriptionEdit(null, ""); // Exit edit mode
  };

  return (
    <div
      className={`ticket-card ${isDragging ? "dragging" : ""}`}
      draggable
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <div className="card-header">
        <h3>{ticket.title}</h3>
        <button
          onClick={() => deleteMutation.mutate(ticket.id)}
          className="delete-button"
        >
          <span className="delete-icon">&times;</span>
        </button>
      </div>

      {editingTicketId === ticket.id ? (
        <textarea
          value={localDraftDescription}
          onChange={handleDescriptionChange}
          onBlur={handleDescriptionBlur} // Triggered when clicking outside
          autoFocus
          className="description-input"
        />
      ) : (
        <p onClick={() => handleDescriptionEdit(ticket.id, ticket.description)}>
          {ticket.description || "Add a description..."}
        </p>
      )}
      <div className="ticket-meta">
        <span>Due: {new Date(ticket.expiry_date).toLocaleString()}</span>
        <span>
          Priority:
          <select
            value={ticket.priority}
            onChange={(e) => handlePriorityChange(ticket.id, e.target.value)}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </span>
      </div>
    </div>
  );
};

Card.propTypes = {
  ticket: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    expiry_date: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
    category_id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
  }).isRequired,
  isDragging: PropTypes.bool.isRequired,
  onDragStart: PropTypes.func.isRequired,
  onDragOver: PropTypes.func.isRequired,
  onDrop: PropTypes.func.isRequired,
  editingTicketId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  draftDescription: PropTypes.string,
  handleUpdateTicket: PropTypes.func.isRequired,
  handleDescriptionEdit: PropTypes.func.isRequired,
  handlePriorityChange: PropTypes.func.isRequired,
  deleteticket: PropTypes.func.isRequired,
};

export default Card;
