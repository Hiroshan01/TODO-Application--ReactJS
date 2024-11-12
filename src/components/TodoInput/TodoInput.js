import React, { useState } from 'react';
import "./TodoInput.css";
import { PlusIcon } from '@heroicons/react/24/outline'; // Updated import

function TodoInput({todos,setTodos}) {
    // State
    const [todo, setTodo] = useState("");

    const handleClick=()=>{
         //arrray of object id,name,iscompleted
         const newTodo={
            id:1,
            name:todo,
            isCompleted:false

         }
         const newTodos=[...todos,newTodo]
         //stateUpdate
         setTodos(newTodos)
    }

    return (
        <div>
            <input 
                type="text" 
                value={todo} 
                onChange={(event) => {
                    setTodo(event.target.value);
                }} 
            />
            <button onClick={handleClick}>
                <PlusIcon style={{ width: "18px", height: "10px" }} /> 
            </button>
        </div>
    );
}

export default TodoInput;
