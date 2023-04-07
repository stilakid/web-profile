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
    const bunnyWorldBorder = "border-purple-500";
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
                    <p className='mb-3'>
                        Note: The project is made private on GitHub to respect course policies. 
                        If you are not a Stanford student and want to look through the code, please contact me directly.
                    </p>

                    <div className='mb-3'>
                        <p>Tools Used: </p>
                        <div className="flex flex-col justify-center items-center">
                            <p>
                                <em> Java </em> || 
                                <em> Android Studio </em> ||
                                <em> SQLite </em>
                            </p>
                        </div>
                    </div>


                    <p>
                        This app was developed as the final group project for Stanford's <em>CS108: Object-Oriented Systems Design</em>.
                    </p>
                </>
            }
        >

            <Section
                title="Our Team"
                bgColor={bunnyWorldColor}
                borderColor={bunnyWorldBorder}
                textColor={bunnyWorldTextColor}
            >
                <TeamMemberCard
                    name="Helen April He"
                    designation="Stanford Class of 2023"
                    contactDetails={
                        <>
                            <div>
                                <a className="text-blue-400" target="_blank" rel="noopener noreferrer" href="https://helenhestudio.myportfolio.com/art">
                                        Art Portfolio
                                </a>
                            </div>
                            <div className="flex flex-row">
                                <a target="_blank" rel="noopener noreferrer" href="//linkedin.com/in/helen-a-he" >
                                    <IonIcon icon={logoLinkedin} className="text-2xl" />
                                </a>
                                <a href = "mailto: helenahe@stanford.edu">
                                    <IonIcon icon={mail} className="text-2xl" />
                                </a>
                            </div>
                        </>
                    }
                >
                    <p>Core Responsibilities</p>
                    <ul className="list-disc ml-4 mb-3">
                        <li><p><em>Front-End Developer</em></p></li>
                    </ul>
                    <p>Contribution</p>
                    <ul className="list-disc ml-4">
                        <li>Build the inventory and inventory-to-page UI Frontend</li>
                        <li>Made the page transition animations</li>
                    </ul>
                </TeamMemberCard>

                <TeamMemberCard
                    name="Jack Walter"
                    designation="Stanford Class of 2024"
                    contactDetails={
                        <>
                            <div className="flex flex-row">
                                <a target="_blank" rel="noopener noreferrer" href="//linkedin.com/in/jack-walter-148948185" >
                                    <IonIcon icon={logoLinkedin} className="text-2xl" />
                                </a>
                                <a href = "mailto: jtwalter@stanford.edu">
                                    <IonIcon icon={mail} className="text-2xl" />
                                </a>
                            </div>
                        </>
                    }
                >
                    <p>Core Responsibilities</p>
                    <ul className="list-disc ml-4 mb-3">
                        <li><p><em>Front-End Developer</em></p></li>
                    </ul>
                    <p>Contribution</p>
                    <ul className="list-disc ml-4">
                        <li>Set up the page and page tab system</li>
                        <li>Set up click event handlers for editor</li>
                        <li>Set up editor interprets shapes and draws them to the screen</li>
                        <li>Created the shape inspector</li>
                    </ul>
                </TeamMemberCard>


                <TeamMemberCard
                    name="Josh Francis"
                    designation="Stanford Class of 2024"
                    contactDetails={
                        <>
                            <div className="flex flex-row">
                                <a target="_blank" rel="noopener noreferrer" href="//linkedin.com/in/josh--francis" >
                                    <IonIcon icon={logoLinkedin} className="text-2xl" />
                                </a>
                                <a href = "mailto: josfran@stanford.edu">
                                    <IonIcon icon={mail} className="text-2xl" />
                                </a>
                            </div>
                        </>
                    }
                >
                    <p>Core Responsibilities</p>
                    <ul className="list-disc ml-4 mb-3">
                        <li><p><em>Back-End Developer</em></p></li>
                    </ul>
                    <p>Contribution</p>
                    <ul className="list-disc ml-4">
                        <li>Build encoding/decoding mechanism for saving and loading games into editor or player.</li>
                        <li>Created shape creator</li>
                        <li>Made it possible to import custom bitmaps</li>
                    </ul>
                </TeamMemberCard>



                <TeamMemberCard
                    name="Juben Rana"
                    designation="Stanford Class of 2024"
                    contactDetails={
                        <>
                            <div>
                                <a className="text-blue-400" target="_blank" rel="noopener noreferrer" href="//sites.google.com/view/avikapatel">
                                        Personal Website
                                </a>
                            </div>
                            <div className="flex flex-row">
                                <a target="_blank" rel="noopener noreferrer" href="//linkedin.com/in/jubenrana" >
                                    <IonIcon icon={logoLinkedin} className="text-2xl" />
                                </a>
                                <a href = "mailto: zubenrana@stanford.edu">
                                    <IonIcon icon={mail} className="text-2xl" />
                                </a>
                            </div>
                        </>
                    }
                >
                    <p>Core Responsibilities</p>
                    <ul className="list-disc ml-4 mb-3">
                        <li><p><em>Front-End Developer</em></p></li>
                    </ul>
                    <p>Contribution</p>
                    <ul className="list-disc ml-4">
                        <li>Speaheaded Script Manager UI and functionality</li>
                        <li>Made Script Manager update UI live programmatically</li>
                        <li>Made app recognize and discard repeating scripts or parts of scripts</li>
                        <li>Implemented updating and deleting scripts when shape/page was deleted or their name changed</li>
                        <li>made 3 custom adapters for UI</li>
                        <li>set up initial page menu and dialog box workflow</li>
                    </ul>
                </TeamMemberCard>



                <TeamMemberCard
                    name="Pedro "
                    designation="Stanford Class of 2024"
                    contactDetails={
                        <>
                            <div className="flex flex-row">
                                <a target="_blank" rel="noopener noreferrer" href="//linkedin.com/in/pedro-civita-a31588228" >
                                    <IonIcon icon={logoLinkedin} className="text-2xl" />
                                </a>
                                <a href = "mailto: pcivita@stanford.edu">
                                    <IonIcon icon={mail} className="text-2xl" />
                                </a>
                            </div>
                        </>
                    }
                >
                    <p>Core Responsibilities</p>
                    <ul className="list-disc ml-4 mb-3">
                        <li><p><em>Front-End Developer</em></p></li>
                        <li><p><em>QA Tester</em></p></li>
                    </ul>
                    <p>Contribution</p>
                    <ul className="list-disc ml-4">
                        <li>Set up the android project</li>
                        <li>Made app read scripts and execute it</li>
                        <li>Created shape editor</li>
                        <li>Stress tested our app after integration</li>
                    </ul>
                </TeamMemberCard>
            </Section>
        </ProjectCard>
    );
}