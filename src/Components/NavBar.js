import React, { useState } from 'react';

// Router
import { Link } from 'react-router-dom';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

// Animation
import { useTransition, animated } from '@react-spring/web';


export default function NavBar() {
    const [showMenu, setShowMenu] = useState(false);
    
    const maskTransitions = useTransition(showMenu, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    });

    const menuTransitions = useTransition(showMenu, {
        from: { opacity: 0, transform: 'translateX(-100%)' },
        enter: { opacity: 1, transform: 'translateX(0%)' },
        leave: { opacity: 0, transform: 'translateX(-100%)' },
    });


    return (
        <div className="sticky top-0 left-0 right-0 z-50 bg-orange-400 bg-opacity-90 backdrop-blur flex flex-row items-center justify-center">
            <nav className='flex flex-row h-14 items-center w-full max-w-screen-2xl px-8'>
                <Link to='/' className='flex-grow p-2 text-xl'>Home</Link>

                <div className='flex sm:hidden flex-col bg-orange-700 rounded-md hover:cursor-pointer p-2'>
                    <FontAwesomeIcon
                        icon={faBars}
                        onClick={() => setShowMenu(!showMenu)}
                    />

                    {
                        maskTransitions((style, item) => (
                            item &&
                            <animated.div
                                style={style}
                                className="bg-black-t-50 fixed top-0 left-0 w-full h-screen z-40"
                                onClick={() => {
                                    setShowMenu(false);
                                    console.log("Show Menu Toggled: " + showMenu);
                                }}
                            >
                            </animated.div>
                        ))
                    }

                    {
                        menuTransitions((style, item) => (
                            item &&
                            <animated.div
                                style={style}
                                className="fixed bg-gray-200 top-0 left-0 w-3/5 h-screen z-50 shadow"
                            >
                                <ul className='flex flex-col justify-center items-center'>
                        
                                    <CustomLink onClick={() => setShowMenu(false)} to='/' className='w-full border-b border-black py-2 hover:bg-black/10' > <span className='text-xl'>Home</span> </CustomLink>
                                    <CustomLink onClick={() => setShowMenu(false)} to='/projects' className='w-full border-b border-black py-2 hover:bg-black/20' > <span className='text-xl'>Projects</span> </CustomLink>
                                    <CustomLink onClick={() => setShowMenu(false)} to='/skills' className='w-full border-b border-black py-2 hover:bg-black/30' > <span className='text-xl'>Skills</span> </CustomLink>
                                    <CustomLink onClick={() => setShowMenu(false)} to='/hobbies' className='w-full border-b border-black py-2 hover:bg-black/40'> <span className='text-xl'>Hobbies</span> </CustomLink>
                                </ul>
                            </animated.div>
                        ))
                    }
                </div>

                <div className='hidden sm:flex flex-row'>
                    <ul className='flex flex-row justify-center items-center'>
                        <CustomLink to='/projects' className='p-2' > Projects </CustomLink>
                        <CustomLink to='/skills' className='p-2' > Skills </CustomLink>
                        <CustomLink to='/hobbies' className='p-2'> Hobbies </CustomLink>
                    </ul>
                </div>
            </nav>
        </div>
        
    );
}


const CustomLink = ({ to, children, className, ...props }) => {
    return(
        <li className={className} >
            <Link className='w-full flex justify-center items-center' to={to} {...props}>
                {children}
            </Link>
        </li>
    );
}