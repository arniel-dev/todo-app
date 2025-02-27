import React from "react";
import PropTypes from "prop-types";
import TicketList from "./TicketList";

const Category = ({
  category,
  tickets,
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
          tickets={tickets}
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
};

export default Category;
