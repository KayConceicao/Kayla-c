import React from 'react'

export default function Todo({todo, toggleTodo}) {

  function handleTodoClick() {
    toggleTodo(todo.id)
  }

  return (
    <div>
      <label className={`todo-task ${todo.complete ? 'todo-completed' : ''}`} > 
        <input className="todo-check" type="checkbox" checked={todo.complete} onChange={handleTodoClick} />
        {todo.name}
      </label>
    </div>
  )
}
