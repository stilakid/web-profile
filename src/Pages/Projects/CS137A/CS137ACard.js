// Assets
import images from "../../../Assets/Images/images";
import videos from "../../../Assets/Videos/videos";
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
            video={videos.projects.cs137a.preview}
            imageAlt="This is an image"
            colorInfo={data.projects.cs137a.color}
            summary={
                <>
                    <p className="mb-3 xl:text-lg">
                        I programmed a TurtleBot equipped with a LiDAR and a camera to independently navigate its surroundings until it had completely explored its environment.
                        Additionally, it stopped for 5 seconds whenever the camera detected a miniature red stop sign.
                    </p>

                    <p className='xl:text-lg'>
                        Details are on the way.
                    </p>
                </>
            }
        />
    );
}