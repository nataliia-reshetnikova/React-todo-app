import React from 'react';
import './App.css';
import TodoList from './todos/TodoList';

function App() {
  /*in function useState we need to include state 
  that we want react to notice and rerender dom after it changes
  useState will return array of state (in this case array) and function to follow changes
  */
  const [todos, setTodos] = React.useState([
    {id:1, description: "buy milk", completed:false},
    {id:2, description:"go for a walk", completed:false},
    {id:3, description:"water the plants", completed:false},
  ]);

  let toggleTodo = function(id) {
    setTodos(todos.map(todo=>{
      if(todo.id===id){
        todo.completed=!todo.completed; 
      }
      return todo;
    }));
  }
  return (
    <div className="App">
      <h1>To Do's</h1>
      <TodoList todos={todos} onToggle={toggleTodo}/>
    </div>
  );
}

export default App;
