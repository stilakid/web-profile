// Assets
import images from "../../../Assets/Images/images"



export default function Dance() {
    return(
        <>
            <div className="bg-gradient-to-r from-rose-700 to-rose-900 text-white flex flex-col justify-center items-center px-20 lg:px-32 xl:px-48 py-5">
                <h1 class="text-4xl my-3">Overview</h1>
                <p class="text-lg mb-3 text-center">
                    I started dancing seriously at the start of my sophomore year in college. 
                    I've noticed that I have an affinity towards dancing and so, 
                    I was able to grow substantially over a relatively short period of time.
                </p>
                <p class="text-lg mb-3 text-center">
                    However, none of these would have been possible if I didn't have the support 
                    of the wonderful student dance organizations I've been a part of. 
                    Check out the vids below. See if you can spot me!
                </p>
            </div>

            <div class="bg-gradient-to-r from-gray-600 to-gray-800 text-white flex flex-col justify-center items-center px-20 lg:px-32 xl:px-48 py-5">
                <div class="flex flex-row justify-center items-center my-3">
                    <img src={images.hobbies.dance.lgcyLogo} alt="logo of legacy dance team" class="h-28 rounded-2xl" />
                </div>

                <p class="text-lg font-bold italic mb-3 text-center">
                    Active: September 2022 - Present <br/>
                    Position: Artistic Director
                </p>
                <p class="text-lg mb-3 text-center">
                    Legacy Dance team (LGCY) was founded in 2016 at Stanford University 
                    by Stanford undergraduate and graduate students who were seeking a 
                    team that encouraged individual growth. 
                    It has become an impressive group led by three basic goals:

                    <ul class="my-5 flex flex-col sm:flex-row justify-center items-center sm:space-x-10 space-y-5 sm:space-y-0">
                        <li><span class="text-amber-500 font-bold text-2xl">Community</span></li>
                        <li><span class="text-green-500 font-bold text-2xl">Growth</span></li>
                        <li><span class="text-purple-400 font-bold text-2xl">Competition</span></li>
                    </ul>
                    
                    As Stanford's only competitive hip hop team, Legacy stands out by 
                    introducing its members to a wider community of dancers.
                </p>
                
                <iframe width="960" height="540" src="https://www.youtube.com/embed/r_k4w8mnFsk" title="Legacy Dance | Team Division  | World of Dance Bay Area 2024 | #WODBAY24" frameborder="0" allow="fullscreen accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" class="w-full h-full max-w-5xl aspect-video my-10"></iframe>
                <iframe width="960" height="540" src="https://www.youtube.com/embed/vxT7QOvykok" title="Legacy | World of Dance Los Angeles 2023 | Team Division" frameborder="0" allow="fullscreen accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" class="w-full h-full max-w-5xl aspect-video my-10"></iframe>
                <iframe width="960" height="540" src="https://www.youtube.com/embed/dLcdnxF5nKM" title="Legacy | ECC 2024" frameborder="0" allow="fullscreen accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" class="w-full h-full max-w-5xl aspect-video my-10"></iframe>
                <iframe width="960" height="540" src="https://www.youtube.com/embed/NG9UAVDmibE" title="Legacy | Breaking Ground 2023" frameborder="0" allow="fullscreen accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" class="w-full h-full max-w-5xl aspect-video my-10"></iframe>
                <iframe width="960" height="540" src="https://www.youtube.com/embed/cIsaqDLtR6o" title="Legacy | Hipnotized 2023" frameborder="0" allow="fullscreen accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" class="w-full h-full max-w-5xl aspect-video my-10"></iframe>
                <iframe width="960" height="540" src="https://www.youtube.com/embed/jk_bqqtCcGw" title="Legacy | ECC 2023" frameborder="0" allow="fullscreen accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" class="w-full h-full max-w-5xl aspect-video my-10"></iframe>
                <iframe width="960" height="540" src="https://www.youtube.com/embed/IL47N-Z_GIc" title="Legacy 2022 | Breaking Ground 2022" frameborder="0" allow="fullscreen accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" class="w-full h-full max-w-5xl aspect-video my-10"></iframe>
            </div>

            <div class="bg-gradient-to-r from-gray-200 to-gray-400 text-black flex flex-col justify-center items-center px-20 lg:px-32 xl:px-48 py-5">
                <div class="flex flex-row justify-center items-center my-3">
                    <img src={images.hobbies.dance.xtrmLogo} alt="logo of xtrm dance team" class="h-32" />
                </div>

                <p class="text-lg font-bold italic mb-3 text-center">
                    Active: August 2022 - Present <br/>
                    Position: Dance Captain
                </p>
                <p class="text-lg mb-3 text-center">
                    XTRM (pronounced "extreme") is Stanford University’s non-audition, 
                    competitive K-pop Dance Team. XTRM has garnered 2nd place at both 
                    the 2015 and 2016 San Francisco K-pop World Festival Competition, 
                    and competed at the 2016 US Finals at KCON LA. XTRM strives to provide 
                    opportunities to learn dances popularized by various K-pop groups and 
                    foster a community passionate about Korean pop culture. 
                    They welcome members from all backgrounds who are interested in 
                    dance and Korean pop culture.
                </p>

                <iframe width="960" height="540" src="https://www.youtube.com/embed/_I5Tz7PxpdY" title="[KPOP IN PUBLIC] SEVENTEEN (세븐틴) - &quot;Super (손오공)&quot; Dance Cover [Stanford XTRM] ft. Legacy" frameborder="0" allow="fullscreen accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" class="w-full h-full max-w-5xl aspect-video my-10"></iframe>
                <iframe width="960" height="540" src="https://www.youtube.com/embed/46D3WJDiBYY" title="[KPOP IN PUBLIC] SEVENTEEN (세븐틴) - &quot;Left &amp; Right&quot; Dance Cover [Stanford XTRM]" frameborder="0" allow="fullscreen accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" class="w-full h-full max-w-5xl aspect-video my-10"></iframe>
                <iframe width="960" height="540" src="https://www.youtube.com/embed/oIaW3xQJinA" title="[KPOP IN PUBLIC | ONE TAKE] ATEEZ (에이티즈) - &quot;Eternal Sunshine&quot; Dance Cover [Stanford XTRM]" frameborder="0" allow="fullscreen accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" class="w-full h-full max-w-5xl aspect-video my-10"></iframe>
                <iframe width="960" height="540" src="https://www.youtube.com/embed/GRrmuIOFPoE" title="XTRM | Hipnotized 2023" frameborder="0" allow="fullscreen accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" class="w-full h-full max-w-5xl aspect-video my-10"></iframe>
                <iframe width="960" height="540" src="https://www.youtube.com/embed/Wf1nmuH3dfw" title="XTRM | 2023" frameborder="0" allow="fullscreen accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" class="w-full h-full max-w-5xl aspect-video my-10"></iframe>
                <iframe width="960" height="540" src="https://www.youtube.com/embed/l64cOkNPDXQ" title="XTRM 2022 | Breaking Ground 2022" frameborder="0" allow="fullscreen accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" class="w-full h-full max-w-5xl aspect-video my-10"></iframe>
                <iframe width="960" height="540" src="https://www.youtube.com/embed/ctytDSZIO-M" title="[KPOP IN PUBLIC | SCHOOL PERFORMANCE] Party on the Edge 2022 (BTBT, Up!, Hot) [Stanford XTRM]" frameborder="0" allow="fullscreen accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" class="w-full h-full max-w-5xl aspect-video my-10"></iframe>
                        
            </div>



            <div class="bg-gradient-to-r from-purple-300 to-indigo-300 text-black flex flex-col justify-center items-center px-20 lg:px-32 xl:px-48 py-5">
                <div class="flex flex-row justify-center items-center my-3">
                    <img src={images.hobbies.dance.coLogo} alt="logo of common origins dance team" class=" h-40" />
                    <h1 class="text-4xl">Common Origins</h1>
                </div>
                
                <p class="text-lg font-bold italic mb-3 text-center">
                    Active: April 2022 - June 2022
                </p>
                <p class="text-lg mb-3 text-center">
                    Common Origins is a non-audition dance group based in Stanford, 
                    founded in 2010. They focus on creating a unique and challenging 
                    environment that brings both experienced and new dancers together 
                    through their shared passion for dance. Throughout the year, 
                    they aim to train both their dancers and choreographers by teaching 
                    and performing a wide range of fresh, exciting choreography. 
                    With a variety of influences, they hope to instill an appreciation 
                    of the art as a whole by recognizing that all types of dance can 
                    inspire and enrich CO's unique personality.
                </p>
                
                <iframe width="960" height="540" src="https://www.youtube.com/embed/z3mw4ivMr8M" title="Common Origins | Hipnotized 2022" frameborder="0" allow="fullscreen accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" class="w-full h-full max-w-5xl aspect-video my-10"></iframe>
            </div>
        </>
    )
}