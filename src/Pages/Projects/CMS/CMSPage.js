// Assets
import data from '../../../Assets/Data/data';

// Components
import ProjectPageTemplate from '../../../Components/ProjectPageTemplate';
import {CMSCaption, CMSContent} from './CMSContent';
import SideNav from '../../../Components/SideNav';
import ProjectContentTemplate from '../../../Components/ProjectContentTemplate';


export default function CMSPage({ children, className, ...props }) {

    const sidenav = <SideNav />;

    const content = <ProjectContentTemplate
                        colorInfo = {data.projects.sura.color}
                        title = {data.projects.sura.title}
                        date = {data.projects.sura.date}
                        githubUrl = {data.projects.sura.githubUrl}
                        toolsUsed = {data.projects.sura.toolsUsed}
                        caption = {<CMSCaption />}
                        projectDetails = {<CMSContent />}
                    />

    return (
        <ProjectPageTemplate
            sidenav = {sidenav}
            content = {content}
        />
    );
}