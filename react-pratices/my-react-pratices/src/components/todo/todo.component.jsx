import React from "react";
import { ACTIONS } from "./todoApp.component";

export const Todo = ({ todo, dispatch }) => {

    return (
        <div>
            <h2 style={{ backgroundColor: todo.complete ? 'deepskyblue' : 'white' }}>{todo.name}</h2>
            <button onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: todo })}>toggle</button>
            <button onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: todo })}>delete</button>
        </div>
    )
}
