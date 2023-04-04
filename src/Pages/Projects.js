import React from "react"

import images from "../Assets/Images/images"

import ProjectCard from "../Components/ProjectCard"
import SideNav from "../Components/SideNav"

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

                    <ProjectCard
                        id="project-1"
                        title="Wallus: Your Personal Finance App"
                        date="Dec 09 2022"
                        image={images.project.wallus.preview}
                        imageAlt="This is an image"
                        summary={
                            <>
                                <p className="mb-3">Chances are, at one point in your life, you found investing intimidating and filled with jargon.</p>

                                <p className="mb-3">Wallus, combining "Wallet" + "Us", is an app that makes investing more welcoming by being part of a community. You and your friends can start investing in the same stock and share profits.</p>
                            
                                <p>Wallus reinvents investing to be fun and social for the first time.</p>
                            </>
                        }
                    >
                        Hi!
                    </ProjectCard>

                    <ProjectCard
                        id="project-2"
                        title="Content Management System"
                        date="Mar 23 2022"
                        image={images.project.sura.preview}
                        imageAlt="This is an image"
                        summary={
                            <>
                                <p>Want to build a website for your organization but don't want to code it yourself? Use my content managemnt system instead!</p>
                            </>
                        }
                    >
                        Hi!
                    </ProjectCard>

                    <ProjectCard
                        id="project-3"
                        title="Bunny World"
                        date="Mar 17 2023"
                        image={images.project.bunnyWorld.preview}
                        imageAlt="This is an image"
                        summary={
                            <>
                                <p className="mb-3">You are trapped in a world of bunnies. Choose your path forward wisely or you may incur the wrath of the bunny of death!</p>

                                <p>Was the game too easy? Come build your own 2D game with our Bunny World Game Editor! You can do all of that from the comfort of your android device!</p>
                            </>
                        }
                    >
                        Hi!
                    </ProjectCard>

                    <ProjectCard
                        id="project-4"
                        title="Web Profile"
                        date="Mar 17 2023"
                        image={images.project.webProfile.preview}
                        imageAlt="This is an image"
                        summary={
                            <>
                                <p>Oh look! It's my webprofile, but you're already on it... Wanna see how I made it? Click me!</p>
                            </>
                        }
                    >
                        Hi!
                    </ProjectCard>

                    <ProjectCard
                        id="project-5"
                        title="Scrapping Carta!"
                        date="Mar 10 2022"
                        image={images.project.carta.preview}
                        imageAlt="This is an image"
                        summary={
                            <>
                                <p className="mb-3">I was investigating how the voice of an instructor can affect the experience of their students, but I needed data. Massive amounts of data that I coldn't get my hands on normally.</p>
                                <p>Oh what better way is there to infer that than scrapping the entire collection of Carta's feedback of students from Stanford University!</p>
                            </>
                        }
                    >
                        Hi!
                    </ProjectCard>

                    <ProjectCard
                        id="project-6"
                        title="Fun with Blender"
                        date="Dec 09 2022"
                        image={images.project.blender.preview}
                        imageAlt="This is an image"
                        summary={
                            <>
                                <p className="mb-3"> A blender noob recreates a scene you'd expect to see in Need for Speed or Fast and Furious. </p>

                                <p> It would be easy, they said. There are tonnes of blender tutorials online, they said. Well at least, they were right about the latter. </p>
                            </>
                        }
                    >
                        Hi!
                    </ProjectCard>
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