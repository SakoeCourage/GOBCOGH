'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

export function getMatchorEqual(path:string,pattern:string,exact:boolean = false):boolean{
  if(exact){
      return path === pattern
  }else{
      return path === pattern || path.startsWith(pattern)
  }
}

function Header() {
  const path = usePathname()
  return (
    <header className=' bg-deep-dark border-b border-light-gray/30 sticky top-0 z-40'>
      <nav className='container-content py-5 text-white flex '>
        <nav>
          <ul className='flex items-center gap-5'>
            <li>
              <Link href="/about" className={`${getMatchorEqual(path,'/about',false) && 'font-bold text-lg text-primary-orange'}`}>ABOUT</Link>
            </li>
            <li>
              <Link href="/projects" className={`${getMatchorEqual(path,'/projects',false) && 'font-bold text-lg text-primary-orange'}`}>
                PROJECTS
              </Link>
            </li>
          </ul>
        </nav>
        <nav className='flex-1 text-center '>
          <Link className={`${getMatchorEqual(path,'/',true) && 'font-bold text-lg text-primary-orange'}`} href="/"> GOBCO</Link>
        </nav>
        <nav>
          <ul className='flex items-center gap-5'>
            <li>
              <Link href="/business" className={`${getMatchorEqual(path,'/business',false) && 'font-bold text-lg text-primary-orange'}`}> OUR BUSINESS</Link>
            </li>
            <li>
              <Link href="/resources" className={`${getMatchorEqual(path,'/resources',false) && 'font-bold text-lg text-primary-orange'}`}>RESOURCES</Link>
            </li>
          </ul>
        </nav>
      </nav>
    </header>
  )
}

export default Header