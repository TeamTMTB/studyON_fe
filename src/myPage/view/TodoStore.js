import { observable, computed, action } from "mobx";

//1.Mobx Store 클래서 선언
class TodoStore {
    //2.관리해야하는 state객체 @observable 선언 및 초기화
    @observable
    todos = [];

    @observable
    todo = {};

    @observable
    date = {};

    @observable
    dateTodo = [];

    //3.state 데이터 리턴 - @computed get로 함수 구현
    @computed
    get getTodo() {
        return this.todo ? { ...this.todo } : {};
    }

    @computed
    get getTodos() {
        return this.todos ? this.todos.slice() : [];
    }

    //4.state 데이터 변경 @action 함수 구현
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
    addTodo(todo) {
        this.todos.push(todo);
        this.todo = {};
    }

    @action
    addTodos(todos) {
        this.dateTodo.push(todos);
        this.todos = [];
    }

    @action
    removeTodo(id) {
        //todos에 id인 todo 삭제
        this.todos = this.todos.filter((element) => element.id !== id);
        this.todo = {};
    }

    @action
    modifyTodo(todo) {
        //todos에서 local todo.id와 같은 객체 수정
        this.todos = this.todos.map((element) =>
            element.id === todo.id ? todo : element
        );
        this.todo = {};
    }

    @action
    selectTodo(id) {
        //todos에서 id가 같은 todo객체 변경
        this.todo = this.todos.find((element) => element.id === id);
    }

}

//5.객체 생성해서 export
export default new TodoStore();
