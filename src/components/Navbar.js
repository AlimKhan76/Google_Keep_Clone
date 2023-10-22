import React, { useState } from 'react'
import { HiOutlineRefresh } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addAllNotes } from '../redux-toolkit-state/AllNotes';

export const Navbar = () => {

  const[data,setData]= useState("");
  // Used for redirecting the page to any other routes 
  const navigate = useNavigate();

  const dispatch=useDispatch();

  //  Shows the modal for confirmation of sign out
  const showModal = () => {
    const modal = document.getElementById("SignOutModal");
    modal.style.display = "flex"
  }

  //  Hides the modal for confirmation of sign out
  const hideModal = () => {
    const modal = document.getElementById("SignOutModal");
    modal.style.display = "none"
  }

  // Removes the user id from localStorage and redirects to Login Page component
  const handleSignOut = () => {
    localStorage.removeItem("keepUserId");
    navigate("/login");
  }

  const searchDB=()=>{
    axios.post("http://localhost:4000/notes/search",{data}).then((res)=>{
      dispatch(addAllNotes(res.data))
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  return (
    
    <nav className="navbar navbar-expand-lg border-b-2 pb-2 border-gray-400">
      {/* <!-- Bootstrap links cdn  --> */}
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossOrigin="anonymous"/>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossOrigin="anonymous"></script>
    
      <div className="container-fluid mx-5 row flex ">
        <a className="navbar-brand contents col-2 items-center justify-center" href="/">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAAB/CAMAAADxY+0hAAAAb1BMVEX/ugD/////lQD/tgD/9+v/uAD/yVr/wDz/zXX/jQD//Pf/ymj/uxv/nwD/swD/yGL/yZb/4Kj/4rH/x5H/wYb/68j/8NT/8tv/vCf/0nv/zWf/36L/1qD/9eH/5rz/7s7/3Jr/147/xU7/z3D/xUVzceGjAAACtklEQVRoge3bbXPaMAwA4BjFZARKG7pAKKOEwv//jevLer01sqTEknfHrI/ciUfEckjiuHB4bJv9j/Fx+RX4umAU6KfHOYCfErMHDf/Z+2Ja3C1GFoD5J5jKF3ezxWOsX3eT+Vd/tvgZ6W9gMv/mjzsCiF9N//nv/mxMDwz9OuLnf/hjChj6Zbw/YghsfHkTGvniI2DlS3vAzBceATtf1gOGvugIWPqSHjD1BQXY+nwPGPtsD1j73BCY+0wB9j49BAl8sglT+NQQJPGJAtL44QIS+cEeSOWHZkEyPzAE6Xy8gIQ+OgQpfawAZZ+5Pa+sfaa67Gc/+9nX8b2H9xA/LdT0PaxX+36z2TT93K9lTwz1fA9VU37lHM+dpAI1H17a+u+suun4PCXfQ18P0lx54RNVfO+3Q/0tejZTw/ddOcj5Ey2XquATPFuAhg+7MO9cQyYr+LCheOfuqWkY7yPf8C3b2A+0/ldQkyDa9y8c78rO0Idn1nf7cH6sT869z9iu7fwnnnd1+PDF+tALfLcMToFYfy0YfufOdj557vuM8AyM9o8S/2DnC9rf1Bcdf0P/JPHPZj4cJL7d/PMXAU8sn0f7FXLd+T12duffAgQNEB5+BZ8fgJpYvle4/mBnIHUFqOBz/4DkyxsK15/rlvaJ0Vfx/YqcAm24+XX8wl+JAnb29x8FzIMFbFf0TbjO/SdcA3+DLcOr3X+vTjUSB/YRhN7zBzTYtBt7/pX9/9ZfIZHO9/MSiXTzz98Psl4j+9lP5C//rV90SyT4BQDF9QckBFk3c/7Nfvazn/3sZz/72c9+9rN/E34dsf2Q84evLyD7HyO2fzIBZ4lPv0MT5Q+Xr5T3v9L8dYhh+3/b6ft/qUDf3lDe/0wEdNjqPb7/e1dN3P8dDIAn9OUB3Hfu1F/mirFvAguHvwFV7z8mLVP1/gAAAABJRU5ErkJggg==" width="40vw" alt="" /><span className='p-2'>
            Keep
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>


        <div className=" relative flex flex-col container mx-4 !w-20 col">
          <input
            className="form-control !bg-gray-200"
            type="search"
            name='search'
            placeholder="Search"
            value={data}
            onChange={(e)=>setData(e.target.value)}
            onKeyUp={searchDB}
            
          />

         </div>

        <div className="justify-end d-flex text-center col-1">
          <a href='/' className='zw-2/4  nav-link rounded'>
             <HiOutlineRefresh className="hover:bg-gray-200 " size={25} />
             </a>


          <div className="group relative ml-3">
            <div>
              <button type="button"
                className="relative flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset focus:ring-offset-gray-800 hover:bg-gray-200"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true">
                <span className="absolute-inset-1.5"></span>
                <span className="sr-only">Open user menu</span>
                <i className='w-2/4 '><CgProfile size={25} /></i>
              </button>
            </div>


            <div
              className="hidden group-focus-within:block absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu-button"
              tabIndex="-1">

              <button
                className="hover:cursor-pointer focus:ring-black hover:bg-gray-100 block px-4 py-2 text-sm text-gray-700 w-full"
                role="menuitem"
                tabIndex="-1"
                id="user-menu-item-2"
                onClick={showModal}>
                Sign out
              </button>

            </div>
          </div>
        </div>

      </div>

      {/* Modal that will ask for Confirmation for sign out */}
      <div
        id="SignOutModal"
        tabIndex={-1}
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden bg-opacity-50 bg-gray-200 fixed z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full"
      >
        <div className="relative p-4 w-full max-w-md h-full md:h-auto">
          {/* Modal content */}
          <div className="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
            <button
              type="button"
              className="text-black absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="deleteModal"
            >
              <svg onClick={hideModal}
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>

            <p className="mb-4 text-gray-900 dark:text-gray-900">
              Are you sure you want to Sign Out ?
            </p>
            <div className="flex justify-center items-center space-x-4">
              <button
                data-modal-toggle="deleteModal"
                type="button"
                className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-800 dark:border-gray-500 dark:hover:text-black dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                onClick={hideModal}
              >
                No, cancel
              </button>
              <button
                onClick={handleSignOut}
                className="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
              >
                Yes, I'm sure
              </button>
            </div>
          </div>
        </div>
      </div>

    </nav>
  )
}
