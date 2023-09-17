import React, { useState, useEffect } from 'react'
import Nav from './Comp/Nav'
import Todos from './Comp/Todos'
import TodoItem from './Comp/TodoItem'
import Footer from './Comp/Footer'
import AddTodo from './Comp/AddTodo'

function App() {
  let initTodo;
  if (localStorage.getItem('todos') === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem('todos'));
  }
  const onDelete = (todo) => {
    console.log(' iam deleted of todo ', todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    console.log('deleted', todos);
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {

    console.log('i am adding todo', title, desc);
    let sno;
    if (todos.length == '0') {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;

    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo])
    console.log(myTodo);



  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));

  }, [todos]);


  return (
    <>
      <Nav title='Mytodo list'
        searchbar={true} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />

    </>
  )
}

export default App