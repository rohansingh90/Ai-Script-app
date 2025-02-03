import React from 'react'

const Navbar = () => {
  return (
    <div className='flex  justify-between p-4 shadow items-center'>

        <h1 className='text-sm   sm:text-2xl sm:ml-20 font-bold'>Video Script Generator</h1>
        <div className='hidden sm:flex gap-20  '>
            <h1>Home</h1>
            <h1>About us</h1>
            <h1>Services</h1>
            <h1>Contact as</h1>
        </div>
        <div className=' sm:mr-10 '>
            <button className='bg-purple-600 text-white w-20 h-10 rounded-lg text-1xl hover:bg-purple-800 '>Login</button>
        </div>
    </div>
  )
}

export default Navbar