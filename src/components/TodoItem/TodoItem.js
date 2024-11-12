import React from 'react'
import "./TodoItem.css"
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline'

function TodoItem({todo,index}) {
  return (
    <div className='todo-item-wrapper'>
        <div className='todo-item-text'>
            <div>{index}.</div>
            <div>{todo.name}</div>
      </div>
      <div className='todo-item-buttons'>
        <button className='pencel-button'>
            <PencilIcon/>

        </button>
        <button>
           <TrashIcon/> 
        </button>

      </div>
    </div>
  )
}

export default TodoItem
