import React from "react"

// Components
import FootBar from "../../Components/FootBar"

// Components: Cards
import WallusCard from './Wallus/WallusCard';
import CMSCard from './CMS/CMSCard';
import BunnyWorldCard from './BunnyWorld/BunnyWorldCard';
import WebProfileCard from './WebProfile/WebProfileCard';
import CartaCard from './Carta/CartaCard';
import BlenderCard from './Blender/BlenderCard';

export default function Projects() {    

    return(
        <>
                    
            <div className="flex flex-col p-5 bg-neutral-pale ">
                <div className='flex flex-col lg:flex-row w-full '>
                    <WallusCard className="flex flex-1 m-5" />
                    <CMSCard className="flex flex-1 m-5" />
                </div>
                
                <div className='flex flex-col lg:flex-row w-full '>
                    <BunnyWorldCard className="flex flex-1 m-5" />
                    <WebProfileCard className="flex flex-1 m-5" />
                </div>


                <div className='flex flex-col lg:flex-row w-full '>
                    <CartaCard className="flex flex-1 m-5" />
                    <BlenderCard className="flex flex-1 m-5" />
                </div>
            </div>

            
            <FootBar className='rounded-b-2xl' />
        </>
    )
}