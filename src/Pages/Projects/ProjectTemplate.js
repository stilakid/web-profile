// Assets
import data from '../../Assets/Data/data';

// Router
import { useParams } from 'react-router-dom';

// Components
import ProjectContentTemplate from '../../Components/ProjectContentTemplate';
import ProjectNavTemplate from '../../Components/ProjectNavTemplate';


export default function ProjectTemplate() {

    const { id } = useParams();
    const project = data.projects[id];

    let projectNav;
    let projectDetails;

    if (!project) {
        projectNav = <div className='flex justify-center items-center h-full'> Oh no! </div>
        projectDetails = <div className='flex justify-center items-center h-full'> Invalid project ID! Please review the URL! </div>
    } else {
        projectNav = <ProjectNavTemplate
                        sectionLinks={project.navLinks}
                    />;

        projectDetails = <ProjectContentTemplate
                        colorInfo = {project.color}
                        title = {project.title}
                        date = {project.date}
                        githubUrl = {project.githubUrl}
                        toolsUsed = {project.toolsUsed}
                        caption = {project.caption}
                        projectDetails = {project.details}
                    />;
    }

    return (
        <div className="flex flex-row flex-grow w-full">
            <LeftPane content={projectNav} />

            <RightPane content={projectDetails} />
        </div>
    );
}


const LeftPane = ({ content }) => (
    <div className="xl:w-1/5 lg:w-1/4 lg:flex hidden relative">
        <ScrollableAreaWithHeader header="Navigation" >
            {content}
        </ScrollableAreaWithHeader>
    </div>
)


const RightPane = ({ content }) => (
    <div className="xl:w-4/5 lg:w-3/4 w-full relative">
        <ScrollableAreaWithHeader header="Project Details" >
            {content}
        </ScrollableAreaWithHeader>
    </div>
)


const ScrollableAreaWithHeader = ({ header, children }) => (
    <div className='absolute w-full top-0 bottom-0 overflow-y-auto'>
        <div className="p-2 shadow-2xl sticky top-0 bg-white bg-opacity-50 backdrop-blur border-b border-neutral-regular w-full flex flex-row justify-center">
            <h3>
                {header}
            </h3>
        </div>
        {children}
    </div>
)

