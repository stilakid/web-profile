// Assets
import images from "../../../Assets/Images/images"







export default function Music() {
    return(
        <>
            <div class="bg-gradient-to-r from-gray-100 to-gray-300 text-black flex flex-col justify-center items-center px-20 lg:px-32 xl:px-48 py-5">
                <div class="flex flex-row justify-center items-center my-3">
                    <img src={images.hobbies.music.lsjumb_logo} alt="logo of legacy dance team" class="h-28 rounded-2xl"/>
                </div>
                
                <p class="text-lg font-bold italic mb-3 text-center">
                    Active: September 2021 - June 2022
                </p>
                <p class="text-lg mb-3 text-center">
                    The Leland Stanford Junior University Marching Band aims to 
                    bring funk to the funkless, to spread their unique brand of 
                    irreverent musical entertainment, and to provide a vibrant 
                    community for their members.
                </p>
                
                <div class="flex flex-row flex-wrap">
                    <img src={images.hobbies.music.band1} alt="LSJUMB band after a basket ball match" class="max-w-2xl object-cover" />
                    <img src={images.hobbies.music.band2} alt="Clarinet, flute, and piccolo players from Stanford and Texas marching bands." class="max-w-2xl object-cover" />
                    <img src={images.hobbies.music.band3} alt="LSJUMB tree and conductor." class="max-w-2xl object-cover" />
                    <img src={images.hobbies.music.band4} alt="LSJUMB running into the football field." class="max-w-2xl object-cover" />
                    <img src={images.hobbies.music.band5} alt="LSJUMB having lunch together." class="max-w-2xl object-cover" />
                    <img src={images.hobbies.music.band6} alt="LSJUMB with UT Austin marching band." class="max-w-2xl object-cover" />
                    <img src={images.hobbies.music.band7} alt="Bearial." class="max-w-2xl object-cover" />
                    <img src={images.hobbies.music.band8} alt="Bearial." class="max-w-2xl object-cover" />
                    <img src={images.hobbies.music.band9} alt="LSJUMB band after a basket ball match" class="max-w-2xl object-cover" />
                    <img src={images.hobbies.music.band10} alt="Band practice." class="max-w-2xl object-cover" />
                    <img src={images.hobbies.music.band11} alt="Band practice." class="max-w-2xl object-cover" />
                </div>
            </div>
        </>
    )
}