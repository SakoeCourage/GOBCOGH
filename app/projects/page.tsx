import React from 'react'
import Civilprojects from './Civilprojects'
import Projectpercentage from './Projectpercentage'
function page() {
  return (
    <div className=' min-h-screen '>
      <section className='  bg-deep-dark'>
        <div className='container-content text-gray-400 py-7'>
          <nav className=' h-4 my-2 border-t border-l border-light-gray/30'>
          </nav>
          <nav className=' px-4'> Projects</nav>
          <nav className=' px-4'> The tables only reflects some of our project portfolio</nav>
        </div>
      </section>
      <Civilprojects />
      <Projectpercentage />
    </div>
  )
}

export default page