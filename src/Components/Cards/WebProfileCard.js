import React from 'react';

// Assets
import images from "../../Assets/Images/images"

// Components
import Section from '../Section';
import TeamMemberCard from '../TeamMemberCard';
import ProjectCard from '../ProjectCard';

// Ionicon
import { IonIcon} from '@ionic/react';
import { logoGithub, logoLinkedin, mail } from 'ionicons/icons';


export default function WebProfileCard({ children, ...props }) {

    const webprofileColor = "bg-gradient-to-r from-wallus-primary-light to-wallus-primary";
    const webprofileBorder = "border-wallus-primary-light";
    const webprofileTextColor = "text-white";

    return (
        <ProjectCard
            id="project-4"
            title="Web Profile"
            date="Mar 17 2023"
            image={images.project.webProfile.preview}
            imageAlt="This is an image"
            backgroundColor={webprofileColor}
            textColor={webprofileTextColor}
            summary={
                <>
                    <p>Oh look! It's my webprofile, but you're already on it... Wanna see how I made it? Click me!</p>
                </>
            }
            titleCardDetails={
                <>
                    <div className="flex flex-row">
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/stilakid/web-profile"><IonIcon icon={logoGithub} className="text-2xl" /></a>
                    </div>
                </>
            }
        >
        </ProjectCard>
    );
}