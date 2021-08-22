import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';


function App() {

  const [inputText, setInputText] = useState(''); //for input text
  const [todos, setTodos] = useState([]); //holds data
  const [status, setStatus] = useState('all'); //filter
  const [filteredTodos, setFilteredTodos] = useState([]);


    useEffect(() => {

      getLocalTodos();

    }, []);


   //USE EFFECT -- every time we say "our todos change, run this function"
   useEffect(() => {
    filterHandler();
    saveLocalTodos();

  }, [todos, status]);


  //functions/events

  const filterHandler = () => {
    switch(status) {
      case 'completed': //if this then: do this
        setFilteredTodos(todos.filter(todo => todo.completed === true))
         break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
          break; //stop
      default: //if none of this is true then do this
        setFilteredTodos(todos);
          break;
    }
  }

  //save local - saving and pushing whatever we have in our state
  const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
  };

  const getLocalTodos = () => { //to get the saved local todos
    if(localStorage.getItem('todos') === null ) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos')); //gets local todos
      setTodos(todoLocal); //push it up to state
    }
  };

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
        setStatus={setStatus}
      />
      <TodoList 
        inputText={inputText}
        todos = {todos}
        setTodos = {setTodos} 
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
