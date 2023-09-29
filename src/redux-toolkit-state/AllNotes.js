const { createSlice } = require("@reduxjs/toolkit");

export const AllNotes = createSlice({
    name: "allNotes",
    initialState: [],
    reducers: {
        addAllNotes(state, action) {
            return state= action.payload
        }
    }
})

export const { addAllNotes } = AllNotes.actions