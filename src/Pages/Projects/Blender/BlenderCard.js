// Assets
import images from "../../../Assets/Images/images"
import data from "../../../Assets/Data/data";

// Components
import ProjectCard from '../../../Components/ProjectCard';


export default function BlenderCard({ className }) {

    const blenderColor = data.projects.blender.color.background;
    const blenderBorder = data.projects.blender.color.border;
    const blenderTextColor = data.projects.blender.color.text;

    return (
        <ProjectCard
            id="project-blender"
            className={className}
            to='/projects/blender'
            title="Fun with Blender"
            date="Dec 09 2022"
            image={images.project.blender.preview}
            imageAlt="This is an image"
            backgroundColor={blenderColor}
            textColor={blenderTextColor}
            summary={
                <>
                    <p className="mb-3"> A blender noob recreates a scene you'd expect to see in Need for Speed or Fast and Furious. </p>

                    <p> It would be easy, they said. There are tonnes of blender tutorials online, they said. Well at least, they were right about the latter. </p>
                </>
            }
        />
    );
}