import React from 'react'
function Navbar() {
    return (
      <>
        <nav className='flex justify-around items-center bg-gray-950 h-14 w-full'>
            <div className='text-sm sm:text-xl md:text-2xl font-bold '>
                <span className="text-green-600">&lt;</span>
                <span className="text-white">Pass</span>
                <span className="text-green-600">Manager</span>
                <span className="text-white">/</span>
                <span className="text-green-600">&gt;</span>
            </div>

            <div className='text-lg sm:text-xl md:text-2xl font-bold'>
                <span className="text-green-600">K</span>
                <span className="text-white">R</span>
                <span className="text-green-600">A</span>
                <span className="text-white">T</span>
                <span className="text-green-600">O</span>
                <span className="text-white">S</span>
            </div>

            <a className=' text-white flex justify-center items-center border-white border-1 p-1 rounded-3xl font-medium bg-green-900 hover:font-bold h-9 w-16 md:h-10 md:w-22'href='https://github.com/Abdullah-Hassan20'>
                <lord-icon src="https://cdn.lordicon.com/jjxzcivr.json"trigger="hover"stroke="bold"colors="primary:#000000,secondary:#000000"></lord-icon>
                <div className='text-[10px] md:text-[16px]'>Github</div>
            </a>
        </nav>
      </>
    )
}

export default Navbar

