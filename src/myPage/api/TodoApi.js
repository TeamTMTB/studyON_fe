import axios from "axios";

class TodoApi {
  URL = "/todo";

  todoCreate(TodoApiModel) {
    console.log(TodoApiModel);
    return axios
      .post(this.URL, TodoApiModel)
      .then((response) => (response && response.data) || null);
  }

  todoDetail(id) {
    return axios
      .get(this.URL + `/${id}`)
      .then((response) => (response && response.data) || null);
  }

  todoList(userId, todoDate) {
    return axios
      .get(this.URL + `?userId=${userId}&todoDate=${todoDate}`)
      .then((response) => (response && response.data) || null);
  }

  todoModify(TodoApiModel, id) {
    return axios
      .put(this.URL + `/${id}`, TodoApiModel)
      .then((response) => (response && response.data) || null);
  }

  todoDelete(id) {
    return axios
      .delete(this.URL + `/${id}`)
      .then((response) => (response && response.data) || null);
  }
}

export default TodoApi;
