import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import TodoView from "./TodoView";
import generateId from "./IDGenerator";


@inject("TodoStore")
@observer
class TodoContainer extends Component {

    componentDidMount() {
        console.log("todoContainer: ");
    }

    onSelectTodo = (id) => {
        this.props.TodoStore.selectTodo(id);
    };

    onSetTodoProp = (name, value) => {
        console.log(name, value)
        //TodoStore의 setTodoProp(name, value) 호출
        //const {TodoStore} = this.props;
        this.props.TodoStore.setTodoProp(name, value);
    };

    onAddTodo = () => {
        //TodoStore의 addTodo(todo) 호출
        let todo = this.props.TodoStore.todo;
        todo = { ...todo, id: generateId(5) };
        this.props.TodoStore.addTodo(todo);
    };

    onAddTodos = () => {
        let todos = this.props.TodoStore.todos;
        let date = this.props.TodoStore.date;
        console.log(date);
        todos = { ...todos, id: date };
        this.props.TodoStore.addTodos(todos);
        console.log(todos);
    };

    onRemoveTodo = () => {
        let todo = this.props.TodoStore.todo;
        this.props.TodoStore.removeTodo(todo.id);
    };

    onModifyTodo = () => {
        let todo = this.props.TodoStore.todo;
        this.props.TodoStore.modifyTodo(todo);
    };

    render() {
        const { todo } = this.props.TodoStore;
        const todos = this.props.TodoStore.getTodos;
        // const todo = this.props.TodoStore; //todo->TodoStore
        return (
            <TodoView
                todo={todo}
                todos={todos}
                onSetTodoProp={this.onSetTodoProp}
                onAddTodo={this.onAddTodo}
                onAddTodos={this.onAddTodos}
                onRemoveTodo={this.onRemoveTodo}
                onModifyTodo={this.onModifyTodo}
                onSelectTodo={this.onSelectTodo}
            />
        );
    }
}

export default TodoContainer;
