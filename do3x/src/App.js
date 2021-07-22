import React, { useState, useEffect } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import Todo from './Todo';
import firebase from 'firebase';
import db from './firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    db.collection('todos').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
  }, [input]);

  const addTodo = (event) => {
    event.preventDefault();
    db.collection('todos').add({ todo: input, timestamp: firebase.firestore.  })
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
