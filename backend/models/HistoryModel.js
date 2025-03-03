export class HistoryModel {
  constructor({ type, action, details, user_id }) {
    this.type = type;
    this.action = action;
    this.details = details;
    this.user_id = user_id;
  }
}
