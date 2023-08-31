// Components
import { HashLink } from "react-router-hash-link";
import SideNavList from "./SideNavList";


export default function ProjectNavTemplate({ colorInfo, sectionLinks=[] }) {
    return(
        <nav className="flex flex-col w-full min-h-screen border-r">
            <ul className="pb-10 bg-white h-full flex-grow text-gray-600">

                {Array.isArray(sectionLinks) && 

                    sectionLinks.map(section => (Array.isArray(section) && section.length !== 0 &&
                        <li className="">
                            {Array.isArray(section[0]) && section[0].length >= 2 &&
                                <div>
                                    <h4 className="flex font-medium">
                                        <HashLink className="flex-grow py-3 px-9 hover:text-black hover:bg-blue-200"  to={`#${section[0][1]}`} smooth > {section[0][0]} </HashLink>
                                    </h4>
                                </div>
                            }
                            <ul className="pl-10">
                                {section.length > 1 &&
                                    section.slice(1).map(link => (Array.isArray(link) && link.length >= 2 && <SideNavList colorInfo={colorInfo} href={`#${link[1]}`}> {link[0]} </SideNavList>))
                                }
                            </ul>
                        </li>
                    ))
                }

            </ul>
        </nav>
    )
}