import React from 'react';
import Todo from './Todo';

const Todos = (props) => {
    return (
        <div>
            {
                props.todos.map(todo => <Todo key={todo.id} id={todo.id} todo={todo.todo} removeTodo={props.removeTodo} ></Todo>)
            }
        </div>
    );
};

export default Todos;