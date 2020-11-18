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
      todos,
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
            {Array.isArray(todos) && todos.length ? (
              todos.map((todo) => {
                return (
                  <div key={todo.id} onClick={() => onSelectTodo(todo.id)}>
                    <Checkbox onChange={onTodoCheck}>{todo.desc}</Checkbox>
                  </div>
                );
              })
            ) : (
              <p>empty</p>
            )}
          </div>
          <Input
            placeholder="enter your todo"
            // allowClear onChange={onChange}
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
