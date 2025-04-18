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
                    <p className="xl:text-lg">
                        The overarching goal of the project is to create a text-to-speech model that is specifically geared
                        towards helping translation of stuttered text / transcript into realistic speech output. We hope that the
                        results of this project will allow simulation of various speech disorder audio that ultimately allows
                        easier planning and development of speech-therapy sessions for speech-impaired children.
                    </p>
                </>
            }
        />
    );
}