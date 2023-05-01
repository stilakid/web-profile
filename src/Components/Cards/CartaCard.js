import React from 'react';

// Assets
import images from "../../Assets/Images/images"

// Components
import Section from '../Section';
import ProjectCard from '../ProjectCard';

// Ionicon
import { IonIcon} from '@ionic/react';
import { logoGithub } from 'ionicons/icons';


export default function CartaCard({ children, ...props }) {

    const PWRColor = "bg-gradient-to-r from-rose-200 to-rose-400";
    const PWRBorder = "border-rose-200";
    const PWRTextColor = "text-black";

    return (
        <ProjectCard
            id="project-carta"
            title="Scrapping Carta!"
            date="Mar 10 2022"
            image={images.project.carta.preview}
            imageAlt="This is an image"
            backgroundColor={PWRColor}
            textColor={PWRTextColor}
            summary={
                <>
                    <p className="mb-3 bg-">
                        I was investigating how the voice of an instructor can affect the experience of their students, but I needed data. 
                        Massive amounts of data that I coldn't get my hands on normally.
                    </p>

                    <p>
                        Oh what better way is there to infer that than scrapping Carta's entire repository of student feedbacks from Stanford University!
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
                                <em> JavaScript </em> || 
                                <em> Python </em> || 
                                <em> Tampermonkey </em>
                            </p>
                        </div>
                    </div>

                    <p>
                        This endeavour was part of my research paper for Stanford's <em>PWR 2CKA: The Rhetoric of Distraction</em>.
                    </p>
                </>
            }
        >

            <Section
                id="project-carta-1"
                title="About this Project"
                bgColor={PWRColor}
                borderColor={PWRBorder}
                textColor={PWRTextColor}
            >
                <h2 className="mb-3">
                    Overview
                </h2>

                <p className="mb-6">
                    Long story short, I scrapped the Carta website, which contains statistics and reviews for all the courses offered at Stanford. 
                    This was for a research article I was writing. The article primarily talked about the effects of a university instructors vocal 
                    features and speech patterns on the students’ ability to process and comprehend what is being taught, and explored the possible 
                    best practices and pedagogy useful for improving the effectiveness of information delivery based on the instructor’s vocal profile.
                </p>

                <h2 className="mb-3">
                    Rationale
                </h2>

                <p className="mb-3">
                    As a freshman at Stanford, I took a class in STEM that was taught by two different professors at different times of the day to 
                    accommodate the student’s schedule. You only had to attend one of the classes. My professor was a non-native speaker. 
                    Over the course of the quarter, the number of students in the class gradually decreased. The thought that they might have dropped 
                    the class crossed my mind. However, one day, due to a scheduling conflict, when I decided to attend the lecture taught by 
                    the other professor, I could see all the familiar faces (or rather names on a blank zoom screen) that had been missing from my 
                    class. As I listened to the lecture, I realized why they had switched to this class. It wasn’t because my professor was a 
                    non-native speaker as I had thought at first, but it was because often his pronunciations weren’t clear.
                </p>

                <figure className='flex flex-col items-center my-6'>
                    <img className='max-w-3xl' src={images.project.carta.class2021} alt='Students move from class A to class B in 2021' />
                    <figcaption> Think of me as Kevin in the picture above. </figcaption>
                </figure>

                <p className="mb-3">
                    Fast forward a year, one of my friends was taking the same class taught by the professor I had and a new professor who was 
                    also a non-native. He revealed that this time, the students were trickling in the opposite direction. The professor I had 
                    was hailed as their savior. When I investigated why this was happening, I figured that he had been working on his 
                    pronunciation while the new professor had a unique vocal trait: his voice started strong but became incredibly muffled 
                    towards the end of every sentence, such that you could hardly make out what he was saying. You could say that clarity 
                    was lacking, which left the students awfully confused.
                </p>

                <figure className='flex flex-col items-center my-6'>
                    <img className='max-w-3xl' src={images.project.carta.class2022} alt='Students move from class B to class A in 2022' />
                    <figcaption> Stuart is the placeholder for my friend who really loves playing music. </figcaption>
                </figure>

                <p className="mb-6">
                    Following that incident, it was quite apparent that different vocal features have varying levels of impact on the 
                    student’s ability to comprehend.
                </p>
            </Section>

            <Section
                id="project-carta-2"
                title="Data Collection"
                bgColor={PWRColor}
                borderColor={PWRBorder}
                textColor={PWRTextColor}
            >
                <h2 className="mb-3">
                    Data Collection
                </h2>


                <p className="mb-3">
                    Carta is a popular online repository of student reviews and course evaluation for Stanford courses. 
                    It offers a wide array of statistics related to every course offered by Stanford over many years and helps students build a 
                    roadmap of their education. This means, we have access to thousands of reviews, 214,384 to be exact at the time of writing, 
                    many of which deal with our topic of interest: which vocal features do students identify as being crucial for learning and comprehension?
                </p>

                <p className='mb-3'>
                    Using JavaScript alongside a chrome extension called Tampermonkey that allowed me to automatically run my very own script 
                    on any Carta webpage that I visited, I was able to download all the reviews from Carta website under 24 hours, and subsequently, 
                    I used Python to filter the reviews for relevant keywords, which revealed interesting insights into the matter at hand.
                </p>

                <p className='mb-6'>
                    Using approximately 50 different words related to voice, I identified five vocal features that were prominent in the student reviews. 
                    They were intonation, pronunciation, clarity, rate of speech, loudness, and the habit related to mumbling.
                </p>
            </Section>


            <Section
                id="project-carta-3"
                title="Outcome & Reflection"
                bgColor={PWRColor}
                borderColor={PWRBorder}
                textColor={PWRTextColor}
            >
                <h2 className="mb-3"> Results </h2>

                <p className="mb-3">
                    
                </p>

                <p className="mb-6">
                    Personally, I got tonnes of experience coding an android app and getting used to the online documentation for android. I got some more experience 
                    using object-oriented-programming paradigm on a project that primarily used Java. It also helped me get a measure of how difficult implementing simple 
                    UI design can be on android.
                </p>

                <h2 className="mb-3"> Reflection </h2>

                <p className="mb-3">
                    This was my first time scrapping a website. The amazing thing about this endeavour is that I was in no way required to do this. After shifting through 
                    reviews for about 30 classes by hand, I just woke up one day and I was like, "Why am I half-assing this? I'm a CS major at Stanford for crying out loud!"
                </p>

                <p className="mb-6">
                    It was the realization that with just a little bit of effort, I could be doing so much more since there was no way I was going to read all of 214,384 
                    reviews. It was a really fun thing to do amidst all the chaos during that time of the quarter.
                </p>

            </Section>

        </ProjectCard>
    );
}