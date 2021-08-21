import React from 'react';
import Todo from './Todo';
//Import components

const TodoList = ({todos, setTodos, filteredTodos}) => {
    return (
       <div className="todo-container">
           <ul className="todo-list">
                {filteredTodos.map(todo => (
                    <Todo 
                        key={todo.id} 
                        text={todo.text}
                        todos={todos}
                        todo={todo}
                        setTodos={setTodos} 
                    /> //maps the array to print for each todo in todos
                ))}
           </ul>
       </div>
    );
}

export default TodoList;