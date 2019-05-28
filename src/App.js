import React from 'react'

import NavBar from './components/navbar/NavBar'
import ToDo from './components/todo/ToDo'
import './App.css'

const App =()=>{
  return (
    <div>
      <NavBar />
      <div className='todo-list'>
        <ToDo />
        <ToDo />
        <ToDo />
        <ToDo />
      </div>
      
    </div>
  );
}

export default App
