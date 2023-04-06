import React, { useState } from 'react';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinimize } from '@fortawesome/free-solid-svg-icons';

// Animation
import { useSpring, animated, config } from "@react-spring/web";
import useMeasure from "react-use-measure";

// the children is the extra stuff you want to show when someone clicks on the card.
export default function ProjectCard({ children, id, title, date, image, imageAlt, summary, backgroundColor, titleCardDetails}) {

    // For Card    
    const [mouseIsHovering, setMouseIsHovering] = useState(false);
    const hoverScaleStyle = useSpring({
        scale: mouseIsHovering ? 1.01 : 1
    });

    const [isOpen, setIsOpen] = useState(false);


    // For Card Content upon clicking
    const [measureRef, bounds] = useMeasure();

    const styles = useSpring({
        config: config.slow,
        from: {
            height: 0,
            opacity: 0,
        },
        to: {
            height: isOpen ? bounds.height : 0,
            opacity: isOpen ? 1 : 0
        }
    });


    // For Card Summary Content
    const [measureRefSummary, boundsSummary ] = useMeasure();

    const stylesSummary = useSpring({
        config: config.slow,
        from: {
            height: boundsSummary.height,
            opacity: 1,
        },
        to: {
            height: isOpen ? 0 : boundsSummary.height,
            opacity: isOpen ? 0 : 1
        }
    });


    // For Minimize Icon
    const [mouseIsHoveringIcon, setMouseIsHoveringIcon] = useState(false);
    const hoverScaleStyleIcon = useSpring({
        scale: mouseIsHoveringIcon ? 1.2 : 1
    });


    return (
            <animated.div onMouseEnter={() => setMouseIsHovering(true)} onMouseLeave={() => setMouseIsHovering(false)} style={{...hoverScaleStyle}} className="m-5">

                <animated.div onClick={() => setIsOpen(true)} id={id} style={{ overflow: "hidden", ...stylesSummary }}>
                    <div className={`flex flex-row rounded-2xl border shadow-md p-5 ${backgroundColor}`} ref={measureRefSummary}>
                        <div className="flex flex-col w-1/2 pr-5">
                            <h1>{ title }</h1>
                            <h4 className='text-gray-400 mb-5'>{ date }</h4>
                            { summary }
                        </div>

                        <div className="w-1/2 overflow-auto">
                            <img src={ image } alt={ imageAlt } className="rounded-2xl border" />
                        </div>
                    </div>
                    
                </animated.div>


                <animated.div style={{ overflow: "hidden", ...styles }}>
                    <div ref={measureRef} className={`rounded-2xl border shadow-md`}>
                        <div className={`relative p-5 rounded-t-2xl ${backgroundColor}`}>
                            <animated.div
                                onClick={() => setIsOpen(false)}
                                className='absolute right-0 p-1 mr-5 hover:cursor-pointer'
                                style={{...hoverScaleStyleIcon}}
                                onMouseEnter={() => setMouseIsHoveringIcon(true)}
                                onMouseLeave={() => setMouseIsHoveringIcon(false)}
                            >
                                
                                <FontAwesomeIcon
                                    icon={faMinimize}
                                    size='xl'
                                />

                            </animated.div>
                            
                            <h1>{ title} </h1>
                            <h4 className='text-gray-400'>{ date }</h4>
                            {titleCardDetails}
                        </div>
                        
                        <div className='rounded-b-2xl bg-whit p-5'>
                            {children}
                        </div>                        
                    </div>
                </animated.div>

            </animated.div>        
    );
}