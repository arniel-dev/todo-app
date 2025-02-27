import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import "../styles/ticketList.scss";

const priorityMap = {
  Low: 1,
  Medium: 2,
  High: 3,
};

const TicketList = ({
  tickets,
  categoryId,
  draggingTicketId,
  handleTicketDragStart,
  handlePriorityDragOver,
  handlePriorityDrop,
  editingTicketId,
  draftDescription,
  setDraftDescription,
  handleDescriptionEdit,
  handlePriorityChange,
}) => {
  return (
    <div className="tickets-list">
      {tickets
        .filter((ticket) => ticket.category_id === categoryId)
        .sort((a, b) =>
          priorityMap[a.priority] > priorityMap[b.priority] ? -1 : 1
        )
        .map((ticket) => (
          <Card
            key={ticket.id}
            ticket={ticket}
            isDragging={draggingTicketId === ticket.id}
            onDragStart={(e) => handleTicketDragStart(e, ticket.id)}
            onDragOver={handlePriorityDragOver}
            onDrop={(e) => handlePriorityDrop(e, ticket.id)}
            editingTicketId={editingTicketId}
            draftDescription={draftDescription}
            setDraftDescription={setDraftDescription}
            handleDescriptionEdit={handleDescriptionEdit}
            handlePriorityChange={handlePriorityChange}
          />
        ))}
    </div>
  );
};

TicketList.propTypes = {
  tickets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      expiry_date: PropTypes.string.isRequired,
      priority: PropTypes.string.isRequired,
      category_id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    })
  ).isRequired,
  categoryId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  draggingTicketId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleTicketDragStart: PropTypes.func.isRequired,
  handlePriorityDragOver: PropTypes.func.isRequired,
  handlePriorityDrop: PropTypes.func.isRequired,
  editingTicketId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  draftDescription: PropTypes.string,
  setDraftDescription: PropTypes.func.isRequired,
  handleDescriptionEdit: PropTypes.func.isRequired,
  handlePriorityChange: PropTypes.func.isRequired,
};

export default TicketList;
