import React, { useState, useReducer } from "react";
import { Todo } from "./todo.component";

export const ACTIONS = {
    ADD_TODO: 'add-todo',
    TOGGLE_TODO: 'toggle-todo',
    DELETE_TODO: 'delete-todo',
}


function reducer(todos, action) {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            console.log("reducer todo: ", todos, action.payload)
            return [...todos, action.payload]
        case ACTIONS.TOGGLE_TODO:
            return todos.map(todo => todo.id === action.payload.id
                ? { ...todo, complete: !todo.complete }
                : todo)
        case ACTIONS.DELETE_TODO:
            return todos.filter(todo => todo.id !== action.payload.id)
    }
}

export const TodoApp = () => {
    const [name, setName] = useState('')
    const [todos, dispatch] = useReducer(reducer, [])

    function handleSubmit(e) {
        e.preventDefault()
        const todo = { id: new Date(), name: name, complete: false }
        console.log(todo)
        return dispatch({ type: ACTIONS.ADD_TODO, payload: todo })
    }
    console.log(todos)
    return (
        <>
            <form onSubmit={e => handleSubmit(e)}>
                <input type="text" onChange={e => setName(e.target.value)} />
            </form>

            {todos && todos.map(todo => <Todo todo={todo} dispatch={dispatch} />)}
        </>
    )
}