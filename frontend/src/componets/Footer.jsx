import React from 'react'

function Footer() {
    return (
        <>
            <footer className='flex justify-around items-center bg-gray-950 h-14  w-full'>
                <div className='text:sm md:text-2xl font-bold'>
                    <span className="text-green-600">&lt;</span>
                    <span className="text-white">Pass</span>
                    <span className="text-green-600">Manager</span>
                    <span className="text-white">/</span>
                    <span className="text-green-600">&gt;</span>
                </div>

                <div className='text:sm md:text-xl font-light text-center w-[120px] sm:w-[300px]'>
                    <span className="text-green-600">Crae</span>
                    <span className="text-white">ted b</span>
                    <span className="text-green-600">y Abdu</span>
                    <span className="text-white">llah Ha</span>
                    <span className="text-green-600">ssan</span>
                </div>
            </footer>
        </>
    )
}

export default Footer

