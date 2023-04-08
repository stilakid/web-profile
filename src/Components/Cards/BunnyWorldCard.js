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
                title="What is Bunny World?"
                bgColor={bunnyWorldColor}
                borderColor={bunnyWorldBorder}
                textColor={bunnyWorldTextColor}
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
            </Section>


            <Section
                    title="Script Manager Demo"
                    bgColor={bunnyWorldColor}
                    borderColor={bunnyWorldBorder}
                    textColor={bunnyWorldTextColor}
                >
                    <p className="mb-3">
                        Below is a video demonstrating how our Script Manager works.
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

                    <p className="mb-3">Features explored in this demo</p>

                    <ul className="list-disc ml-4">
                        <li>
                            <p className="mb-3">
                                <p>
                                    The Script Manager is a core component of the game editor that I dedicated most of my time to. 
                                    In terms of features and designs, I went above and beyond the requirement for this project so the Script Manager counted as 
                                    a major extension.
                                </p>

                                <p>
                                    For context, every object in the game world can have scripts attached to it. These scripts dictate how the object interacts with other 
                                    objects in the world. The scripts are made up of two parts: the trigger and the action.

                                    To illustrate, if we had a bunny in the world, we could attach the following script to it so that when the user clicks on it, 
                                    the 'EvilBunnySound' audio would play.

                                </p>

                                <p>
                                    <code>On Click Play EvilBunnySound;</code>
                                </p>

                                <p>
                                    Only accessible through the editor, the Script Manager can be used to view the scripts attached to any instance of an object 
                                    in the game world and edit them, delete them, or add new scripts to them as the user pleases.

                                    To open the Script Manager, you'd simply need to click on the Overflow Menu in the game editor and select Script Manager from the list.

                                    When it opens, the Script Manager features a drop-down list that contains all the objects in the game world. These objects can be 
                                    identified by their name as well as the image associated with them if they have one, which appears beside the name in the list.

                                    If an object was selected in the game editor before invoking the Script Manager, the Script Manager automatically selects that 
                                    objects in the drop-down list for you. If nothing was selected, the script manager selects whatever is first in the drop-down list.

                                    If there was no object in the world before invoking the Script Manager, then you'd get a message indicating that there are no objects 
                                    placed in the world to attach scripts to.

                                    For the object that is selected within the Script Manager, the dialog displays a list of all the current scripts attached to it. Using 
                                    the three buttons available above the list, the user can add new scripts to the object, select one of these scripts and delete it, or 
                                    even simply edit it.

                                    If the user deletes a script, the list of scripts updates to reflect the change.

                                    If the user clicks the button to add a script, the Script Editor pops up. The Script Editor features two sections: the trigger and 
                                    the list of actions. Each trigger can cause multiple actions to take place so the editor allows the user to add multiple rows, each 
                                    signifying a single action.


                                    <strong>UI updates live programmatically</strong>

                                    Depending on the trigger or action chosen, the drop-down list of resources (objects, audio files, etc.) beside it will be updated to 
                                    include the relevant stuff. If the selected trigger or action does not require a list of resources, it will hide the drop-down entirely.

                                    If the user clicks the button to edit a script, the Script Editor shows up but its drop-down menus will be prepopulated to reflect 
                                    the current state of the script that is being edited.

                                    Upon saving the script, it will be added to the list of scripts attached to the object. If the script was being edited, it simply updates 
                                    the script.

                                    <strong>Eliminates Redundancy</strong>

                                    Additionally, the Script Manager is intelligent enough to detect different types of redundant scripts. So, for instance, if the user tries 
                                    to add duplicate scripts to the object, it will only attach one of them. If the user tries to add two different scripts sharing the 
                                    same trigger but different actions, the Script Manager merges the two scripts.


                                    <strong>Keeps All Scripts Updated</strong>

                                    Then, if the user deletes the object that the script is attached to or the page that contains the object to which the script was attached to, 
                                    then the Script Manager updates the scripts of all the objects in the game world such that if any trigger statement requires that deleted object, 
                                    that script is deleted and if any action statement requires that deleted object, then only that action is deleted from the scripts. However, if 
                                    the script only contained that one invalid action, then the whole script is deleted.

                                    If the user renames an object or page, then similar to the mechanism above, the Script Manager updates the scripts of all the objects in the 
                                    game world such that if they contain these renamed objects or pages, the names would be updated in the scripts.

                                    However, these names are NOT simply detected by searching for the string inside the script and replacing it. Our Script Manager is robust 
                                    enough to differentiate between differrent types of resources, action types, and trigger types that are named the same.
                                </p>
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


            <Section
                    title="Outcome & Reflection"
                    bgColor={bunnyWorldColor}
                    borderColor={bunnyWorldBorder}
                    textColor={bunnyWorldTextColor}
                >
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
        </ProjectCard>
    );
}