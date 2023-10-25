import { useState } from 'react';

const TodoForm = (props) =>{
    const [todo,setTodo] = useState("");
  
    const handleSubmit = (event) =>{
      event.preventDefault();
      props.onSubmit(
        {
          id:new Date().getTime(), 
          text:todo,
          completed:false
        });
      setTodo("");
    }
  
    return (
      <form onSubmit={handleSubmit}>
          <input value={todo} onChange={(event)=>setTodo(event.target.value)} type="text" placeholder='Enter a task' required></input>        
      </form>
    );
  }

export default TodoForm;