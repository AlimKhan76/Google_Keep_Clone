import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNote } from '../redux-toolkit-state/NoteSlice'
import axios from 'axios'

export const TakeNote = () => {
    // Using selector to get data from redux store 
    const note = useSelector((state) => {
        return state.notes
    });

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
                note: note.note
            }).then((res) => {
                console.log(res)
                // Calling the function to clear the input fields
                clearInputFields()
            })
        }
    }

    return (
        <>
            <div
                className="mt-5 container flex flex-col items-center justify-center">

                <form onBlur={addToMongo}
                    className='group flex flex-col shadow appearance-none border rounded-xl w-1/2 py-3 px-3 text-black leading-tight focus:shadow ' id='form'>


                    <input
                        id="title"
                        className="hidden group-focus-within:block pb-4 text-lg appearance-none focus:outline-none" type="text" placeholder="Title ..."
                        name='title'
                        onChange={addNewNote} />

                    <input
                        id='note'
                        className="focus:outline-none"
                        type="text"
                        placeholder="Take a Note ..."
                        name='note'
                        onChange={addNewNote} />

                </form>

            </div>

        </>
    )
}
