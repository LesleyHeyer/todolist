import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';


function App() {

  const [inputText, setInputText] = useState(''); //for input text
  const [todos, setTodos] = useState([]); //holds data

  return (
    <div className="App">
      <header>
        <h1>Lesley's To Do List</h1>
      </header>
      <Form 
        inputText={inputText}
        setInputText={setInputText}
        todos = {todos}
        setTodos = {setTodos}  //passing this down to the Form.js
      />
      <TodoList 
        inputText={inputText}
        todos = {todos}
        setTodos = {setTodos} 
      />
    </div>
  );
}

export default App;
