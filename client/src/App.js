import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import React, { useState } from 'react';
import DisplayTodo from './components/DisplayTodo';

function App() {
  const [allTodos, setAllTodos] = useState([]);
  return (
    <div className="App">
        <Form allTodos={allTodos} setAllTodos={setAllTodos}/>
        <DisplayTodo allTodos={allTodos} setAllTodos={setAllTodos}/>

    </div>
  );
}

export default App;
