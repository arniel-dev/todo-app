import React from "react";
import PropTypes from "prop-types";
import TicketList from "./TicketList";
import "../styles/category.scss";
import { useUpdateCategory } from "../hooks/useUpdateCategory";
import useTicketStore from "../store/ticketStore";
import { useUpdateTicket } from "../hooks/useUpdateTicket";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrows } from "@fortawesome/free-solid-svg-icons";

const Category = ({ category }) => {
  const updateCategoryMutation = useUpdateCategory();
  const updateTicketMutation = useUpdateTicket();
  const {
    handleCategoryDrop,
    setDraggingCategoryId,
    handleTicketDrop,
    dragOverCategoryId,
    draggingTicketId,
    setDragOverCategoryId,
  } = useTicketStore();

  const handleCategoryDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div
        className={`category-column ${
          dragOverCategoryId === category.id ? "drag-over" : ""
        }`}
        draggable
        onDragStart={() => setDraggingCategoryId(category.id)}
        onDragOver={handleCategoryDragOver}
        onDrop={(e) =>
          handleCategoryDrop(e, category.id, updateCategoryMutation)
        }
      >
        <div className="column-header">
          <h2>{category.name}</h2>
          <FontAwesomeIcon icon={faArrows} className="drag-icon" />
        </div>

        <div
          className="ticket-container"
          onDragOver={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setDragOverCategoryId(e, category.id);
          }}
          onDrop={(e) => handleTicketDrop(e, category.id, updateTicketMutation)}
        >
          <TicketList
            categoryId={category.id}
            draggingTicketId={draggingTicketId}
          />
        </div>
      </div>
    </>
  );
};

Category.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    order: PropTypes.number.isRequired,
  }).isRequired,
};

export default Category;
