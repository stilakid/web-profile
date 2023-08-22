// Assets
import images from "../../../Assets/Images/images";
import data from '../../../Assets/Data/data';

// Components
import ProjectCard from '../../../Components/ProjectCard';


export default function CMSCard({ className }) {

    const CMSColor = data.projects.sura.color.background;
    const CMSBorder = data.projects.sura.color.border;
    const CMSTextColor = data.projects.sura.color.text;

    return (
        <ProjectCard
            id="project-cms"
            className={className}
            to='/projects/cms'
            title="Content Management System"
            date="Mar 23 2022"
            image={images.project.sura.preview}
            imageAlt="This is an image"
            backgroundColor={CMSColor}
            textColor={CMSTextColor}
            summary={
                <>
                    <p>Want to build a website for your organization but don't want to code it yourself? Use my content managemnt system instead!</p>
                </>
            }
        />
    );
}