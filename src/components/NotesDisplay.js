import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addAllNotes } from '../redux-toolkit-state/AllNotes';
import { AiFillDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi"

export const NotesDisplay = () => {

  const [data, setData] = useState({})

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
      // autoExpand()
    })
      .catch((err) => {
        console.log(err);
      })
  }

  const showModal = () => {
    const modal = document.getElementById("UpdateModal");
    modal.style.display = "flex"
    document.getElementsByTagName("body")[0].style.overflow = "hidden"

  }

  const hideModal = () => {
    const modal = document.getElementById("UpdateModal");
    modal.style.display = "none"

    document.getElementsByTagName("body")[0].style.overflow = "auto"


  }

  const showDeleteModal = () => {
    const modal = document.getElementById("leftBottomModal")
    modal.style.display = "flex"

    setTimeout(() => {
      hideDeleteModal()
    }, 1500)
  }
  const hideDeleteModal = () => {
    const modal = document.getElementById("leftBottomModal")
    modal.style.display = "none"
  }


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

  window.onload = () => { getNotes() }

  const updateData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const updateToMongo = (e) => {
    e.preventDefault();
    if (data.title === "" && data.note === "") {
      deleteFromMongo(data._id)
    }
    axios.put("http://localhost:4000/notes/update", { data }).then((res) => {
      getNotes();
      hideModal();

    })
      .catch((err) => {
        console.log(err)
      })
  }


  const deleteFromMongo = (_id) => {
    axios.delete(`http://localhost:4000/notes/delete/${_id}`)
      .then((res) => {
        hideModal();
        showDeleteModal();
        getNotes();
      })
      .catch((err) => {
        console.log(err)
      })
  }


  return (
    <>
      <div className='  mt-4 flex  flex-wrap  justify-center  w-full -z-10  '>
        {allNotes.length > 0 && allNotes.map((a) => {
          return (
            <div key={a._id} className="group w-80 h-fit max-w-xs hover:cursor-pointer rounded-lg border-2 mx-2.5 my-2.5 hover:border-slate-400 hover-shadow flex-col hover:shadow-lg">

              <div
                onClick={() => getNoteById(a._id)}>
                <div className="px-2 py-2.5">
                  <div className="font-medium text-xl mb-2 max-h-14 overflow-hidden break-words">{a.title}</div>
                  <p className="text-gray-700 max-h-96 py-1 text-base break-words overflow-hidden" >
                    {a.note}
                  </p>
                </div>
              </div>
              <div className="flex invisible group-hover:!visible justify-end items-end ">
                <button onClick={() => getNoteById(a._id)}
                  className='p-1.5 hover:bg-gray-200 bg-opacity-5 rounded-3xl'><FiEdit size={20} /></button>
                <button onClick={() => deleteFromMongo(a._id)}
                  className='p-1.5 hover:bg-gray-200 bg-opacity-5 rounded-3xl'><AiFillDelete size={20} /></button>
              </div>

            </div>
          )
        })}


        <div
                      // onClick={console.log("hi")}

          id="UpdateModal"
          tabIndex={-1}
          aria-hidden="true"
          className=" hidden overflow-y-auto overflow-x-hidden bg-opacity-70 bg-slate-800 fixed  z-50 justify-center items-center w-full md:inset-0 !p-0 "
        >
          <div
            className=" container flex flex-col h-fit items-center justify-center ">

            <form
              // onBlur={console.log("hi")}
              className=' flex flex-col appearance-none  w-1/2 text-black leading-tight focus:shadow ' id='form'>


              <textarea
                id="updateTitle"
                className=" rounded-se-xl rounded-ss-xl max-h-52 h-28 py-3 px-3 inherit text-lg appearance-none focus:outline-none resize-none break-words "
                type="text"
                placeholder="Title ..."
                value={data.title}
                name='title'
                onChange={updateData}
                onInput={autoExpand}
              />

              <textarea
                id='updateNote'
                className="  max-h-96 h-96 focus:outline-none pt-3 pb-4 px-3  resize-none"
                type="text"
                placeholder="Take a Note ..."
                value={data.note}
                name='note'
                autoFocus="autoFocus"
                onChange={updateData}
                onInput={autoExpand}
              />

              <div className='bg-white rounded-es-xl rounded-ee-xl p-1 shadow-xl'>
                <button onClick={updateToMongo} className='hover:bg-slate-100 rounded float-right  py-2 px-3 text-base '>Close</button>
                <button onClick={(e) => {
                  e.preventDefault();
                  deleteFromMongo(data._id)
                }} className='hover:bg-slate-100 rounded float-right py-2 px-3 text-base '>Delete</button>

              </div>
            </form>

          </div>

        </div>


      </div>



      <div className=" absolute hidden bottom-8 left-0 px-5 !z-50 " id="leftBottomModal">
        <div className=" w-52 bg-red-100 border bg-opacity-90 border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Note Deleted</strong>
          <span className="block sm:inline"></span>
          <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg
              onClick={hideDeleteModal}
              className="fill-current h-6 w-6 text-red-500"
              role="button" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20">
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
          </span>
        </div>
      </div>





    </>
  )
}

