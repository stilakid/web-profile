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


export default function CartaCard({ children, ...props }) {

    const PWRColor = "bg-gradient-to-r from-wallus-primary-light to-wallus-primary";
    const PWRBorder = "border-wallus-primary-light";
    const PWRTextColor = "text-white";

    return (
        <ProjectCard
            id="project-5"
            title="Scrapping Carta!"
            date="Mar 10 2022"
            image={images.project.carta.preview}
            imageAlt="This is an image"
            backgroundColor={PWRColor}
            textColor={PWRTextColor}
            summary={
                <>
                    <p className="mb-3">I was investigating how the voice of an instructor can affect the experience of their students, but I needed data. Massive amounts of data that I coldn't get my hands on normally.</p>
                    <p>Oh what better way is there to infer that than scrapping the entire collection of Carta's feedback of students from Stanford University!</p>
                </>
            }
            titleCardDetails={
                <>
                    <div className="flex flex-row">
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/stilakid/CS147-Wallus"><IonIcon icon={logoGithub} className="text-2xl" /></a>
                    </div>
                </>
            }
        >
        </ProjectCard>
    );
}