import { createSlice } from "@reduxjs/toolkit";


export const noteSlice = createSlice({
    name: "note",
    initialState: {
        title: "",
        note: ""
    },
    reducers: {
        addNote(state, action) {
            return ({...state, ...action.payload})
        }
    }
})

export const { addNote } = noteSlice.actions;

