import React, {Component} from 'react'

import NavBar from './components/navbar/NavBar'
import ToDo from './components/todo/ToDo'
import ToDoData from './components/todo/ToDoData'
import './App.css'

class App extends Component{
  constructor(){
    super()
    this.state = {
      todos: ToDoData
    }
  }
  render(){
    const ToDoItems = this.state.todos.map((todo)=>{
      return(
        <ToDo key={todo.id} items={todo}/>
      )
    })
    return(
      <div>
        <NavBar />
        <div className='todo-list'>
          {ToDoItems}
        </div> 
      </div>
    )
  }
}

export default App
