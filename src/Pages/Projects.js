import React from "react"

// Assets
import images from "../Assets/Images/images"

// Components
import SideNav from "../Components/SideNav"

// Components: Card
import WallusCard from "../Components/Cards/WallusCard"
import CMSCard from "../Components/Cards/CMSCard"
import BunnyWorldCard from "../Components/Cards/BunnyWorldCard"
import WebProfileCard from "../Components/Cards/WebProfileCard"
import CartaCard from "../Components/Cards/CartaCard"
import BlenderCard from "../Components/Cards/BlenderCard"


export default function Projects() {    

    return(
        <div className="flex flex-row items-center justify-center">
            <div className="flex flex-row w-full max-w-screen-2xl">


                <div className="w-1/5 pr-4">
                    <SideNav>

                    </SideNav>
                </div>

                <div className='w-3/5 flex flex-col items-center'>
                    <h1>
                        Completed Projects
                    </h1>

                    <WallusCard />

                    <CMSCard />

                    <BunnyWorldCard />

                    <WebProfileCard/>

                    <CartaCard />

                    <BlenderCard />
                </div>

                <div className="w-1/5 flex flex-col items-center">
                    <h1>
                        Ongoing Projects
                    </h1>

                    <div className="p-20">
                        <p>
                            Wow so empty...
                        </p>
                    </div>
                </div>


            </div>
        </div>
    )
}