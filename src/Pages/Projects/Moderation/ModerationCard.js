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
                    <p className="mb-3 xl:text-lg">
                        With the ability to freely express oneself on the web comes profound responsiblity. 
                        However, not all users are responsible. How can we ensure that our 
                        online platform is safe for the masses?
                    </p>

                    <p className="mb-3 xl:text-lg">
                        Here, we address one of the biggest issues plaguing the internet in this 
                        day and age: adult nuidity and child sexual abuse.
                    </p>

                    <p className="xl:text-lg">
                        We explore ways in which we can effectively moderate content on our platform.
                    </p>
                </>
            }
        />
    );
}