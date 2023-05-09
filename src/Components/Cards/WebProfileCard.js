import React from 'react';

// Assets
import images from "../../Assets/Images/images"

// Components
import Section from '../Section';
import ProjectCard from '../ProjectCard';

// Ionicon
import { IonIcon} from '@ionic/react';
import { logoGithub } from 'ionicons/icons';


export default function WebProfileCard({ children, ...props }) {

    const webprofileColor = "bg-gradient-to-r from-orange-500 to-orange-700";
    const webprofileBorder = "border-orange-500";
    const webprofileTextColor = "text-white";

    return (
        <ProjectCard
            id="project-profile"
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
                    <div>
                        <p>Tools Used: </p>
                        <div className="flex flex-col justify-center items-center">
                            <p>
                                <em> React </em> || 
                                <em> Tailwind CSS </em> || 
                                <em> React Spring </em>
                            </p>
                        </div>
                    </div>
                </>
            }
        >
            <Section
                id="project-profile-1"
                title="About this Project"
                bgColor={webprofileColor}
                borderColor={webprofileBorder}
                textColor={webprofileTextColor}
            >
                {/* <h2 className="mb-3">
                    Overview
                </h2> */}

                <p className="mb-3">
                    As a person who borrows quite a chunk of his skills from Front-End development, I wanted to create a web profile from scratch by myself instead of 
                    relying on readily available Content Management Systems or Website Templates. At the same time, i wanted to challenge myself. 
                    There are so many wonderful web frameworks out there, and I’d never know when I would find myself using one for a project in the future. 
                    So, instead of starting from vanilla JavaScript, one of the goals i set for myself for this project was to familiarize myself with some of the 
                    biggest frameworks used by the industry that I hadn’t used before.
                </p>


                <p className="mb-3">
                    I chose React as the foundation for my project. I hadn’t officially learnt React in school, just React Native, so there was a fair bit of 
                    a learning curve as I plunged myself at online tutorials, be it in blogs or YouTube, to set myself up for success. Despite the initial learning 
                    curve, the knowledge gained was invaluable.
                </p>


                <p className="mb-3">
                    For styling the website, I decided to use TailwindCSS for my project which is used in big group projects in the industry.
                </p>


                <p className="mb-3">
                    For animation, I relied on React-Spring which I had just started to explore and boy was it fun to play around with it.
                </p>

                <p className="mb-3">
                    Since this project is what actually powers the website you are seeing right now, I’ll let you explore it rather than taking you through 
                    the mundane details. I’ll continue to make the site better!
                </p>
            </Section>



        </ProjectCard>
    );
}