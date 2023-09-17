import React from 'react'

function TodoItem({todo,onDelete}) {
  return (
    <div>
       <h1>{todo.sno}</h1>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
     <div className="button btn btn-danger" onClick={()=>{onDelete(todo)}}>delete</div>
    </div>
  )
}

export default TodoItem