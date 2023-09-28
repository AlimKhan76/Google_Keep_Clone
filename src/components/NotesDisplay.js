import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addAllNotes } from '../redux-toolkit-state/AllNotes';

export const NotesDisplay = () => {

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

const getNoteById=(_id)=>{
  axios.get(`http://localhost:4000/notes/get/${_id}`).then((res)=>{
    console.log(res)
  })
  .catch((err)=>{
    console.log(err);
  })
}


  useEffect(() => {
    getNotes()
  }, [])

  return (
    <div className=' mt-4 container flex row justify-center '>
      {allNotes.map((a) => {
        return (
          <div key={a._id} onClick={()=>getNoteById(a._id)} className="max-w-xs col-3 rounded-lg border-2 mx-2.5 my-2.5">
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
  )
}
