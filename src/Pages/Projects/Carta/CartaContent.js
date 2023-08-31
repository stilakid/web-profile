// Assets
import images from '../../../Assets/Images/images';
import data from '../../../Assets/Data/data';

// Components
import Section from '../../../Components/Section';


export {CartaCaption, CartaContent};


function CartaCaption() {
    return(
        <>
            <p>
                This endeavour was part of my research paper for Stanford's <em>PWR 2CKA: The Rhetoric of Distraction</em>.
            </p>
        </>
    )
}


function CartaContent() {

    const PWRColor = data.projects.carta.color.background;
    const PWRBorder = data.projects.carta.color.border;
    const PWRTextColor = data.projects.carta.color.text


    return(
        <>
            <Section
                id="project-carta-1"
                title="About this Project"
                bgColor={PWRColor}
                borderColor={PWRBorder}
                textColor={PWRTextColor}
            >
                <h2 id="project-carta-1a" className="mb-3">
                    Overview
                </h2>

                <p className="mb-6 pb-6 border-b sm:border-b-0 border-black">
                    Long story short, I scrapped the Carta website, which contains statistics and reviews for all the courses offered at Stanford. 
                    This was for a research article I was writing. The article primarily talked about the effects of a university instructors vocal 
                    features and speech patterns on the students’ ability to process and comprehend what is being taught, and explored the possible 
                    best practices and pedagogy useful for improving the effectiveness of information delivery based on the instructor’s vocal profile.
                </p>

                <h2 id="project-carta-1b" className="mb-3">
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
                title="Data Collection and Analysis"
                bgColor={PWRColor}
                borderColor={PWRBorder}
                textColor={PWRTextColor}
            >
                <h2 id="project-carta-2a" className="mb-3">
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

                <p className='mb-6 pb-6 border-b sm:border-b-0 border-black'>
                    Using approximately 50 different words related to voice, I identified five vocal features that were prominent in the student reviews. 
                    They were intonation, pronunciation, clarity, rate of speech, loudness, and the habit related to mumbling.
                </p>


                <h2 id="project-carta-2b" className="mb-3">
                    Data Analysis
                </h2>



                <p className="mb-3">
                    Here’s the graph showing the number of reviews in each category. 
                    I included pronunciation as well to honor the results of the Saudi Arabia research 
                    which was crucial in the research domain of vocal features and its effects on learning.
                </p>


                <div className='flex flex-row justify-center'>
                    <img src={images.project.carta.graph1} alt='bar graph of vocal features and its occurence in Carta Reviews' />
                </div>


                <p className='mb-3'>
                    The golden bar represents the total number of Carta reviews out of 214,384 that 
                    included words related to the rate of speech. The dark teal bar represents the 
                    number of reviews that included words that are synonymous to fast, and the dark 
                    green bar represents the number of reviews that included words that are 
                    synonymous to slow.
                </p>

                <p className='mb-3'>
                    Given the time constraints and the scope of the research, 
                    I couldn’t go through each and every one of those reviews to verify if the 
                    reviews were really talking about the rate of speech and not the speed of 
                    the lecture or some other matter entirely. That partially explains why 
                    pace has a monstrous number of reviews to its name. 
                </p>

                <p className='mb-3'>
                    If we remove the statics related to the rate of speech from the graph, 
                    we get a much cleaner picture.
                </p>


                <div className='flex flex-row justify-center'>
                    <img src={images.project.carta.graph2} alt='zoomed in version of bar graph of vocal features and its occurence in Carta Reviews' />
                </div>


                <p className='mb-3'>
                    Here, the golden bars represent the total number of reviews for each 
                    category, the dark teal bars represent the number of reviews that 
                    indicated the presence of the respective features in the teacher’s 
                    voice, and the dark green bars represent the number of reviews that 
                    indicated the presence of the opposite of the respective features 
                    in the teacher’s voice.
                </p>

                <p className='mb-3'>
                    I have personally read through all of the reviews for the four 
                    categories with bars in this graph and can confirm their accuracy.
                </p>

                <p className='mb-3'>
                    The data from Carta reviews reveals that the rate of speech and 
                    loudness are the major factors to be conscious about as a teacher. 
                    However, there is a flaw in the design of this conclusion. 
                </p>

                <p className='mb-3'>
                    When students write a review, it is often the case that they write 
                    about what is missing or what the teacher could work on than what 
                    they really like about the way the teacher teaches or their 
                    favorite vocal features. This is on top of the fact that Carta 
                    reviews are not exclusively meant to be about the vocal features 
                    of a teacher. Since a review can encompass a very broad list of 
                    stuff related to teaching and about the aspects of the course 
                    itself, reviews about vocal features make a very small fraction 
                    of the total number of reviews in Carta. 
                </p>

                <p className='mb-3'>
                    To account for this, I went to Fizz, a social media app that allows 
                    students to interact annonymously, and created a poll 
                    where I exclusively asked the students which vocal features 
                    they considered to be the most important out of the six categories 
                    identified above in a classroom setting. I received 127 responses, 
                    and the results are astonishing.
                </p>


                <div className='flex flex-row justify-center'>
                    <img src={images.project.carta.graph3} alt='pie chart of the poll by Stanford students ranking the features of voice they find useful in a teacher with regard to learning.' />
                </div>


                <p className='mb-3'>
                    Immediately, it is evident that more than half of the people who 
                    voted valued intonation. They disliked a monotone lecture the most. 
                    These reviews from Carta pretty much sums up their agony
                </p>

                <div className='my-9'>
                    <p className='mb-3'>
                        <q className='italic'>
                            [He] is not the most engaging lecturer but the material is very 
                            interesting read the book worth the read, a shame I could not pay 
                            attention in class...just too monotone
                        </q>
                    </p>

                    <p className='mb-3'>
                        <q className='italic'>
                            [His] voice is also very monotone (even at 2x) that I promise you 
                            if you plan on watching the lectures asynchronously, you will fall 
                            asleep multiple times.
                        </q>
                    </p>
                    
                    <p className='mb-3'>
                        <q className='italic'>
                            [She] speaks very softly in a monotone voice while reading off 
                            a black and white screen for an hour and a half. It is pretty easy, 
                            but sitting through class can be grueling... And there are no 
                            screens... Would NOT recommend
                        </q>
                    </p>
                </div>


                <p className='mb-3'>
                    The rate of speech comes after intonation. From this result, 
                    I also presume that the reason why so many people wrote about 
                    the rate of speech in the Carta reviews was because the rate of 
                    speed is the easiest vocal feature to identify. However, 
                    when made to choose from a set of vocal features already 
                    identified for them, intonation turned out to be the more 
                    popular feature, but the rate of speech isn’t far behind.
                </p>

                <p className='mb-3'>
                    You will notice that Carta reviews ranked loudness second but 
                    the poll on Fizz ranked it dead last. This is to be expected 
                    since most of the classrooms and lectures halls at Stanford now 
                    have speakers installed in them, which eliminates the issue of 
                    not hearing the teacher’s voice. Most of the reviews on Carta 
                    that identified that the teacher’s voice wasn’t loud enough 
                    fell either in the category of the classroom not having speakers 
                    or the teacher refusing to use it.
                </p>

                <div className='my-9'>
                    <p className='mb-3'>
                        <q className='italic'>
                            Loved the lectures. Super interesting information! Sit 
                            close to the front because [he] doesn't use a mike for 
                            some reason, even though he speaks super quietly.
                        </q>
                    </p>
                </div>
               

                <p className='mb-6'>
                    So, if you think that your voice is quiet, do yourself a 
                    favor and use a mike.
                </p>
            </Section>


            <Section
                id="project-carta-3"
                title="Outcome & Reflection"
                bgColor={PWRColor}
                borderColor={PWRBorder}
                textColor={PWRTextColor}
            >
                <h2 id="project-carta-3a" className="mb-3"> Results </h2>

                <p className="mb-3">
                    To summarize all the findings so far, students have identified six 
                    vocal features (five from Carta, one from the study in Saudi Arabia) 
                    that have the most impact on their comprehension in a classroom 
                    setting. Combining the two sources of data from Carta and Fizz, 
                    students clearly find the rate of speech and intonation to be the 
                    prime vocal features that teachers should work on. The habit of 
                    mumbling ranks after that followed by the remaining three vocal 
                    features.
                </p>

                <p className='mb-6 pb-6 border-b sm:border-b-0 border-black'>
                    Having identified the vocal features to pay attention to as a 
                    teacher is super exciting, but the best thing about this 
                    revelation is that all of the six vocal features are unbound 
                    by genetics and upbringing. Teachers have complete control over 
                    them. Isn’t that great? If sufficient effort is poured into it, 
                    they can vastly improve their ability to spread knowledge. 
                    There you go. If you are a teacher, now you are (hopefully) 
                    fully equipped to go down the path of glory and self-improvement.
                </p>


                <h2 id="project-carta-3b" className="mb-3"> Reflection </h2>

                <p className="mb-3">
                    This was my first time scrapping a website. The amazing thing about this endeavour is that I was in no way required to do this. After shifting through 
                    reviews for about 30 classes by hand, I just woke up one day and I was like, "Why am I half-assing this? I'm a CS major at Stanford for crying out loud!"
                </p>

                <p className="mb-6">
                    It was the realization that with just a little bit of effort, I could be doing so much more since there was no way I was going to read all of 214,384 
                    reviews. It was a really fun thing to do amidst all the chaos during that time of the quarter.
                </p>

            </Section>
        </>
    )
}