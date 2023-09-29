import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addAllNotes } from '../redux-toolkit-state/AllNotes';

export const NotesDisplay = () => {
  const [data, setData] = useState({ })
  const allNotes = useSelector((state) => {
    return state.allNotes;
  })

  const dispatch = useDispatch();

  const getNotes = () => {
    const userId = localStorage.getItem("keepUserId")
    axios.get("http://localhost:4000/notes/getnotes", { headers: { userId } }).then((res) => {
      dispatch(addAllNotes(res.data))
    })
      .catch((err) => {
        console.log(err)
      })
  }

  const getNoteById = (_id) => {
    axios.get(`http://localhost:4000/notes/get/${_id}`).then((res) => {
      console.log(res)
      setData(res.data)
      showModal()
    })
      .catch((err) => {
        console.log(err);
      })
  }


  useEffect(() => {
    getNotes()
  }, [])

  const showModal = () => {
    const modal = document.getElementById("UpdateModal");
    modal.style.display = "flex"

  }

  const hideModal = () => {
    const modal = document.getElementById("UpdateModal");
    modal.style.display = "none"

  }

  const autoExpand=(e)=>{

    const field= document.getElementById(e.target.id)
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
      <div className=' mt-4 container flex row justify-center '>
        {allNotes.map((a) => {
          return (
            <div key={a._id} onClick={() => getNoteById(a._id)} className="max-w-xs col-3 rounded-lg border-2 mx-2.5 my-2.5">
              <div className="px-2 py-2.5">
                <div className="font-medium text-xl mb-2 max-h-14 overflow-hidden break-words">{a.title}</div>
                <p className="text-gray-700 max-h-96 py-1 text-base break-words overflow-hidden" >
                  {a.note}
                </p>
              </div>
            </div>
          )
        })}
      </div>

      <div
        id="UpdateModal"
        tabIndex={-1}
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden bg-opacity-70 bg-slate-800 fixed  z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full"
      >
        <div
          className="max-h-96 container flex flex-col items-center justify-center">

          <form
            // onBlur={addToMongo}
            className='flex flex-col appearance-none rounded-xl w-1/2 text-black leading-tight focus:shadow ' id='form'>


            <textarea rows={1}
              id="title"
              className=" max-h-52 py-3 px-3 text-lg appearance-none focus:outline-none resize-none break-words"
              type="text"
              placeholder="Title ..."
              value={data.title}
              name='title'
            // onChange={addNewNote} 
            onInput={autoExpand}
            />

            <textarea rows={1}
              id='note'
              className="focus:outline-none pt-3 pb-4 px-3 overflow-hidden resize-none"
              type="text"
              placeholder="Take a Note ..."
              value={data.note}
              name='note'
            // onChange={addNewNote}
            onInput={autoExpand} 
            />

          </form>

        </div>

      </div>

    </>
  )
}
