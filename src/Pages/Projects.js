import React from "react"

import images from "../Assets/Images/images"

import ProjectCard from "../Components/ProjectCard"
import SideNav from "../Components/SideNav"

export default function Projects() {
    return(
        <div className="flex flex-row items-center justify-center">
            <div className="flex flex-row w-full max-w-screen-2xl">


            <div className="w-1/5 bg-gray-50">
                <h2> Sidebar </h2>

                <SideNav>

                </SideNav>
            </div>

            <div className='w-3/5'>
                <h1>
                    Projects
                </h1>

                <ProjectCard
                    id="project-1"
                    title="Wallus: Your Personal Finance App"
                    date="Dec 09 2022"
                    image={images.project.wallus.preview}
                    imageAlt="This is an image"
                    summary="Summary!!!"
                >
                    Hi!
                </ProjectCard>

                <ProjectCard
                    id="project-2"
                    title="Bunny World"
                    date="Mar 17 2023"
                    image=""
                    imageAlt="This is an image"
                    summary="Summary!!!"
                >
                    Hi!
                </ProjectCard>


                <ProjectCard
                    id="project-3"
                    title="Project 3"
                    date="Mar 20 2023"
                    image=""
                    imageAlt="This is an image"
                    summary="Summary!!!"
                >
                    Hi!
                </ProjectCard>
            </div>

            <div className="w-1/5">

            </div>


            </div>
        </div>
    )
}