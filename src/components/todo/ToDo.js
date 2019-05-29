import React from 'react'
import './ToDo.css'

const ToDo =(props)=>{
  return(
    <div className='todo_item'>
      <input type='checkbox'/>
      <p>{props.todo.text}</p>
    </div>
    
  )
}

export default ToDo
