// Assets
import data from '../../../Assets/Data/data';


// Components
import ProjectPageTemplate from '../../../Components/ProjectPageTemplate';
import {WallusCaption, WallusContent} from './WallusContent';
import SideNav from '../../../Components/SideNav';
import ProjectContentTemplate from '../../../Components/ProjectContentTemplate';



export default function WallusPage({}) {

    const sidenav = <SideNav />;

    const content = <ProjectContentTemplate
                        colorInfo = {data.projects.wallus.color}
                        title = {data.projects.wallus.title}
                        date = {data.projects.wallus.date}
                        githubUrl = {data.projects.wallus.githubUrl}
                        toolsUsed = {data.projects.wallus.toolsUsed}
                        caption = {<WallusCaption />}
                        projectDetails = {<WallusContent />}
                    />

    return (
        <ProjectPageTemplate
            sidenav = {sidenav}
            content = {content}
        />
    );
}