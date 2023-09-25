import React from 'react'
import { HiOutlineRefresh } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";


export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg border-b-2 pb-2 border-gray-400">
      <div className="container-fluid mx-5 row flex ">
        <a className=" navbar-brand contents col-2 items-center justify-center" href="/">
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
        <div className="container mx-4 !w-20 col   ">
          <input
            className=" form-control  !bg-gray-200"
            type="search"
            placeholder="Search"

          />
        </div>

        <div className=" justify-end d-flex text-center col-1">
           <a href='/' className='w-2/4 nav-link '> <HiOutlineRefresh size={25}/></a>
          <a href='/' className='w-2/4 nav-link '><CgProfile size={25}/></a> 
        </div>

      </div>

    </nav>
  )
}
