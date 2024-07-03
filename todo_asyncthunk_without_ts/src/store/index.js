import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './slices/todoSlice'
import clockReducer from './slices/clockSlice'


export default configureStore({
    reducer: {
        todos: todoReducer,
        clock: clockReducer
    }
})