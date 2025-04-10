import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import "../styles/ticketList.scss";
import useTicketStore from "../store/ticketStore";
import { useUpdateTicket } from "../hooks/useUpdateTicket";

const priorityMap = {
  Low: 1,
  Medium: 2,
  High: 3,
};

const TicketList = ({ categoryId }) => {
  const { tickets, handlePriorityDrop, setDraggingTicketId, draggingTicketId } =
    useTicketStore();
  const updateTicketMutate = useUpdateTicket();
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
            onDragStart={() => setDraggingTicketId(ticket.id)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handlePriorityDrop(e, ticket.id, updateTicketMutate)}
          />
        ))}
    </div>
  );
};

TicketList.propTypes = {
  categoryId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
};

export default TicketList;
