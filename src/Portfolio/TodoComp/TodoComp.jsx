import React, {useState, useRef, useEffect } from "react";
import { v4 as uuidv4} from "uuid";

// Components 
import TodoList from "./TodoList";

// Style
import "../Styles/global_layouts.scss";
import "./Todo.scss";

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

// Local storage
const LOCAL_STORAGE_TODO = 'todoComp.todos'

function TodoComp() {

    const [todos, setTodos] = useState ([])
    const todoNameRef = useRef()
    
    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TODO))
        if (storedTodos) setTodos(storedTodos)
    }, [])

    useEffect (() => {
        localStorage.setItem(LOCAL_STORAGE_TODO, JSON.stringify (todos))
    }, [todos])

    function toggleTodo(id) {
        const newTodos = [...todos]
        const todo = newTodos.find(todo => todo.id === id)
        todo.complete = !todo.complete
        setTodos(newTodos)
    }

    function handleAddTodo(e) {
        const name = todoNameRef.current.value
        if (name === '') return
        setTodos(prevTodos => {
            return [...prevTodos, { id: uuidv4(), name: name, complete: false }]
        })
        todoNameRef.current.value = null
    }

    function handleClearTodos() {
        const newTodos = todos.filter(todo => !todo.complete)
        setTodos(newTodos)
    }

    return ( 
        <div className="todo margin-auto sixity-width top-six-padding ">
            <div className="half-margin">
                <h1 className="todo-title"> Todo List component</h1>
                
                <div className="top-bottom-margin2">
                    <div className="new-todo">

                        <input className="todo-input eighty-width" ref={todoNameRef} type="text" placeholder="Add a task here" />
                        
                        <button className="todo-btn" onClick={handleAddTodo}>
                            <FontAwesomeIcon icon={faPlus} />
                            Add
                        </button>
                    </div>
                    
                    
                    <div className="top-bottom-margin2">
                        <div className="full-side-by-side align-end">
                            <h2 className="task-title">Your tasks</h2>
                            <div className="quarter-margin">{todos.filter(todo => !todo.complete).length} Left to do</div>
                        </div>
                        
                        <TodoList todos={todos} toggleTodo={toggleTodo}/>      
                        
                        <button className="todo-btn" onClick={handleClearTodos}>
                            Clear completed tasks
                        </button> 
                    </div>

                </div>
            </div>           
        </div>
    );

}

export default TodoComp;