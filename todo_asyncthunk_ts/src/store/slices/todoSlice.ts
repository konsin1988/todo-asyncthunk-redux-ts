import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './../index'
import { createAppAsyncThunk } from './../../hooks/hooks'

export type Todo = {
    id: string,
    title: string,
    completed: boolean
}

type IinitialState = {
    todos: Todo[],
    loading: boolean,
    error: null | string
}
const initialState: IinitialState = {
    todos: [],
    loading: false,
    error: null
}



export const fetchTodos = createAppAsyncThunk<Todo[], undefined, {rejectValue: string}>(
    'todos/fetchTodos',
    async function (_, {
        rejectWithValue
    }) {
            const response = await fetch ('http://localhost:3001/todos')

            if(!response.ok) {
                return rejectWithValue('Server Error')
            };
            const data = response.json()
            return data
       
       
    }
)

type deleteTodoProp = {
    id: string
}

export const deleteTodo = createAppAsyncThunk<deleteTodoProp, deleteTodoProp, {rejectValue: string} >(
    'todos/deleteTodo',
    async function({id}, {rejectWithValue}) {
            const response = await fetch(`http://localhost:3001/todos/${id}`, {
                method: 'DELETE',
            })
            if (!response.ok) {
                return rejectWithValue('Can\'t delete task. Server error')
            }
            return {id}
    }
)

interface toggleStatusProps {
    id: string
}

export const toggleStatus = createAppAsyncThunk<Todo | undefined, toggleStatusProps, {rejectValue: string}>(
    'todos/toggleStatus', 
    async function({id}, {rejectWithValue, getState}) {
        const todo = getState().todos.todos.find((todo) => todo.id === id)
        if (todo) {
                const response = await fetch(`http://localhost:3001/todos/${id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        completed: !todo.completed,
                    })
                })
                if (!response.ok) {
                    return rejectWithValue('Can\'t toggle the status. Server error.')
                }  
                return (await response.json()) as Todo
        }
    }
)

interface addNewTodoProps {
    title: string
}

export const addNewTodo = createAppAsyncThunk<Todo, addNewTodoProps, {rejectValue: string}>(
    'todos/addNewTodo',
    async function({title}, {rejectWithValue, dispatch}) {
            const todo = {
                title: title,
                userId: 1,
                completed: false,
            }
            const response = await fetch(`http://localhost:3001/todos/`,
                {
                    method: 'POST', 
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(todo)
                }
            )
            if (!response.ok) {
                return rejectWithValue('Can\'t add the Todo. Server error.')
            }
            return (await response.json()) as Todo;
    }
)

const isError =  (action: PayloadAction<string>) => {
    return action.type.endsWith('rejected')
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchTodos.pending, (state) => {
            state.loading = true;
            state.error = null
        })
        .addCase(fetchTodos.fulfilled, (state, action) => {
            state.loading = false
            state.todos = action.payload
        })
        .addCase(addNewTodo.pending, (state) => {
            state.error = null
        })
        .addCase(addNewTodo.fulfilled, (state, action) => {
            state.todos.push(action.payload)
        })
        .addCase(toggleStatus.pending, (state) => {
            state.error = null
        })
        .addCase(toggleStatus.fulfilled, (state, action) => {
            const toggledTodo = state.todos.find(todo => todo.id === action.payload?.id)
            if(toggledTodo) {
                toggledTodo.completed = !toggledTodo.completed
            }
        })
        .addCase(deleteTodo.fulfilled, (state, action) => {
            state.todos = state.todos.filter(todo => action.payload.id !== todo.id)
        })
        .addMatcher(isError, (state, action: PayloadAction<string>) => {
            state.error = action.payload
            state.loading = false
        })
    }
})

export default todoSlice.reducer;