// Assets
import videos from "../../../Assets/Videos/videos"






export default function VideoEditing() {
    return (
        <>
            <div class="w-full bg-gradient-to-r from-gray-600 to-gray-800 text-white flex flex-col justify-center items-center px-20 lg:px-32 xl:px-48 py-5">
                <div class="flex flex-row justify-center items-center my-3">
                    <h1 class="text-4xl">Video Editing</h1>
                </div>

                <p class="text-lg mb-3 text-center">
                    Since I was a sophomore in high school, I've been passionate about editing
                    and compositing video footage for creative works.
                </p>

                <p class="text-lg mb-3 text-center">
                    Below, you can find some of the mini-projects I've worked on.
                </p>

                <div class="flex flex-col lg:flex-row py-10 w-full space-x-0 lg:space-x-10">
                    <div class="flex flex-col items-center py-10 w-full">
                        <h1>Motion Tracking - Taemin's Advice Practice</h1>
                        <div class="flex justify-center my-10">

                            <video controls class="w-full h-full max-w-5xl aspect-video">
                                <source src={videos.hobbies.videoEditing.dance} type="video/mp4" />
                            </video>
                            
                        </div>
                    </div>

                    <div class="flex flex-col items-center py-10 w-full">
                        <div class="flex flex-col items-center w-full">
                            <h1>Project Wallus Concept Video</h1>
                            <div class="flex justify-center w-full my-10">
                                <iframe width="960" height="540" src="https://www.youtube.com/embed/e_ryWF8GEgM" title="CS147 Concept Vid: Team Wallus" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" class="w-full h-full max-w-5xl aspect-video"></iframe>
                            </div>
                        </div>

                        <div class="flex flex-col items-center w-full">
                            <h1>Advanced Frame Interpolation - Naruto AMV</h1>
                            <div class="flex justify-center w-full my-10">
                                <video controls class="w-full h-full max-w-5xl aspect-video">
                                    <source src={videos.hobbies.videoEditing.amv} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col py-10 w-full items-center">
                    <h1>High School News Report</h1>
                    <div class="flex flex-col lg:flex-row justify-center py-10 w-full space-x-0 lg:space-x-10">
                        <div class="flex flex-col items-center w-full">
                            <h1>Audio Visualizer</h1>
                            <div class="flex justify-center w-full my-10">
                                <video controls class="w-full h-full max-w-5xl aspect-video">
                                    <source src={videos.hobbies.videoEditing.news1} type="video/mp4" />
                                </video>
                            </div>
                        </div>

                        <div class="flex flex-col items-center w-full">
                            <h1>Space Simulation</h1>
                            <div class="flex justify-center w-full my-10">
                                <video controls class="w-full h-full max-w-5xl aspect-video">
                                    <source src={videos.hobbies.videoEditing.news2} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col lg:flex-row justify-center py-10 w-full space-x-0 lg:space-x-10">
                        <div class="flex flex-col items-center w-full">
                            <h1>News Lower Thirds</h1>

                            <div class="flex justify-center w-full my-10">
                                <video controls class="w-full h-full max-w-5xl aspect-video">
                                    <source src={videos.hobbies.videoEditing.news3} type="video/mp4" />
                                </video>
                            </div>
                        </div>

                        <div class="flex flex-col items-center w-full">
                            <h1>Lowerthirds + Image Manipulation</h1>

                            <div class="flex justify-center w-full my-10">
                                <video controls class="w-full h-full max-w-5xl aspect-video">
                                    <source src={videos.hobbies.videoEditing.news4} type="video/mp4" />
                                </video>
                            </div>
                            <p>
                                From 0:08 onwards, all the backgrounds are actually still images that have been distored to look like a video.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}