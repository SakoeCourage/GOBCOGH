import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  return (
    <div className=' bg-deep-dark text-white  isolate pb-10'>
      <section className=' relative container-content '>
        <div className='gradient-bg absolute top-[0] bottom-[10%] aspect-square overflow-hidden left-10  z-[-1] w-[calc(min(40rem,60vh))] transform translate-x-[-40%] rounded-full '></div>
        <div className='gradient-bg absolute  bottom-[10%] aspect-square overflow-hidden -right-10  z-[-1] w-[calc(min(40rem,60vh))] transform translate-x-[-40%] rounded-full '></div>
        <div className=' grid grid-cols-3 gap-5 pt-16'>
          <nav className=' text-7xl  col-span-2 uppercase'>
            Create your ideal property with a <br />fresh perspective.
          </nav>
          <nav className=' flex flex-col gap-3 '>
            <nav className=' font-bold text-lg flex items-center justify-between'>
              <h1>ABOUT US </h1>
            </nav>
            <nav className=' text-deep-gray'>
              GOBCO Company Limited is a general building and road construction company, with team of individuals that has been in the building and
              road construction industry since the year 2000 who have been working as seperate entities
              prior to being consolidated into one body known as GOBCO Company Limited.
            </nav>
            <Link href="/about" className=' px-2  text-base py-2 text-deep-gray    w-max flex items-center gap-2'>
              Read More
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M6.25 4.5A1.75 1.75 0 0 0 4.5 6.25v11.5c0 .966.783 1.75 1.75 1.75h11.5a1.75 1.75 0 0 0 1.75-1.75v-4a.75.75 0 0 1 1.5 0v4A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3h4a.75.75 0 0 1 0 1.5h-4ZM13 3.75a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-1.5 0V5.56l-5.22 5.22a.75.75 0 0 1-1.06-1.06l5.22-5.22h-4.69a.75.75 0 0 1-.75-.75Z" /></svg>

            </Link>

            <nav className='font-bold text-lg grid grid-cols-3 '>
              <nav className='border-r border-light-gray text-left '>20+ years of experience</nav>
              <nav className='border-r border-light-gray text-center '><nav className=' flex items-center justify-center h-full'>100+ Projects</nav></nav>
              <nav className=' text-center'><nav className=' flex items-center justify-center h-full'>100+ Clients</nav></nav>
            </nav>
          </nav>
        </div>
        <Image quality={100} className=' w-full h-[calc(max(40vh,40rem))]' width={700} height={700} src="/images/constructionworker.png" alt={"hero-image"} />
      </section>
    </div>
  )
}

export default Hero;
