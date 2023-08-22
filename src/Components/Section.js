// Base Custom Button Class

export default function Section({ children, title, bgColor, borderColor, textColor, ...props }) {

    // The negative margin is here to offset the position of top when using links that 
    // lead to elsewhere within the same page so that the anchor is not 
    // obstructed by the fixed title, i.e., "Completed Projects".

    return (
        <div className="p-1 pt-14 -mt-10" {...props} >
            <div className={`p-2 rounded-xl ${bgColor}`}>
                <h2 className={`${textColor}`}>{title}</h2>
            </div>
            <div className={`pl-5 ml-2 mt-2 border-l-2 ${borderColor}`}>
                {children}
            </div>
        </div>
    );
}