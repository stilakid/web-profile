import React from "react"

// Components
import SideNav from "../Components/SideNav"
import ProjectList from "../Components/ProjectList"
import OngoingProjects from "../Components/OngoingProject"


export default function Projects() {    

    return(
        <div className="flex flex-col flex-grow items-center justify-center">
            <div className="flex flex-row flex-grow w-full max-w-screen-3xl bg-white">


                <div className="xl:w-1/5 lg:w-4/12 lg:flex hidden relative pr-4">
                    <SideNav />
                </div>

                
                <div className='xl:w-4/5 lg:w-8/12 w-full relative'>
                    <ProjectList />
                </div>

                {/* <div className="xl:w-1/5 lg:w-1/5 relative flex flex-col items-center">
                    <OngoingProjects />
                </div> */}
            </div>
        </div>
    )
}