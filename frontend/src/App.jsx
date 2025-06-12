import React from 'react'
import Navbar from './componets/Navbar'
import Main from './componets/Main'
import Footer from './componets/Footer'


function App() {
  return (
    <>
      <div className='flex flex-col items-center justify-between min-h-screen gap-6'>
        <Navbar/>
        <Main/>
        <Footer/>
      </div>
    </>
  )
}

export default App
