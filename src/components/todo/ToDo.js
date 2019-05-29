import React, {Component} from 'react'
import './ToDo.css'

class ToDo extends Component{
  render(){
    return(
      <div className='todo_item'>
        <input type='checkbox'/>
        <p>{this.props.items.text}</p>
      </div>
    )
  }
}

export default ToDo
