import { createSlice } from '@reduxjs/toolkit'

const clockSlice = createSlice({
    name: 'clock',
    initialState: {
        time: new Date().toLocaleTimeString()
    },
    reducers: {
        setClock(state, action) {
            state.time = action.payload.time
        }
    }
})

export const { setClock } = clockSlice.actions
export default clockSlice.reducer