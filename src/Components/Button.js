import React from 'react';


// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';







// Base Custom Button Class

export default function Button({ children, ...props }) {
    return (
        <button {...props} >
            {children}
        </button>
    );
}