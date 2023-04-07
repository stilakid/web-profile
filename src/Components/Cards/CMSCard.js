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
                    <div className="mb-3">
                        <p>Tools Used: </p>
                        <div className="flex flex-col justify-center items-center">
                            <p>
                                <em> Vanilla JS </em> || 
                                <em> MongoDB </em> || 
                                <em> Node.js </em>
                            </p>
                        </div>
                    </div>

                    <p>
                        This project was initially developed as the final project for Stanford's <em>CS193X: Web Programming Fundamentals</em>.
                    </p>
                </>
            }
        >
        </ProjectCard>
    );
}