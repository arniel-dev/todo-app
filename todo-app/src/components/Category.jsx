import React from "react";
import PropTypes from "prop-types";
import TicketList from "./TicketList";
import "../styles/category.scss";
const Category = ({
  category,
  draggingTicketId,
  dragOverCategoryId,
  handleTicketDragStart,
  handleTicketDragOver,
  handleTicketDrop,
  handleCategoryDragStart,
  handleCategoryDragOver,
  handleCategoryDrop,
  editingTicketId,
  draftDescription,
  setDraftDescription,
  handleDescriptionEdit,
  handlePriorityChange,
  handlePriorityDragOver,
  handlePriorityDrop,
  handleUpdateTicket,
}) => {
  return (
    <div
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
        className="ticket-container"
        onDragOver={(e) => handleTicketDragOver(e, category.id)}
        onDrop={(e) => handleTicketDrop(e, category.id)}
      >
        <TicketList
          categoryId={category.id}
          draggingTicketId={draggingTicketId}
          handleTicketDragStart={handleTicketDragStart}
          handlePriorityDragOver={handlePriorityDragOver}
          handlePriorityDrop={handlePriorityDrop}
          editingTicketId={editingTicketId}
          draftDescription={draftDescription}
          setDraftDescription={setDraftDescription}
          handleDescriptionEdit={handleDescriptionEdit}
          handlePriorityChange={handlePriorityChange}
          handleUpdateTicket={handleUpdateTicket} // Pass this function
        />
      </div>
    </div>
  );
};

Category.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    order: PropTypes.number.isRequired,
  }).isRequired,
  draggingTicketId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  dragOverCategoryId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleTicketDragStart: PropTypes.func.isRequired,
  handleTicketDragOver: PropTypes.func.isRequired,
  handleTicketDrop: PropTypes.func.isRequired,
  handleCategoryDragStart: PropTypes.func.isRequired,
  handleCategoryDragOver: PropTypes.func.isRequired,
  handleCategoryDrop: PropTypes.func.isRequired,
  editingTicketId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  draftDescription: PropTypes.string,
  setDraftDescription: PropTypes.func.isRequired,
  handleDescriptionEdit: PropTypes.func.isRequired,
  handlePriorityChange: PropTypes.func.isRequired,
  handlePriorityDragOver: PropTypes.func.isRequired,
  handlePriorityDrop: PropTypes.func.isRequired,
  handleUpdateTicket: PropTypes.func.isRequired,
};

export default Category;
