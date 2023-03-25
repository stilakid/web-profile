import React from 'react';





// the children is the extra stuff you want to show when someone clicks on the card.
export default function ProjectCard({ children, title, date, image, imageAlt, summary }) {
    return (
        <div className="flex flex-row p-5 rounded-2xl border shadow-md m-5" >

            <div className="flex flex-col w-1/2">
                <h1>{ title }</h1>
                <h4 className='text-gray-400 mb-5'>{ date }</h4>
                <p> { summary } </p>
            </div>

            <div className="w-1/2">
                <img src={ image } alt={ imageAlt } className="rounded-2xl" />
            </div>

            


            <div className="hidden">
                {children}
            </div>
        </div>
    );
}