// Assets
import images from "../../../Assets/Images/images";
import data from '../../../Assets/Data/data';

// Components
import ProjectCard from '../../../Components/ProjectCard';


export default function ModerationCard({ className }) {

    return (
        <ProjectCard
            className={className}
            to={data.projects.moderation.url}
            title={data.projects.moderation.title}
            date={data.projects.moderation.date}
            image={images.projects.moderation.preview}
            imageAlt="This is an image"
            colorInfo={data.projects.moderation.color}
            summary={
                <>
                    <p>Oh look! It's my webprofile, but you're already on it... Wanna see how I made it? Click me!</p>
                </>
            }
        />
    );
}