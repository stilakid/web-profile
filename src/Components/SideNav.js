import React from "react"

import SideNavList from "./SideNavList"

export default function SideNav() {
    return(
        <div className="fixed top-14 bottom-0 overflow-y-auto border">
            <div className="p-2 sticky top-0 bg-gray-100 w-full">
                <h1>
                    Project Navigation
                </h1>
            </div>
            

            <nav className="flex flex-col px-8">
                <ul className="">
                    <li className="py-3">
                        <h3><a href="#project-1"> Project Wallus</a></h3>
                        <ul>
                            <SideNavList href="#project-1">
                                Part 1
                            </SideNavList>

                            <SideNavList href="#project-2">
                                Part 2
                            </SideNavList>

                            <SideNavList href="#project-3">
                                Part 3
                            </SideNavList>
                        </ul>
                    </li>
                    
                    <li className="py-3">
                        <h3><a href="#project-2"> Content Management System </a></h3>
                        <ul>
                            <SideNavList href="#project-1">
                                Part 1
                            </SideNavList>

                            <SideNavList href="#project-2">
                                Part 2
                            </SideNavList>

                            <SideNavList href="#project-3">
                                Part 3
                            </SideNavList>
                        </ul>
                    </li>
                    
                    <li className="py-3">
                        <h3><a href="#project-3"> Bunny World </a></h3>
                        <ul>
                            <SideNavList href="#project-1">
                                Part 1
                            </SideNavList>

                            <SideNavList href="#project-2">
                                Part 2
                            </SideNavList>

                            <SideNavList href="#project-3">
                                Part 3
                            </SideNavList>
                        </ul>
                    </li>
                    
                    <li className="py-3">
                        <h3><a href="#project-4"> Web Profile </a></h3>
                        <ul>
                            <SideNavList href="#project-1">
                                Part 1
                            </SideNavList>

                            <SideNavList href="#project-2">
                                Part 2
                            </SideNavList>

                            <SideNavList href="#project-3">
                                Part 3
                            </SideNavList>
                        </ul>
                    </li>

                    <li className="py-3">
                        <h3><a href="#project-5"> Scrapping Carta </a></h3>
                        <ul>
                            <SideNavList href="#project-1">
                                Part 1
                            </SideNavList>

                            <SideNavList href="#project-2">
                                Part 2
                            </SideNavList>

                            <SideNavList href="#project-3">
                                Part 3
                            </SideNavList>
                        </ul>
                    </li>

                    <li className="py-3">
                        <h3><a href="#project-5"> Fun with Blender </a></h3>
                        <ul>
                            <SideNavList href="#project-1">
                                Part 1
                            </SideNavList>

                            <SideNavList href="#project-2">
                                Part 2
                            </SideNavList>

                            <SideNavList href="#project-3">
                                Part 3
                            </SideNavList>
                        </ul>
                    </li>

                    <li className="py-3">
                        <h3><a href="#project-5"> Fun with Blender </a></h3>
                        <ul>
                            <SideNavList href="#project-1">
                                Part 1
                            </SideNavList>

                            <SideNavList href="#project-2">
                                Part 2
                            </SideNavList>

                            <SideNavList href="#project-3">
                                Part 3
                            </SideNavList>
                        </ul>
                    </li>

                    <li className="py-3">
                        <h3><a href="#project-5"> Fun with Blender </a></h3>
                        <ul>
                            <SideNavList href="#project-1">
                                Part 1
                            </SideNavList>

                            <SideNavList href="#project-2">
                                Part 2
                            </SideNavList>

                            <SideNavList href="#project-3">
                                Part 3
                            </SideNavList>
                        </ul>
                    </li>

                </ul>
            </nav>
        </div>
    )
}