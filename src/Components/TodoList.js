import React from 'react';
import TodoItem from "./TodoItem";

function TodoList(props) {
    return (
        <div>
                {props.todoList.map((item) =>
                    <TodoItem
                        key={item.id}
                        todoList={item}
                        deleteTodoItem={props.deleteTodoItem}
                        updateTodoItem={props.updateTodoItem}
                    />)}

        </div>
    );
}

export default TodoList;