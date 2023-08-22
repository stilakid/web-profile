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
        <div className="absolute w-full top-0 bottom-0 overflow-y-auto">
            <div className="sticky p-2 top-0 bg-white bg-opacity-50 border-b backdrop-blur w-full flex flex-row justify-center z-30">
                <h1>
                    Completed Projects
                </h1>
            </div>

            <div className="flex flex-col items-center w-full p-5 ">
                {/* <div className='border-2 flex flex-row w-full p-5'>
                    <div className='border-2 flex-1'>
                        <p>adfasfdsfasdfasf</p>
                        <p>adfasfdsfasdfasf</p>
                        <p>adfasfdsfasdfasf</p>
                        <p>adfasfdsfasdfasf</p>
                        <p>adfasfdsfasdfasf</p>
                        <p>adfasfdsfasdfasf</p>
                        <p>adfasfdsfasdfasf</p>
                    </div>
                    <div className='border-2 flex-1'>
                        <p>adfasfdsfasdfasf</p>
                    </div>
                </div> */}


                <div className='flex flex-col lg:flex-row w-full border-2 '>
                    <WallusCard className="flex border-2 flex-1" />
                    <CMSCard className="flex border-2 flex-1" />
                </div>
                
                <div className='flex flex-col lg:flex-row w-full border-2 '>
                    <BunnyWorldCard className="flex flex-col flex-1 border-2" />
                    <WebProfileCard className="flex flex-col flex-1 border-2" />
                </div>


                <div className='flex flex-col lg:flex-row w-full border-2 '>
                    <CartaCard className="flex flex-1 border-2" />
                    <BlenderCard className="flex flex-1 border-2" />
                </div>
            </div>

            <FootBar className='rounded-b-2xl' />            
        </div>
    );
}