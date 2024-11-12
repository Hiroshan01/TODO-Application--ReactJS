import React, { useState } from 'react'
import "./TodoInput.css"



function TodoInput() {

    //stae
    const [todo,setTodo]=useState("type")
  return (
    <div>
      <input type="text" value={todo} onChange={(event)=>{
      setTodo(event.target.value)
      }}/>
    </div>
  )
}

export default TodoInput
