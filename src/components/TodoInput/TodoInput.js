import React, { useState } from 'react';
import "./TodoInput.css";
import { PlusIcon } from '@heroicons/react/24/outline'; // Updated import
import {v4} from 'uuid'

function TodoInput({todos,setTodos}) {
    // State
    const [todo, setTodo] = useState("");

    const handleClick=()=>{
         //arrray of object id,name,iscompleted
         if(todo.length>0){
            const newTodo={
                id:v4(),
                name:todo,
                isCompleted:false
    
             }
             const newTodos=[...todos,newTodo]
             //stateUpdate
             setTodos(newTodos)
             setTodo("")
         }

    }

    return (
        <div className='todo-input-wrapper'>
            <input 
                type="text" 
                value={todo} 
                onChange={(event) => {
                    setTodo(event.target.value);
                }} 
                placeholder='Enter your todos...'
            />
            <button onClick={handleClick}>
                <PlusIcon className='plus-icon' /> 
            </button>
        </div>
    );
}

export default TodoInput;
