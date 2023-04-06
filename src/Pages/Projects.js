import React from "react"

// Assets
import images from "../Assets/Images/images"

// Components
import ProjectCard from "../Components/ProjectCard"
import SideNav from "../Components/SideNav"
import Section from "../Components/Section"

// Ionicon
import { IonIcon} from '@ionic/react';
import { logoGithub, logoLinkedin, mail } from 'ionicons/icons';

export default function Projects() {


    

    return(
        <div className="flex flex-row items-center justify-center">
            <div className="flex flex-row w-full max-w-screen-2xl">


                <div className="w-1/5 pr-4">
                    <SideNav>

                    </SideNav>
                </div>

                <div className='w-3/5 flex flex-col items-center'>
                    <h1>
                        Completed Projects
                    </h1>

                    <ProjectCard
                        id="project-1"
                        title="Wallus: Your Personal Finance App"
                        date="Dec 09 2022"
                        image={images.project.wallus.preview}
                        imageAlt="This is an image"
                        backgroundColor="bg-white"
                        summary={
                            <>
                                <p className="mb-3">Chances are, at one point in your life, you found investing intimidating and filled with jargon.</p>

                                <p className="mb-3">Wallus, combining "Wallet" + "Us", is an app that makes investing more welcoming by being part of a community. You and your friends can start investing in the same stock and share profits.</p>
                            
                                <p>Wallus reinvents investing to be fun and social for the first time.</p>
                            </>
                        }
                        titleCardDetails={
                            <>
                                <a target="_blank" rel="noopener noreferrer" href="https://github.com/stilakid/CS147-Wallus"><IonIcon icon={logoGithub} className="text-2xl" /></a>
                                <p>Note: This project has its own website too that contains way more details! <a className="text-blue-400 underline underline-offset-2" href="https://web.stanford.edu/class/cs147/projects/SteppingThroughTime/Wallus/index.html">Click here</a> to check it out. </p>
                            </>
                        }
                    >
                        

                        <div>

                            <Section
                                title="What is Wallus?"
                                bgColor="bg-blue-500"
                                borderColor="border-blue-500"
                            >
                                <p className="mb-3">
                                    This app was developed as part the final group project for both Stanford's <em>CS147: Introduction to Human-Computer Interaction Design</em> and <em>CS47: Cross-Platform Mobile Development</em>.
                                </p>

                                <p className="mb-3">
                                    In the current world, each person has their own investment account and portfolio. This area is often excluded to people with prior knowledge or comfort, and conversation about investing is rarely brought up for those afraid of the current system.
                                    Wallus changes this by making investing community-driven for the first time. Folks join the app through a friend’s invite where they can invest in the same stock. This can be expanded with in-app groups where everyone in the group owns the same stock, can chat about status, and see the progress of their investment together.
                                </p>

                                <p className="mb-3">
                                    The second aspect of the app is education. As new investors are onboarded, the Walrus mascot is there to help explain concepts and simplify information. The app itself redesigns investing without trend graphs and numbers focused on less day-trading or gut decisions. For decisions along the way, Wallus is also embedded in the final solution with warnings and suggestions to new users that are just learning.
                                </p>

                                <p className="mb-3"> Rationale </p>

                                <p className="mb-3"> 
                                    To help guide our final decision, we took a great deal of inspiration from our interviews and experience prototypes.
                                </p>

                                <p className="mb-3">
                                    Our main rationale for this solution is that getting started investing isn’t just a literacy problem, but also a branding problem. There are plenty of resources, but there are constraints of time, support, and confidence that prevent people from starting to invest. As a result, Wallus users can hop onto decisions of others with no time of their own. They also have the support of more experienced investors through the chat and also passively learning through their feed. As they engage, they can grow confidence in investing by seeing others/a community engaging along with conscious design choices that eliminate the traditional intimidating parts of investing. Having friends on the app, inviting, and sharing builds trust for a previously opaque process, and we hope that Wallus is that stepping stone for people to get comfortable with investing.
                                </p>
                            </Section>

                            <Section
                                title="Concept Video"
                                bgColor="bg-blue-500"
                                borderColor="border-blue-500"
                            >
                                <p>After doing some market research of products that solved similar problems to ours, we identified major tasks that could be perfomed with our product and highlighted them in the video.</p>
                                <div className="flex justify-center mb-3">
                                    <iframe
                                        width="560"
                                        height="315"
                                        src="https://www.youtube.com/embed/e_ryWF8GEgM"
                                        title="YouTube video player"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen
                                    >

                                    </iframe>
                                </div>
                            </Section>


                            <Section
                                title="Demo"
                                bgColor="bg-blue-500"
                                borderColor="border-blue-500"
                            >
                                <p>Below is a video demonstrating how our app completes 3 core tasks for the identified problem it is supposed to solve.</p>

                                <div className="flex justify-center mb-3">
                                    <iframe
                                        width="560"
                                        height="315"
                                        src="https://www.youtube.com/embed/MvRn1jGF4g4"
                                        title="YouTube video player"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen
                                    >
                                            
                                    </iframe>
                                </div>

                                <p className="mb-3">Tasks explored in the demo</p>

                                <p className="mb-3">
                                    <strong>Simple:</strong> Accept an invitation from a friend to join an existing investment group.
                                </p>

                                <p className="mb-3">
                                    <strong>Moderate:</strong> Create a new investment group and invite your friends to join.
                                </p>

                                <p className="mb-3">
                                    <strong>Final:</strong> Use in-app resources to learn about the market and invest in an index fund recommended by Wallus.
                                </p>
                            </Section>
                                
                            <Section
                                title="Project Details"
                                bgColor="bg-blue-500"
                                borderColor="border-blue-500"
                            >
                                <p>We had the privilege of having a strong designer in the team that made a lot of our work easier.</p>
                            </Section>

                            <Section
                                title="Try the App!"
                                bgColor="bg-blue-500"
                                borderColor="border-blue-500"
                            >

                            </Section>

                            <Section
                                title="Our Team"
                                bgColor="bg-blue-500"
                                borderColor="border-blue-500"
                            >
                                <div className="p-5 rounded-2xl border shadow-md m-5 flex flex-row">
                                    <div className="w-1/3">
                                        <p>Avika Patel</p>
                                        <p><em>Stanford Class of 2024</em></p>
                                        <IonIcon icon={logoLinkedin} className="text-2xl" />
                                        <IonIcon icon={mail} className="text-2xl" />
                                    </div>
                                    <div className="w-2/3 b">
                                        <p>Core Responsibilities</p>
                                        <ul className="list-disc ml-4">
                                            <li><p><em>App Designer</em></p></li>
                                            <li><p><em>App Developer</em></p></li>
                                            <li><p><em>Secured the best project pitch award for our team</em></p></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="p-5 rounded-2xl border shadow-md m-5 flex flex-row">
                                    <div className="w-1/3">
                                        <p>Juben Rana</p>
                                        <p><em>Stanford Class of 2024</em></p>
                                        <IonIcon icon={logoLinkedin} className="text-2xl" />
                                        <IonIcon icon={mail} className="text-2xl" />
                                    </div>
                                    <div className="w-2/3 b">
                                        <p>Core Responsibilities</p>
                                        <ul className="list-disc ml-4">
                                            <li><p><em>Website Developer</em></p></li>
                                            <li><p><em>Video Editor</em></p></li>
                                            <li><p><em>App Developer</em></p></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="p-5 rounded-2xl border shadow-md m-5 flex flex-row">
                                    <div className="w-1/3">
                                        <p>Madison Fan</p>
                                        <p><em>Stanford Class of 2025</em></p>
                                        <IonIcon icon={logoLinkedin} className="text-2xl" />
                                        <IonIcon icon={mail} className="text-2xl" />
                                    </div>
                                    <div className="w-2/3 b">
                                        <p>Core Responsibilities</p>
                                        <ul className="list-disc ml-4">
                                            <li><p><em>App Designer</em></p></li>
                                            <li><p><em>App Developer</em></p></li>
                                            <li><p><em>Secured the best poster design award for our team</em></p></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="p-5 rounded-2xl border shadow-md m-5 flex flex-row">
                                    <div className="w-1/3">
                                        <p>Xinyi Wang</p>
                                        <p><em>Stanford Class of 2024</em></p>
                                        <IonIcon icon={logoLinkedin} className="text-2xl" />
                                        <IonIcon icon={mail} className="text-2xl" />
                                    </div>
                                    <div className="w-2/3 b">
                                        <p>Core Responsibilities</p>
                                        <ul className="list-disc ml-4">
                                            <li><p><em>App Developer</em></p></li>
                                            <li><p><em>Concept Video Director</em></p></li>
                                        </ul>
                                    </div>
                                </div>
                            </Section>

                            <Section
                                title="Reflection"
                                bgColor="bg-blue-500"
                                borderColor="border-blue-500"
                            >

                            </Section>
                        </div>
                        
                        


                    </ProjectCard>

                    <ProjectCard
                        id="project-2"
                        title="Content Management System"
                        date="Mar 23 2022"
                        image={images.project.sura.preview}
                        imageAlt="This is an image"
                        summary={
                            <>
                                <p>Want to build a website for your organization but don't want to code it yourself? Use my content managemnt system instead!</p>
                            </>
                        }
                    >
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/stilakid/SURA-Content-Management-System"><IonIcon icon={logoGithub} className="text-2xl" /></a>
                    </ProjectCard>

                    <ProjectCard
                        id="project-3"
                        title="Bunny World"
                        date="Mar 17 2023"
                        image={images.project.bunnyWorld.preview}
                        imageAlt="This is an image"
                        summary={
                            <>
                                <p className="mb-3">You are trapped in a world of bunnies. Choose your path forward wisely or you may incur the wrath of the bunny of death!</p>

                                <p>Was the game too easy? Come build your own 2D game with our Bunny World Game Editor! You can do all of that from the comfort of your android device!</p>
                            </>
                        }
                    >
                        <p>Note: The project is made private on GitHub to respect course policies. If you are not a Stanford student and want to look through the code, please contact me directly.</p>
                    </ProjectCard>

                    <ProjectCard
                        id="project-4"
                        title="Web Profile"
                        date="Mar 17 2023"
                        image={images.project.webProfile.preview}
                        imageAlt="This is an image"
                        summary={
                            <>
                                <p>Oh look! It's my webprofile, but you're already on it... Wanna see how I made it? Click me!</p>
                            </>
                        }
                    >
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/stilakid/web-profile"><IonIcon icon={logoGithub} className="text-2xl" /></a>
                    </ProjectCard>

                    <ProjectCard
                        id="project-5"
                        title="Scrapping Carta!"
                        date="Mar 10 2022"
                        image={images.project.carta.preview}
                        imageAlt="This is an image"
                        summary={
                            <>
                                <p className="mb-3">I was investigating how the voice of an instructor can affect the experience of their students, but I needed data. Massive amounts of data that I coldn't get my hands on normally.</p>
                                <p>Oh what better way is there to infer that than scrapping the entire collection of Carta's feedback of students from Stanford University!</p>
                            </>
                        }
                    >
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/stilakid/CS147-Wallus"><IonIcon icon={logoGithub} className="text-2xl" /></a>
                    </ProjectCard>

                    <ProjectCard
                        id="project-6"
                        title="Fun with Blender"
                        date="Dec 09 2022"
                        image={images.project.blender.preview}
                        imageAlt="This is an image"
                        summary={
                            <>
                                <p className="mb-3"> A blender noob recreates a scene you'd expect to see in Need for Speed or Fast and Furious. </p>

                                <p> It would be easy, they said. There are tonnes of blender tutorials online, they said. Well at least, they were right about the latter. </p>
                            </>
                        }
                    >
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/stilakid/CS147-Wallus"><IonIcon icon={logoGithub} className="text-2xl" /></a>
                    </ProjectCard>
                </div>

                <div className="w-1/5 flex flex-col items-center">
                    <h1>
                        Ongoing Projects
                    </h1>

                    <div className="p-20">
                        <p>
                            Wow so empty...
                        </p>
                    </div>
                </div>


            </div>
        </div>
    )
}