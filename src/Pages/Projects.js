import React from "react"

// Assets
import images from "../Assets/Images/images"

// Components
import ProjectCard from "../Components/ProjectCard"
import SideNav from "../Components/SideNav"
import Section from "../Components/Section"
import TeamMemberCard from "../Components/TeamMemberCard"

// Ionicon
import { IonIcon} from '@ionic/react';
import { logoGithub, logoLinkedin, mail, logoAppleAppstore, logoGooglePlaystore } from 'ionicons/icons';

export default function Projects() {

    const wallusColor = "bg-gradient-to-r from-wallus-primary-light to-wallus-primary";
    const wallusBorder = "border-wallus-primary-light";
    const wallusTextColor = "text-white";


    

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
                        backgroundColor={wallusColor}
                        textColor={wallusTextColor}
                        summary={
                            <>
                                <p className="mb-3">
                                    Chances are, at one point in your life, you found investing intimidating and filled with jargon.
                                </p>

                                <p className="mb-3">
                                    Wallus, combining "Wallet" + "Us", is an app that makes investing more welcoming by being part of a community. 
                                    You and your friends can start investing in the same stock and share profits.
                                </p>
                            
                                <p>
                                    Wallus reinvents investing to be fun and social for the first time.
                                </p>
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
                                            <em> React Native </em> || 
                                            <em> Supabase </em> || 
                                            <em> Expo </em> || 
                                            <em> Figma </em> || 
                                            <em> Adobe Premiere Pro </em> || 
                                            <em> Adobe After Effects </em>
                                        </p>
                                    </div>
                                    
                                </div>
                                

                                <p className="mb-3">
                                    This app was developed as part the final group project for both Stanford's 
                                    <em>CS147: Introduction to Human-Computer Interaction Design</em> and 
                                    <em>CS47: Cross-Platform Mobile Development</em>.
                                </p>

                                <p>
                                    Note: This project has its own website too that contains way more details! <a
                                        target="_blank" rel="noopener noreferrer"
                                        className="text-blue-400 underline underline-offset-2" 
                                        href="https://web.stanford.edu/class/cs147/projects/SteppingThroughTime/Wallus/index.html"
                                    >
                                            Click here
                                    </a> to check it out.
                                </p>
                            </>
                        }
                    >
                        

                        <div>

                            <Section
                                title="What is Wallus?"
                                bgColor={wallusColor}
                                borderColor={wallusBorder}
                                textColor={wallusTextColor}
                            >
                                <h2 className="mb-3">
                                    Overview
                                </h2>

                                <p className="mb-3">
                                    Wallus is a hi-fi prototype app created using React Native and supported by Supabase. 
                                    Before its inception, my team wanted to create an app that would solve a problem that we identified in our society. 
                                    To this end, we conducted several needfinding interviews around the Bay Area, analyzed our findings and came up several solutions.
                                </p>


                                <p className="mb-3">
                                    Next, we created a concept video to highlight the tasks a user could perform to solve core problems our app would be designed to address. 
                                    Once that was done, we created a paper lo-fi prototype, tweaked our designs choices after testing it with several volunteers, 
                                    and made a mid-fi prototype in figma for which we got extensive feedback from two other groups in our project class. 
                                    Then, we took the final step and build Wallus from ground up.
                                </p>

                                <p className="mb-6">
                                    For indepth details of the effort that went into the creation of this app, please visit the <a
                                        target="_blank" rel="noopener noreferrer"
                                        className="text-blue-400 underline underline-offset-2"
                                        href="https://web.stanford.edu/class/cs147/projects/SteppingThroughTime/Wallus/index.html"
                                    >
                                        project website
                                    </a>
                                    .
                                </p>

                                <h2 className="mb-3">
                                    Vision
                                </h2>

                                <p className="mb-3">
                                    In the current world, each person has their own investment account and portfolio. This area is often excluded to people with prior 
                                    knowledge or comfort, and conversation about investing is rarely brought up for those afraid of the current system.
                                    Wallus changes this by making investing community-driven for the first time. Folks join the app through a friend’s invite where they 
                                    can invest in the same stock. This can be expanded with in-app groups where everyone in the group owns the same stock, can chat about 
                                    status, and see the progress of their investment together.
                                </p>

                                <p className="mb-6">
                                    The second aspect of the app is education. As new investors are onboarded, the Walrus mascot is there to help explain concepts and 
                                    simplify information. The app itself redesigns investing without trend graphs and numbers focused on less day-trading or gut decisions. 
                                    For decisions along the way, Wallus is also embedded in the final solution with warnings and suggestions to new users that are just 
                                    learning.
                                </p>

                                <h2 className="mb-3">
                                    Rationale
                                </h2>

                                <p className="mb-3"> 
                                    To help guide our final decision, we took a great deal of inspiration from our interviews and experience prototypes.
                                </p>

                                <p className="mb-3">
                                    Our main rationale for this solution is that getting started investing isn’t just a literacy problem, but also a branding problem. 
                                    There are plenty of resources, but there are constraints of time, support, and confidence that prevent people from starting to invest. 
                                    As a result, Wallus users can hop onto decisions of others with no time of their own. 
                                    
                                </p>

                                <p className="mb-3">
                                    They also have the support of more experienced investors through the chat and also passively learning through their feed. 
                                    As they engage, they can grow confidence in investing by seeing others/a community engaging along with conscious design choices that 
                                    eliminate the traditional intimidating parts of investing. 
                                    Having friends on the app, inviting, and sharing builds trust for a previously opaque process, and we hope that Wallus is that 
                                    stepping stone for people to get comfortable with investing.
                                </p>
                            </Section>

                            <Section
                                title="Concept Video"
                                bgColor={wallusColor}
                                borderColor={wallusBorder}
                                textColor={wallusTextColor}
                            >
                                <p className="mb-3">
                                    After doing some market research of products that solved similar problems to ours, we identified major tasks that could be perfomed 
                                    with our product and highlighted them in the video below.
                                </p>
                                
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

                                <p className="mb-3">
                                    I collaborated with my teammate Xinyi to finalize the shotlist and took charge of shooting the scenes. Additionally, I played the 
                                    role of Wallus the walrus, our team's mascot, during which my teammate handled the camera. I took responsibility for editing and 
                                    compositing the video afterwards using Adobe Premiere Pro and Adobe After Effects.
                                </p>
                            </Section>


                            <Section
                                title="Demo"
                                bgColor={wallusColor}
                                borderColor={wallusBorder}
                                textColor={wallusTextColor}
                            >
                                <p className="mb-3">
                                    Below is a video demonstrating how our app completes 3 core tasks for the identified problem it is supposed to solve.
                                </p>

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

                                <ul className="list-disc ml-4">
                                    <li>
                                        <p className="mb-3">
                                            <strong>Simple:</strong> Accept an invitation from a friend to join an existing investment group.
                                        </p>
                                    </li>
                                    <li>
                                        <p className="mb-3">
                                            <strong>Moderate:</strong> Create a new investment group and invite your friends to join.
                                        </p>
                                    </li>
                                    <li>
                                        <p className="mb-3">
                                            <strong>Final:</strong> Use in-app resources to learn about the market and invest in an index fund recommended by Wallus.
                                        </p>
                                    </li>
                                </ul>
                                




                            </Section>

                            <Section
                                title="Try the App!"
                                bgColor={wallusColor}
                                borderColor={wallusBorder}
                                textColor={wallusTextColor}
                            >

                                <p className="mb-3">
                                    We recommended accessing the app on an iOS 16 device, preferably an iPhone, although it should work on iPads and android devices too.
                                </p>

                                <ol className="list-decimal ml-4">
                                    <li className="mb-3">
                                        <p>Download “Expo Go" from the App Store.</p>

                                        <div className="flex flex-row">
                                            <a target="_blank" rel="noopener noreferrer" href="https://itunes.apple.com/app/apple-store/id982107779">
                                                <div className="flex flex-row p-2 m-2 border">
                                                    <IonIcon icon={logoAppleAppstore} className="text-2xl" />
                                                    <p className="pl-2"> Download from App Store </p>
                                                </div>
                                            </a>
                                        </div>

                                        <div className="flex flex-row">
                                            <a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www">
                                                <div className="flex flex-row p-2 m-2 border">
                                                    <IonIcon icon={logoGooglePlaystore} className="text-2xl" />
                                                    <p className="pl-2"> Download from Google Play Store </p>
                                                </div>
                                            </a>
                                        </div>
                                    </li>
                                    <li className="mb-3">
                                        Login to the Expo App with the following credentials.
                                        <ul className="list-disc ml-4">
                                            <li>username: stilakid@stanford.edu</li>
                                            <li>password: @WallusLovesPudding</li>
                                        </ul>
                                    </li>
                                    <li className="mb-3">
                                        Do one of the following to open the app using Expo Go.
                                        <ul className="list-disc ml-4">
                                            <li>
                                                <p>
                                                    Scan the QR code to the below with your mobile device.
                                                </p>
                                                <img className="w-48" src={images.project.wallus.qrCode} alt="QR Code for Expo Go App: Wallus" />
                                            </li>
                                            <li>
                                                <p>
                                                    Open this link in your mobile: <a
                                                        target="_blank" rel="noopener noreferrer"
                                                        className="text-blue-400 underline underline-offset-2"
                                                        href="exp://exp.host/@stilakid/Wallus?release-channel=default"
                                                    >
                                                        exp://exp.host/@stilakid/Wallus?release-channel=default
                                                    </a>.
                                                </p>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        Wait for the app to load and enjoy!
                                    </li>
                                </ol>

                            </Section>

                            <Section
                                title="Our Team"
                                bgColor={wallusColor}
                                borderColor={wallusBorder}
                                textColor={wallusTextColor}
                            >
                                <TeamMemberCard
                                    name="Avika Patel"
                                    designation="Stanford Class of 2024"
                                    contactDetails={
                                        <>
                                            <div>
                                                <a className="text-blue-400" target="_blank" rel="noopener noreferrer" href="//sites.google.com/view/avikapatel">
                                                        Personal Website
                                                </a>
                                            </div>
                                            <div className="flex flex-row">
                                                <a target="_blank" rel="noopener noreferrer" href="//linkedin.com/in/avikapatel" >
                                                    <IonIcon icon={logoLinkedin} className="text-2xl" />
                                                </a>
                                                <a href = "mailto: avika@stanford.edu">
                                                    <IonIcon icon={mail} className="text-2xl" />
                                                </a>
                                            </div>
                                        </>
                                    }
                                >
                                    <p>Core Responsibilities</p>
                                    <ul className="list-disc ml-4">
                                        <li><p><em>Presentation Lead</em></p></li>
                                        <li><p><em>Front-End App Developer</em></p></li>
                                        <li><p><em>Secured the best project pitch award for our team</em></p></li>
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
                                    <ul className="list-disc ml-4">
                                        <li><p><em>Lead Full Stack App Developer</em></p></li>
                                        <li><p><em>Website Developer</em></p></li>
                                        <li><p><em>Videographer</em></p></li>
                                        <li><p><em>Video Editor</em></p></li>
                                    </ul>
                                </TeamMemberCard>



                                <TeamMemberCard
                                    name="Madison Fan"
                                    designation="Stanford Class of 2025"
                                    contactDetails={
                                        <>
                                            <div>
                                                <a className="text-blue-400" target="_blank" rel="noopener noreferrer" href="https://www.madisonfan.com/">
                                                        Personal Website
                                                </a>
                                            </div>
                                            <div className="flex flex-row">
                                                <a target="_blank" rel="noopener noreferrer" href="//linkedin.com/in/madison-fan-6696a2173" >
                                                    <IonIcon icon={logoLinkedin} className="text-2xl" />
                                                </a>
                                                <a href = "mailto: madifan@stanford.edu">
                                                    <IonIcon icon={mail} className="text-2xl" />
                                                </a>
                                            </div>
                                        </>
                                    }
                                >
                                    <p>Core Responsibilities</p>
                                    <ul className="list-disc ml-4">
                                        <li><p><em>Lead App Designer</em></p></li>
                                        <li><p><em>Front-End App Developer</em></p></li>
                                        <li><p><em>Secured the best poster design award for our team</em></p></li>
                                    </ul>
                                </TeamMemberCard>



                                <TeamMemberCard
                                    name="Xinyi Wang"
                                    designation="Stanford Class of 2024"
                                    contactDetails={
                                        <>
                                            <div>
                                                <a className="text-blue-400" target="_blank" rel="noopener noreferrer" href="//sites.google.com/view/avikapatel">
                                                        Personal Website
                                                </a>
                                            </div>
                                            <div className="flex flex-row">
                                                <a target="_blank" rel="noopener noreferrer" href="//linkedin.com/in/xinyi-wangxy" >
                                                    <IonIcon icon={logoLinkedin} className="text-2xl" />
                                                </a>
                                                <a href = "mailto: karenwxy@stanford.edu">
                                                    <IonIcon icon={mail} className="text-2xl" />
                                                </a>
                                            </div>
                                        </>
                                    }
                                >
                                    <p>Core Responsibilities</p>
                                    <ul className="list-disc ml-4">
                                        <li><p><em>Front-End App Developer</em></p></li>
                                        <li><p><em>Concept Video Director</em></p></li>
                                        <li><p><em>Interviewee Liaison</em></p></li>
                                    </ul>
                                </TeamMemberCard>
                            </Section>

                            <Section
                                title="Outcome & Reflection"
                                bgColor={wallusColor}
                                borderColor={wallusBorder}
                                textColor={wallusTextColor}
                            >

                                <h2 className="mb-3"> Project Expo </h2>

                                <p className="mb-3">
                                    The developed prototype of Wallus was presented at Stanford's Introduction to Human Computer Interaction Project Expo in December 2022. 
                                    The expo was judged by dozens of industry experts, and our team received "Best Pitch" and "Best Project Poster" awards. Our concept video 
                                    was also nominated for several award categories.
                                </p>

                                <h2 className="mb-3"> Key Takeaways </h2>

                                <p className="mb-3">
                                    In general, being exposed to such a rigorous design process was honestly refreshing and, although arduous at times, very rewarding. 
                                    All of us came into this project from different backgrounds with different skills and specialties, and it was mesmerizing to see this 
                                    project come to life when we put all our different skills together. In essence, this class truly highlighted the value of teamwork.
                                </p>

                                <p className="mb-6">
                                    There was so much to learn throughout this quarter for the design thinking process, the studio theme of time, and the project. 
                                    Some main ones are listed below:
                                </p>

                                <ul className="ml-4">
                                    <li>
                                        <h3 className="mb-3"> Iterative Designing </h3>

                                        <p className="mb-6">
                                            After going through this class, we learned a lot about the importance of feedback and numerous iterations of a design 
                                            before it can be built. Not until our last round did we realize that our Home page was not built for new users, something 
                                            that one iteration that we were used to could not suffice.
                                        </p>
                                    </li>

                                    <li>
                                        <h3 className="mb-3"> Needfinding </h3>

                                        <p className="mb-6">
                                            This portion of the needfinding process was new to us but one that paid the greatest dividends going forward. 
                                            We learned about the importance of being intentional with who we choose to interview, keeping open-ended questions, 
                                            and taking thorough observations to build insights and leaps that can guide the future of the whole project.
                                        </p>
                                    </li>

                                    <li>
                                        <h3 className="mb-3"> Bringing users to test early </h3>

                                        <p className="mb-6">
                                            Initially, we were hesitant to test out the feasibility of our mobile app through a paper form. 
                                            However, after seeing the learnings we had through these interviews, we realized the importance of testing early and 
                                            testing easy with real users. Though our future work might not have paper prototypes, showing drawings to stakeholders 
                                            is something we can always add to our workflows.
                                        </p>
                                    </li>

                                    <li>
                                        <h3 className="mb-3"> Communicating work effectively </h3>

                                        <p className="mb-6">
                                            At every step of the journey, we had a presentation. The final step even went above and beyond with communication 
                                            through print, app, in-person speech, video, and writing being represented by the poster, expo app, pitch, demo video, 
                                            and this report. Having all of these down was crucial to successfully communicating the project and journeying to an 
                                            unknowing audience. This is something that we all can add to the technical projects we take on in the future.
                                        </p>
                                    </li>
                                </ul>

                                

                                <h2 className="mb-3"> Future Investments </h2>

                                <p className="mb-3">
                                    There are many possible future investments that we learned through our Heuristic Evaluations or due to time constraints 
                                    in implementation. On the technical side, we would like to eliminate all the hard-coded elements of the application 
                                    (including users, groups, tips, and history) so that a new user can join with a fresh plate and interact with their 
                                    friends as a real app. Additional new additions include
                                </p>

                                <ul className="list-disc ml-6 mb-3">
                                    <li>
                                        Connecting to APIs that pull real market data for stock prices and details
                                    </li>
                                    <li>
                                        Long-term implementation can look into integrating with banks or Stripe for purchasing real stocks
                                    </li>
                                    <li>
                                        Expand chat to more than  2 users
                                    </li>
                                    <li>
                                        Making the dictionary have a full set of terms
                                    </li>
                                    <li>
                                        Community page to allow reactions for each of the updates
                                    </li>
                                    <li>
                                        AI in Wallus’s tips that adjust based on user preferences by the groups they join and the investments they make
                                    </li>
                                    <li>
                                        Bookmarking or flagging interesting stocks or sharing with friends
                                    </li>
                                    <li>
                                        Reporting harmful content flows
                                    </li>
                                </ul>

                                <p>
                                    On the design front, we hope to continue iterating on the amount of information that is strictly necessary to show a new investor. 
                                    We hope to continue editing the details in the Home, Invite, Group Details, and Markets page. We also would love to continue designing 
                                    Wallus icons, perhaps ones that are region, stock, or time of year specific!
                                </p>

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