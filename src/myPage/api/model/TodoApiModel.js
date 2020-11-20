class TodoApiModel {
  userId = 0;
  desc = "";
  todoDate = "";
  complete = false;

  constructor(userId, desc, todoDate, complete) {
    this.userId = userId;
    this.desc = desc;
    this.todoDate = todoDate;
    this.complete = complete;
  }
}

export default TodoApiModel;
