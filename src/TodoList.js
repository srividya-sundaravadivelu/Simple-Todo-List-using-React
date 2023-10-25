import { useState } from 'react';

const TodoList = (props) => {  
  const [editItemId,setEditItemId] = useState(null);
  const [editText, setEditText] = useState('');

  const handleDelete = (todoId) =>{
    props.deleteTodo(todoId);
    setEditItemId(null);
  }

  const handleEdit = (todo) =>{
      setEditItemId(todo.id);
      setEditText(todo.text);
  }

  const handleSubmitEdit = (todo) =>{
    setEditItemId(null);
    todo.text = editText;
    props.editTodo(todo);
  }

  return (
    props.todos.map(t =>
      <div key={t.id} className="todo">
        <div className="todo-text">
          <input type="checkbox"></input>
          {t.id === editItemId ? <form onSubmit={() => handleSubmitEdit(t)}><input value={editText} onChange={(e)=>setEditText(e.target.value)}  type="text"></input></form> : <>{t.text}</>}          
        </div>          
        <div className="todo-actions">
          {t.id === editItemId ? <button onClick={() => handleSubmitEdit(t)}>Submit Edits</button> : 
          <button onClick={() => handleEdit(t)}>Edit</button>}
          <button onClick={() => handleDelete(t.id)}>Delete</button>
        </div>
      </div>        
    )
  );
}

export default TodoList;