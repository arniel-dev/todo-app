import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../styles/card.scss";
import { useDeleteTicket } from "../hooks/useDeleteTicket";
import { isExpiryApproaching, isExpired } from "../utils/dateUtils";
import { toast } from "react-toastify";
import { useUpdateTicket } from "../hooks/useUpdateTicket";
import useTicketStore from "../store/ticketStore";

const Card = ({ ticket, isDragging, onDragStart, onDragOver, onDrop }) => {
  const deleteMutation = useDeleteTicket();
  const {
    handleUpdateTicket,
    handleDescriptionEdit,
    editingDescriptionId,
    draftDescription,
    enableEditTitleId,
    handleTitleEdit,
    draftTitle,
  } = useTicketStore();
  const [localDraftDescription, setLocalDraftDescription] =
    useState(draftDescription);
  const [localDraftTitle, setLocalDraftTitle] = useState(draftTitle);
  const updateTicketMutate = useUpdateTicket();

  const [hasNotified, setHasNotified] = useState(false);

  useEffect(() => {
    if (hasNotified) return;

    if (isExpired(ticket.expiry_date)) {
      toast.error(`Ticket "${ticket.title}" has expired!`, {
        toastId: `expired-${ticket.id}`,
      });
      setHasNotified(true);
    } else if (isExpiryApproaching(ticket.expiry_date)) {
      toast.warning(`Ticket "${ticket.title}" is expiring soon!`, {
        toastId: `expiry-${ticket.id}`,
      });
      setHasNotified(true);
    }
  }, [ticket.expiry_date, hasNotified]);

  // Sync localDraftDescription with draftDescription when editingDescriptionId changes
  useEffect(() => {
    if (editingDescriptionId === ticket.id) {
      setLocalDraftDescription(draftDescription);
    }
  }, [editingDescriptionId, draftDescription, ticket.id]);

  useEffect(() => {
    if (enableEditTitleId === ticket.id) {
      setLocalDraftTitle(draftTitle);
    }
  }, [enableEditTitleId, draftTitle, ticket.id]);

  // Handle description change locally
  const handleDescriptionChange = (e) => {
    setLocalDraftDescription(e.target.value);
  };

  const handleBlur = () => {
    if (
      localDraftDescription !== ticket.description &&
      !!editingDescriptionId
    ) {
      handleUpdateTicket(
        ticket.id,
        { description: localDraftDescription },
        updateTicketMutate
      );
    }

    if (localDraftTitle !== ticket.title && !!enableEditTitleId) {
      handleUpdateTicket(
        ticket.id,
        { title: localDraftTitle },
        updateTicketMutate
      );
    }
    handleTitleEdit(null, "");
    handleDescriptionEdit(null, "");
  };

  const handleDelete = (id, title) => {
    deleteMutation.mutate(id);
    toast.success(`Ticket "${title}" was successfully deleted`);
  };

  return (
    <div
      className={`ticket-card ${isDragging ? "dragging" : ""} ${
        isExpired(ticket.expiry_date)
          ? "expired"
          : isExpiryApproaching(ticket.expiry_date)
          ? "expiring-soon"
          : ""
      }  priority-${ticket.priority.toLowerCase()}`}
      draggable
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <div className="card-header">
        {enableEditTitleId === ticket.id ? (
          <input
            value={localDraftTitle}
            onChange={(e) => setLocalDraftTitle(e.target.value)}
            onBlur={handleBlur}
            autoFocus
            className="title-input"
          ></input>
        ) : (
          <h3 onClick={() => handleTitleEdit(ticket.id, ticket.title)}>
            {ticket.title || "Add a Title..."}
          </h3>
        )}
        <button
          onClick={() => handleDelete(ticket.id, ticket.title)}
          className="delete-button"
        >
          <span className="delete-icon">&times;</span>
        </button>
      </div>

      {editingDescriptionId === ticket.id ? (
        <textarea
          value={localDraftDescription}
          onChange={handleDescriptionChange}
          onBlur={handleBlur} // Triggered when clicking outside
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
            onChange={(e) =>
              handleUpdateTicket(
                ticket.id,
                { priority: e.target.value },
                updateTicketMutate
              )
            }
            className={`priority-${ticket.priority.toLowerCase()}`}
          >
            <option style={{ backgroundColor: "#ccffcc" }} value="Low">
              Low
            </option>
            <option style={{ backgroundColor: "#fff3cc" }} value="Medium">
              Medium
            </option>
            <option style={{ backgroundColor: "#ffcccc" }} value="High">
              High
            </option>
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
};

export default Card;
