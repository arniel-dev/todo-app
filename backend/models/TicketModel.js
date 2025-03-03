class TicketModel {
  constructor(ticket) {
    this.title = ticket.title;
    this.description = ticket.description;
    this.priority = ticket.priority;
    this.category_id = ticket.category_id;
    this.expiry_date = ticket.expiry_date;
    this.user_id = ticket.user_id;
    this.category_name = ticket.category_name;
  }
}
export default TicketModel;
