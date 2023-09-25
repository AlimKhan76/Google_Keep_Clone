import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNote } from '../redux-toolkit-state/NoteSlice'
import axios from 'axios'

export const TakeNote = () => {
    const refnote = useRef(null)
    const reftitle= useRef(null)

    
    const note = useSelector((state) => {
        return state.notes
    });


    const addToMongo  = ()=>{
        const element=document.activeElement
console.log(element.nextSibling)
        // const element= document.querySelector("#title")
        // const cxss=element.style
        // console.log(cxss)
        // // const obj= window.getSelection()
        // console.log(obj)
        // console.log(obj.anchorNode.tagName)
        // if ( obj.anchorNode.tagName!=="FORM" || obj.anchorNode===null ) {
        //     console.log("no")
        //     //  axios.post("http://localhost:4000/notes/create/", {
            //      title: note.title,
            //      note: note.note
            //  }).then((result, errors) => {
            //         console.log(result, errors)
                
            //  })
        // }

    }

    const dispatch = useDispatch()
    const addNewNote = (e) => {
        dispatch(addNote({ [e.target.name]: e.target.value }))

    }

    return (
        <>
            <div className="mt-5 container flex flex-col items-center justify-center">
                <form action="" className='group flex flex-col shadow appearance-none border rounded-xl w-1/2 py-3 px-3 text-black leading-tight focus:shadow ' id='form'>


                    <input id="title" ref={reftitle} onBlur={addToMongo} className=" noteform hidden group-focus-within:block pb-4 text-lg appearance-none focus:outline-none " type="text" placeholder="Title ..." name='title' onChange={addNewNote} />

                    <input ref={refnote} onBlur={addToMongo} className=" noteform focus:outline-none " type="text" placeholder="Take a Note ..." name='note' onChange={addNewNote} />

                </form>

            </div>

        </>
    )
}
