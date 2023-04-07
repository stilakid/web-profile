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


export default function BunnyWorldCard({ children, ...props }) {

    const bunnyWorldColor = "bg-gradient-to-r from-purple-500 to-purple-700";
    const bunnyWorldBorder = "border-wallus-primary-light";
    const bunnyWorldTextColor = "text-white";

    return (
        <ProjectCard
            id="project-3"
            title="Bunny World"
            date="Mar 17 2023"
            image={images.project.bunnyWorld.preview}
            imageAlt="This is an image"
            backgroundColor={bunnyWorldColor}
            textColor={bunnyWorldTextColor}
            summary={
                <>
                    <p className="mb-3">You are trapped in a world of bunnies. Choose your path forward wisely or you may incur the wrath of the bunny of death!</p>

                    <p>Was the game too easy? Come build your own 2D game with our Bunny World Game Editor! You can do all of that from the comfort of your android device!</p>
                </>
            }
            titleCardDetails={
                <>
                    <p>Note: The project is made private on GitHub to respect course policies. If you are not a Stanford student and want to look through the code, please contact me directly.</p>
                </>
            }
        >
        </ProjectCard>
    );
}