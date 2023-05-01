import React, { useEffect, useRef } from 'react';



export default function TwoPartSection({ children, part1, part2, ...props }) {
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
        <div className='flex flex-row space-x-5'>
            <div className='flex flex-col items-center justify-center w-1/2 p-5 text-justify'>
                {part1}
            </div>
            
            <div className='flex flex-col items-center justify-center w-1/2'>
                {part2}
            </div>
        </div>
    );
}