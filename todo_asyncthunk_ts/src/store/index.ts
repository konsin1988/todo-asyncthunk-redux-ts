import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './slices/todoSlice'
import clockReducer from './slices/clockSlice'
import exp from 'constants'


const store = configureStore({
    reducer: {
        todos: todoReducer,
        clock: clockReducer
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;