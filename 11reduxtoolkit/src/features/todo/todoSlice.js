import {createSlice, nanoid} from "@reduxjs/toolkit"
import { ClientRequest } from "http"

const intialState  = {
    
    todos: [{id:1, text:"hello World"}]
}

function sayHello(){
    console.log("hello World")
}

export const todoSlice = createSlice({
    
    name: 'todo',
    intialState,
    reducers : {
        addTodo : (state, action)=>{
            const todo = {
                id: nanoid(),
                text:action.payload
            }
            state.todos.push(todo);
        },
        removeTodo : (state, action)=>{
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
        },
    }
})   

export const {addTodo,removeTodo} = todoSlice.actions

export default todoSlice.reducer