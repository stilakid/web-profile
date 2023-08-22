// Assets
import data from '../../../Assets/Data/data';

// Components
import ProjectPageTemplate from '../../../Components/ProjectPageTemplate';
import {CartaCaption, CartaContent} from './CartaContent';
import SideNav from '../../../Components/SideNav';
import ProjectContentTemplate from '../../../Components/ProjectContentTemplate';


export default function CartaPage({ children, className, ...props }) {


    const sidenav = <SideNav />;

    const content = <ProjectContentTemplate
                        colorInfo = {data.projects.carta.color}
                        title = {data.projects.carta.title}
                        date = {data.projects.carta.date}
                        githubUrl = {data.projects.carta.githubUrl}
                        toolsUsed = {data.projects.carta.toolsUsed}
                        caption = {<CartaCaption />}
                        projectDetails = {<CartaContent />}
                    />

    return (
        <ProjectPageTemplate
            sidenav = {sidenav}
            content = {content}
        />
    );
}