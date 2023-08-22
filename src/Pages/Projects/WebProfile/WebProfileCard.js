// Assets
import images from "../../../Assets/Images/images";
import data from '../../../Assets/Data/data';

// Components
import ProjectCard from '../../../Components/ProjectCard';


export default function WebProfileCard({ className }) {

    const webprofileColor = data.projects.webProfile.color.background;
    const webprofileBorder = data.projects.webProfile.color.border;
    const webprofileTextColor = data.projects.webProfile.color.text;

    return (
        <ProjectCard
            id="project-profile"
            className={className}
            to='/projects/webprofile'
            title="Web Profile"
            date="Mar 17 2023"
            image={images.project.webProfile.preview}
            imageAlt="This is an image"
            backgroundColor={webprofileColor}
            textColor={webprofileTextColor}
            summary={
                <>
                    <p>Oh look! It's my webprofile, but you're already on it... Wanna see how I made it? Click me!</p>
                </>
            }
        />
    );
}