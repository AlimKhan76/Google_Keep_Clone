import React from 'react'
//  import { useSelector } from 'react-redux'

export const NotesDisplay = () => {

  // const note=useSelector((state)=>{
  //   return state.notes
  // })
  return (

    <div className=' container flex row justify-center '>

      <div className="max-w-xs col-3 rounded-lg  border-2 mx-2 my-2 mt-4">
        <div className="px-6 py-4  ">
          <div className="font-bold text-xl mb-2 ">The Coldest Sunset</div>
          <p className="text-gray-700 max-h-96 text-base overflow-hidden
          " >
            Loluptatibus Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque obcaecati commodi, modi illum amet perspiciatis omnis maiores, nesciunt facere dolorum minima magnam vero et at. Animi impedit eligendi voluptate repellat ducimus, iusto officiis dignissimos veniam tempore blanditiis cum harum consequatur laudantium deserunt, voluptatem praesentium omnis minima non. Nostrum adipisci eos alias, laboriosam similique aliquid blanditiis delectus ipsam repudiandae.00 consequuntur possimus aut earum molestiae voluptas, aperiam reiciendis perspiciatis enim.
          </p>
        </div>
      </div>


      <div className="max-w-xs items-center max-h-48 col-3 rounded-lg  border-2 mx-2 my-2 mt-4">
        <div className="px-6 py-4  ">
          <div className="font-bold text-xl mb-2 ">The Coldest Sunset</div>
          <p className="text-gray-700 max-h-48 text-base overflow-y-scroll">
            Loluptatibus consequuntur possimus aut earum molestiae voluptas, aperiam reiciendis perspiciatis enim.
          </p>
        </div>

      </div>

      <div className="max-w-xs items-center max-h-48 col-3 rounded-lg  border-2 mx-2 my-2 mt-4">
        <div className="px-6 py-4  ">
          <div className="font-bold text-xl mb-2 ">The Coldest Sunset</div>
          <p className="text-gray-700 max-h-48 text-base overflow-y-scroll">
            Loluptatibus consequuntur possimus aut earum molestiae voluptas, aperiam reiciendis perspiciatis enim.
          </p>
        </div>

      </div>


    </div>
  )
}
