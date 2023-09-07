import React from 'react'
import Businessoperation from './Businessoperation'
import Organizationalchart from './Organizationalchart'
import Investors from './Investors'
function page() {
  return (
    <div className=' min-h-screen '>
      <section className='  bg-deep-dark'>
        <div className='container-content text-gray-400 py-7'>
          <nav className=' h-4 my-2 border-t border-l border-light-gray/30'>
          </nav>
          <nav className=' px-4'> Business</nav>
        </div>
      </section>
          <Businessoperation/>
          <Organizationalchart/>
          <Investors/>
    </div>
  )
}

export default page