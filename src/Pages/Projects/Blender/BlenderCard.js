// Assets
import images from "../../../Assets/Images/images"
import data from "../../../Assets/Data/data";

// Components
import ProjectCard from '../../../Components/ProjectCard';


export default function BlenderCard({ className }) {

    return (
        <ProjectCard
            className={className}
            to={data.projects.blender.url}
            title={data.projects.blender.title}
            date={data.projects.blender.date}
            image={images.projects.blender.preview}
            imageAlt="This is an image"
            colorInfo={data.projects.blender.color}
            summary={
                <>
                    <p className="mb-3 xl:text-lg"> A blender noob recreates a scene you'd expect to see in Need for Speed or Fast and Furious. </p>

                    <p className="xl:text-lg"> It would be easy, they said. There are tonnes of blender tutorials online, they said. Well at least, they were right about the latter. </p>
                </>
            }
        />
    );
}