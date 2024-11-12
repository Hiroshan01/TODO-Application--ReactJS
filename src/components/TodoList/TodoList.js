import React from 'react'
import "./Todo.css"
import TodoInput from '../TodoInput/TodoInput'
import TodoItem from '../TodoItem/TodoItem'

function TodoList() {
  return (
    <div>
      <h1>My Todos</h1>
      <TodoInput/>
      <div>
        <TodoItem/>
      </div>
    </div>
  )
}

export default TodoList
