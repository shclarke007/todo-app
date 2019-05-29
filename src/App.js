import React, {Component} from 'react'

import NavBar from './components/navbar/NavBar'
import ToDo from './components/todo/ToDo'
import ToDoData from './components/todo/ToDoData'
import './App.css'

class App extends Component{
  render(){
    const ToDoComponents = ToDoData.map((todo)=>{
      return(
        <ToDo key={todo.id} items={todo}/>
      )
    })
    return(
      <div>
        <NavBar />
        <div className='todo-list'>
          {ToDoComponents}
        </div> 
      </div>
    )
  }
}

export default App
