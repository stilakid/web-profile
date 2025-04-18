// Assets
import data from '../../../Assets/Data/data';
import images from '../../../Assets/Images/images';
import videos from '../../../Assets/Videos/videos';

// Components
import Section from '../../../Components/Section';
import TeamMemberCard from '../../../Components/TeamMemberCard';
import BlueLink from '../../../Components/BlueLink';

// Ionicon
import { IonIcon} from '@ionic/react';
import { logoLinkedin, mail, logoAppleAppstore, logoGooglePlaystore } from 'ionicons/icons';

export {CS224SCaption, CS224SContent};


function CS224SCaption() {
    return(
        <>
        </>
    )
}


function CS224SContent() {

    const cs224sColor = data.projects.cs224s.color.background;
    const cs224sBorder = data.projects.cs224s.color.border;
    const cs224sTextColor = data.projects.cs224s.color.text


    return(
        <>
            <Section
                id="project-cs224s-1"
                title="Abstract"
                bgColor={cs224sColor}
                borderColor={cs224sBorder}
                textColor={cs224sTextColor}
            >
                <p className="mb-3">
                    Our goal was to create a model that can synthesize a non-stuttering audio version of an informally 
                    structured stuttered speech input. We conducted this previously unexplored research with the hope 
                    that the results of this project will allow simulation of various speech disorders that ultimately 
                    allows easier communication for speech-impaired individuals. We've found that the SpeechT5 model 
                    with just finetuning with stuttered text only shows marginal improvement, while the model with 
                    custom tokenization of the stutters showed more significant improvement in filtering out the stutters.
                </p>
            </Section>

            <Section
                id="project-cs224s-2"
                title="Our Team"
                bgColor={cs224sColor}
                borderColor={cs224sBorder}
                textColor={cs224sTextColor}
            >
                <TeamMemberCard
                    name="Enok Choe"
                    designation="Stanford Class of 2023"
                    contactDetails={
                        <>
                            <div className="flex flex-row">
                                <a target="_blank" rel="noopener noreferrer" href="//linkedin.com/in/enokchoe" >
                                    <IonIcon icon={logoLinkedin} className="text-2xl" />
                                </a>
                                <a href = "mailto: echoe720@stanford.edu">
                                    <IonIcon icon={mail} className="text-2xl" />
                                </a>
                            </div>
                        </>
                    }
                >
                    <p>Core Responsibilities</p>
                    <ul className="list-disc ml-4">
                        <li><p><em>Researched related works</em></p></li>
                        <li><p><em>Created the custom dataset</em></p></li>
                        <li><p><em>Finetuned and built the SpeechT5 models with tokenization and LLM preprocessing</em></p></li>
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
                        <li><p><em>Researched related works</em></p></li>
                        <li><p><em>Finetuned and built the SpeechT5 models with tokenization and LLM preprocessing</em></p></li>
                    </ul>
                </TeamMemberCard>
            </Section>

            <Section
                id="project-cs224s-3"
                title="Introduction"
                bgColor={cs224sColor}
                borderColor={cs224sBorder}
                textColor={cs224sTextColor}
            >
                <p className="mb-3">
                    Today, we can safely say that the applications of synthetic speech is now commonplace, whether interacting 
                    with virtual assistants or navigation systems. However, these applications are not necessarily commonplace
                    in all areas, and there are still many application areas that would benefit a lot from it. One of such areas 
                    is in speech assistance, and although there are ongoing efforts to apply synthetic speech into this area with
                    aims to assist speech-impaired individuals, the state-of-the-art approaches does not appear to be yet good
                    enough to be used commonly.
                </p>

                <p className="mb-3">
                    Some recent research efforts have been dedicated to creating text-to-speech models for stuttered speech. (Zhang et al., 2022)
                    Also, there are formal transcription methods of speech such as CLAN. However, there aren't existing ASR / TTS 
                    methods that uses informal / casual texting-like format of stuttered text (e.g. I-I-I did it!) to directly 
                    create non-stuttering synthetic speech through original architectures and/or fine-tuning. We aim to fill this 
                    void through this research.
                </p>
            </Section>


            <Section
                id="project-cs224s-4"
                title="Related Work"
                bgColor={cs224sColor}
                borderColor={cs224sBorder}
                textColor={cs224sTextColor}
            >

                <h2 id="project-cs224s-4a" className="mb-3">
                    1. Stutter-TTS: Controlled Synthesis and Improved Recognition of Stuttered Speech (Ao et al., 2022)
                </h2>

                <p className="mb-6 pb-6 border-b sm:border-b-0 border-black">
                    To address the issue of current automatic speech recognition systems struggling with 
                    stuttered speech due to a lack of appropriate training data, Stutter-TTS was developed
                    as a neural text-to-speech model that can synthesize various types of stuttered speech. 
                    This model uses a unique strategy of adding new types of tokens to the training text to 
                    represent specific stuttering features. These tokens allow for word-level control of
                    stuttering in the synthesized speech.
                </p>

                <h2 id="project-cs224s-4b" className="mb-3">
                    2. SpeechT5: Unified-Modal Encoder-Decoder Pre-Training for Spoken Language Processing (Zhang et al., 2022)
                </h2>

                <p className="mb-6 pb-6 border-b sm:border-b-0 border-black">
                    The SpeechT5 framework consists of a shared encoder-decoder network and six modal-specific 
                    (speech/text) pre/post-nets. After preprocessing the input speech/text through the pre-nets, 
                    the shared encoder-decoder network models the sequence-to-sequence transformation, and then 
                    the post-nets generate the output in the speech/text modality based on decoder's outputs.
                    To align the textual and speech information into this unified semantic space, a cross-modal 
                    vector quantization approach is proposed that randomly mixes up speech/text states with latent 
                    units as the intermediary step between encoder and decoder. The study evaluations show that 
                    it performs well in both ASR and TTS tasks.
                </p>

                <h2 id="project-cs224s-4c" className="mb-3">
                    3. Evaluation methods of TTS (Wagner et al., 2019)
                </h2>

                <p className="mb-6 pb-6 border-b sm:border-b-0 border-black">
                    Despite the fact that speech synthesis technologies improved dramatically over the past couple 
                    of years, TTS evaluation is approached in more or less the same way as in the late 1990s and 
                    a bit more arbitrary. However, these standards were not predominantly designed for TTS evaluation. 
                    This approach assumes that there is a stable reference for speech quality, independent of context,
                    which is flawed. Therefore, TTS development is not a one-size-fits-all issue; the perceived quality 
                    of TTS varies across different contexts.
                </p>
            </Section>

            <Section
                id="project-cs224s-5"
                title="Approach / Methods"
                bgColor={cs224sColor}
                borderColor={cs224sBorder}
                textColor={cs224sTextColor}
            >
                <h2 id="project-cs224s-5a" className="mb-3">
                    Dataset
                </h2>


                <p className="mb-6 pb-6 border-b sm:border-b-0 border-black">
                    We created our custom text-to-speech datasets by creating a script to translate the
                    texts from the Huggingface's MLCommons/peoples\_speech dataset into stuttered versions 
                    of the texts. We did so with OpenAI's GPT-3.5 model, feeding each of the texts into the 
                    model to generate the sentences with explicit prompting and checking to ensure that the 
                    stuttered sentence outputs match up with the original input texts. While the original dataset 
                    contains ~20k train and ~34k test split entries, we created two sets of train and evaluation 
                    datasets: one with 1k entries each for train and test split and another with 5k entries each 
                    for the two splits. Each entry represents a voice recording of around 14 seconds.
                </p>


                <h2 id="project-cs224s-5b" className="mb-3">
                    Architecture
                </h2>

                <div className="flex justify-center mb-6 pb-6 border-b sm:border-b-0 border-black">
                    <figure>
                        <img className="w-full max-w-xs" src={images.projects.cs224s.speacht5_1} alt="LSTM baseline model architecture" />
                        <figcaption className="text-center">SpeechT5 TTS Architecture</figcaption>
                    </figure>
                </div>


                <div className="flex justify-center mb-6 pb-6 border-b sm:border-b-0 border-black">
                    <figure>
                        <img className="w-full max-w-xs" src={images.projects.cs224s.speacht5_2} alt="LSTM baseline model architecture" />
                        <figcaption className="text-center">SpeechT5 TTS Architecture- joint pre-training process</figcaption>
                    </figure>
                </div>



                <p className="mb-3">
                    The pre-trained Microsoft/SpeechT5 model is the model we've been wanting to use as our 
                    baseline to branch off of. We use the spkrec-xvect-voxceleb model from SpeechBrain to 
                    create the speaker embeddings, and we utilize the HiFi-GAN vocoder to convert the 
                    logMel-filterbank to the raw waveform (Ao et al., 2022; Kong et al., 2020).
                </p>

                

                <p className="mb-6 pb-6 border-b sm:border-b-0 border-black">
                    After initially setting up our pre-trained models with the default configurations, 
                    we used our custom dataset with stuttered-versions of the non-stuttered texts, to 
                    fine-tune the models. We used the WhisperSpeech model as a starting point of baseline, 
                    followed by SpeechT5 model from Huggingface. Due to time and resource constraints, we 
                    did not use larger models.
                </p>
            </Section>

            <Section
                id="project-cs224s-6"
                title="Experiments"
                bgColor={cs224sColor}
                borderColor={cs224sBorder}
                textColor={cs224sTextColor}
            >

                <h2 id="project-cs224s-6a" className="mb-3">
                    Finetuning
                </h2>

                <p className="mb-3">
                    After preprocessing the custom datasets by feeding them into the encoder 
                    (with stuttered-version text from our custom dataset to non-stuttered audio as label) 
                    and formatting them into speaker embeddings, we fine-tuned the models with a custom 
                    data collator that creates input ids, speaker features, and label features for model 
                    finetuning. We tested out different hyperparameter combinations within the range 
                    recommended by past researchers with emphasis on learning rate, batch size, and the 
                    number of epochs.  While testing the learning rate, we fixed the batch size to 16 and 
                    the number of epochs to 10 after observing the effectiveness of each of the 
                    combinations of hyperparameters. Based on our results, we settled on the following 
                    list of hyperparameters which gave us the best results:
                </p>

                <div className="flex justify-center mb-6 pb-6 border-b sm:border-b-0 border-black">
                    <table className="w-full max-w-2xl bg-white">
                        <caption className="mb-3">Best performing Hyperparameters for fine-tuning process</caption>
                        <thead>
                            <tr>
                                <th className="bg-blue-100 border border-blue-300 text-center px-4 py-2">Hyperparameters</th>
                                <th className="bg-blue-100 border border-blue-300 text-center px-4 py-2">Whisper</th>
                                <th className="bg-blue-100 border border-blue-300 text-center px-4 py-2">SpeechT5</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-blue-300 text-center px-4 py-2">Learning Rate</td>
                                <td className="border border-blue-300 text-center px-4 py-2">2e-5</td>
                                <td className="border border-blue-300 text-center px-4 py-2">1e-5</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-300 text-center px-4 py-2">Batch Size</td>
                                <td className="border border-blue-300 text-center px-4 py-2">16</td>
                                <td className="border border-blue-300 text-center px-4 py-2">16</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-300 text-center px-4 py-2">Epochs</td>
                                <td className="border border-blue-300 text-center px-4 py-2">10</td>
                                <td className="border border-blue-300 text-center px-4 py-2">10</td>
                            </tr>
                        </tbody>
                    </table>
                </div>


                <h2 id="project-cs224s-6b" className="mb-3">
                    Architectural / Preprocessing Modifications
                </h2>

                <div className="flex justify-center mb-3 pb-3">
                    <figure>
                        <img className="w-full max-w-xs" src={images.projects.cs224s.tokenization} alt="LSTM baseline model architecture" />
                        <figcaption className="text-center">SpeechT5 TTS Architecture with Stutter Tokenization</figcaption>
                    </figure>
                </div>

                <p className="mb-3">
                    After attempting the finetuning methods, we decided to change the encoding process of 
                    the SpeechT5 model itself  by introducing two different methods: 
                </p>

                <ol className="list-decimal ml-6">
                    <li className="mb-3">
                        LLM filtering prior to encoding (changing the inputs to be non-stuttered versions via prompting)
                    </li>

                    <li className="mb-3">
                        A custom stutter and prefix words tokenization method, where we tokenize the stutter-indicating 
                        hyphen along with surrounding partial words (e.g. for he-hello, tokenizing "he", "-", and "hello") 
                        to be a specific token value, as shown in figure 3 above (NOTE: in the actual architecture, the 
                        tokens would be a vector rather than a single value).
                    </li>
                </ol>

                <p className="mb-6 pb-6 border-b sm:border-b-0 border-black">
                    Then, we compared and analyzed the audio outputs based on these architectural changes.
                </p>
            </Section>

            <Section
                id="project-cs224s-7"
                title="Evaluation"
                bgColor={cs224sColor}
                borderColor={cs224sBorder}
                textColor={cs224sTextColor}
            >
                <p className="mb-3">
                    For our evaluation method, we used manual MOS (mean opinion score) by randomly choosing 
                    text inputs and the corresponding audio outputs and scoring them between 1-5. We further 
                    subdivided the evaluation into the following categories:
                </p>

                <ol className="list-decimal ml-6 mb-6 pb-6 border-b sm:border-b-0 border-black">
                    <li className="mb-3">
                        Naturalness (How natural/human does the audio sound in terms of voice quality?)
                    </li>

                    <li className="mb-3">
                        Intelligibility (Is the audio comprehensible and easy for you to understand the 
                        first time you hear it?)
                    </li>

                    <li className="mb-3">
                        Expressiveness (Is the audio expressive and does prosody/tone match what you 
                        would expect a human to express when saying the same thing?)
                    </li>
                </ol>
            </Section>

            <Section
                id="project-cs224s-8"
                title="Results"
                bgColor={cs224sColor}
                borderColor={cs224sBorder}
                textColor={cs224sTextColor}
            >

                <div className="flex justify-center mb-3 pb-3">
                    <table className="w-full max-w-2xl bg-white">
                        <caption className="mb-3">Best Evaluation Results of TTS Synthesis with only finetuning. Ranging from 0 (just noise) - 5 (perfect)</caption>
                        <thead>
                            <tr>
                                <th className="bg-blue-100 border border-blue-300 text-center px-4 py-2">Metric</th>
                                <th className="bg-blue-100 border border-blue-300 text-center px-4 py-2">WhisperSpeech</th>
                                <th className="bg-blue-100 border border-blue-300 text-center px-4 py-2">SpeechT5</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-blue-300 text-center px-4 py-2">Naturalness</td>
                                <td className="border border-blue-300 text-center px-4 py-2">1.0</td>
                                <td className="border border-blue-300 text-center px-4 py-2">1.0</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-300 text-center px-4 py-2">Intelligibility</td>
                                <td className="border border-blue-300 text-center px-4 py-2">1.0</td>
                                <td className="border border-blue-300 text-center px-4 py-2">2.0</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-300 text-center px-4 py-2">Expressiveness</td>
                                <td className="border border-blue-300 text-center px-4 py-2">4.0</td>
                                <td className="border border-blue-300 text-center px-4 py-2">4.0</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-300 text-center px-4 py-2">MOS</td>
                                <td className="border border-blue-300 text-center px-4 py-2">1.0</td>
                                <td className="border border-blue-300 text-center px-4 py-2">2.0</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="flex justify-center mb-3 pb-3">
                    <table className="w-full max-w-2xl bg-white">
                        <caption className="mb-3">Best Evaluation Results of TTS Synthesis with preprocessing / architectural changes to SpeechT5 model. Ranging from 0 (just noise) - 5 (perfect)</caption>
                        <thead>
                            <tr>
                                <th className="bg-blue-100 border border-blue-300 text-center px-4 py-2">Metric (SpeechT5)</th>
                                <th className="bg-blue-100 border border-blue-300 text-center px-4 py-2">Tokenization</th>
                                <th className="bg-blue-100 border border-blue-300 text-center px-4 py-2">LLM</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-blue-300 text-center px-4 py-2">Naturalness</td>
                                <td className="border border-blue-300 text-center px-4 py-2">3.0</td>
                                <td className="border border-blue-300 text-center px-4 py-2">3.0</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-300 text-center px-4 py-2">Intelligibility</td>
                                <td className="border border-blue-300 text-center px-4 py-2">3.5</td>
                                <td className="border border-blue-300 text-center px-4 py-2">4.0</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-300 text-center px-4 py-2">Expressiveness</td>
                                <td className="border border-blue-300 text-center px-4 py-2">3.5</td>
                                <td className="border border-blue-300 text-center px-4 py-2">3.5</td>
                            </tr>
                            <tr>
                                <td className="border border-blue-300 text-center px-4 py-2">MOS</td>
                                <td className="border border-blue-300 text-center px-4 py-2">3.5</td>
                                <td className="border border-blue-300 text-center px-4 py-2">3.8</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p className="mb-3">
                    SpeechT5 with LLM preprocessing performed by far the best with near-perfect intelligibility given that 
                    it demonstrated clear articulation of each word in the attempted speech sentence, and showing almost 
                    no hints of stuttering at all. This was not a surprising result because this is converting the stuttered 
                    texts into the non-stuttered version of the texts prior to feeding them into the encoder. Thus, this 
                    serves as a benchmark evaluation, reflecting the performance of the LLM rather than the model.
                </p>

                <p className="mb-3">
                    The result that was surprising to us was that the vanilla models with only fine-tuning did not appear 
                    to be able to recognize the existence of the stutters much and sometimes not at all, yet the the 
                    SpeechT5 model with special tokenization process added appeared to significantly improve the model 
                    in recognizing the existence of the stutters and successfully filtering them out in the audio output. 
                    SpeechT5 with tokenization overall performed the second best- marginally worse than the model with LLM 
                    preprocessing.
                </p>

                <p className="mb-6 pb-6 border-b sm:border-b-0 border-black">
                    Another surprising result was that even though all versions of the SpeechT5 models did a decent job 
                    in expressiveness, one with only finetune performed noticably better in expressiveness than the 
                    tokenization and LLM-processed versions.
                </p>
            </Section>



            <Section
                id="project-cs224s-9"
                title="Conclusion"
                bgColor={cs224sColor}
                borderColor={cs224sBorder}
                textColor={cs224sTextColor}
            >
                <p className="mb-3">
                    Thus, the overall outcome of the experiments is that the SpeechT5 model with the custom tokenization 
                    method performs decently well to filter out the stutters in the stuttered input text when generating 
                    the audio outputs, while pure fine-tuning methods do not appear to make noteworthy changes consistently.
                </p>

                <p className="mb-3">
                    The biggest discovery in this research endeavor is the performance of SpeechT5 with the tokenization 
                    step. Given that the initial fine-tuning did not appear to influence the performance of the speech 
                    synthesis in detecting the stutters accurately, we can speculate that the model is capable of detecting 
                    the patterns between the tokens where the stutter-indicating token appears. Based on this, we have two 
                    potential hypothesis.
                </p>

                <p className="mb-3">
                    First, it may be recognizing the fact that one of the tokenized words is a prefix of another tokenized 
                    word. We can hypothesize that the model first learns to choose the longest word that is the superset 
                    of the prefixes as the word, to generate in the audio output. Then, it may associate the superset word 
                    with the Mel spectrogram. In cases of where the stutters are in between the words, the model perhaps 
                    learns to simply output the parts of the words together. Thus, in either case, this would lead to the 
                    generation of the accurate audio output.
                </p>

                <p className="mb-3">
                    For instance, if there is a stuttered word "h-h-he-hello," it would filter out all the parts before 
                    the word "hello," as "h" and "he" are prefixes of "hello." In cases of word-separating stutters such 
                    as "h-he-llo," it would detect both "he" and "llo" as being separate tokens that compose a single word, 
                    and produce an audio that outputs "hello" as well.
                </p>

                <p className="mb-3">
                    Another possibility is that the tokens prior to the final token in the stuttered word is decided by 
                    the model to be ignored. This analysis is reasonable in lieu of the initial fine-tuning not making 
                    much changes in audio performance, as this has shown that the model is perhaps simply not able to 
                    directly learn the correlation between stuttered words with non-stuttered version of the audio 
                    represented by the Mel spectrogram.
                </p>

                <p className="mb-3">
                    In addition, when we solely look at the expressiveness of the audio output from the three models, 
                    we have observed that the finetune-only model performs better than the models that uses tokenization 
                    and LLM-preprocessing. We hypothesize that the reason for this is due to the model failing to 
                    recognize the stuttered words or phrases sometimes, creating a random range of pitches in the Mel 
                    spectrogram output process, which would result in the pitch of the speaker going up-and-down a lot.
                </p>
            </Section>

            <Section
                id="project-cs224s-10"
                title="References"
                bgColor={cs224sColor}
                borderColor={cs224sBorder}
                textColor={cs224sTextColor}
            >
                <p className="mb-3">
                    Junyi Ao, Rui Wang, Long Zhou, Chengyi Wang, Shuo Ren, Yu Wu, Shujie Liu, Tom Ko, Qing Li, Yu Zhang,
                    Zhihua Wei, Yao Qian, Jinyu Li, and Furu Wei. 2022. Speecht5: Unified-modal encoder-decoder
                    pre-training for spoken language processing.
                </p>

                <p className="mb-3">
                    Jungil Kong, Jaehyeon Kim, and Jaekyoung Bae. 2020. Hifi-gan: Generative adversarial networks for 
                    efficient and high fidelity speech synthesis.
                </p>

                <p className="mb-3">
                    Petra Wagner, Jonas Beskow, Simon Betz, Jens Edlund, Joakim Gustafson, Gustav Henter, 
                    Sébastien Le Maguer, Zofia Malisz, Eva Szekely, Christina Tånnander, and Jana Voße. 
                    2019. Speech synthesis evaluation — state-of-the-art assessment and suggestion for a
                    novel research program. pages 105–110.
                </p>

                <p className="mb-3">
                    Xin Zhang, Iván Vallés-Pérez, Andreas Stolcke, Chengzhu Yu, Jasha Droppo, Olabanji Shonibare, 
                    Roberto Barra-Chicote, and Venkatesh Ravichandran. 2022. Stutter-tts: Controlled synthesis and 
                    improved recognition of stuttered speech.
                </p>
            </Section>
        </>
    )
}