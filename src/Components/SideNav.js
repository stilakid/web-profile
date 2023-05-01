import React from "react"

import SideNavList from "./SideNavList"

export default function SideNav() {
    return(
        <div className="absolute w-full top-0 bottom-0 overflow-y-auto border">
            <div className="p-2 sticky top-0 bg-orange-300 w-full flex flex-row justify-center">
                <h1>
                    Project Navigation
                </h1>
            </div>
            

            <nav className="flex flex-col px-8 w-full bg-white min-h-screen">
                <ul className="pb-10">
                    <li className="mt-10 rounded-2xl shadow-md">
                        <div className="p-3 bg-blue-200 rounded-t-2xl">
                            <h3><a href="#project-wallus"> Project Wallus</a></h3>
                        </div>
                        <ul className="px-3 pb-3">
                            <SideNavList href="#project-wallus-1">
                                What is Wallus?
                            </SideNavList>

                            <SideNavList href="#project-wallus-2">
                                Concept Video
                            </SideNavList>

                            <SideNavList href="#project-wallus-3">
                                Demo
                            </SideNavList>
                            <SideNavList href="#project-wallus-4">
                                Try the App!
                            </SideNavList>
                            <SideNavList href="#project-wallus-5">
                                Our Team
                            </SideNavList>
                            <SideNavList href="#project-wallus-6">
                                Outcome & Reflection
                            </SideNavList>

                        </ul>
                    </li>
                    
                    <li className="mt-10 rounded-2xl shadow-md">
                        <div className="p-3 bg-cyan-200 rounded-t-2xl">
                            <h3><a href="#project-cms"> Content Management System </a></h3>
                        </div>
                        <ul className="px-3 pb-3">
                            <SideNavList href="#project-cms-1">
                                What is the Project About?
                            </SideNavList>

                            <SideNavList href="#project-cms-2">
                                Features
                            </SideNavList>

                            <SideNavList href="#project-cms-3">
                                Outcome & Reflection
                            </SideNavList>
                        </ul>
                    </li>
                    
                    <li className="mt-10 rounded-2xl shadow-md">
                        <div className="p-3 bg-purple-200 rounded-t-2xl">
                            <h3><a href="#project-bunny"> Bunny World </a></h3>
                        </div>
                        <ul className="px-3 pb-3">
                            <SideNavList href="#project-bunny-1">
                                What is Bunny World?
                            </SideNavList>

                            <SideNavList href="#project-bunny-2">
                                Script Manager Details
                            </SideNavList>

                            <SideNavList href="#project-bunny-3">
                                Our Team
                            </SideNavList>

                            <SideNavList href="#project-bunny-3">
                                Outcome & Reflection
                            </SideNavList>
                        </ul>
                    </li>
                    
                    <li className="mt-10 rounded-2xl shadow-md">
                        <div className="p-3 bg-orange-200 rounded-t-2xl">
                            <h3><a href="#project-profile"> Web Profile </a></h3>
                        </div>
                        <ul className="px-3 pb-3">
                            <SideNavList href="#project-profile-1">
                                About this Project
                            </SideNavList>
                        </ul>
                    </li>

                    <li className="mt-10 rounded-2xl shadow-md">
                        <div className="p-3 bg-rose-200 rounded-t-2xl">
                            <h3><a href="#project-carta"> Scrapping Carta </a></h3>
                        </div>
                        <ul className="px-3 pb-3">
                            <SideNavList href="#project-carta-1">
                                About this Project
                            </SideNavList>

                            <SideNavList href="#project-carta-2">
                                Data Collection
                            </SideNavList>

                            <SideNavList href="#project-carta-3">
                                Outcome & Reflection
                            </SideNavList>
                        </ul>
                    </li>

                    <li className="mt-10 rounded-2xl shadow-md">
                        <div className="p-3 bg-gray-200 rounded-t-2xl">
                            <h3><a href="#project-blender"> Fun with Blender </a></h3>
                        </div>
                        <ul className="px-3 pb-3">
                            <SideNavList href="#project-blender-1">
                                About this Project
                            </SideNavList>

                            <SideNavList href="#project-blender-2">
                                Rendered Image
                            </SideNavList>

                            <SideNavList href="#project-blender-3">
                                Report
                            </SideNavList>

                            <SideNavList href="#project-blender-4">
                                Assets
                            </SideNavList>

                            <SideNavList href="#project-blender-5">
                                Outcome & Reflection
                            </SideNavList>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    )
}