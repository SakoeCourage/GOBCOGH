import React from 'react'
import Image from 'next/image'

const machines = [
    "BULLDOZER",
    "GRADER",
    "VIBRATOR ROLLER (8T)",
    "PNEUMATIC",
    "TIPPER TRUCK (16m3, 10m3, 7.5m3)",
    "CUTTER SUCTION DREDGER",
    "WATER TANKER",
    "BOOST PUMP BOAT",
    "POKER VIBRATOR (5h)",
    "PAY LOADER & LOW LOADER",
    "SHEEPFOOT VIBRATORY ROLLERS",
    "BACK HOE",
    "SERVICE VAN",
    "DRAINAGE EXCAVATOR",
    "CONCRETE MIXERS",
    "GENERATORS",
    "COMPACTORS",
    "JACK HAMMERS"
];



function Equipment() {
    return (
        <section className='  '>
            <div className='container-content text-gray-400 py-7'>
                <nav className='flex items-center gap-8 mb-20'>
                    <nav role='list-item-indicator' className=' w-4 h-4 bg-deep-dark'></nav>
                    <h1 className=' font-bold text-4xl uppercase text-deep-dark add_underline' >Working Machines</h1>
                </nav>
                <div className=' grid grid-cols-2 gap-5'>
                    <Image placeholder='blur' blurDataURL='/images/blur.png' className=' my-auto max-h-[40rem] opacity-90 object-cover' alt='about image' src='/images/machines.jpg' quality={100} height={800} width={800} />
                    <nav>
                        {machines.map((machine, i) => <nav key={i} className='flex items-start gap-5 px-5 border-deep-gray/50 bg-gray-50/60  '>
                            <nav className=' text-deep-gray text-xl py-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M0 0h24v24H0z" /><path fill="currentColor" d="M12 7a5 5 0 1 1-4.995 5.217L7 12l.005-.217A5 5 0 0 1 12 7z" /></g></svg>
                            </nav>
                            <nav className='flex-1 px-6'>
                                <p className='py-1 text-deeper-gray'>
                                    {machine}
                                </p>
                            </nav>
                        </nav>)}

                    </nav>
                </div>

            </div>

        </section>
    )
}

export default Equipment