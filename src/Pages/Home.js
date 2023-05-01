import React from "react"

import images from "../Assets/Images/images"

// Components
import FootBar from "../Components/FootBar"



export default function Home() {
    return(
    <div className="flex flex-col">

        <div className="w-screen h-screen flex flex-row portrait:flex-col" >
            <div className="w-full h-1/2 landscape:w-1/2 landscape:h-full flex justify-center items-center overflow-hidden">
                <img className='object-cover min-h-full min-w-full' src={images.home.juben.profilePic} alt="My profile pic" />
            </div>

            <div className="w-full h-1/2 landscape:w-1/2 landscape:h-full flex items-center bg-orange-300 border-gray-500 border-b-2 p-10 md:p-32">
                <p className="text-3xl md:text-5xl lg:text-6xl text-white tracking-wide font-bold text-center" >
                    Hi! I'm Juben! I'm a Computer Science major at Stanford with experience 
                    as a fullstack web and mobile developer.
                </p>
            </div>
        </div>

        <div className="w-screen h-screen flex flex-col landscape:flex-row" >
            <div className="w-full h-1/2 landscape:w-1/2 landscape:h-full flex justify-center items-center overflow-hidden">
                <img className='object-cover min-h-full min-w-full' src={images.home.juben.bhutan} alt="An iconic place in my country Bhutan" />
            </div>

            <div className="w-full h-1/2 landscape:w-1/2 landscape:h-full flex items-center bg-orange-300 border-gray-500 border-b-2 p-10 md:p-32">
                <p className="text-3xl md:text-5xl lg:text-6xl text-white tracking-wide font-bold text-center" >
                    I hail from the Kingdom of Bhutan, a tiny jewel at the crown of the mighty Himalayas.
                </p>
            </div>
        </div>
        

        <div className="w-screen h-screen flex flex-col landscape:flex-row" >
            <div className="w-full h-1/2 landscape:w-1/2 landscape:h-full flex justify-center items-center overflow-hidden">
                <img className='object-cover min-h-full min-w-full' src={images.home.juben.danceWod} alt="My dance team from Stanford called Legacy performing at the World of Dance competition in Los Angeles" />
            </div>

            <div className="w-full h-1/2 landscape:w-1/2 landscape:h-full flex items-center bg-orange-300 border-gray-500 border-b-2 p-10 md:p-32">
                <p className="text-3xl md:text-5xl lg:text-6xl text-white tracking-wide font-bold text-center" >
                    You'll often find me in dance spaces, 
                    attending hip-hop/k-pop workshops, leading some of them, 
                    and filming dance covers.
                </p>
            </div>
        </div>


        <div className="w-screen h-screen flex flex-col landscape:flex-row" >
            <div className="w-full h-1/2 landscape:w-1/2 landscape:h-full flex justify-center items-center overflow-hidden">
                <img className='object-cover min-h-full min-w-full' src={images.home.juben.musicLsjumb} alt="The Stanford Marching Band after a Women's basketball match." />
            </div>

            <div className="w-full h-1/2 landscape:w-1/2 landscape:h-full flex items-center bg-orange-300 border-gray-500 border-b-2 p-10 md:p-32">
                <p className="text-3xl md:text-5xl lg:text-6xl text-white tracking-wide font-bold text-center" >
                    I also hold the flute in the Stanford Marching Band...
                </p>
            </div>
        </div>


        <div className="w-screen h-screen flex flex-col landscape:flex-row" >
            <div className="w-full h-1/2 landscape:w-1/2 landscape:h-full flex justify-center items-center overflow-hidden">
                <img className='object-cover min-h-full min-w-full' src={images.home.juben.ssi} alt="The Stanford Student Space Initiative team in 2022." />
            </div>

            <div className="w-full h-1/2 landscape:w-1/2 landscape:h-full flex items-center bg-orange-300 border-gray-500 border-b-2 p-10 md:p-32">
                <p className="text-3xl md:text-5xl lg:text-6xl text-white tracking-wide font-bold text-center" >
                    And I always loved the idea of exploring space, so I was part of SSI 
                    as a sophomore.
                </p>
            </div>
        </div>
        
        <FootBar />
    </div>
        

    )
}