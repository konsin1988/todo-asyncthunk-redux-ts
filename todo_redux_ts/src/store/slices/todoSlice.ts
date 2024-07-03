import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Todo = {
    id: string,
    text: string,
    completed: boolean
}

type TodoState = {
    list: Todo[];
}

const initialState: TodoState = {
    list: []
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<string>) {

            state.list.push({
                id: new Date().toISOString(),
                text: action.payload,
                completed: false,
            })
        },
        removeTodo(state, action: PayloadAction<string>) {
            state.list = state.list.filter(todo => action.payload !== todo.id)
        },
        toggleTodoComplete(state, action: PayloadAction<string>) {
            const toggledTodo = state.list.find(todo => todo.id === action.payload)
            
            toggledTodo && (toggledTodo.completed = !toggledTodo.completed)
        }
    }
})

export const { addTodo, removeTodo, toggleTodoComplete } = todoSlice.actions;

export default todoSlice.reducer;