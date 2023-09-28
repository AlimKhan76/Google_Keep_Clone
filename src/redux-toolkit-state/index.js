import { configureStore } from "@reduxjs/toolkit";
import  {noteSlice}  from "./NoteSlice";
import { AllNotes } from "./AllNotes";

export const store= configureStore({
    reducer:{
        notes: noteSlice.reducer,
        allNotes: AllNotes.reducer

    }
})