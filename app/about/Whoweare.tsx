import React from 'react'
import Image from 'next/image'
function Whoweare() {
  return (
    <section className='  '>
    <div className='container-content text-gray-400 py-7'>
        <nav className='flex items-center gap-8 mb-20'>
            <nav role='list-item-indicator' className=' w-4 h-4 bg-deep-dark'></nav>
            <h1 className=' font-bold text-4xl uppercase text-deep-dark add_underline' >Who we are</h1>
        </nav>
        <div className=' grid grid-cols-2 gap-5'>
            <Image placeholder='blur' blurDataURL='/images/blur.png' className=' min-h-full opacity-90 object-cover' alt='about image' src='/images/about.jpg' quality={100} height={800} width={800} />
            <nav>
                <nav className='flex items-start gap-5 p-5 border-deep-gray/50 bg-gray-50/80  '>
                    <nav className=' text-deep-gray text-xl py-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M0 0h24v24H0z" /><path fill="currentColor" d="M12 7a5 5 0 1 1-4.995 5.217L7 12l.005-.217A5 5 0 0 1 12 7z" /></g></svg>
                    </nav>
                    <nav className='flex-1 px-6'>
                        <p className=' pb-6 text-deeper-gray'>
                            <b>GOBCO</b> Company Limited is a general building and road construction company, with a team of individuals that has been in the building and road construction industry from the year 2000, who have been working as separate entities prior to being consolidated into one body known as GOBCO Company Limited., as a private limited Liability Company incorporated under the companies code 1963, Act 157, in the year 2017 with a registration number CS055452017 and a company office in Accra.
                        </p>
                    </nav>
                </nav>
                <nav className='flex items-start gap-5 p-5 border-deep-gray/50 bg-gray-50/60  '>
                    <nav className=' text-deep-gray text-xl py-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M0 0h24v24H0z" /><path fill="currentColor" d="M12 7a5 5 0 1 1-4.995 5.217L7 12l.005-.217A5 5 0 0 1 12 7z" /></g></svg>

                    </nav>
                    <nav className='flex-1 px-6'>
                        <p className=' pb-6 text-deeper-gray'>
                            The firm engages in road construction, real estate, architectural designs, building engineering, civil engineering, project management and consultancy services. And is made up of a team with a total of over fifty years of operational experience in the road construction, real estate and general construction works business.
                            We are committed to providing services that endure the test of time, combining the latest sustainable design and construction techniques to meet each customers demand as well as increasing value for our clients and benefiting the communities in which we operate.
                        </p>
                    </nav>
                </nav>
                <nav className='flex items-start gap-5 p-5 border-deep-gray/50 bg-gray-50/80  '>
                    <nav className=' text-deep-gray text-xl py-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M0 0h24v24H0z" /><path fill="currentColor" d="M12 7a5 5 0 1 1-4.995 5.217L7 12l.005-.217A5 5 0 0 1 12 7z" /></g></svg>

                    </nav>
                    <nav className='flex-1 px-6'>
                        <p className=' pb-6 text-deeper-gray'>
                            <b>GOBCO</b> is a multidisciplinary group of highly-skilled physicists, scientists and engineers focused on the creation and optimization of novel engineering solutions for building and engineering structures.
                            The team is equipped with international training, research and development valued to engineers to effectively execute each project. We have worked on projects in Ghana, Sierra Leone, United Kingdom, and currently expanding our African footprint to include Gabon, Liberia and Mali. We are driven by true passion to make a difference in this industry.
                        </p>
                    </nav>
                </nav>
            </nav>
        </div>

    </div>

</section>
  )
}

export default Whoweare