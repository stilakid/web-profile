import React from 'react';


// Components
import FootBar from './FootBar';


// Components: Cards
import WallusCard from './Cards/WallusCard';
import CMSCard from './Cards/CMSCard';
import BunnyWorldCard from './Cards/BunnyWorldCard';
import WebProfileCard from './Cards/WebProfileCard';
import CartaCard from './Cards/CartaCard';
import BlenderCard from './Cards/BlenderCard';


// Base Custom Button Class

export default function ProjectList({ children, ...props }) {
    return (
        <div className="absolute w-full top-0 bottom-0 overflow-y-auto border">
            <div className="sticky p-2 top-0 bg-orange-300 w-full flex flex-row justify-center z-50">
                <h1>
                    Completed Projects
                </h1>
            </div>

            <div className="flex flex-col items-center w-full p-5 bg-white">
                <WallusCard />

                <CMSCard />

                <BunnyWorldCard />

                <WebProfileCard/>

                <CartaCard />

                <BlenderCard />

                <FootBar className='rounded-b-2xl' />
            </div>
            
        </div>
    );
}