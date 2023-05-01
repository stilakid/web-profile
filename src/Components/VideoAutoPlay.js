import React, { useEffect, useRef } from 'react';


export default function VideoAutoPlay({ children, className, src, ...props }) {
    const videoEl = useRef(null);

    const attemptPlay = () => {
        videoEl &&
            videoEl.current &&
            videoEl.current.play().catch(error => {
                console.error("Error attempting to play", error);
            });
    };

    useEffect(() => {
        attemptPlay();
    }, []);


    return (
        <video className={`${className}`} playsinline autoplay muted loop ref={videoEl}>
            {children}
        </video>
    );
}