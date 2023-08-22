// Assets
import data from '../../../Assets/Data/data';

// Components
import ProjectPageTemplate from '../../../Components/ProjectPageTemplate';
import {BlenderCaption, BlenderContent} from './BlenderContent';
import SideNav from '../../../Components/SideNav';
import ProjectContentTemplate from '../../../Components/ProjectContentTemplate';


export default function BlenderPage({ children, className, ...props }) {

    const sidenav = <SideNav />;

    const content = <ProjectContentTemplate
                        colorInfo = {data.projects.blender.color}
                        title = {data.projects.blender.title}
                        date = {data.projects.blender.date}
                        githubUrl = {data.projects.blender.githubUrl}
                        toolsUsed = {data.projects.blender.toolsUsed}
                        caption = {<BlenderCaption />}
                        projectDetails = {<BlenderContent />}
                    />

    return (
        <ProjectPageTemplate
            sidenav = {sidenav}
            content = {content}
        />
    );
}