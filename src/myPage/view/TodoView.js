import React, { Component } from "react";
import { Card, Input } from "antd";
import {
  MinusCircleOutlined,
  EditOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { Checkbox } from "antd";
import { decorate } from "mobx";

class TodoView extends Component {
  render() {
    const {
      todo,
      dateTodo,
      onSetTodoProp,
      onAddTodo,
      onRemoveTodo,
      onModifyTodo,
      onSelectTodo,
      onTodoCheck,
    } = this.props;

    return (
      <div>
        <Card
          style={{ width: 300 }}
          actions={[
            <PlusCircleOutlined key="add" onClick={onAddTodo} />,
            <EditOutlined key="Edit" onClick={onModifyTodo} />,
            <MinusCircleOutlined key="delete" onClick={onRemoveTodo} />,
          ]}
        >
          <strong style={{ fontSize: "25px", textDecoration: "line-through" }}>
            Todo List
          </strong>
          <div>
            {Array.isArray(dateTodo.todos) && dateTodo.todos.length ? (
              dateTodo.todos.map((todo) => {
                return (
                  <div key={todo.id} onClick={() => onSelectTodo(todo.id)}>
                    <Checkbox onChange={onTodoCheck} checked={todo.complete} />
                    &nbsp;&nbsp;
                    {todo.desc}
                  </div>
                );
              })
            ) : (
              <p>empty</p>
            )}

            {/* 가데이터
            {dateTodo.todos.map((todo) => {
              return (
                <div key={todo.id} onClick={() => onSelectTodo(todo.id)}>
                  <Checkbox onChange={onTodoCheck} />
                  {todo.desc}
                </div>
              );
            })} */}
          </div>
          <Input
            placeholder="enter your todo"
            //allowClear onChange={onChange}
            fluid
            label="desc"
            value={todo && todo.desc ? todo.desc : ""}
            onChange={(e) => onSetTodoProp("desc", e.target.value)}
            autoFocus
          />
        </Card>
      </div>
    );
  }
}

export default TodoView;
