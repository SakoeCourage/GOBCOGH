import React from 'react'
import Link from 'next/link'
export function Corevalues() {
    return (
        <div className='  pt-24 bg-gradient-to-b from-white via-light-blue/50 to-light-blue '>
            <div className=' container-content apply-bg-wire-frame'>
                <nav className='flex items-center gap-8 mb-20'>
                 <nav role='list-item-indicator' className=' w-4 h-4 bg-deep-dark'></nav>
                 <h1 className=' font-bold text-4xl uppercase text-deep-dark add_underline' >Our Core Values</h1>
                </nav>

                <div className=' grid grid-cols-2'>
                    <nav className='flex items-start gap-5 p-5 bg-light-blue/30 border-deep-gray/50 border-r border-b'>
                        <nav className=' text-deep-gray text-xl py-1'>01</nav>
                        <nav className='flex-1 px-6'>
                        <h1 className=' text-deep-dark font-medium text-3xl'>Innovation</h1>
                        <p className=' py-6 text-deeper-gray'>
                            Our resourcefulness comes from our well educated staffs intellect and vitality. Innovative directions and ways of thinking are always saluted and facilitated at GOBCO. Standing still means moving backwards, we innovate to move forward.
                        </p>
                        </nav>
                    </nav>
                    <nav className='flex items-start gap-5 p-5 border-deep-gray/50 bg-light-blue/30  border-b pb-6 pl-10 '>
                        <nav className=' text-deep-gray text-xl py-1'>02</nav>
                        <nav className='flex-1 px-6'>
                        <h1 className=' text-deep-dark font-medium text-3xl'>Adaptability & Resilience</h1>
                        <p className=' py-6 text-deeper-gray'>
                            The ability to effectively address every demand by customers and every challenge from the market is indispensable to enterprises hoping to withstand the heat and sustain growth.
                        </p>
                        <p className=' py-6 text-deeper-gray'>
                            When the economy is still struggling and com- petition is getting tougher everyday, <b>GOBCO</b> relies on the experience and insights of seasoned members and the innovativeness of succeeding staff to formulate a solution in every situation.
                        </p>
                        </nav>
                    </nav>
                    <nav className='flex  items-start gap-5 p-5 border-deep-gray/50 bg-gradient-to-br from-light-blue/50 to-light-blue  border-r py-6 pt-10'>
                        <nav className=' text-deep-gray text-xl py-1'>03</nav>
                        <nav className='flex-1 px-6'>
                        <h1 className=' text-deep-dark font-medium text-3xl'>Reputation Priority</h1>
                        <p className=' py-6 text-deeper-gray'>
                            To us, building and protecting reputation is an uncompro- mising battle.
                            In our philosophy, safeguarding the <b>GOBCOS</b> name does not only mean winning customers absolute trust, but also entails attaining full faith and credit from our staff.
                            Prestige
                        </p>
                      
                        </nav>
                    </nav>
                    <nav className='flex items-start gap-5 p-5 bg-gradient-to-br from-light-blue/50 to-light-blue  border-deep-gray/50   pt-10 pb-6 pl-10'>
                        <nav className=' text-deep-gray text-xl py-1'>04</nav>
                        <nav className='flex-1 px-6'>
                        <h1 className=' text-deep-dark font-medium text-3xl'>Quality Control</h1>
                        <p className=' py-6 text-deeper-gray'>
                            With our mission to become a first-tier construction company in Ghana,
                            <b>GOBCO</b> is dedicated to delivering high quality,on scheduled projects while
                            constantly improving to better create values for our customers.
                        </p>
                        <Link href="/resources#qualitycontrol" className=' py-6 text-deep-gray underline flex items-center gap-2 cursor-pointer'>
                            Learn more about our quality control 
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M6.25 4.5A1.75 1.75 0 0 0 4.5 6.25v11.5c0 .966.783 1.75 1.75 1.75h11.5a1.75 1.75 0 0 0 1.75-1.75v-4a.75.75 0 0 1 1.5 0v4A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3h4a.75.75 0 0 1 0 1.5h-4ZM13 3.75a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-1.5 0V5.56l-5.22 5.22a.75.75 0 0 1-1.06-1.06l5.22-5.22h-4.69a.75.75 0 0 1-.75-.75Z"/></svg>
                        </Link>
                      
                        </nav>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Corevalues