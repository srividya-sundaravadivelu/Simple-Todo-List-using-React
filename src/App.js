import { useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function App() {  
  const [todos,setTodos] = useState([]);

  const AddTodoToList = (newTodo) =>{    
    setTodos([...todos,newTodo]);
  }

  const handleDelete = (id) => {
    let updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  const handleSubmitEdit = (newTodo) => {
    
    const todoIndex = todos.findIndex(todo => todo.id === newTodo.id);   

    if (todoIndex !== -1) {
      const updatedTodos = [...todos]; 
      updatedTodos[todoIndex] = newTodo; 
      setTodos(updatedTodos); 
    }
  }

  return (
    <>
    <div className="App">
      <h1>To Do List</h1>
      <TodoForm onSubmit={AddTodoToList} />      
    </div>

    <TodoList todos={todos} deleteTodo={handleDelete} editTodo={handleSubmitEdit} />
    </>
  );
}

export default App;
