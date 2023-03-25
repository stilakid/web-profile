import React from "react"

import SideNavList from "./SideNavList"

export default function SideNav() {
    return(
        <div className="p-8">
            <nav className="flex flex-col">
                <ul className="">
                    <li className="py-3">
                        <h3><a href="#project-1"> Project 1</a></h3>
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
                        <h3><a href="#project-2"> Project 2</a></h3>
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
                        <h3><a href="#project-3"> Project 3</a></h3>
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