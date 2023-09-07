import React from 'react'
import Image from 'next/image'

type socials = {
    facebook: string;
    linkedin: string;
    email: string;
}

type TeamMember = {
    MemberName: string;
    MemberPosition: string;
    imageUrl: string
    socials: socials,
};


const Team: TeamMember[] = [
    {
        MemberName: "George Owusu Buabeng",
        MemberPosition: "CEO",
        imageUrl: "/images/profile.webp",
        socials: {
            facebook: 'facebook.com/goerge',
            linkedin: 'linkedin.com/goerge',
            email: 'goerge@gmail.com',
        }
    },
    {
        MemberName: "Nana Kwesi Bosomefi",
        MemberPosition: "Project Manager",
        imageUrl: "/images/profile6.webp",
        socials: {
            facebook: 'facebook.com/goerge',
            linkedin: 'linkedin.com/goerge',
            email: 'goerge@gmail.com',
        }
    },
    {
        MemberName: "Frederick Abaitey",
        MemberPosition: "Works Superintendent",
        imageUrl: "/images/profile3.webp",
        socials: {
            facebook: 'facebook.com/goerge',
            linkedin: 'linkedin.com/goerge',
            email: 'goerge@gmail.com',
        }
    },
    {
        MemberName: "Lawrence Segual",
        MemberPosition: "Geodetic Engineer",
        imageUrl: "/images/profile4.jpg",
        socials: {
            facebook: 'facebook.com/goerge',
            linkedin: 'linkedin.com/goerge',
            email: 'goerge@gmail.com',
        }
    },
    {
        MemberName: "Buhari Yussif",
        MemberPosition: "Structural Engineer",
        imageUrl: "/images/profile5.jpg",
        socials: {
            facebook: 'facebook.com/goerge',
            linkedin: 'linkedin.com/goerge',
            email: 'goerge@gmail.com',
        }
    }
    ,
    {
        MemberName: "Leonarn Nana Ampong ",
        MemberPosition: "Field Operation Manager",
        imageUrl: "/images/profile2.webp",
        socials: {
            facebook: 'facebook.com/goerge',
            linkedin: 'linkedin.com/goerge',
            email: 'goerge@gmail.com',
        }
    }
]


export function Ourteam() {
    return (
        <div className=' bg-light-blue py-24 '>
            <div className=' container-content '>
                <nav className='flex items-center gap-8 mb-20'>
                    <nav role='list-item-indicator' className=' w-4 h-4 bg-deep-dark/75'></nav>
                    <h1 className=' font-bold text-4xl uppercase text-deep-dark/75 add_underline'>Our Team</h1>
                </nav>
                <div className=' grid grid-cols-3 gap-5 px-10 mx-auto'>

                    {Team.map((member, i) => {
                        return (
                            <nav key={i} className=' w-full  rounded-xl flex flex-col gap-5 p-3 '>
                                <Image placeholder='blur' blurDataURL='/images/blur.png' className=' aspect-[7/6] object-cover rounded-xl' width={500} height={500} quality={100} alt='team member' src={member?.imageUrl} />
                                <nav className=' flex flex-col gap-2 px-3'>
                                    <h2 className=' text-2xl font-bold tracking-wide text-deeper-gray'>{member.MemberName}</h2>
                                    <h6 className=' text-light-gray'>
                                        {member.MemberPosition}
                                    </h6>
                                    <nav className=' flex items-center gap-2'>
                                        <button className=' rounded-full aspect-square thick-gray-bs h-10 flex items-center justify-center p-2 bg-primary-orange/20 text-primary-orange'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20"><path fill="currentColor" d="M2.89 2h14.23c.49 0 .88.39.88.88v14.24c0 .48-.39.88-.88.88h-4.08v-6.2h2.08l.31-2.41h-2.39V7.85c0-.7.2-1.18 1.2-1.18h1.28V4.51c-.22-.03-.98-.09-1.86-.09c-1.85 0-3.11 1.12-3.11 3.19v1.78H8.46v2.41h2.09V18H2.89a.89.89 0 0 1-.89-.88V2.88c0-.49.4-.88.89-.88z" /></svg>
                                        </button>
                                        <button className=' rounded-full aspect-square thick-gray-bs h-10 flex items-center justify-center p-2 bg-primary-orange/20 text-primary-orange'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="currentColor" d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248c-.015-.709-.52-1.248-1.342-1.248c-.822 0-1.359.54-1.359 1.248c0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586c.173-.431.568-.878 1.232-.878c.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252c-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" /></svg>
                                        </button>
                                        <button className=' rounded-full aspect-square thick-gray-bs h-10 flex items-center justify-center p-2 bg-primary-orange/20 text-primary-orange'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21 12.13c-.15.01-.29.06-.39.17l-1 1l2.05 2l1-1c.22-.21.22-.56 0-.77l-1.24-1.23a.557.557 0 0 0-.38-.17m-2 1.75L13 19.94V22h2.06l6.06-6.07M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7v-.89l8.24-8.22c.47-.49 1.12-.76 1.8-.76c.34 0 .68.06 1 .19V6c0-1.12-.92-2-2.04-2m0 4l-8 5l-8-5V6l8 5l8-5" /></svg>
                                        </button>
                                    </nav>
                                </nav>
                            </nav>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Ourteam