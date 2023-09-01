import { useState } from 'react';

// Router
import { Link } from 'react-router-dom';

// Animation
import { useSpring, animated } from "@react-spring/web";


// the children is the extra stuff you want to show when someone clicks on the card.
export default function HobbyCard({ text, image, imageAlt="", className, to}) {

    // For Card    
    const [mouseIsHovering, setMouseIsHovering] = useState(false);
    const hoverScaleStyle = useSpring({
        scale: mouseIsHovering ? 1.01 : 1
    });


    return (
            <Link className={`${className}`} to={to} >
                <animated.div className="w-full h-full relative overflow-hidden hover:cursor-pointer flex justify-center items-center" onMouseEnter={() => setMouseIsHovering(true)} onMouseLeave={() => setMouseIsHovering(false)} style={{...hoverScaleStyle}} >
                    <div className="absolute bg-black z-10 w-full h-full opacity-30 hover:opacity-0" />
                    <img className="object-cover min-h-full min-w-full" src={image} alt={imageAlt} />
                    <p className="absolute text-6xl font-semibold tracking-wide p-4 rounded-2xl bg-opacity-70 bg-black text-neutral-pale"> {text} </p>
                </animated.div>
            </Link>
    );
}