import React from "react"

export default function SideNavList({children, href}) {
    return(
        <li className="pl-3 border-l text-gray-600 hover:text-black hover:border-black hover:cursor-pointer">
            <a href={ href }> {children} </a>
        </li>
    );
}