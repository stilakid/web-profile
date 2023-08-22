// Assets
import data from '../../../Assets/Data/data';

// Components
import ProjectPageTemplate from '../../../Components/ProjectPageTemplate';
import {WebProfileCaption, WebProfileContent} from './WebProfileContent'
import SideNav from '../../../Components/SideNav';
import ProjectContentTemplate from '../../../Components/ProjectContentTemplate';


export default function WebProfilePage({ children, className, ...props }) {
    
    const sidenav = <SideNav />;

    const content = <ProjectContentTemplate
                        colorInfo = {data.projects.webProfile.color}
                        title = {data.projects.webProfile.title}
                        date = {data.projects.webProfile.date}
                        githubUrl = {data.projects.webProfile.githubUrl}
                        toolsUsed = {data.projects.webProfile.toolsUsed}
                        caption = {<WebProfileCaption />}
                        projectDetails = {<WebProfileContent />}
                    />

    return (
        <ProjectPageTemplate
            sidenav = {sidenav}
            content = {content}
        />
    );
}