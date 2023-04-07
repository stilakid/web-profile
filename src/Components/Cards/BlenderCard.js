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


export default function BlenderCard({ children, ...props }) {

    const blenderColor = "bg-gradient-to-r from-wallus-primary-light to-wallus-primary";
    const blenderBorder = "border-wallus-primary-light";
    const blenderTextColor = "text-white";

    return (
        <ProjectCard
            id="project-6"
            title="Fun with Blender"
            date="Dec 09 2022"
            image={images.project.blender.preview}
            imageAlt="This is an image"
            backgroundColor={blenderColor}
            textColor={blenderTextColor}
            summary={
                <>
                    <p className="mb-3"> A blender noob recreates a scene you'd expect to see in Need for Speed or Fast and Furious. </p>

                    <p> It would be easy, they said. There are tonnes of blender tutorials online, they said. Well at least, they were right about the latter. </p>
                </>
            }
            titleCardDetails={
                <>
                    <div className="flex flex-row">
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/stilakid/CS147-Wallus"><IonIcon icon={logoGithub} className="text-2xl" /></a>
                    </div>

                    <div className="mb-3">
                        <p>Tools Used: </p>
                        <div className="flex flex-col justify-center items-center">
                            <p>
                                <em> Blender </em> || 
                                <em> TurboSquid </em>
                            </p>
                        </div>
                    </div>

                    <p>
                        This render was developed as part of the final project for Stanford's <em>CS148: Introduction to Computer Graphics and Imaging</em>.
                    </p>
                </>
            }
        >
        </ProjectCard>
    );
}