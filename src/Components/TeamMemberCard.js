import React from 'react';


// Base Custom Button Class

export default function TeamMemberCard({ children, name, designation, contactDetails, ...props }) {
    return (
        <div className="p-5 rounded-2xl border shadow-md m-5 flex flex-row">
            <div className="w-1/3">
                <p> {name} </p>
                <p><em> {designation} </em></p>
                {contactDetails}
            </div>
            <div className="w-2/3 b">
                {children}
            </div>
        </div>
    );
}