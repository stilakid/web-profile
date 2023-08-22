import { HashLink } from "react-router-hash-link";

export default function SideNavList({children, href}) {
    return(
        <li className="pl-3 border-l text-gray-600 hover:text-black hover:border-black hover:cursor-pointer">
            <HashLink to={ href } smooth> {children} </HashLink>
        </li>
    );
}