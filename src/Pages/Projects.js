import React from "react"

// Components
import SideNav from "../Components/SideNav"
import ProjectList from "../Components/ProjectList"
import OngoingProjects from "../Components/OngoingProject"



export default function Projects() {    

    return(
        <div className="flex flex-col flex-grow items-center justify-center">
            <div className="flex flex-row flex-grow w-full max-w-screen-3xl bg-white">


                <div className="w-1/5 relative pr-4">
                    <SideNav />
                </div>

                
                <div className='w-3/5 relative'>
                    <ProjectList />
                </div>

                <div className="w-1/5 relative flex flex-col items-center">
                    <OngoingProjects />
                </div>


            </div>
        </div>
    )
}