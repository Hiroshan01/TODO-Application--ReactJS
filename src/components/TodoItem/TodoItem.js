import React, { useState } from 'react';
import "./TodoItem.css";
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';

function TodoItem({ todo, index, todos, setTodos }) {
  const [isEdit, setEdit] = useState(false);
  const [editTodoName, setEditTodoName] = useState("");

  const handleDelete = () => {
    const newTodos = todos.filter((item) => todo.id !== item.id);
    setTodos(newTodos);
  };

  const handleEdit = () => {
    setEditTodoName(todo.name);
    setEdit(!isEdit);
  };

  const handleSubmit = (e) => {
    if (e.keyCode === 13) {
      const newTodos = todos.map((item) => {
        if (todo.id === item.id) {
          return {
            ...item,
            name: editTodoName,
          };
        } else {
          return item;
        }
      });
      setTodos(newTodos);
      setEdit(false);
    }
  };

  const handleComplete = () => {
    const newTodos = todos.map((item) => {
      if (todo.id === item.id) {
        return {
          ...item,
          isCompleted: !item.isCompleted, // Toggle completion status
        };
      } else {
        return item;
      }
    });
    setTodos(newTodos);
  };

  return (
    <div className='todo-item-wrapper'>
      <div className='todo-item-text'>
        <div>{index}.</div>
        {isEdit ? (
          <input
            type="text"
            value={editTodoName}
            onChange={(e) => setEditTodoName(e.target.value)}
            onKeyDown={handleSubmit}
          />
        ) : (
          <div
            onClick={handleComplete}
            style={{ textDecoration: todo.isCompleted ? "line-through" : "none" }} // Corrected style
          >
            {todo.name}
          </div>
        )}
      </div>
      <div className='todo-item-buttons'>
        <button className='pencel-button' onClick={handleEdit}>
          <PencilIcon />
        </button>
        <button className='trash-button' onClick={handleDelete}>
          <TrashIcon />
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
