// Assets
import images from "../../../Assets/Images/images";
import data from '../../../Assets/Data/data';

// Components
import ProjectCard from '../../../Components/ProjectCard';


export default function WebProfileCard({ className }) {

    return (
        <ProjectCard
            className={className}
            to={data.projects.webProfile.url}
            title={data.projects.webProfile.title}
            date={data.projects.webProfile.date}
            image={images.projects.webProfile.preview}
            imageAlt="This is an image"
            colorInfo={data.projects.webProfile.color}
            summary={
                <>
                    <p>Oh look! It's my webprofile, but you're already on it... Wanna see how I made it? Click me!</p>
                </>
            }
        />
    );
}