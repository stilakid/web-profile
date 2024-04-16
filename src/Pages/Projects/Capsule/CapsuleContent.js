// Assets
import images from '../../../Assets/Images/images';
import data from '../../../Assets/Data/data';

// Components
import Section from '../../../Components/Section';
import TeamMemberCard from '../../../Components/TeamMemberCard';
import BlueLink from '../../../Components/BlueLink';


// Ionicon
import { IonIcon} from '@ionic/react';
import { logoLinkedin, mail, logoAppleAppstore, logoGooglePlaystore } from 'ionicons/icons';

export {CapsuleCaption, CapsuleContent};


function CapsuleCaption() {
    return(
        <>
            <p>
                This app was developed as part the senior project for Stanford's <em>CS194W: Software Project (WIM)</em>.
            </p>
        </>
    )
}


function CapsuleContent() {

    const capsuleColor = data.projects.capsule.color.background;
    const capsuleBorder = data.projects.capsule.color.border;
    const capsuleTextColor = data.projects.capsule.color.text


    return(
        <>
            <Section
                id="project-capsule-1"
                title="What is Capsule?"
                bgColor={capsuleColor}
                borderColor={capsuleBorder}
                textColor={capsuleTextColor}
            >
                <h2 id="project-capsule-1a" className="mb-3">
                    Introduction
                </h2>

                <p className="mb-6 pb-6 border-b sm:border-b-0 border-black">
                    Capsule is an app that enables users to create virtual time capsules at specific locations. 
                    These capsules can be created by either (1) uploading a message, photo, or video 
                    when you are at the location or (2) uploading images from your Photos app with 
                    the location tag. These capsules are only unlocked and shared with others when 
                    they visit the same location in the future.
                </p>

                <h2 id="project-capsule-1b" className="mb-3">
                    Background/Context
                </h2>

                <p className="mb-6 pb-6 border-b sm:border-b-0 border-black">
                    We wanted to use location data in a positive way! Generally folks think of sharing 
                    location data in a negative light — selling the data. We wanted to provide users 
                    with a fun way to visualize and connect with others using their locations. 
                    Especially on a student campus, folks are always moving around and generally 
                    open to FindMy, so we see the feasibility of adoption!
                </p>

                <h2 id="project-capsule-1c" className="mb-3">
                    Team Goals
                </h2>

                <p className="mb-3">
                    As a team, we of course 
                    wanted to end the quarter with a complete product, but also really 
                    wanted to learn more about app development (4/5 of us did not have 
                    substantial app-building experience).
                </p>

                <p className="mb-6 pb-6 border-b sm:border-b-0 border-black">
                    As for our app goals other than our aforementioned vision, we wanted 
                    to build a Pokemon Go-style app that forced users to go out into the 
                    real world in order to use it. We also realized the potential for 
                    locations to be a core component of memory creation, and wanted this 
                    to become the main focus of our app. 
                </p>

                <h2 id="project-capsule-1d" className="mb-3">
                    App Objective
                </h2>

                <ul className="list-disc ml-6 border-b sm:border-b-0 border-black">
                    <li className="mb-3">
                        Getting folks out of the room and exploring
                    </li>

                    <li className="mb-3">
                        Building strength of friendships asynchronously
                    </li>
                    
                    <li className="mb-3">
                        Spontaneous prompting to spark a conversation between friends
                    </li>
                </ul>

            </Section>

            <Section
                id="project-capsule-2"
                title="Prototype Development"
                bgColor={capsuleColor}
                borderColor={capsuleBorder}
                textColor={capsuleTextColor}
            >
                <h2 id="project-capsule-2a" className="mb-3">
                    Initial Prototype
                </h2>

                <p className="mb-3">
                    We began by using markers and a whiteboard to design the various 
                    task flows that our app would support. Among these tasks were: 

                    <ul className="list-disc ml-6 border-b sm:border-b-0 border-black">
                        <li>logging in or making an account</li>
                        <li>making capsules</li>
                        <li>sending capsules to friends</li>
                        <li>opening received capsules</li>
                        <li>viewing archived capsules</li>
                    </ul>
                </p>
                
                <div className="flex justify-center mb-3 pb-3">
                    <figure>
                        <img className="w-full max-w-3xl" src={images.projects.capsule.prototype2} alt="Main app task flow." />
                        <figcaption className="text-center">Main App</figcaption>
                    </figure>
                </div>

                <div className='flex flex-col sm:flex-row space-y-3 sm:space-y-0 mb-6 pb-6 border-b sm:border-b-0 border-black'>
                    <div className='sm:w-1/2 sm:mr-3 flex items-center justify-center pb-3'>
                        <figure>
                            <img className="max-w-md w-full" src={images.projects.capsule.prototype3} alt='Login flow.' />
                            <figcaption className="text-center">Login Flow</figcaption>
                        </figure>
                    </div>

                    <div className='sm:w-1/2 flex items-center justify-center pb-3'>
                        <figure>
                            <img className="max-w-md w-full" src={images.projects.capsule.prototype4} alt='Notifications and received capsules.' />
                            <figcaption className="text-center">Notifications and Received Capsules</figcaption>
                        </figure>
                    </div>
                </div>


                <h2 id="project-capsule-2b" className="mb-3">
                    Figma Prototype
                </h2>

                <p className='mb-3'>
                    After making the first protype on the whiteboard, we designed a <BlueLink.Underline
                    href="https://www.figma.com/file/6yGv6vSJowmAnAoIDgQ7bB/App?type=design&node-id=0-1&mode=design&t=KHteHj0w4GakS0zI-0">
                        figma prototype
                    </BlueLink.Underline> before beginning our app development.
                </p>

                <div className="flex justify-center mb-3 pb-3">
                    <figure>
                        <img className="w-full max-w-3xl" src={images.projects.capsule.figma1} alt="Prototype components." />
                        <figcaption className="text-center">Prototype Components</figcaption>
                    </figure>
                </div>

                <div className="flex justify-center mb-3 pb-3">
                    <figure>
                        <img className="w-full max-w-3xl" src={images.projects.capsule.figma2} alt="Prototype screens." />
                        <figcaption className="text-center">Prototype Screens</figcaption>
                    </figure>
                </div>

                <h2 id="project-capsule-2c" className="mb-3">
                    User Reviews
                </h2>

                <p className="mb-3">
                    We asked one potential user what he thought about our prototype. 
                    He said that he liked the design, found it intuitive, but also 
                    said that it would be nice to put text with the image capsules.
                </p>

                <p className="mb-3">
                    We asked another potential user, and they said that we should 
                    give the user the option to set the radius for their capsule.
                </p>

                <p className="mb-6 pb-6 border-b sm:border-b-0 border-black">
                    Another potential user said that it would be good for college 
                    campuses. He also green-lit our prototype.
                </p>

                <h2 id="project-capsule-2d" className="mb-3">
                    Reflection
                </h2>

                <p className="mb-3">
                    In crafting these prototypes we hoped to learn more about the 
                    app flow, which features were important to implement, and what 
                    we needed to learn to do in order to build this app. We also 
                    hoped to use these prototypes to generate feedback from potential 
                    users.
                </p>

                <p className="mb-3">
                    Our methodology for using the prototypes for feedback was as 
                    follows. We would show the prototype image to the potential 
                    user, explain the app idea and flow, and ask them if anything 
                    was confusing or could be improved.
                </p>

                <p className="mb-3">
                    We did get out of this experience what we were expecting, 
                    but we were surprised to learn that the people we interviewed 
                    were more interested in giving feedback on features they 
                    wanted rather than the app flow. I guess this is a good sign 
                    that our app flow is unproblematic, but we were hoping to get 
                    more information about that.
                </p>
            </Section>

            <Section
                id="project-capsule-3"
                title="App Development"
                bgColor={capsuleColor}
                borderColor={capsuleBorder}
                textColor={capsuleTextColor}
            >
                <h2 id="project-capsule-3a" className="mb-3">
                    Firebase
                </h2>

                <p className="mb-6 pb-6 border-b sm:border-b-0 border-black">
                    We used Google's Firebase as our app's backend. In particular, we used the following Firebase products:

                    <ul className="list-disc ml-6 border-b sm:border-b-0 border-black">
                        <li className="mb-1">
                            <em>Authentication:</em> For logging in or making a new account
                        </li>

                        <li className="mb-1">
                            <em>Cloud Storage:</em> To store images uploaded by a user.
                        </li>

                        <li className="mb-1">
                            <em>Firestore:</em> To store capsule data (sent, received, archived) for a given user.
                        </li>
                    </ul>
                </p>

                <h2 id="project-capsule-3b" className="mb-3">
                    Google Cloud Platform
                </h2>

                <p>
                    In order to get location services, we had to use various Google APIs:

                    <ul className="list-disc ml-6 border-b sm:border-b-0 border-black">
                        <li className="mb-1">
                            <em>Map API:</em>  This is used to navigate the world map for finding capsules.
                        </li>

                        <li className="mb-1">
                            <em>Places API:</em> We used this to make the autocomplete feature for 
                            selecting locations when making a capsule. Essentially, as you type in a 
                            location in an input box, it will give relevant suggestions of places 
                            that match that address in the form of a list right below the text box, 
                            which can then be selected to get the ID of that place.
                        </li>

                        <li className="mb-1">
                            <em>Geocode API:</em> This is required to get the latitude and longitude 
                            data for a place. The latitude and longitude data is used to set the 
                            pins for capsules on the world map. This API is also used to reverse search 
                            the address of a place given its latitude and longitude, which is useful 
                            when getting the location from image metadata, which will be in the form of 
                            latitude and longitude.
                        </li>
                    </ul>
                </p>



            </Section>

            <Section
                id="project-capsule-4"
                title="User Testing"
                bgColor={capsuleColor}
                borderColor={capsuleBorder}
                textColor={capsuleTextColor}
            >
                <h2 id="project-capsule-4a" className="mb-3">
                    Testing Plan
                </h2>

                <p className="mb-3">
                    The following is the layout of our plan that we created before user testing.
                </p>

                <div className="p-6 bg-gray-300 rounded-3xl mb-6">
                    <p className="mb-3">
                        <strong><em>Welcome and Orientation: </em></strong>Hello! We are building Capsule, a 
                        social media app where users can leave image/text capsules 
                        in real world locations for their friends to find! We are 
                        planning on building the app for young people and college 
                        students, and those people often frequent the same areas 
                        as many of their peers do. Today, we are excited to see 
                        how you will interact with the structure of our app, and 
                        would love to hear any feedback you might have. Let’s 
                        get started.
                    </p>

                    <p className="mb-3">
                        <strong><em>Setup: </em></strong>Please download the app here (no longer available). 
                        If the app is not ready for download, here is a link to our Figma 
                        prototype. Feel free to use our device to interact with our app’s 
                        prototype (if in-person). Please use these credentials if you would 
                        not prefer to make your own account:
                    </p>

                    <ul className="list-disc ml-6">
                        <li className="mb-3">
                            Email: loco4coco@gmail.com
                        </li>

                        <li className="mb-3">
                            Password: xlb79_94UGfK
                        </li>
                    </ul>

                    <p className="mb-3">
                        <strong><em>Feedback Mechanism: </em></strong>We will have one 
                        team member sit and observe the user attempt to use our app/prototype. 
                        The team member will not talk to or interfere with the user’s 
                        actions unless asked to do so. The teammate will take notes 
                        based on what the user tries to do and what they say, and these 
                        notes will be uploaded to Github as issues if appropriate. 
                        We will also ask the user’s consent for taking an audio recording 
                        of this interaction, which will act as a point of reference after 
                        we finish a feedback session. However, this will be optional and 
                        only serves to aid us in making sure that our report is complete 
                        and not biased.
                    </p>

                    <p className="mb-3">
                        Also, in case some users are not on campus. These sessions 
                        will be organized through zoom or Google Meet, where users 
                        will be able to demonstrate their interaction and feedback 
                        using our app. Their setup will allow us to review the user 
                        experience in real time. We would encourage the users to 
                        illustrate their suggestions and difficulties while navigating 
                        through the app.
                    </p>

                    <p className="mb-3">
                        All feedback generated through onsite and remote observations 
                        will be gathered through Google Form survey at the end of the 
                        interview and will be reviewed by the team together. If possible, 
                        we will convert these thoughts into Github milestones and tasks 
                        to ensure that the app’s development is guided by the user’s 
                        needs and preferences.
                    </p>

                    <p className="mb-3">
                        <strong><em>Set User Expectations: </em></strong>Ask the user to 
                        try to explore all of the app, and verbally state what they are 
                        trying to do or look for. Ask them to go slowly so their actions 
                        can be documented. Tell them that we will not offer help unless 
                        desperately needed, and that they should do the best they can on 
                        their own. Intervene if needed.
                    </p>

                    <p className="mb-3">
                        <strong><em>Pre-Baked Workflow: </em></strong>
                    </p>

                    <ol className="list-decimal ml-6">
                        <li className="mb-3">
                            Download and Log in: Please download the app through the 
                            link to start interacting with the prototypes. Start by 
                            creating an account or logging in with existing credentials
                        </li>

                        <li className="mb-3">
                            Update the Profile & Add Friends: Once logged in, take time 
                            to add a profile picture, customize the user name, and add 
                            information about themselves. You can easily add friend and 
                            connect with them on Capsule
                        </li>

                        <li className="mb-3">
                            <p>
                                Interaction with the app’s functions:
                            </p>

                            <ul className="list-disc ml-6">
                                <li className="mb-3">
                                    Create Capsule: Tap on the “Create Capsule” button to 
                                    leave your first image/text capsule. Choose a location 
                                    on the map that holds a special memory or where you and 
                                    your friends always hang out.
                                </li>

                                <li className="mb-3">
                                    Find Capsule: Navigate to the “Explore” tab to discover 
                                    the capsules left by your friends. Follow the clues to 
                                    find the capsules hidden in your area
                                </li>

                                <li className="mb-3">
                                    Friend network: You can send/accept friend requests and 
                                    share capsule with each other Provide feedback: You can 
                                    submit your thoughts and feedbacks through Google Form 
                                    (same as in user interviews)
                                </li>
                            </ul>
                        </li>
                    </ol>

                    <p className="">
                        <strong><em>A/B Testing: </em></strong>We will have at least 
                        two versions of our app. The participants will be randomly 
                        given access to one of these versions. We will use these two 
                        variants to test out different UI designs such as the ones 
                        listed below: The position of profile and gallery icons can 
                        be swapped between the two versions (left vs right bottom corner) 
                        Color scheme (green vs blue vs yellow)
                    </p>
                </div>
                

                <h2 id="project-capsule-4b" className="mb-3">
                    Actionable Results
                </h2>

                <p className="mb-3">
                    The following was the feedback we received and our plan for how we would use the feedback we received before user testing.
                </p>

                <div className="p-6 bg-gray-300 rounded-3xl mb-6">
                    <h3 className="mb-3">
                        Reaction to Feedback
                    </h3>
                    
                    <ul className="list-disc ml-6">
                        <li className="mb-3">
                            Discuss about the UI choice that was favored during the A/B testing and decide what the final UI choice will be, weighing in the feedback from the participants and the developer’s reasons for each choice.
                        </li>

                        <li className="mb-3">
                            Do the same as above for other UI related feedback that is not related to our A/B testing setup.
                        </li>

                        <li className="mb-3">
                            <p>
                                Simplify task flow based on where the user took the most time to figure out the next step and where they seemed lost. This can be achieved with the following:
                            </p>
                            <ol className="list-decimal ml-6">
                                <li className="mb-3">
                                    <p>
                                        Incorporate tooltips and emphasize the UIs that could lead to the next step in any given task flow. This could mean:
                                    </p>
                                    <ul className="list-disc ml-6">
                                        <li className="mb-3">
                                            using a different color for those UI.
                                        </li>
                                        <li className="mb-3">
                                            making them bigger and more prominent.
                                        </li>
                                        <li className="mb-3">
                                            reducing the presence of other UI in close proximity to it.
                                        </li>
                                        
                                    </ul>
                                </li>
                                <li className="mb-3">
                                    Reduce the number of screens that is required for a given task flow.
                                </li>  
                            </ol>
                        </li>
                    </ul>

                    <h3 className="mb-3">
                        To-date UI feedback
                    </h3>

                    <ol className="list-decimal ml-6">
                        <li className="mb-3">
                            <p>
                                Observation: Purple was hard to read. Folks lifted their phone to look at the text.
                            </p>
                            
                            <ul className="list-disc ml-6">
                                <li className="mb-3">
                                    Design choice: Switched to shades of green.
                                </li>
                            </ul>
                        </li>

                        <li className="mb-3">
                            <p>
                                Observation: With a new app that most people will equally be Sign Up or Log In, many people paused and searched for the “Don’t have an account? Sign Up”
                            </p>

                            <ul className="list-disc ml-6">
                                <li className="mb-3">
                                    Design choice: After the Splash screen, had two equally emphasized buttons for either Sign Up or Log In case
                                </li>
                            </ul>
                        </li>

                        <li className="mb-3">
                            <p>
                                Observation: One color throughout the design was hard to read.
                            </p>

                            <ul className="list-disc ml-6">
                                <li className="mb-3">
                                    Design choice: Added blue in addition to the green.
                                </li>
                            </ul>
                        </li>

                        <li className="mb-3">
                            <p>
                                Observation: Sign Up flow was REALLY time consuming. Folks sighed when more and more pages would keep coming up.
                            </p>

                            <ul className="list-disc ml-6">
                                <li className="mb-3">
                                    Design choice: Combined the screen asking for name and age to one. Decided to not allow the user a choice between Phone, Email, Google, or Meta for contact methods and only allow phone number.
                                </li>
                            </ul>
                        </li>

                        <li className="mb-3">
                            <p>
                                Observation: People like to click on the map of Unopened Capsules before thinking of posting an image.
                            </p>

                            <ul className="list-disc ml-6">
                                <li className="mb-3">
                                    Design choice: Move the Unopened Capsules as the Home front-and-center, and have the picture CTA larger along the button of the screen.
                                </li>
                            </ul>
                        </li>


                        <li className="mb-3">
                            <p>
                                Observation: Folks didn’t like scrolling along the button of the screen to click among all the friends they had.
                            </p>

                            <ul className="list-disc ml-6">
                                <li className="mb-3">
                                    Design choice: After capturing a picture, there is a separate page to more neatly choose friends to send the Capsule to.
                                </li>
                            </ul>
                        </li>
                    </ol>
                </div>
            </Section>

            <Section
                id="project-capsule-5"
                title="Measures for Success"
                bgColor={capsuleColor}
                borderColor={capsuleBorder}
                textColor={capsuleTextColor}
            >
                <h2 id="project-capsule-5a" className="mb-3">
                    KPIs
                </h2>

                <h3 className="mb-3">
                    User Engagement: Uploading Rate
                </h3>

                <p className="mb-3">
                    <em>Definition: </em>The ratio of users actively creating (1 upload per week) and 
                    contributing to virtual time capsules to the total number of registered users.
                </p>

                <p className="mb-6">
                    <em>Rationale: </em>This KPI provides insights into the app’s user engagement. 
                    While the main draw to the app is seeing friend’s capsules, the app would not 
                    be sustainable if folks were not uploading. A higher user engagement ratio 
                    indicates a more engaged user base.
                </p>

                <h3 className="mb-3">
                    User Engagement: Notification Click-Thru rate
                </h3>

                <p className="mb-3">
                    <em>Definition: </em>The percentage of people who get a notification when 
                    they walk into a space and actually click to see a friend’s capsule.
                </p>

                <p className="mb-6">
                    <em>Rationale: </em>This KPI measures the enjoyment users have for what 
                    the app provides. If folks don’t like opening the notifications, 
                    then they won’t contribute to creating capsules.
                </p>


                <h3 className="mb-3">
                    User Retention Rate
                </h3>

                <p className="mb-3">
                    <em>Definition: </em>The percentage of users who continue to use the 
                    app over a two week to two week period, indicating the app’s ability to 
                    retain its user base.
                </p>

                <p className="mb-6 pb-6 border-b sm:border-b-0 border-black">
                    <em>Rationale: </em>High user retention is essential for long-term 
                    success of an app. It ensures network effects and indicates 
                    satisfaction of the value proposition by users!
                </p>


                <h2 id="project-capsule-5b" className="mb-3">
                    OKRs
                </h2>

                <div className="flex justify-center mb-3 pb-3">
                    <table className="w-full max-w-2xl bg-white">
                        <caption className="mb-3">Best Results for Course Classification</caption>
                        <thead>
                            <tr>
                                <th className="bg-blue-100 border border-blue-300 text-center px-4 py-2">Model</th>
                                <th className="bg-blue-100 border border-blue-300 text-center px-4 py-2">Objectives and Key Results (OKRs)</th>
                                <th className="bg-blue-100 border border-blue-300 text-center px-4 py-2">Scores and Notes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-blue-300 text-center px-4 py-2">O</td>
                                <td className="border border-blue-300 text-center px-4 py-2">
                                    Increase friend-to-friend connectivity, and encourage users to explore
                                    outside areas with surprise-capsule incentives
                                </td>
                                <td className="border border-blue-300 text-center px-4 py-2">1</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-300 text-center px-4 py-2">KR1</td>
                                <td className="border border-blue-300 text-center px-4 py-2">
                                    Develop camera and upload functionality with map, and have users successfully
                                    retrieve capsules with desired frequency (see KPIs 1 and 2)
                                </td>
                                <td className="border border-blue-300 text-center px-4 py-2">1</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-300 text-center px-4 py-2">KR2</td>
                                <td className="border border-blue-300 text-center px-4 py-2">
                                    Onboard 10 users onto app
                                </td>
                                <td className="border border-blue-300 text-center px-4 py-2">1</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-300 text-center px-4 py-2">KR3</td>
                                <td className="border border-blue-300 text-center px-4 py-2">
                                    Develop historical photo heatmap, and show that the
                                    feature is seamless and intuitive (see KPI 3)
                                </td>
                                <td className="border border-blue-300 text-center px-4 py-2">0</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-300 text-center px-4 py-2">KR4</td>
                                <td className="border border-blue-300 text-center px-4 py-2">
                                    Increased network of friends across user base, increased uploads,
                                    increased user count
                                </td>
                                <td className="border border-blue-300 text-center px-4 py-2">0.5</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Section>            

            <Section
                id="project-capsule-6"
                title="Our Team"
                bgColor={capsuleColor}
                borderColor={capsuleBorder}
                textColor={capsuleTextColor}
            >
                <TeamMemberCard
                    name="Avika Patel"
                    designation="Stanford Class of 2024"
                    contactDetails={
                        <>
                            <div>
                                <BlueLink href="//sites.google.com/view/avikapatel">
                                        Personal Website
                                </BlueLink>
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
                        <li><p><em>UI Designer</em></p></li>
                        <li><p><em>Project Manager</em></p></li>
                        <li><p><em>Co-developed Gallery and Profile Pages</em></p></li>
                        <li><p><em>Backend Developer</em></p></li>
                    </ul>
                </TeamMemberCard>


                <TeamMemberCard
                    name="Carrie Chen"
                    designation="Stanford Class of 2024"
                    contactDetails={
                        <>
                            <div className="flex flex-row">
                                <a target="_blank" rel="noopener noreferrer" href="//linkedin.com/in/carriech" >
                                    <IonIcon icon={logoLinkedin} className="text-2xl" />
                                </a>
                                <a href = "mailto: carriec6@stanford.edu">
                                    <IonIcon icon={mail} className="text-2xl" />
                                </a>
                            </div>
                        </>
                    }
                >
                    <p>Core Responsibilities</p>
                    <ul className="list-disc ml-4">
                        <li><p><em>Wrote Firestore API calls</em></p></li>
                        <li><p><em>Developed Screens and Mechanisms for Sending Capsules</em></p></li>
                        <li><p><em>Co-designed Database Schema</em></p></li>
                    </ul>
                </TeamMemberCard>


                <TeamMemberCard
                    name="Deepan Shah"
                    designation="Stanford Class of 2024"
                    contactDetails={
                        <>
                            <div className="flex flex-row">
                                <a target="_blank" rel="noopener noreferrer" href="//linkedin.com/in/deepan-shah" >
                                    <IonIcon icon={logoLinkedin} className="text-2xl" />
                                </a>
                                <a href = "mailto: deepans@stanford.edu">
                                    <IonIcon icon={mail} className="text-2xl" />
                                </a>
                            </div>
                        </>
                    }
                >
                    <p>Core Responsibilities</p>
                    <ul className="list-disc ml-4">
                        <li><p><em>Wrote Firestore and Firebase Cloud Storage API calls</em></p></li>
                        <li><p><em>Co-designed Database Schema</em></p></li>
                        <li><p><em>Co-developed Gallery and Profile Pages</em></p></li>
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
                    <ul className="list-disc ml-4">
                        <li><p><em>Wrote Google Places and Geocode API calls</em></p></li>
                        <li><p><em>Developed Authentication Screens and Mechanisms</em></p></li>
                        <li><p><em>Worked on making Capsules Editable</em></p></li>
                        <ul className="list-disc ml-6">
                            <li><p><em>Developed Location Autocomplete text box</em></p></li>
                            <li><p><em>Worked on Programmatically Editing Image Metadata</em></p></li>
                        </ul>
                        <li><p><em>Established App Navigation Flow</em></p></li>
                        <li><p><em>Set up Project Asset/Resource Management</em></p></li>
                    </ul>
                </TeamMemberCard>

                <TeamMemberCard
                    name="Kaiyu Ren"
                    designation="Stanford Class of 2024"
                    contactDetails={
                        <>
                            <div>
                                <BlueLink href="//sites.google.com/view/avikapatel">
                                        Personal Website
                                </BlueLink>
                            </div>
                            <div className="flex flex-row">
                                <a target="_blank" rel="noopener noreferrer" href="//linkedin.com/in/kaiyu-ren-221156215" >
                                    <IonIcon icon={logoLinkedin} className="text-2xl" />
                                </a>
                                <a href = "mailto: kyren@stanford.edu">
                                    <IonIcon icon={mail} className="text-2xl" />
                                </a>
                            </div>
                        </>
                    }
                >
                    <p>Core Responsibilities</p>
                    <ul className="list-disc ml-4">
                        <li><p><em>Wrote Google Maps API calls</em></p></li>
                        <li><p><em>Rendered Google Maps on Home Page</em></p></li>
                        <li><p><em>Worked on Programmatically placing Capsules on Google Maps</em></p></li>
                    </ul>
                </TeamMemberCard>
            </Section>

            <Section
                id="project-capsule-7"
                title="Outcome & Reflection"
                bgColor={capsuleColor}
                borderColor={capsuleBorder}
                textColor={capsuleTextColor}
            >

                <h2 id="project-capsule-7a" className="mb-3"> App Presentation </h2>

                <p className="mb-3">
                    The app was presented during the senior project presentation in March 2024 where 
                    it was evaluated by fellow students taking CS194/CS194W, the TAs, and the Professor 
                    for the class.
                </p>

                <h2 id="project-capsule-7b" className="mb-3 mt-6 pt-6 border-t border-black"> Team Evolution </h2>

                <p className="mb-3">
                    We initially started out without predefined roles on the team and all 
                    contributed to the brainstorming process of our app, but we quickly 
                    settled into our own roles in the team, and each team member developed 
                    an expertise in certain aspects of the project which made it 
                    straightforward to divide up work and consult each other when we ran 
                    into issues while coding.
                </p>

                <p className="mb-3">
                    If there is anything we failed to implement, it would be some of 
                    the cool extensions we wanted to add to our project such as the 
                    heat map that would be generated based on the user’s location data. 
                    Deepan had already made the algorithm for it.
                </p>

                <p className="mb-3">
                    Being able to deploy the app on Testflight was incredibly powerful 
                    as it allowed us to seamlessly install the app without having to 
                    build it for 5-10 minutes and test out our features in real time 
                    across multiple devices logged into different accounts.
                </p>

                <p className="mb-3">
                    It also gave us the ability to provide a robust demo as we could 
                    invite other users as external testers and allow them to install 
                    our app and make an account.
                </p>

                <p className="mb-3">
                    It was really easy to collaborate with each other, and we all 
                    became good friends with each other over the course of the class.
                </p>

                <p className="mb-3">
                    There were challenges during our journey together. Finding time 
                    where people were free was challenging at times, 
                    and setting up dependencies/getting the app to run on everyone’s 
                    devices was often difficult.
                </p>

                <p className="mb-3">
                    Finally, knowing all that we know about this product space now, 
                    we would say that the ideal team for building a product in this space 
                    besides ourselves would be someone who knows about VC and has 
                    experience in scaling the app.
                </p>


                <h2 id="project-capsule-7c" className="mb-3 mt-6 pt-6 border-t border-black">
                    Potential Expansion
                </h2>

                <ul className="list-disc ml-6 border-b sm:border-b-0 border-black">
                    <li className="mb-3">
                        Displaying heat map of where time capsules are around you
                    </li>

                    <li className="mb-3">
                        Choosing which friends can see the capsule you are leaving
                    </li>
                    
                    <li className="mb-3">
                        Using the location data that a user shares, have a heat map of (1) where they travel and (2) where they are leaving capsules on their profile
                    </li>

                    <li className="mb-6 pb-6">
                        When a user is near a capsule, they get a notification they are within a distance. From there, they can “scavenger hunt” for the capsule a friend gave with indications they are getting “warmer” or “colder”
                    </li>
                </ul>


                <h2 id="project-capsule-7d" className="mb-3 mt-6 pt-6 border-t border-black"> Conclusion </h2>

                <p className="">
                    All in all, we were successful in meeting our goals of learning about 
                    app development and creating a nearly-complete app. We got really 
                    good reactions and feedback from our final demo, and gained insights 
                    about what we can change/add in the future. We were pleasantly 
                    somewhat surprised at our ability to learn on the fly and make a 
                    complete app; we’re proud of each other’s motivation to work hard 
                    for the team. No disappointments, except maybe wishing that there 
                    were less bugs in our demo. As for challenges, our biggest ones were 
                    with dependencies and finding times to meet; otherwise, we worked 
                    really well together!
                </p>

            </Section>
        </>
    )
}