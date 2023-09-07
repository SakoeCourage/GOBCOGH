import React from 'react'
import Image from 'next/image';
const list = [
    "/images/partners/ABBO.png ",
    "/images/partners/Alinco.jfif",
    "/images/partners/apave.png ",
    "/images/partners/BankofGhana.png ",
    "/images/partners/CIDECO.png ",
    "/images/partners/DDA.png ",
    "/images/partners/GCB.png ",
    "/images/partners/Ghacem.png ",
    "/images/partners/ghanastandardsauthority.jpg ",
    "/images/partners/goil.png ",
    "/images/partners/IDC.png ",
    "/images/partners/lotus.png ",
    "/images/partners/NIB.jfif",
    "/images/partners/SAIGONRES.jpg ",
    "/images/partners/SCQC.jfif ",
    "/images/partners/solveitvina.png ",
    "/images/partners/stanbicBank.jpg ",
    "/images/partners/StandardChartered.png ",
    "/images/partners/TH.png ",
    "/images/partners/ucgroup.png"
];

export function Partners() {
    return (
        <div className=' bg-light-blue py-24 '>
            <div className=' container-content  apply-bg-constructivelines'>
                <nav className='flex items-center gap-8 mb-20 '>
                    <nav role='list-item-indicator' className=' w-4 h-4 bg-deep-dark/75'></nav>
                    <h1 className=' font-bold text-4xl uppercase text-deep-dark/75 add_underline'>Our Partners</h1>
                </nav>
                <ul className=' grid grid-cols-7 gap-5'>
                    {list.map((li, i) => {
                        return (
                            <li key={i}>
                                <Image className=' bg-blend-luminosity h-28 w-28 aspect-square object-contain' width={500} height={500} quality={100} alt='patner' src={li} />
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Partners