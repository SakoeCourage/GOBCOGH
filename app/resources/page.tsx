import React from 'react'
import Equipment from './Equipment'
import Qualitycontrol from './Qualitycontrol'
function page() {
  return (
    <div className=' min-h-screen'>
      <section className='  bg-deep-dark'>
        <div className='container-content text-gray-400 py-7'>
          <nav className=' h-4 my-2 border-t border-l border-light-gray/30'>
          </nav>
          <nav className=' px-4'> Resources</nav>
          <nav className=' px-4'> We have a range of Vehicles and Plant Equipment available to our disposal. When not in use on projects, we make our equipment available for hire</nav>
        </div>
      </section>
        <Equipment />
        <Qualitycontrol />
    </div>
  )
}

export default page