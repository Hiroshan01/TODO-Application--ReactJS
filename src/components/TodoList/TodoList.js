import React, { useState } from 'react'
import "./Todo.css"
import TodoInput from '../TodoInput/TodoInput'
import TodoItem from '../TodoItem/TodoItem'

function TodoList() {

const [todos,setTodos]=useState([])

  return (
    <div className='todo-list-container'>
      <h1>My Todos</h1>
      <TodoInput todos={todos} setTodos={setTodos}/>
      <div className='todo-item-wrapper'>
        {todos.map((item)=>{
            return <TodoItem key={item.id} todo={item}/>
        })}
      </div>
    </div>
  )
}

export default TodoList
