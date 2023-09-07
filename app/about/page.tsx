import React from 'react'
import Whoweare from './Whoweare'
import Missionvision from './Missionvision'
import Contact from './Contact'
function page() {
    return (
        <div className=' min-h-screen'>
            <section className='  bg-deep-dark'>
                <div className='container-content text-gray-400 py-7'>
                    <nav className=' h-4 my-2 border-t border-l border-light-gray/30'>
                    </nav>
                    <nav className=' px-4'>   About Us</nav>
                </div>
            </section>
            <Whoweare />
            <Missionvision />
            <Contact />
        </div>
    )
}

export default page