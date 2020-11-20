import { observable, computed, action } from "mobx";
import DateFunction from "../myPage/container/DateFunction";
import TodoApi from "../myPage/api/TodoApi";
import TodoApiModel from "../myPage/api/model/TodoApiModel";
import AchievementApi from "../roomEntrance/api/AchievementApi";

class TodoStore {
  todoApi = new TodoApi();
  achievementApi = new AchievementApi();

  //observable
  @observable
  todos = [];

  @observable
  todo = {
    userId: "",
    desc: "",
    todoDate: "",
    complete: false,
  };

  @observable
  dateTodo = {}; //하루의 todo 리스트 조회

  @observable
  monthAchievement = []; //한달 동안의 성취도 조회

  @observable
  date = DateFunction();

  @observable
  achievement = {}; //{title: "good", date: "2020-11-15", color: "#ffffff"}

  @observable
  achievements = []; //achievement 합친 배열

  @observable
  errorMessage = "";

  //computed
  @computed
  get getTodo() {
    return this.todo ? { ...this.todo } : {};
  }

  @computed
  get getTodos() {
    return this.todos ? this.todos.slice() : [];
  }

  @computed
  get getDateTodo() {
    return this.dateTodo ? { ...this.dateTodo } : {};
  }

  @computed
  get getDate() {
    return this.date;
  }

  //action
  @action
  setTodoProp(name, value) {
    this.todo = {
      ...this.todo,
      [name]: value,
    };
  }

  @action
  setDates(date) {
    this.date = date;
  }

  @action
  setAcheiveProp(name, value) {
    this.achievement = {
      ...this.achievement,
      [name]: value,
    };
  }

  @action
  async addTodo(todo) {
    const todoApiModel = new TodoApiModel(
      todo.userId,
      todo.desc,
      todo.todoDate,
      todo.complete
    );
    console.log(todoApiModel);
    const result = this.todoApi.todoCreate(todoApiModel);
    this.todos.push(todo);
    if (result == null) {
      this.errorMessage = "Error Occured while creating new todo";
    }
  }

  @action
  async modifyTodo(todo) {
    const todoApiModel = new TodoApiModel(
      todo.userId,
      todo.desc,
      todo.todoDate,
      todo.complete
    );
    this.todoApi.todoModify(todoApiModel, todo.id);
  }

  @action
  async removeTodo(id) {
    this.dateTodo.todos = this.dateTodo.todos.filter(
      (element) => element.id !== this.todo
    );
    this.todo = {};
    let result = this.todoApi.todoDelete(id);
    if (result == null) {
      this.errorMessage = `Error : There is no Todo with todoNum ${id} `;
    }
  }

  @action
  async selectTodo(id) {
    console.log("id: " + id);
    this.todo = this.dateTodo.todos.find((element) => element.id === id);
    //this.todo = await this.todoApi.todoDetail(id);
    console.log(this.todo);
    if (this.todo == null) {
      this.errorMessage = `Error : There is no Todo named ${id}`;
    }
  }

  // @action
  // async selectAll() {
  //   console.log("select all");
  //   const dateTodo = await this.todoApi.todoList();
  //   this.dateTodo.push(dateTodo);
  //   // this.todos = todos;
  //   if (this.todos == null) {
  //     return "empty list";
  //   }
  // }

  @action
  async todoList(userId, todoDate) {
    this.dateTodo = await this.todoApi.todoList(userId, todoDate);
    //console.log(this.dateTodo);
  }

  @action
  async achievementSave(id, achievment) {
    console.log(id, achievment);
    this.achievementApi.achievementSave(id, achievment);
    console.log(this.dateTodo);
  }

  @action
  async achievementList(month, userId) {
    console.log(month, userId);
    this.monthAchievement = await this.achievementApi.achievementList(
      month,
      userId
    );
    return this.monthAchievement;
  }
}

export default new TodoStore();
