import React, { useState } from 'react'
import "./Todo.css"
import TodoInput from '../TodoInput/TodoInput'
import TodoItem from '../TodoItem/TodoItem'

function TodoList() {

const [todos,setTodos]=useState([])

  return (
    <div>
      <h1>My Todos</h1>
      <TodoInput todos={todos} setTodos={setTodos}/>
      <div>
        {todos.map((item)=>{
            return <TodoItem key={item.id}/>
        })}
      </div>
    </div>
  )
}

export default TodoList
