import React from 'react';
import './App.css';
import TodoList from './todos/TodoList';
import Context from './context';

function App() {
  /*in function useState we need to include state 
  that we want react to notice and rerender dom after it changes
  useState will return array of state (in this case array) and function to follow changes
  */
  const [todos, setTodos] = React.useState([
    {id:1, description: "buy milk", completed:true},
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

  function removeTodo(id){
    setTodos(todos.filter(todo=>todo.id !== id));
  }
  return (
    <Context.Provider value={{removeTodo:removeTodo}}>
    <div className="App">
      <h1>To Do's</h1>
      {todos.length? <TodoList todos={todos} onToggle={toggleTodo}/>:<h4>no todos</h4>}
    </div>
    </Context.Provider>
  );
}

export default App;
