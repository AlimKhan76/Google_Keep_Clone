import React from 'react'

export const UpdateModal = () => {
  return (
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
)
}
