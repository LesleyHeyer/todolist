import React from 'react';
import Todo from './Todo';
//Import components

const TodoList = ({todos}) => {
    return (
       <div className="todo-container">
           <ul className="todo-list">
                {todos.map(todo => (
                    <Todo key={todo.id} text={todo.text} /> //maps the array to print for each todo in todos
                ))}
           </ul>
       </div>
    );
}

export default TodoList;