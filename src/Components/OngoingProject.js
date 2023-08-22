// Base Custom Button Class

export default function OngoingProjects({ children, ...props }) {
    return (
        <div className="absolute w-full top-0 bottom-0 overflow-y-auto border">
            <div className="sticky p-2 top-0 bg-orange-300 w-full flex flex-row justify-center">
                <h1>
                    Ongoing Projects
                </h1>
            </div>

            <div className="p-20 w-full bg-white min-h-screen">
                <p>
                    Wow so empty...
                </p>
                <p>
                    Putting more images, videos, offsetting page anchors, replacing a with links, etc.
                </p>
            </div>
        </div>
    );
}