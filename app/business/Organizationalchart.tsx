import React from 'react'
import Image from 'next/image'
function Organizationalchart() {
    return (
        <div id="organizationstructure" className='bg-light-blue'>
            <div className='container-content text-gray-400 pb-7 '>
                <nav className='flex items-center gap-8 mb-20'>
                    <nav role='list-item-indicator' className=' w-4 h-4 bg-deep-dark'></nav>
                    <h1 className=' font-bold text-4xl uppercase text-deep-dark add_underline' >The organization Chart</h1>
                </nav>
                <nav className='max-w-5xl min-w-[64rem] w-full '>
                <Image className='w-full  ' alt='organizational-structure' src="/images/organizationalstructure.png" height={800} width={800} quality={100} />
                </nav>
            </div>
        </div>

    )
}

export default Organizationalchart