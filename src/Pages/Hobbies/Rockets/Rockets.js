// Assets
import images from "../../../Assets/Images/images"
import videos from "../../../Assets/Videos/videos"


export default function Rockets() {
    return(
        <>
            <div class="bg-gradient-to-r from-gray-100 to-gray-300 text-black flex flex-col justify-center items-center px-20 lg:px-32 xl:px-48 py-5">
                <div class="flex flex-row justify-center items-center my-3">
                    <img src={images.hobbies.rockets.ssi_logo} alt="logo of legacy dance team" class="h-28 rounded-2xl" />
                </div>
                <p class="text-lg font-bold italic mb-3 text-center">
                    Active: September 2021 - June 2022 <br/>
                    Position: Sub-team Co-lead, Structures &amp; Avionics
                </p>
                
                <p class="text-lg mb-3 text-center">
                    The Stanford Student Space Initiative (SSI) is a completely 
                    student-run organization founded in 2013 with the mission 
                    of giving future leaders of the space industry the hands-on 
                    experience and broader insight they need to realize the next 
                    era of space development.
                </p>
                
                <p class="text-lg mb-3 text-center">
                    SSI is the largest project-based group on campus. 
                    They're the gathering place for people who want to 
                    act on their interests in space. Since 2013, 
                    they've flown a zero gravity experiment with NASA, 
                    helped build multiple CubeSats, inspired 60 teams 
                    in 20 countries to launch high altitude balloons, 
                    certified over 30 students for high powered rocketry, 
                    hosted over 100 speakers at talks and conferences, 
                    been featured in media like Popular Science, and helped 
                    their members intern and work at top aerospace companies 
                    and organizations.
                </p>
                
                <h1 class="my-6">Moments from my time at SSI</h1>
                
                <div class="flex flex-row flex-wrap ">
                    <div class="flex justify-center max-w-2xl my-10">
                        <video controls class="w-full h-full max-w-5xl aspect-video">
                            <source src={videos.hobbies.rockets.ssi1} type="video/mp4" />
                        </video>
                    </div>
                    
                    <div class="flex justify-center max-w-2xl my-10">
                        <video controls class="w-full h-full max-w-5xl aspect-video">
                            <source src={videos.hobbies.rockets.ssi2} type="video/mp4" />
                        </video>
                    </div>
                    
                    <img src={images.hobbies.rockets.ssi1} alt="LSJUMB band after a basket ball match" class="max-w-2xl object-cover" />

                    <img src={images.hobbies.rockets.ssi2} alt="LSJUMB band after a basket ball match" class="max-w-2xl object-cover" />
                
                </div>
            </div>
        </>
    )
}