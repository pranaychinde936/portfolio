import React from 'react'
import Nav from './components/Nav'

function App() {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased slection:bg-cyan-300  selection:text-cyan-900'>
      <div className='flixed top-0 -z-10 h-full w-full'></div>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
      <div className='container mx-auto px-8'>
        <Nav/>
      </div>
    </div>
  )
}

export default App