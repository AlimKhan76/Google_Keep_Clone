import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNote } from '../redux-toolkit-state/NoteSlice'
import axios from 'axios'
import { addAllNotes } from '../redux-toolkit-state/AllNotes'

export const TakeNote = () => {
    // Using selector to get data from redux store 
    const note = useSelector((state) => {
        return state.notes
    });

    const getNotes = () => {
        const userId = localStorage.getItem("keepUserId")
        axios.get("http://localhost:4000/notes/getnotes", { headers: { userId } }).then((res) => {
            dispatch(addAllNotes(res.data))
        })
            .catch((err) => {
                console.log(err)
            })
    }

// Using dispatch to work with our redux reducers 
const dispatch = useDispatch();

// This methods add the data to the redux store using dispatch 
const addNewNote = (e) => {
    dispatch(addNote({
        [e.target.name]: e.target.value
    }))
}

// Used to clear the input fields after the note data is uploaded to MongoDB 
const clearInputFields = () => {
    document.getElementById("form").reset();
    dispatch(addNote({
        title: "",
        note: ""
    }))

}

// Method used to add data to mongo 
const addToMongo = () => {

    // Fetching document with the id title which is the input field that takes title 
    const doc = document.getElementById("title");

    // Getting the css property of the title input field 
    const style = window.getComputedStyle(doc)

    // Then getting the property of the display attribute in the element which is by default set to none to prevent it from been displayed 
    const display = style.getPropertyValue("display")

    const noteDoc = document.getElementById("note")


    // Checking if the property of the element is now back to none after typing, this will add the note to the database after the user clicks outside the input fields and the title input goes back to hidden
    if (display === "none" && (noteDoc.value !== "" || doc.value !== "")) {
        // After the check axios now put the data from the redux store to the db 
        axios.post("http://localhost:4000/notes/create/", {
            // these values are taken from the redux store 
            title: note.title,
            note: note.note,
            user: localStorage.getItem("keepUserId")
        }).then((res) => {
            console.log(res)
            // Calling the function to clear the input fields
            clearInputFields()
            getNotes()
            noteDoc.style.height = "20px"
            doc.style.height = "40px"
        })
    }
}

// Used to expand the input field according to the input
const autoExpand = (e) => {

    const field = document.getElementById(e.target.id)
    field.style.height = 'inherit';

    // Get the computed styles for the element
    var computed = window.getComputedStyle(field);

    // Calculate the height
    var height = parseInt(computed.getPropertyValue('border-top-width'), 10)
        + parseInt(computed.getPropertyValue('padding-top'), 10)
        + field.scrollHeight
        + parseInt(computed.getPropertyValue('padding-bottom'), 10)
        + parseInt(computed.getPropertyValue('border-bottom-width'), 10);

    field.style.height = height + 'px';

}


return (
    <>
        <div
            className="mt-5 max-h-96 container flex flex-col items-center justify-center">

            <form
                onBlur={addToMongo}
                className='group flex flex-col shadow appearance-none border rounded-xl w-1/2 py-3 px-3 text-black leading-tight focus:shadow'
                id='form'>


                <textarea rows={1}
                    id="title"
                    className="hidden max-h-52 group-focus-within:block pb-2 text-lg appearance-none focus:outline-none resize-none break-words"
                    type="text"
                    placeholder="Title ..."
                    name='title'
                    onChange={addNewNote}
                    onInput={autoExpand} />

                <textarea rows={1} 
                    id='note'
                    className="focus:outline-none  overflow-hidden resize-none"
                    type="text"
                    placeholder="Take a Note ..."
                    name='note'
                    onChange={addNewNote}
                    onInput={autoExpand} />

            </form>

            
        </div>
    </>
)
}
