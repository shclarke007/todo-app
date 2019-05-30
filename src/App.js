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
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id){
    this.setState(prevState=>{
      const updatedTodos = prevState.todos.map(todo=>{
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo
      })
      return updatedTodos
    })
  }

  render(){
    const ToDoItems = this.state.todos.map((todo)=>{
      return(
        <ToDo 
          key={todo.id} 
          items={todo} 
          handleChange={this.handleChange}
        />
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
