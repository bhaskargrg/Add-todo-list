import React from 'react'
import TodoItem from './TodoItem'

function Todos(prop) {
  let styleTodo={
    minHeight:'70vh'
  }
  return (
    <div className='container' style={styleTodo}>
      <h3 className=''>todos list</h3>
      {prop.todos.length===0? 'No todos to display':prop.todos.map((a)=>(
        <>
       
         <TodoItem  todo={a} onDelete={prop.onDelete}/> <hr />
         </>
      ))}
     
       </div>
  )
}

export default Todos