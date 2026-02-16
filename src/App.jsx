import React, { useState } from 'react'
import "./App.css"

const App = () => {
  const [input, setInput] = useState("");
  const [todoList, setTodolist] = useState([]);

  const addTodoItem = () => {
    if (!input.trim()) return;

    const item = {
      id: todoList.length+1,
      text: input,
      completed: false
    }

    setTodolist(prev => [...prev, item]);
    setInput(""); 
  }


  const toggleCompleted = (id) => {
  setTodolist(prev =>
    prev.map(t => {
      if (t.id === id) {
        return {
          ...t,
          completed: !t.completed
        };
      } else {
        return t;
      }
    })
  );
};


const deleteTodo = (id) => {
  setTodolist(
    todoList.filter(t => t.id !== id)
  );
};



  return (
    <div>
      <input 
        type="text" 
        placeholder="Enter Task" 
        value={input} 
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={addTodoItem}>Add</button>

      <ul>
        {todoList.map(t => (
          <li key={t.id}>
            <input type="checkbox" checked = {t.completed}
            onChange={() => toggleCompleted(t.id)}/>
            <span className={t.completed ? "strikethrough" : ""}>{t.text}</span>
            <button onClick={()=> deleteTodo(t.id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
