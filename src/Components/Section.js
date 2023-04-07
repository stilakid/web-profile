import React from 'react';


// Base Custom Button Class

export default function Section({ children, title, bgColor, borderColor, textColor, ...props }) {
    return (
        <div className="p-1 mt-5" {...props} >
            <div className={`p-2 rounded-xl ${bgColor}`}>
                <h2 className={`${textColor}`}>{title}</h2>
            </div>
            <div className={`pl-5 ml-2 mt-2 border-l-2 ${borderColor}`}>
                {children}
            </div>
        </div>
    );
}