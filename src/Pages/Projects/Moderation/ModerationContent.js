// Assets
import data from '../../../Assets/Data/data';
import images from '../../../Assets/Images/images';

// Components
import Section from '../../../Components/Section';


export {ModerationCaption, ModerationContent};


function ModerationCaption() {
    return(
        <>
        </>
    )
}


function ModerationContent() {

    const moderationColor = data.projects.moderation.color.background;
    const moderationBorder = data.projects.moderation.color.border;
    const moderationTextColor = data.projects.moderation.color.text


    return(
        <>
            <Section
                id="project-moderation-1"
                title="About this Project"
                bgColor={moderationColor}
                borderColor={moderationBorder}
                textColor={moderationTextColor}
            >
                <h2 id="project-moderation-1a" className="mb-3">
                    Problem Description
                </h2>

                <p className='mb-3'>
                    Distribution of child sexual abuse material (CSAM) is extremely 
                    common worldwide; in 2021 there were over 29 million reports of 
                    suspected child exploitation online (RAINN) 2022) and that number 
                    is increasing year-over-year. To help solve this problem, we are 
                    creating a moderation bot that handles instances of both CSAM 
                    and adult nudity.
                </p>

                <p className="mb-3">
                    <strong>Child Sexual Abuse Material (CSAM):</strong> Any material 
                    that depicts sexual abuse and exploitation of 
                    children, and is distributed using images or videos.
                </p>


                <p className="mb-3">
                    <strong>Adult Sexual Exploitation:</strong> Any material 
                    depicting non-consensual sexual activity, which includes 
                    victims of human trafficking or coercion and explicit photos 
                    or videos shared without consent.
                </p>


                <p className="mb-6 pb-6 border-b sm:border-b-0 border-black">
                    This illegal material is unfortunately found all over the internet, 
                    and in order to comply with recent legislation such as FOSTA-SESTA, 
                    social media platforms such as Instagram and Tumblr have banned 
                    nudity altogether to stop the distribution of this illegal content.
                </p>

                <h2 id="project-moderation-1b" className="mb-3">
                    Our Goal
                </h2>

                <p className="mb-3">
                    To keep our child-friendly platform a 
                    safe space, we would like to prevent any nudity on our platform, 
                    especially child sexual abuse material (CSAM), as this content 
                    can be offensive and traumatizing. Victims of this abuse can be 
                    those portrayed in the content as well as the users on our 
                    platform who view the material.
                </p>
            </Section>


            <Section
                id="project-moderation-2"
                title="Policy"
                bgColor={moderationColor}
                borderColor={moderationBorder}
                textColor={moderationTextColor}
            >
                <h2 id="project-moderation-2a" className="mb-3">
                    Main Policy
                </h2>

                <p className="mb-3">
                    In order to maintain a space that is healthy and appropriate 
                    for a diverse audience and prevent child exploitation, 
                    we will remove any content that includes nudity.
                </p>


                <p className="">
                    The types of content that violates our policy includes but 
                    is not limited to:
                </p>
                <ul className='list-disc ml-6 mb-6 pb-6 border-b sm:border-b-0 border-black'>
                    <li>
                        <p>
                            Photos, videos, or digitally created content (including deep fakes) that depict adult nudity and/or sexual activity.
                        </p>
                    </li>
                    <li>
                        <p>
                            Child sexual abuse material, including any images containing full or partial nudity of children regardless of intent, and any images that sexualize children.
                        </p>
                    </li>
                </ul>

                <h2 id="project-moderation-2b" className="mb-3">
                    Exceptions
                </h2>

                <p className="mb-6 pb-6 border-b sm:border-b-0 border-black">
                    We understand that this is a complex issue, and depictions of 
                    nudity can be used for educational purposes, depicting health issues, 
                    protest, or art. We will make exceptions if the depiction of nudity 
                    is for such purposes.
                </p>

                <h2 id="project-moderation-2c" className="mb-3">
                    Policy Violation
                </h2>

                <ul className='list-disc ml-6 mb-6 pb-6 border-b sm:border-b-0 border-black'>
                    <li>
                        <p>
                            If this policy is violated, the content will be reviewed by our 
                            moderation team and removed if found to be a violation.
                        </p>
                    </li>
                    <li>
                        <p>
                            For instances of adult nudity, the user will receive a suspension, 
                            or harsher penalties up to permanent ban if there are repeated 
                            violations.
                        </p>
                    </li>
                    <li>
                        <p>
                            We have zero tolerance for sharing CSAM, and users will be 
                            permanently banned from the platform, and reported to law 
                            enforcement and child-safety organizations including the 
                            National Center for Missing and Exploited Children.
                        </p>
                    </li>
                </ul>

                <h2 id="project-moderation-2d" className="mb-3">
                    False Reporting Policy
                </h2>

                <ul className='list-disc ml-6 mb-6 pb-6 border-b sm:border-b-0 border-black'>
                    <li>
                        <p>
                            Content will be reviewed by our moderators to protect users 
                            from false reporting. If a user is continuously making false 
                            reports, they will be subject to penalties including warnings 
                            up to an account suspension.
                        </p>
                    </li>
                    <li>
                        <p>
                            If you believe your content was not in violation of our policy, 
                            you may submit an appeal and it will be reviewed by our moderators.
                        </p>
                    </li>
                </ul>
            </Section>

            <Section
                id="project-moderation-3"
                title="Technical Backend"
                bgColor={moderationColor}
                borderColor={moderationBorder}
                textColor={moderationTextColor}
            >
                <h2 id="project-moderation-3a" className="mb-3">
                    Features
                </h2>

                <h4><strong>Automated Detection</strong></h4>

                <p className="mb-3">
                    We trained a neural network image classifier to help automate 
                    the process of image reporting.
                </p>

                <h4><strong>Automoderation</strong></h4>

                <p className="mb-3">
                    If a message has already been moderated, all other reports 
                    for the same message will be handled automatically.
                </p>

                <h4><strong>Reporter Data</strong></h4>

                <p className="mb-3">
                    We track the accuracy of each reporter. This lets us set a 
                    reporting accuracy threshold where we can identify users that 
                    submit high amounts of inaccurate reports and prevent their 
                    reports from clogging up the moderation queues.
                </p>

                <p className="mb-3">
                    There is also a threshold for the number of messages 
                    reported so that we don't inadvertently ignore reports 
                    from users who have only reported a handful of reports 
                    but has a high inaccuracy rating.
                </p>

                <h4><strong>Reported User Data</strong></h4>

                <p className="mb-3">
                    We keep track of the number of reports against a user 
                    for a specific message to combat coordinated harassment. 
                    This allows us to track which comments from a user are 
                    reported and the number of times a user is warned. 
                    Once a moderator warns a user more than once, the user 
                    is removed according to our policy.
                </p>


                <h4><strong>Reports Queue</strong></h4>

                <p className="">
                    We have 4 different report queues which are broadly 
                    classified into two categories:
                </p>

                <ol className=' list-decimal ml-6 mb-3'>
                    <li>
                        <p>
                            Reports generated by users
                        </p>
                    </li>
                    <li>
                        <p>
                            Reports generated by a bot
                        </p>
                    </li>
                </ol>

                <p className="mb-3">
                    Each of these categories further specifies if the report 
                    is about adult nudity or CSAM.
                </p>

                <p className="mb-6 pb-6 border-b sm:border-b-0 border-black">
                    Moderators also do not get to choose a specific report from within a given queue so that there is no bias or discrimination from the moderator's side.
                </p>

                <h2 id="project-moderation-3b" className="mb-3">
                    User Reporting Flow
                </h2>

                <div className="flex justify-center mb-6 pb-6 border-b sm:border-b-0 border-black">
                    <img className="w-full max-w-5xl" src={images.projects.moderation.moderation3} alt="User reporting flow" />
                </div>

                <h2 id="project-moderation-3c" className="mb-3">
                    Moderator Flow
                </h2>

                <div className="flex justify-center mb-6 pb-6 border-b sm:border-b-0 border-black">
                    <img className="w-full max-w-3xl" src={images.projects.moderation.moderation4} alt="Moderator flow" />
                </div>



                <h2 id="project-moderation-3d" className="mb-3">
                    Classifier Evaluation
                </h2>

                <p className="mb-3">
                    For our automated back-end moderation tool, we decided to train 
                    an image classifier to help automate the process of image reporting. 
                    Since we cannot work with images of adult nudity and CSAM, 
                    we used a toy dataset to simulate this tool. Specifically, 
                    we used the CIFAR-10 dataset to replicate real-world data; 
                    the CIFAR-10 has ten classes, and we assigned “dogs” and “cats” 
                    to adult nudity and CSAM respectively, while treating the other 
                    eight classes as “other,” innocuous classes.
                </p>

                <p className="mb-3">
                    There are a total of 50,000 images in the dataset, with 5,000 
                    images per class. Therefore, we have 5,000 “adult nudity” 
                    images, 5,000 “CSAM” images, and 40,000 “other” images. 
                    We then split this dataset into a train/validation/test 
                    split of 40,000/5,000/5,000.
                </p>

                <p className="mb-3">
                    The image classifier was built using ResNet18, a convolutional 
                    neural network architecture that uses residual skip connections 
                    to enable the training of deeper neural networks. The model was 
                    trained for 100 epochs with a batch size of 32. We used the Adam 
                    optimizer with a learning rate of 0.001.
                </p>

                <p className="mb-3">
                    The final model achieved a test accuracy of 78.5%. 
                    Furthermore, we show the confusion matrix generated 
                    by the trained (inference-time version) of our model:
                </p>

                <div className='flex flex-col xl:flex-row mb-3 w-full justify-center items-center'>
                    <div className=''>
                        <img className='max-w-xs' src={images.projects.moderation.moderation1} alt='??' />
                    </div>
                    <div className=''>
                        <img className='max-w-xl w-full' src={images.projects.moderation.moderation2} alt='??' />
                    </div>
                </div>

                
                <p className="mb-3">
                    We see that our model reasonably balances false positives and 
                    false negatives, and discriminates cats (CSAM) well. 
                    This model therefore provides a reasonabe and efficient filter 
                    for image classification, reducing the burden on users to timely 
                    report offending content. Further research and discussion may be 
                    warranted to determine the appropriate balance of precision 
                    and recall for our use case.
                </p>

                <p className="mb-6">
                    When integrating our classifier into our Discord bot, we 
                    check each message sent in our channel to see if it contains 
                    at least one image. If a message does contain an image, we 
                    feed each image through our trained model for inference. 
                    If the model predicts an image to contain a dog (adult nudity) 
                    or a cat (CSAM), the message containing that image is 
                    automatically flagged and reported for further moderator review.
                </p>

            </Section>

            <Section
                id="project-moderation-4"
                title="Demo"
                bgColor={moderationColor}
                borderColor={moderationBorder}
                textColor={moderationTextColor}
            >
                <p className="mb-3">
                    Below is a video demonstrating how our content moderation system
                    works.
                </p>

                <div className="flex justify-center mb-3">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/rLAgSa6kf2E"
                        title="CSAM/Adult Nuidity Moderation"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                    />
                </div>
            </Section>

            <Section
                id="project-moderation-5"
                title="Outcome & Reflection"
                bgColor={moderationColor}
                borderColor={moderationBorder}
                textColor={moderationTextColor}
            >
                <h2 id="project-moderation-5a" className="mb-3">
                    Project Expo
                </h2>

                <p className="mb-3">
                    Our CSAM/Adult Nuidity moderation flow was presented at 
                    Stanford's Trust and Safety Engineering Project Expo in June 2023. 
                    The expo was judged by about a dozen judges hailing from the 
                    Trust and Safety team of highly reputed companies based in the Silicon valley.
                </p>

                <p className="mb-3">
                    
                    The judges were very impressed by our project that strove to do above and 
                    beyond what the class would have required of us. They were especially moved 
                    by and at the same time critical at our emphasis on taking away a moderator's 
                    bias from the moderator flow and were impressed by the implementation of an 
                    image classifier that helped make automatic reports.
                </p>

                <p className="mb-3">
                    Excerpts from judge feedback:
                </p>

                <ul className='list-disc ml-6 mb-6 pb-6 border-b sm:border-b-0 border-black'>
                    <li>
                        <p className="mb-3">
                            They did a good job presenting the important points succinctly. 
                            They did a good job thinking through preventing bias in moderation.
                        </p>
                    </li>

                    <li>
                        <p className="mb-3">
                            Amazing prevention, clear demo and the models tackle both sides 
                            of reporting and moderating.
                        </p>
                    </li>

                    <li>
                        <p className="mb-3">
                            Clearly articulated scope for the project, making for a easy 
                            to understand, parametrized discussion. Discussion of queues 
                            were interesting, although obviously would be much different 
                            in practice in a content moderation tool. 
                            Thoughtfully discussed limiting burden on content moderators. 
                            Overall, very impressive work.
                        </p>
                    </li>

                    <li>
                        <p className="mb-3">
                            Think about user empowerment in the process of reporting
                        </p>
                    </li>

                    <li>
                        <p className="">
                            Not quite sure I understood their description of fairness of 
                            choosing what content to moderate over others, when in reality, 
                            complex cases are often escalated to actual members of a 
                            company's trust and safety team (either an ops person, or 
                            child safety specialist).
                        </p>
                    </li>
                </ul>

                <h2 id="project-moderation-5b" className="mb-3">
                    Looking Forward
                </h2>

                <p className="mb-3">
                    Platform safety would be bolstered because we would be able 
                    to maintain an environment that would be free from sexual 
                    exploitation material. Since our implementation takes into 
                    account the difference between adult and child nudity, 
                    we are confident that we will not have any child nudity 
                    present on the platform: users who are flagged for CSAM 
                    are permanently banned and local law enforcement is made 
                    aware of the violations. 
                </p>

                <p className="mb-6">
                    Our plan for the future is to add additional report flows, 
                    perform semantic natural language processing to identify 
                    offenses in text and not just images, and visit URLs sent 
                    in messages to see if offensive content may be hidden in 
                    links. In our implementation, we have made it simple to 
                    add more abuse types; therefore, looking forward, we may 
                    want to cover more cases in regards to trust and safety. 
                    We deliberately made our reporting and moderation tool as 
                    flexible and extensible as possible, so it would be pretty 
                    simple to add additional focus topics such as harrassment 
                    or depictions of violence.
                </p>
            </Section>
        </>
    )
}