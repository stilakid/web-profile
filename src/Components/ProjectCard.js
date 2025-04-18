import { useState } from 'react';

// Router
import { Link } from 'react-router-dom';

// Components
import VideoAutoPlay from './VideoAutoPlay';

// Animation
import { useSpring, animated } from "@react-spring/web";


// the children is the extra stuff you want to show when someone clicks on the card.
export default function ProjectCard({ title, date, image, imageAlt, summary, colorInfo, className, to, video}) {

    // For Card    
    const [mouseIsHovering, setMouseIsHovering] = useState(false);
    const hoverScaleStyle = useSpring({
        scale: mouseIsHovering ? 1.01 : 1
    });

    const backgroundColor = colorInfo.background;
    const borderColor = colorInfo.border;
    const textColor = colorInfo.text;

    return (
            <Link className={`${className}`} to={to} >
                <animated.div onMouseEnter={() => setMouseIsHovering(true)} onMouseLeave={() => setMouseIsHovering(false)} style={{...hoverScaleStyle}} className='flex' >

                    <div className={`flex flex-col-reverse sm:flex-row hover:cursor-pointer border ${borderColor} rounded-xl shadow-md ${textColor} p-8 ${backgroundColor}`}>
                        <div className="flex flex-col sm:w-1/2 md:w-7/12 lg:w-1/2 xl:w-6/12 pr-5">
                            <h1 className="xl:text-4xl font-semibold tracking-wide pb-2">{ title }</h1>
                            <h5 className='text-gray-200 mb-5'>{ date }</h5>
                            { summary }
                        </div>

                        <div className="sm:w-1/2 md:w-5/12 lg:w-1/2 xl:w-6/12 overflow-auto flex flex-col justify-center">
                            {video ? 
                                <VideoAutoPlay className='rounded-2xl'>
                                    <source src={ video } type="video/mp4"/>
                                </VideoAutoPlay>
                                : <img src={ image } alt={ imageAlt } className={`rounded-2xl border ${borderColor}`} />
                            }
                            
                        </div>
                    </div>

                </animated.div>  
            </Link>
    );
}