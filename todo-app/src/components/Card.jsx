import React from "react";
import PropTypes from "prop-types";
import "../styles/card.scss";

const Card = ({
  ticket,
  isDragging,
  onDragStart,
  onDragOver,
  onDrop,
  editingTicketId,
  draftDescription,
  setDraftDescription,
  handleDescriptionEdit,
  handlePriorityChange,
}) => {
  return (
    <div
      className={`ticket-card ${isDragging ? "dragging" : ""}`}
      draggable
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <h3>{ticket.title}</h3>
      {editingTicketId === ticket.id ? (
        <textarea
          value={draftDescription}
          onChange={(e) => setDraftDescription(e.target.value)}
          onBlur={() => {
            handleDescriptionEdit(ticket.id, draftDescription);
          }}
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
  setDraftDescription: PropTypes.func.isRequired,
  handleDescriptionEdit: PropTypes.func.isRequired,
  handlePriorityChange: PropTypes.func.isRequired,
};

export default Card;
