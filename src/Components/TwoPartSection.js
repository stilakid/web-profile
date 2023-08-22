import { useEffect, useRef } from 'react';



export default function TwoPartSection({ children, part1, part2, className, ...props }) {
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
        <div className={`border rounded-2xl shadow-md sm:border-0 sm:rounded-none sm:shadow-none flex flex-col sm:flex-row space-x-5 ${className}`}>
            <div className='flex flex-col items-center justify-center sm:w-1/2 p-5 text-justify'>
                {part1}
            </div>
            
            <div className='flex flex-col items-center justify-center sm:w-1/2 p-5 text-justify'>
                {part2}
            </div>
        </div>
    );
}