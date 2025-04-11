// Assets
import images from "../../../Assets/Images/images";
import data from '../../../Assets/Data/data';

// Components
import ProjectCard from '../../../Components/ProjectCard';


export default function CS224SCard({ className }) {

    return (
        <ProjectCard
            className={className}
            to={data.projects.cs224s.url}
            title={data.projects.cs224s.title}
            date={data.projects.cs224s.date}
            image={images.projects.cs224s.preview}
            imageAlt="This is an image"
            colorInfo={data.projects.cs224s.color}
            summary={
                <>
                    <p className="xl:text-lg">Oh look! It's my webprofile, but you're already on it... Wanna see how I made it? Click me!</p>
                </>
            }
        />
    );
}