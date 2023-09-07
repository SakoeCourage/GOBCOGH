import React from 'react'
import Link from 'next/link'
function footer() {
    return (
        <div className=' bg-deep-dark isolate'>
            <div className='relative container-content py-16 '>
                <div className='gradient-bg absolute top-[10%] bottom-[20%] aspect-square overflow-hidden left-10  z-[-1] w-[calc(min(30rem,60vh))] transform translate-x-[-50%] rounded-full '></div>
                <div className=' grid grid-cols-2 py-8 border-b border-light-gray/30'>
                    <div className=' text-white text-5xl leading-tight'>
                        LOOKING TO GET  <br />
                        WORK DONE EFFICIENTLY?<br />
                        LETS US BUILD FOR YOU
                    </div>
                    <div className='flex items-center flex-col gap-5'>
                        <nav className=' max-w-md w-full py-5 px-7 rounded-3xl flex items-center justify-between gap-10 bg-light-dark'>
                            <span className=' text-light-white'>
                                gobcocompanies@gmail.com
                            </span>
                            <svg className=' text-primary-orange' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m16 5l5 5l-5 5" /><path d="M21 10h-8C7.477 10 3 14.477 3 20v1" /></g></svg>
                        </nav>
                        <Link href='/about#contact-us' className=' text-deep-dark font-bold text-lg bg-primary-orange rounded-3xl w-full max-w-md py-4 px-7'>
                            Contact Us
                        </Link>

                    </div>
                </div>

                <div className='py-8 grid grid-cols-3'>
                    <nav className=' flex flex-col gap-5'>
                        <h2 className='text-light-white'> GOBCO Ghana</h2>
                        <ul className=' flex flex-col gap-1 text-gray-400'>
                            <li>
                                 Old Ashonmang,
                            </li>
                            <li>
                                Close to ICGC North Legon,

                            </li>
                            <li>
                                GK-0932-39823
                            </li>
                        </ul>
                        <nav className=' flex items-center gap-2'>
                            <a href='https://www.facebook.com' className=' rounded-full aspect-square thick-gray-bs h-10 flex items-center justify-center p-2 bg-gray-400/20 text-gray-400'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20"><path fill="currentColor" d="M2.89 2h14.23c.49 0 .88.39.88.88v14.24c0 .48-.39.88-.88.88h-4.08v-6.2h2.08l.31-2.41h-2.39V7.85c0-.7.2-1.18 1.2-1.18h1.28V4.51c-.22-.03-.98-.09-1.86-.09c-1.85 0-3.11 1.12-3.11 3.19v1.78H8.46v2.41h2.09V18H2.89a.89.89 0 0 1-.89-.88V2.88c0-.49.4-.88.89-.88z" /></svg>
                            </a>
                            <a  className=' rounded-full aspect-square thick-gray-bs h-10 flex items-center justify-center p-2 bg-gray-400/20 text-gray-400'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="currentColor" d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248c-.015-.709-.52-1.248-1.342-1.248c-.822 0-1.359.54-1.359 1.248c0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586c.173-.431.568-.878 1.232-.878c.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252c-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" /></svg>
                            </a>
                            <a href="tel:+233242878246" className=' rounded-full aspect-square thick-gray-bs h-10 flex items-center justify-center p-2 bg-gray-400/20 text-gray-400'> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="currentColor" d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608a17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42a18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/></svg>
                            </a>
                            <a  href="mailto:gobcocompanies@gmail.com" className=' rounded-full aspect-square thick-gray-bs h-10 flex items-center justify-center p-2 bg-gray-400/20 text-gray-400'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21 12.13c-.15.01-.29.06-.39.17l-1 1l2.05 2l1-1c.22-.21.22-.56 0-.77l-1.24-1.23a.557.557 0 0 0-.38-.17m-2 1.75L13 19.94V22h2.06l6.06-6.07M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7v-.89l8.24-8.22c.47-.49 1.12-.76 1.8-.76c.34 0 .68.06 1 .19V6c0-1.12-.92-2-2.04-2m0 4l-8 5l-8-5V6l8 5l8-5" /></svg>
                            </a>
                        </nav>
                    </nav>
                    <nav className=' flex flex-col gap-5'>
                        <h2 className='text-light-white'>QUICK LINKS</h2>
                        <nav className=' flex flex-col gap-1 text-gray-400'>
                            <Link href='/about' className=' underline'>
                                About
                            </Link>
                            <Link href='/projects' className=' underline'>
                                Projects

                            </Link>
                            <Link href='/resources' className=' underline'>
                                Resources
                            </Link>
                            <Link href="/business" className=' underline'>
                                Our Business
                            </Link>
                            <Link href="/business#organizationstructure" className=' underline'>
                                The Organization
                            </Link>
                        </nav>
                    </nav>
                    <nav className=' flex flex-col gap-5'>
                        <h2 className='text-light-white'>GOBCO INVESTORS</h2>
                        <nav className='text-gray-400'>
                            Gobcos investors  positively influence our success, growth, and long-term objectives.
                        </nav>
                        <nav className=' w-max py-2 px-7 rounded-3xl flex items-center justify-between gap-10 bg-gray-300'>
                            <Link href="/business#investors"  className=' text-deep-dark font-semibold uppercase flex items-center gap-2'>
                                 <span>See our Investors</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M6.25 4.5A1.75 1.75 0 0 0 4.5 6.25v11.5c0 .966.783 1.75 1.75 1.75h11.5a1.75 1.75 0 0 0 1.75-1.75v-4a.75.75 0 0 1 1.5 0v4A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3h4a.75.75 0 0 1 0 1.5h-4ZM13 3.75a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-1.5 0V5.56l-5.22 5.22a.75.75 0 0 1-1.06-1.06l5.22-5.22h-4.69a.75.75 0 0 1-.75-.75Z" /></svg>

                            </Link>
                        </nav>

                    </nav>
                </div>
            </div>
            <div className=' bg-light-dark '>
                <div className=' container-content flex items-center justify-center py-4 text-gray-400'>
                        <span>
                            @2023 COPYRIGHT GOBGO GHANA
                        </span>
                </div>
            </div>
        </div>
    )
}

export default footer