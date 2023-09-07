import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export function Project() {
    return (
        <div className=' bg-light-blue py-24 '>
            <div className=' container-content'>
                <nav className=' flex items-center justify-between  mb-20'>
                    <nav className='flex items-center gap-8 '>
                        <nav role='list-item-indicator' className=' w-4 h-4 bg-deep-dark/75'></nav>
                        <h1 className=' font-bold text-4xl uppercase text-deep-dark/75 add_underline'>Our Projects</h1>
                    </nav>
                    <Link href="/projects" className='flex items-center gap-3 '>
                        <h1 className=' font-bold text-2xl uppercase text-deep-dark/75'>See All</h1>
                        <svg className='text-deep-dark/75' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6.25 4.5A1.75 1.75 0 0 0 4.5 6.25v11.5c0 .966.783 1.75 1.75 1.75h11.5a1.75 1.75 0 0 0 1.75-1.75v-4a.75.75 0 0 1 1.5 0v4A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3h4a.75.75 0 0 1 0 1.5h-4ZM13 3.75a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-1.5 0V5.56l-5.22 5.22a.75.75 0 0 1-1.06-1.06l5.22-5.22h-4.69a.75.75 0 0 1-.75-.75Z" /></svg>
                    </Link>
                </nav>
                <div className='relative grid grid-cols-12 w-full gap-10 rounded-tr-[10rem] rounded-bl-[10rem] max-h-[min(min(80vh,60rem))]  overflow-hidden'>
                    <Image placeholder='blur' blurDataURL='/images/blur.png' className='col-span-3 h-full w-full object-cover ' src="/images/building1interiorleft.jpg" alt='image of techno house' width={800} height={800} quality={100} />
                    <Image placeholder='blur' blurDataURL='/images/blur.png' className='col-span-6 h-full w-full object-cover ' src="/images/building1main.jpg" alt='image of techno house' width={800} height={800} quality={100} />
                    <Image placeholder='blur' blurDataURL='/images/blur.png' className='col-span-3 h-full w-full object-cover ' src="/images/building1interiorright.jpg" alt='image of techno house' width={800} height={800} quality={100} />
                    <nav className=' absolute bottom-10 bg-white/90 rounded-lg w-max p-5 shadow-md left-[45%] flex flex-col gap-3'>
                        <h1 className=' font-semibold text-lg text-deep-dark'>Techno House </h1>
                        <nav className=' text-light-gray text-sm flex items-center '>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M256 48c-79.5 0-144 61.39-144 137c0 87 96 224.87 131.25 272.49a15.77 15.77 0 0 0 25.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137Z" /><circle cx="256" cy="192" r="48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" /></svg>
                            <h5> Spintex near batsona,Ghana</h5>
                        </nav>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Project