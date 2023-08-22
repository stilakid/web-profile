// Assets
import data from '../../../Assets/Data/data';

// Components
import ProjectPageTemplate from '../../../Components/ProjectPageTemplate';
import {BunnyWorldCaption, BunnyWorldContent} from './BunnyWorldContent';
import SideNav from '../../../Components/SideNav';
import ProjectContentTemplate from '../../../Components/ProjectContentTemplate';


export default function BunnyWorldPage({ children, className, ...props }) {

    const sidenav = <SideNav />;

    const content = <ProjectContentTemplate
                        colorInfo = {data.projects.bunnyWorld.color}
                        title = {data.projects.bunnyWorld.title}
                        date = {data.projects.bunnyWorld.date}
                        githubUrl = {data.projects.bunnyWorld.githubUrl}
                        toolsUsed = {data.projects.bunnyWorld.toolsUsed}
                        caption = {<BunnyWorldCaption />}
                        projectDetails = {<BunnyWorldContent />}
                    />

    return (
        <ProjectPageTemplate
            sidenav = {sidenav}
            content = {content}
        />
    );
}