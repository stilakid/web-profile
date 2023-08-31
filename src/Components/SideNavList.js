import { HashLink } from "react-router-hash-link";

export default function SideNavList({children, href, colorInfo}) {

    console.log("color: ", colorInfo);

    const background = colorInfo.background;
    const border = colorInfo.border;
    const text = colorInfo.text;
    const hover = colorInfo.hover;

    return(
        <li className="flex">
            <HashLink className={`flex-grow border-l pl-3 py-1.5 font-light text-gray-600 hover:text-black hover:border-black hover:cursor-pointer hover:border-l-2 hover:bg-gradient-to-r from-blue-50 to-blue-200`} to={ href } smooth> {children} </HashLink>
        </li>
    );
}