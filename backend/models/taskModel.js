class TaskModel {
  constructor(task) {
    this.category = task.category;
    this.description = task.description;
    this.priority = task.priority;
    this.title = task.title;
    this.expiryDate = task.expiryDate;
  }
}
export default TaskModel;
