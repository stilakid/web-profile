// Components
import FootBar from "../../Components/FootBar"

// Components: Cards
import WallusCard from './Wallus/WallusCard';
import CMSCard from './CMS/CMSCard';
import BunnyWorldCard from './BunnyWorld/BunnyWorldCard';
import WebProfileCard from './WebProfile/WebProfileCard';
import CartaCard from './Carta/CartaCard';
import BlenderCard from './Blender/BlenderCard';
import ModerationCard from "./Moderation/ModerationCard";
import CapsuleCard from "./Capsule/CapsuleCard";
import CS224NCard from "./CS224N/CS224NCard";
import CS224SCard from "./CS224S/CS224SCard";
import CS137ACard from "./CS137A/CS137ACard";

export default function Projects() {    

    return(
        <>   
            <div className="flex flex-col p-5 bg-neutral-pale ">
                <div className='flex flex-col lg:flex-row w-full '>
                    <CS137ACard className="flex flex-1 m-5" />
                    <CS224SCard className="flex flex-1 m-5" />
                </div>

                <div className='flex flex-col lg:flex-row w-full '>
                    <CapsuleCard className="flex flex-1 m-5" />
                    <CS224NCard className="flex flex-1 m-5" />
                </div>

                <div className='flex flex-col lg:flex-row w-full '>
                    <WallusCard className="flex flex-1 m-5" />
                    <CMSCard className="flex flex-1 m-5" />
                </div>
                
                <div className='flex flex-col lg:flex-row w-full '>
                    <BunnyWorldCard className="flex flex-1 m-5" />
                    <ModerationCard className="flex flex-1 m-5" />
                </div>


                <div className='flex flex-col lg:flex-row w-full '>
                    <CartaCard className="flex flex-1 m-5" />
                    <BlenderCard className="flex flex-1 m-5" />
                </div>

                <div className='flex flex-col lg:flex-row w-full '>
                    <WebProfileCard className="flex flex-1 m-5" />
                    <div className="flex flex-1 m-5" />
                </div>

            </div>

            
            <FootBar />
        </>
    )
}