import React, { Component } from 'react';
import { Card, Input } from 'antd';
import { MinusCircleOutlined, EditOutlined, PlusCircleOutlined } from '@ant-design/icons';

class TodoView extends Component {
    render() {
        const { Meta } = Card;

        const { TextArea } = Input;

        const {
            todo,
            todos,
            onSetTodoProp,
            onAddTodo,
            onRemoveTodo,
            onModifyTodo,
            onSelectTodo,
            onAddTodos
        } = this.props;

        // const onChange = e => {
        //     console.log(e);
        // };
        return (
            <div>
                <Card
                    style={{ width: 300 }}
                    actions={[
                        <PlusCircleOutlined key="add" onClick={onAddTodo} />,
                        <EditOutlined key="Edit" onClick={onModifyTodo} />,
                        <MinusCircleOutlined key="delete" onClick={onRemoveTodo} />,
                        <button onClick={onAddTodos}>Save</button>
                    ]}
                >
                    <strong style={{ fontSize: "25px" }}>Todo List</strong>
                    <div>
                        {Array.isArray(todos) && todos.length ? (
                            todos.map((todo) => {
                                return (
                                    <div key={todo.id} onClick={() => onSelectTodo(todo.id)}>
                                        {todo.title}</div>
                                )
                            }
                            )) : (<p>empty</p>)}
                    </div>
                    <Input placeholder="enter your todo"
                        // allowClear onChange={onChange}
                        fluid
                        label="Title"
                        value={todo && todo.title ? todo.title : ""}
                        onChange={(e) => onSetTodoProp("title", e.target.value)}
                        autoFocus
                    />
                </Card>
            </div >
        );
    }
}

export default TodoView;