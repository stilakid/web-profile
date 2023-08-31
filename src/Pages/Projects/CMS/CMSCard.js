// Assets
import images from "../../../Assets/Images/images";
import data from '../../../Assets/Data/data';

// Components
import ProjectCard from '../../../Components/ProjectCard';


export default function CMSCard({ className }) {

    return (
        <ProjectCard
            className={className}
            to={data.projects.sura.url}
            title={data.projects.sura.title}
            date={data.projects.sura.date}
            image={images.project.sura.preview}
            imageAlt="This is an image"
            colorInfo={data.projects.sura.color}
            summary={
                <>
                    <p>Want to build a website for your organization but don't want to code it yourself? Use my content managemnt system instead!</p>
                </>
            }
        />
    );
}