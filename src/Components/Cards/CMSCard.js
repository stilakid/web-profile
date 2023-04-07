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


export default function CMSCard({ children, ...props }) {

    const CMSColor = "bg-gradient-to-r from-cyan-500 to-cyan-700";
    const CMSBorder = "border-wallus-primary-light";
    const CMSTextColor = "text-white";

    return (
        <ProjectCard
            id="project-2"
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
            titleCardDetails={
                <>
                    <div className="flex flex-row">
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/stilakid/SURA-Content-Management-System"><IonIcon icon={logoGithub} className="text-2xl" /></a>
                    </div>
                </>
            }
        >
        </ProjectCard>
    );
}