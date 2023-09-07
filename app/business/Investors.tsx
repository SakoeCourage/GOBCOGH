import React from 'react'
import Image from 'next/image';

const investors = [
    "/images/investors/Alogo.png",
    "/images/investors/apricotresort.png",
    "/images/investors/chinwell.png",
    "/images/investors/CNHTC.png",
    "/images/investors/coinlogo.png",
    "/images/investors/fico.png",
    "/images/investors/flogo.png",
    "/images/investors/kirby.png",
    "/images/investors/logoa.png",
    "/images/investors/logob.png",
    "/images/investors/logoc.png",
    "/images/investors/logod.png",
    "/images/investors/mcc.jfif",
    "/images/investors/mlogo.png",
    "/images/investors/parkdiamond.png",
    "/images/investors/phunir.png",
    "/images/investors/posco.png",
    "/images/investors/SamsungC&T.png",
    "/images/investors/songlogo.png",
    "/images/investors/taeineng.png"
];


function Investors() {
    return (
        <div id='investors' className=' bg-light-blue py-24 '>
            <div className=' container-content  apply-bg-constructivelines'>
                <nav className='flex items-center gap-8 mb-20 '>
                    <nav role='list-item-indicator' className=' w-4 h-4 bg-deep-dark/75'></nav>
                    <h1 className=' font-bold text-4xl uppercase text-deep-dark/75 add_underline'>Our Investors</h1>
                </nav>
                <ul className=' grid grid-cols-7 gap-5'>
                    {investors.map((li, i) => {
                        return (
                            <li key={i}>
                                <Image className=' bg-blend-luminosity h-28 w-28 aspect-square object-contain' width={500} height={500} quality={100} alt='investor log' src={li} />
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Investors