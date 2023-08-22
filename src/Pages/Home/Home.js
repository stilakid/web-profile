import React from "react"

import images from "../../Assets/Images/images"

// Components
import FootBar from "../../Components/FootBar"



export default function Home() {
    return(
    <div className="flex flex-col">

        <div className="w-screen h-screen flex flex-row portrait:flex-col" >
            <div className="w-full h-1/2 landscape:w-1/2 landscape:h-full flex justify-center items-center overflow-hidden">
                <img className='object-cover min-h-full min-w-full' src={images.home.juben.profilePic} alt="My profile pic" />
            </div>

            <div className="w-full h-1/2 landscape:w-1/2 landscape:h-full flex items-center bg-neutral-pale border-gray-500 border-b-2 p-10 md:p-32">
                <p className="text-3xl md:text-5xl lg:text-6xl text-neutral-black tracking-wide text-center" >
                    Hi! I'm <span className="text-cyan-600 border-cyan-600 border-4 p-2 font-medium rounded-lg">Juben</span>! I'm a <span className="text-lime-500 font-medium">Computer Science</span> major at Stanford with experience 
                    as a <span className="text-red-500 font-medium">fullstack</span> web and mobile <span className="text-red-400 font-medium">developer</span>.
                </p>
            </div>
        </div>

        <div className="w-screen h-screen flex flex-col landscape:flex-row" >
            <div className="w-full h-1/2 landscape:w-1/2 landscape:h-full flex justify-center items-center overflow-hidden">
                <img className='object-cover min-h-full min-w-full' src={images.home.juben.bhutan} alt="An iconic place in my country Bhutan" />
            </div>

            <div className="w-full h-1/2 landscape:w-1/2 landscape:h-full flex items-center bg-neutral-pale border-gray-500 border-b-2 p-10 md:p-32">
                <p className="text-3xl md:text-5xl lg:text-6xl text-neutral-black tracking-wide text-center" >
                    I hail from the <span className="text-yellow-500 font-medium">Kingdom</span> of <span className="text-orange-600 font-medium">Bhutan</span>, a tiny jewel at the crown of the mighty <span className="text-teal-500 font-medium">Himalayas</span>.
                </p>
            </div>
        </div>
        

        <div className="w-screen h-screen flex flex-col landscape:flex-row" >
            <div className="w-full h-1/2 landscape:w-1/2 landscape:h-full flex justify-center items-center overflow-hidden">
                <img className='object-cover min-h-full min-w-full' src={images.home.juben.danceWod} alt="My dance team from Stanford called Legacy performing at the World of Dance competition in Los Angeles" />
            </div>

            <div className="w-full h-1/2 landscape:w-1/2 landscape:h-full flex items-center bg-neutral-pale border-gray-500 border-b-2 p-10 md:p-32">
                <p className="text-3xl md:text-5xl lg:text-6xl text-neutral-black tracking-wide text-center" >
                    You'll often find me in <span className="text-violet-600 font-medium">dance</span> spaces, 
                    attending <span className="text-rose-400 font-medium">hip-hop</span>/<span className="text-lime-500 font-medium">k-pop</span> workshops, leading some of them, 
                    and filming dance covers.
                </p>
            </div>
        </div>


        <div className="w-screen h-screen flex flex-col landscape:flex-row" >
            <div className="w-full h-1/2 landscape:w-1/2 landscape:h-full flex justify-center items-center overflow-hidden">
                <img className='object-cover min-h-full min-w-full' src={images.home.juben.musicLsjumb} alt="The Stanford Marching Band after a Women's basketball match." />
            </div>

            <div className="w-full h-1/2 landscape:w-1/2 landscape:h-full flex items-center bg-neutral-pale border-gray-500 border-b-2 p-10 md:p-32">
                <p className="text-3xl md:text-5xl lg:text-6xl text-neutral-black tracking-wide text-center" >
                    I also hold the <span className="text-blue-500 font-medium">flute</span> in the Stanford <span className="text-red-500 font-medium">Marching Band</span>...
                </p>
            </div>
        </div>


        <div className="w-screen h-screen flex flex-col landscape:flex-row" >
            <div className="w-full h-1/2 landscape:w-1/2 landscape:h-full flex justify-center items-center overflow-hidden">
                <img className='object-cover min-h-full min-w-full' src={images.home.juben.ssi} alt="The Stanford Student Space Initiative team in 2022." />
            </div>

            <div className="w-full h-1/2 landscape:w-1/2 landscape:h-full flex items-center bg-neutral-pale border-gray-500 border-b-2 p-10 md:p-32">
                <p className="text-3xl md:text-5xl lg:text-6xl text-neutral-black tracking-wide text-center" >
                    And I always loved the idea of exploring space, so I was part of <span className="text-brown-800 text-gray-500 font-medium">SSI</span> as a sophomore.
                </p>
            </div>
        </div>
        
        <FootBar />
    </div>
        

    )
}