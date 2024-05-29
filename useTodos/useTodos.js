import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";


const initialState = [];

const init = () => {
    return JSON.parse( localStorage.getItem('todo') ) || [];
}

export const useTodos = () => {

    const [ todo, dispatch ] = useReducer( todoReducer, initialState, init );

    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify( todo ) || [] );
    }, [todo])
    

    const handleNewTodo = ( todo ) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        };
        dispatch( action );
    }

    const handleDeleteTodo = ( id ) =>{
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        })
    }

    const handleToggleTodo = ( id ) => {
        dispatch({
            type: '[TOD] Toggle Todo',
            payload: id
        })
    }

    return {
        ...todo,
        todo,
        todoCount:  todo.length,
        pedingTodoCounts: todo.filter( todo => !todo.done).length,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
    }

}
