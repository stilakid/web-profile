// Base Custom Button Class

export default function Button({ children, ...props }) {
    return(
        <button {...props} >
            {children}
        </button>
    );
}


const ToolsButton = ({ children, className, ...props }) => {
    return(
        <Button
            {...props}
            className = {`px-3 py-1 rounded-xl border border-white text-white text-xs ${className}`}
        >
            {children}
        </Button>
    )
}

export {ToolsButton};