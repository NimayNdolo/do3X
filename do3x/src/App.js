import React, { useState, useEffect } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import Todo from './Todo';
import db from './firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    db.collection('todos').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({ todo: doc.data().todo, id: doc.id})))
    })
  }, [input]);

  const addTodo = (event) => {
    event.preventDefault();
    db.collection('todos').add({ 
      todo: input 
    })
    setInput('');
  }

  return (
    <div className="App">
      <h1>do3X</h1>

    <form>
        <FormControl>
          <InputLabel >myList</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
        </FormControl>
        <Button variant="contained" color="secondary" type="submit" onClick={addTodo} disabled={!input}>+</Button>
    </form>

      <ul>
        {todos.map(todo => (
        <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
