// Assets
import videos from '../../../Assets/Videos/videos';
import data from '../../../Assets/Data/data';

// Components
import Section from '../../../Components/Section';
import TeamMemberCard from '../../../Components/TeamMemberCard';
import BlueLink from '../../../Components/BlueLink';
import TwoPartSection from '../../../Components/TwoPartSection'
import VideoAutoPlay from '../../../Components/VideoAutoPlay';


// Ionicon
import { IonIcon} from '@ionic/react';
import { logoLinkedin, mail } from 'ionicons/icons';


export {BunnyWorldCaption, BunnyWorldContent};


function BunnyWorldCaption() {
    return(
        <>
            <p className='mb-3'>
                Note: The project is made private on GitHub to respect course policies. 
                If you are not a Stanford student and want to look through the code, please contact me directly.
            </p>

            <p>
                This app was developed as the final group project for Stanford's <em>CS108: Object-Oriented Systems Design</em>.
            </p>
        </>
    )
}


function BunnyWorldContent() {

    const bunnyWorldColor = data.projects.bunnyWorld.color.background;
    const bunnyWorldBorder = data.projects.bunnyWorld.color.border;
    const bunnyWorldTextColor = data.projects.bunnyWorld.color.text


    return(
        <>
            <Section
                id="project-bunny-1"
                title="What is Bunny World?"
                bgColor={bunnyWorldColor}
                borderColor={bunnyWorldBorder}
                textColor={bunnyWorldTextColor}
            >
                <h2 id="project-bunny-1a" className="mb-3">
                    Overview
                </h2>

                <p className="mb-3">
                    Bunny World is a simple game that operates like a low-budget version of the classic computer game Myst. It is also not specific to bunnies in any ways. 
                    It's really a generic graphical world populated with pictures and sounds.                    
                </p>


                <p className="mb-6 pb-6 border-b sm:border-b-0 border-black">
                    The goal of the project was to implement an editor for a simple graphical adventure game. The game
                    is called "Bunny World" after its most famous puzzle, but in reality, there's not much bunny in it. The
                    project has two aspects: playing the game, which is relatively easy, and the game editor, which is a
                    complete, graphical, document oriented, OOP/GUI project.
                </p>


                <h2 id="project-bunny-1b" className="mb-3">
                    Page, Objects, and Inventory
                </h2>

                <p className='mb-3'>
                    In short, the game world consists of different pages that you can enter and exit. The page almost takes up the entiriety of the screen. The remaining 
                    space is occupied by the user's inventory, which is a possession space that allows users to carry objects from one page to another.
                </p>

                <p className='mb-3'>
                    There can be objects inside each page that the user can interact with. Users can click on these objects, drag and drop them on top of other objects, 
                    and even stash certain objects in their inventory. The objects can have bitmap images associated with it that shows up in the pages and the inventory, 
                    and interactions with these objects can trigger many different events depending on the script attached to these objects. I personally engineered on how 
                    these scripts were managed in the game.
                </p>

                <p className='mb-6'>
                    In Edit Mode, there are smooth sliding transitions between pages, including adding new pages. 
                    Unfortunately we did not have time to implement this for Game Mode.
                </p>

                <p className='mb-6 pb-6 border-b sm:border-b-0 border-black'>
                    In Game Mode, shapes are neatly snapped into the Inventory bar. Bar only holds 5 maximum shapes at a time. 
                    Additional shapes will be kicked onto the page.
                </p>


                <h2 id="project-bunny-1c" className="mb-3">
                    Shape Inspector
                </h2>

                <p className='mb-6 pb-6 border-b sm:border-b-0 border-black'>
                    Rather than storing the shape inspector in another unintuitive menu, we implemented functionality to detect if a given shape/object on a page is 
                    double clicked by tracking when the shape is clicked down and the mouse/finger is lifted up. When the shape is double clicked, it brings up 
                    the shape inspector.
                </p>


                <h2 id="project-bunny-1d" className="mb-3">
                    Dynamic Page Tab
                </h2>

                <p className='mb-6 pb-6 border-b sm:border-b-0 border-black'>
                    We created an intuitive dynamically created view of all the pages within a game as buttons in a scroll bar. The buttons feature the page name, 
                    as well as coloring indicating the current page and initial page. These buttons can be long clicked to bring up their settings page instead 
                    of having to go through another separate clunky view.
                </p>


                <h2 id="project-bunny-1e" className="mb-3">
                    Dynamic Page Tab
                </h2>

                <p className='mb-6 pb-6 border-b sm:border-b-0 border-black'>
                    We have created a way so that you can load your image. By copying an image url and pasting it into the Shape Creator in the top right 
                    menu of the editor, you can load an image into the game. It will the appear as a custom shape in the inventory which can be placed 
                    into the scene and seen in both the player and editor.
                </p>


                <h2 id="project-bunny-1f" className="mb-3">
                    Script Manager
                </h2>

                <p>
                    In this project, most of my effort went into the creation of the Script Manager. For indepth details, head over to the next section.
                </p>

                <p className='mb-3'>
                    In brief, our script manager functions as a dynamic list: It shows you which script you are editing, and has a drop down menu that lets you edit 
                    any other Shape’s script. Also, your drop down menu changes depending on what you want to do (ie. “hide” gives you your shape options, 
                    while “play” gives you sound options, etc), The manager then perfectly appends your script, allowing you to add as many clauses as you want.
                </p>

                <p className='mb-6'>
                    If a page is deleted, any script that included that page, or included any shape within that page changes accordingly. 
                    Similarly, if one creates a shape script that has the clause: goto “pageName”, and then changes the name of the page, 
                    the script will also automatically update.
                </p>
            </Section>


            <Section
                id="project-bunny-2"
                title="Script Manager Details"
                bgColor={bunnyWorldColor}
                borderColor={bunnyWorldBorder}
                textColor={bunnyWorldTextColor}
            >

                <div className='my-6'>
                    <h2 id="project-bunny-2a" className="mb-3">
                        Scripts
                    </h2>

                    <p className='mb-3'>
                        The Script Manager is a core component of the game editor that I dedicated most of my time to. 
                        In terms of features and designs, I went above and beyond the requirement for this project so the Script Manager counted as 
                        a major extension.
                    </p>

                    <p className='mb-3'>
                        For context, every object in the game world can have scripts attached to it. These scripts dictate how the object interacts with other 
                        objects in the world. The scripts are made up of two parts:
                            <ul className='list-disc ml-6'>
                                <li> <span className='text-red-500'>the trigger</span> and </li>
                                <li> <span className='text-emerald-500'>the action</span>. </li>
                            </ul>
                    </p>

                    <p className='mb-3'>
                        To illustrate, if we had a bunny in the world, we could attach the following script to it so that when the user clicks on it, 
                        the 'EvilBunnySound' audio would play.
                    </p>

                    <p className='mb-3  flex justify-center items-center flex-col'>
                        <code><span className='text-red-500'>On Click</span> <span className='text-emerald-500'>Play EvilBunnySound</span>;</code>
                    </p>

                    <p className=''>
                        Only accessible through the editor, the Script Manager can be used to view the scripts attached to any instance of an object 
                        in the game world and edit them, delete them, or add new scripts to them as the user pleases.
                    </p>
                </div>

                <h2 id="project-bunny-2b" className="mt-9 border-t sm:border-t-0 border-black pt-6">
                    Script Manager UI
                </h2>

                <div className='flex flex-col my-12 space-y-24'>

                    <TwoPartSection
                        className="flex-col-reverse"
                        part1={
                            <>
                                <p className='mb-3'>
                                    To open the Script Manager, you'd simply need to click on the Overflow Menu in the game editor and select Script Manager from the list.
                                </p>

                                <p>
                                    When it opens, the Script Manager features a drop-down list that contains all the objects in the game world. These objects can be 
                                    identified by their name as well as the image associated with them if they have one, which appears beside the name in the list.
                                </p>
                            </>
                        }
                        part2={
                            <>
                                <VideoAutoPlay className='rounded-2xl'>
                                    <source src={videos.project.bunnyWorld.scriptManager_1} type="video/mp4"/>
                                </VideoAutoPlay>
                            </>
                        }
                    />

                    <TwoPartSection
                        part1={
                            <>
                                <VideoAutoPlay className='rounded-2xl'>
                                    <source src={videos.project.bunnyWorld.scriptManager_2} type="video/mp4"/>
                                </VideoAutoPlay>
                            </>
                        }
                        part2={
                            <>
                                <p className='mb-3'>
                                    If there was no object in the world before invoking the Script Manager, then you'd get a message indicating that there are no objects 
                                    placed in the world to attach scripts to.
                                </p>

                                <p>
                                    If an object was selected in the game editor before invoking the Script Manager, the Script Manager automatically selects that 
                                    objects in the drop-down list for you. If nothing was selected, the script manager selects whatever is first in the drop-down list.
                                </p>
                            </>
                        }
                    />


                    <TwoPartSection
                        className="flex-col-reverse"
                        part1={
                            <>
                                <p className='mb-3'>
                                    For the object that is selected within the Script Manager, the dialog displays a list of all the current scripts attached to it. Using 
                                    the three buttons available above the list, the user can add new scripts to the object, select one of these scripts and delete it, or 
                                    even simply edit it.
                                </p>

                                <p>
                                    If the user deletes a script, the list of scripts updates to reflect the change.
                                </p>
                            </>
                        }
                        part2={
                            <>
                                <VideoAutoPlay className='rounded-2xl'>
                                    <source src={videos.project.bunnyWorld.scriptManager_3} type="video/mp4"/>
                                </VideoAutoPlay>
                            </>
                        }
                    />

                    <TwoPartSection
                        part1={
                            <>
                                <VideoAutoPlay className='rounded-2xl'>
                                    <source src={videos.project.bunnyWorld.scriptManager_4} type="video/mp4"/>
                                </VideoAutoPlay>
                            </>
                        }
                        part2={
                            <>
                                <p>
                                    If the user clicks the button to add a script, the Script Editor pops up. The Script Editor features two sections: the trigger and 
                                    the list of actions. Each trigger can cause multiple actions to take place so the editor allows the user to add multiple rows, each 
                                    signifying a single action.
                                </p>
                            </>
                        }
                    />
                </div>

                <h2 id="project-bunny-2c" className='mt-9 border-t sm:border-t-0 border-t border-black pt-6'>
                    UI Updates Live Programmatically
                </h2>

                <div className='flex flex-col my-12 space-y-24'>
                    <TwoPartSection
                        className="flex-col-reverse"
                        part1={
                            <>
                                <p>
                                    Depending on the trigger or action chosen, the drop-down list of resources (objects, audio files, etc.) beside it will be updated to 
                                    include the relevant stuff. If the selected trigger or action does not require a list of resources, it will hide the drop-down entirely.
                                </p>
                            </>
                        }
                        part2={
                            <>
                                <VideoAutoPlay className='rounded-2xl'>
                                    <source src={videos.project.bunnyWorld.scriptManager_5} type="video/mp4"/>
                                </VideoAutoPlay>
                            </>
                        }
                    />

                    <TwoPartSection
                        part1={
                            <>
                                <VideoAutoPlay className='rounded-2xl'>
                                    <source src={videos.project.bunnyWorld.scriptManager_6} type="video/mp4"/>
                                </VideoAutoPlay>
                            </>
                        }
                        part2={
                            <>
                                <p>
                                    If the user clicks the button to edit a script, the Script Editor shows up but its drop-down menus will be prepopulated to reflect 
                                    the current state of the script that is being edited.
                                </p>
                            </>
                        }
                    />

                    <TwoPartSection
                        className="flex-col-reverse"
                        part1={
                            <>
                                <p>
                                    Upon saving the script, it will be added to the list of scripts attached to the object. If the script was being edited, it simply updates 
                                    the script.
                                </p>
                            </>
                        }
                        part2={
                            <>
                                <VideoAutoPlay className='rounded-2xl'>
                                    <source src={videos.project.bunnyWorld.scriptManager_7} type="video/mp4"/>
                                </VideoAutoPlay>
                            </>
                        }
                    />
                </div>
                
                

                <h2 id="project-bunny-2d" className='mt-9 border-t sm:border-t-0 border-t border-black pt-6'>
                    Eliminates Redundancy
                </h2>

                <div className='flex flex-col my-12 space-y-24'>
                    <TwoPartSection
                        part1={
                            <>
                                <VideoAutoPlay className='rounded-2xl'>
                                    <source src={videos.project.bunnyWorld.scriptManager_8} type="video/mp4"/>
                                </VideoAutoPlay>
                            </>
                        }
                        part2={
                            <>
                                <p>
                                    Additionally, the Script Manager is intelligent enough to detect different types of redundant scripts. So, for instance, if the user tries 
                                    to add duplicate scripts to the object, it will only attach one of them. If the user tries to add two different scripts sharing the 
                                    same trigger but different actions, the Script Manager merges the two scripts.

                                </p>
                            </>
                        }
                    />
                </div>


                <h2 id="project-bunny-2e" className='mt-9 border-t sm:border-t-0 border-t border-black pt-6'>
                    Keeps All Scripts Updated
                </h2>

                <div className='flex flex-col my-12 space-y-24'>
                    <TwoPartSection
                        className="flex-col-reverse"
                        part1={
                            <>
                                <p>
                                    Then, if the user deletes the object that the script is attached to or the page that contains the object to which the script was attached to, 
                                    then the Script Manager updates the scripts of all the objects in the game world such that if any trigger statement requires that deleted object, 
                                    that script is deleted and if any action statement requires that deleted object, then only that action is deleted from the scripts. However, if 
                                    the script only contained that one invalid action, then the whole script is deleted.
                                </p>
                            </>
                        }
                        part2={
                            <>
                                <VideoAutoPlay className='rounded-2xl'>
                                    <source src={videos.project.bunnyWorld.scriptManager_9} type="video/mp4"/>
                                </VideoAutoPlay>
                            </>
                        }
                    />

                    <TwoPartSection
                        part1={
                            <>
                                <VideoAutoPlay className='rounded-2xl'>
                                    <source src={videos.project.bunnyWorld.scriptManager_10} type="video/mp4"/>
                                </VideoAutoPlay>
                            </>
                        }
                        part2={
                            <>
                                <p>
                                    If the user renames an object or page, then similar to the mechanism above, the Script Manager updates the scripts of all the objects in the 
                                    game world such that if they contain these renamed objects or pages, the names would be updated in the scripts.
                                </p>
                            </>
                        }
                    />

                    <TwoPartSection
                        flexColDir="flex-col-reverse"
                        part1={
                            <>
                                <p>
                                    However, these names are NOT simply detected by searching for the string inside the script and replacing it. Our Script Manager is robust 
                                    enough to differentiate between differrent types of resources, action types, and trigger types that are named the same.
                                </p>
                            </>
                        }
                        part2={
                            <>
                                <VideoAutoPlay className='rounded-2xl'>
                                    <source src={videos.project.bunnyWorld.scriptManager_11} type="video/mp4"/>
                                </VideoAutoPlay>
                            </>
                        }
                    />
                </div>
            </Section>
            
            <div className='relative'>
            <Section
                id="project-bunny-3"
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
                                <BlueLink href="https://helenhestudio.myportfolio.com/art">
                                        Art Portfolio
                                </BlueLink>
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
                                <BlueLink href="//sites.google.com/view/avikapatel">
                                        Personal Website
                                </BlueLink>
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
            </div>
            


            <Section
                id="project-bunny-4"
                title="Outcome & Reflection"
                bgColor={bunnyWorldColor}
                borderColor={bunnyWorldBorder}
                textColor={bunnyWorldTextColor}
            >
                <h2 id="project-bunny-4a" className="mb-3"> Key Takeaways </h2>

                <p className="mb-3">
                    This was the second project where I got to work with a team of four or more. This project helped us improve our communication skills within a 
                    team environmnt where one small change made by one person could totally nullify the progress made by someone else. Planning out how each our 
                    work should be isolated, how it would interact with what someone else was working on, and finally the integration process itself in the end 
                    was crucial to the success of our project, and even after integration, we had to stress test the app to weed out all the unexpected bugs. 

                </p>

                <p className="mb-6">
                    Personally, I got tonnes of experience coding an android app and getting used to the online documentation for android. I got some more experience 
                    using object-oriented-programming paradigm on a project that primarily used Java. It also helped me get a measure of how difficult implementing simple 
                    UI design can be on android.
                </p>
            </Section>
        </>
    )
}