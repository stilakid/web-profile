// Assets
import images from "../../../Assets/Images/images";
import data from '../../../Assets/Data/data';

// Components
import ProjectCard from '../../../Components/ProjectCard';


export default function CS137ACard({ className }) {

    return (
        <ProjectCard
            className={className}
            to={data.projects.cs137a.url}
            title={data.projects.cs137a.title}
            date={data.projects.cs137a.date}
            image={images.projects.cs137a.preview}
            imageAlt="This is an image"
            colorInfo={data.projects.cs137a.color}
            summary={
                <>
                    <p className="xl:text-lg">Oh look! It's my webprofile, but you're already on it... Wanna see how I made it? Click me!</p>
                </>
            }
        />
    );
}