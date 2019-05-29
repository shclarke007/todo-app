import React from 'react'

import NavBar from './components/navbar/NavBar'
import ToDo from './components/todo/ToDo'
import './App.css'

import ToDoData from './components/todo/ToDoData'

const App =()=>{
  const ToDoComponents = ToDoData.map((todo)=>{
    return(
      <ToDo key={todo.id} items={todo}/>
    )
  })
  return (
    <div>
      <NavBar />
      <div className='todo-list'>
        {ToDoComponents}
      </div>
      
    </div>
  );
}

export default App
