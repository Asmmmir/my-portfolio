import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    mode: true
}


const modeSlice = createSlice({
    name: 'darkmode',
    initialState,
    reducers: {
        toggleMode: (state, _) => !state
    }
})


export const modeReducer = modeSlice.reducer;
export const {toggleMode} = modeSlice.actions
