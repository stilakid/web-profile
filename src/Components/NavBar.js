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
        <nav className='flex flex-row bg-indigo-500 items-center'>
            <Link to='/' className='flex-grow p-2 text-xl'>Home</Link>

            <div className='flex sm:hidden flex-col bg-red-900 p-2'>
                <FontAwesomeIcon
                    icon={faBars}
                    onClick={() => setShowMenu(!showMenu)}
                />

                {
                    maskTransitions((style, item) => (
                        item &&
                        <animated.div
                            style={style}
                            className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
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
                            className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow"
                        >
                            <ul className='flex flex-col justify-center items-center'>
                    
                                <CustomLink onClick={() => setShowMenu(false)} to='/' className='py-2 border-solid border-t border-b' > Home </CustomLink>
                                <CustomLink onClick={() => setShowMenu(false)} to='/projects' className='py-2 border-t border-b' > Projects </CustomLink>
                                <CustomLink onClick={() => setShowMenu(false)} to='/dance' className='py-2 border-t border-b'> Dance </CustomLink>
                                <CustomLink onClick={() => setShowMenu(false)} to='/about' className='py-2 border-t border-b'> About </CustomLink>
                            </ul>
                        </animated.div>
                    ))
                }
            </div>

            <div className='hidden sm:flex flex-row'>
                <ul className='flex flex-row justify-center items-center'>
                    <CustomLink to='/projects' className='p-2' > Projects </CustomLink>
                    <CustomLink to='/dance' className='p-2'> Dance </CustomLink>
                    <CustomLink to='/about' className='p-2'> About </CustomLink>
                </ul>
            </div>
        </nav>
    );
}


const CustomLink = ({ to, children, ...props }) => {
    return(
        <li className='' >
            <Link  to={to} {...props}>
                {children}
            </Link>
        </li>
    );
}