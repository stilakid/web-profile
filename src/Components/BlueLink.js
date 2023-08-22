// Base Custom Button Class

export default function BlueLink({ children, href, className, ...props }) {
    return(
        <a {...props} href={href} className={`text-blue-400 ${className} `} target="_blank" rel="noopener noreferrer" >
            {children}
        </a>
    );
}


BlueLink.Underline = ({ children, href, className, ...props }) => {
    return(
        <BlueLink {...props} href={href} className={`underline underline-offset-2 ${className}`} >
            {children}
        </BlueLink>
    )
}

