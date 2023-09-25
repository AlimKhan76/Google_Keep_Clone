import React from 'react'

export const HomePage = () => {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        className="mx-auto h-10 w-auto"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAAB/CAMAAADxY+0hAAAAb1BMVEX/ugD/////lQD/tgD/9+v/uAD/yVr/wDz/zXX/jQD//Pf/ymj/uxv/nwD/swD/yGL/yZb/4Kj/4rH/x5H/wYb/68j/8NT/8tv/vCf/0nv/zWf/36L/1qD/9eH/5rz/7s7/3Jr/147/xU7/z3D/xUVzceGjAAACtklEQVRoge3bbXPaMAwA4BjFZARKG7pAKKOEwv//jevLer01sqTEknfHrI/ciUfEckjiuHB4bJv9j/Fx+RX4umAU6KfHOYCfErMHDf/Z+2Ja3C1GFoD5J5jKF3ezxWOsX3eT+Vd/tvgZ6W9gMv/mjzsCiF9N//nv/mxMDwz9OuLnf/hjChj6Zbw/YghsfHkTGvniI2DlS3vAzBceATtf1gOGvugIWPqSHjD1BQXY+nwPGPtsD1j73BCY+0wB9j49BAl8sglT+NQQJPGJAtL44QIS+cEeSOWHZkEyPzAE6Xy8gIQ+OgQpfawAZZ+5Pa+sfaa67Gc/+9nX8b2H9xA/LdT0PaxX+36z2TT93K9lTwz1fA9VU37lHM+dpAI1H17a+u+suun4PCXfQ18P0lx54RNVfO+3Q/0tejZTw/ddOcj5Ey2XquATPFuAhg+7MO9cQyYr+LCheOfuqWkY7yPf8C3b2A+0/ldQkyDa9y8c78rO0Idn1nf7cH6sT869z9iu7fwnnnd1+PDF+tALfLcMToFYfy0YfufOdj557vuM8AyM9o8S/2DnC9rf1Bcdf0P/JPHPZj4cJL7d/PMXAU8sn0f7FXLd+T12duffAgQNEB5+BZ8fgJpYvle4/mBnIHUFqOBz/4DkyxsK15/rlvaJ0Vfx/YqcAm24+XX8wl+JAnb29x8FzIMFbFf0TbjO/SdcA3+DLcOr3X+vTjUSB/YRhN7zBzTYtBt7/pX9/9ZfIZHO9/MSiXTzz98Psl4j+9lP5C//rV90SyT4BQDF9QckBFk3c/7Nfvazn/3sZz/72c9+9rN/E34dsf2Q84evLyD7HyO2fzIBZ4lPv0MT5Q+Xr5T3v9L8dYhh+3/b6ft/qUDf3lDe/0wEdNjqPb7/e1dN3P8dDIAn9OUB3Hfu1F/mirFvAguHvwFV7z8mLVP1/gAAAABJRU5ErkJggg=="
        alt="Your Company"
      />
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Sign in to your account
      </h2>
    </div>
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" action="#" method="POST">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required=""
              className="block w-full rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            
          </div>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required=""
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in
          </button>
        </div>
      </form>
      <p className="mt-10 text-center text-sm text-gray-500">
        Don't have a Account? 
        <a
          href="#"
          className="font-semibold leading-6 px-2 text-indigo-600 hover:text-indigo-500"
        >
          Create a Account Here
        </a>
      </p>
    </div>
  </div>
  
  )
}
