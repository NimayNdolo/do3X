import React, { useState } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import Todo from './Todo';

function App() {
  const [todos, setTodos] = useState(['Finish to do list', 'go grocery shawppin', 'write medium article']);
  const [input, setInput] = useState('')
  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, input]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>do3X</h1>

      <FormControl>
        <InputLabel >myList</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)} />
      </FormControl>
      <Button variant="contained" color="secondary" type="submit" onClick={addTodo} disabled={!input}>+</Button>
      {/* <input value={input} onChange={event => setInput(event.target.value)}/> */}
      {/* <button type="submit" onClick={addTodo}>+</button> */}

      <ul>
        {todos.map(todo => (
          <Todo text={todo}/>
          
        ))}
      </ul>
    </div>
  );
}

export default App;
