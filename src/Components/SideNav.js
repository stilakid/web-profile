import React from "react"


import { HashLink } from "react-router-hash-link"
import SideNavList from "./SideNavList"

export default function SideNav() {
    return(
        <div className="absolute w-full top-0 bottom-0 overflow-y-auto border">
            <div className="p-2 sticky top-0 bg-white bg-opacity-50 backdrop-blur border-b w-full flex flex-row justify-center">
                <h1>
                    Project Navigation
                </h1>
            </div>
            

            <nav className="flex flex-col px-8 w-full min-h-screen">
                <ul className="pb-10">
                    <li className="mt-10 rounded-2xl bg-white shadow-md">
                        <div className="p-3 bg-blue-500 rounded-t-2xl">
                            <h3 className="text-white"><HashLink to="/projects#project-wallus" smooth> Project Wallus</HashLink></h3>
                        </div>
                        <ul className="px-3 pb-3">
                            <SideNavList href="/projects#project-wallus-1">
                                What is Wallus?
                            </SideNavList>

                            <SideNavList href="/projects#project-wallus-2">
                                Concept Video
                            </SideNavList>

                            <SideNavList href="/projects#project-wallus-3">
                                Demo
                            </SideNavList>
                            <SideNavList href="/projects#project-wallus-4">
                                Try the App!
                            </SideNavList>
                            <SideNavList href="/projects#project-wallus-5">
                                Our Team
                            </SideNavList>
                            <SideNavList href="/projects#project-wallus-6">
                                Outcome & Reflection
                            </SideNavList>

                        </ul>
                    </li>
                    
                    <li className="mt-10 rounded-2xl bg-white shadow-md">
                        <div className="p-3 bg-cyan-500 rounded-t-2xl">
                            <h3 className="text-white"><HashLink to="/projects#project-cms" smooth> Content Management System </HashLink></h3>
                        </div>
                        <ul className="px-3 pb-3">
                            <SideNavList href="/projects#project-cms-1">
                                What is the Project About?
                            </SideNavList>

                            <SideNavList href="/projects#project-cms-2">
                                Features
                            </SideNavList>

                            <SideNavList href="/projects#project-cms-3">
                                Outcome & Reflection
                            </SideNavList>
                        </ul>
                    </li>
                    
                    <li className="mt-10 rounded-2xl bg-white shadow-md">
                        <div className="p-3 bg-purple-500 rounded-t-2xl">
                            <h3 className="text-white"><HashLink to="/projects#project-bunny" smooth> Bunny World </HashLink></h3>
                        </div>
                        <ul className="px-3 pb-3">
                            <SideNavList href="/projects#project-bunny-1">
                                What is Bunny World?
                            </SideNavList>

                            <SideNavList href="/projects#project-bunny-2">
                                Script Manager Details
                            </SideNavList>

                            <SideNavList href="/projects#project-bunny-3">
                                Our Team
                            </SideNavList>

                            <SideNavList href="/projects#project-bunny-3">
                                Outcome & Reflection
                            </SideNavList>
                        </ul>
                    </li>
                    
                    <li className="mt-10 rounded-2xl bg-white shadow-md">
                        <div className="p-3 bg-orange-500 rounded-t-2xl">
                            <h3 className="text-white"><HashLink to="/projects#project-profile" smooth> Web Profile </HashLink></h3>
                        </div>
                        <ul className="px-3 pb-3">
                            <SideNavList href="/projects#project-profile-1">
                                About this Project
                            </SideNavList>
                        </ul>
                    </li>

                    <li className="mt-10 rounded-2xl bg-white shadow-md">
                        <div className="p-3 bg-rose-500 rounded-t-2xl">
                            <h3 className="text-white"><HashLink to="/projects#project-carta" smooth> Scrapping Carta </HashLink></h3>
                        </div>
                        <ul className="px-3 pb-3">
                            <SideNavList href="/projects#project-carta-1">
                                About this Project
                            </SideNavList>

                            <SideNavList href="/projects#project-carta-2">
                                Data Collection
                            </SideNavList>

                            <SideNavList href="/projects#project-carta-3">
                                Outcome & Reflection
                            </SideNavList>
                        </ul>
                    </li>

                    <li className="mt-10 rounded-2xl bg-white shadow-md">
                        <div className="p-3 bg-gray-500 rounded-t-2xl">
                            <h3 className="text-white"><HashLink to="/projects#project-blender" smooth> Fun with Blender </HashLink></h3>
                        </div>
                        <ul className="px-3 pb-3">
                            <SideNavList href="/projects#project-blender-1">
                                About this Project
                            </SideNavList>

                            <SideNavList href="/projects#project-blender-2">
                                Rendered Image
                            </SideNavList>

                            <SideNavList href="/projects#project-blender-3">
                                Report
                            </SideNavList>

                            <SideNavList href="/projects#project-blender-4">
                                Assets
                            </SideNavList>

                            <SideNavList href="/projects#project-blender-5">
                                Outcome & Reflection
                            </SideNavList>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    )
}