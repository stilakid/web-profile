// Components
import { ToolsButton } from './Button';
import FootBar from './FootBar';


// Ionicon
import { IonIcon} from '@ionic/react';
import { logoGithub } from 'ionicons/icons';


export default function ProjectContentTemplate({colorInfo, title, date, caption, projectDetails, githubUrl = null, toolsUsed = []}) {

    const backgroundColor = colorInfo.background;
    const textColor = colorInfo.text;

    return(
        <div>
            <div className={`flex items-center flex-grow justify-center ${backgroundColor}`}>

                <div className={`py-5 px-10 md:px-20 ${textColor} w-full max-w-screen-xl`}>                
                    <h1 className='text-4xl font-medium pt-4 pb-2'>{ title } </h1>
                    <h5 className='text-gray-200'>{ date }</h5>

                    {githubUrl &&
                        <div className="flex flex-row">
                            <a target="_blank" rel="noopener noreferrer" href={githubUrl} ><IonIcon icon={logoGithub} className="text-2xl" /></a>
                        </div>
                    }

                    {Array.isArray(toolsUsed) && toolsUsed.length > 0 &&
                        <div className="my-3">
                            <p>Tools Used: </p>
                            <div className="flex flex-row justify-center items-center flex-wrap">
                                {toolsUsed.map(tool => (<ToolsButton className="m-2" > {tool} </ToolsButton>))}
                            </div>
                        </div>
                    }

                    
                    
                    {caption}

                </div>
            </div>


            <div className='flex items-center flex-grow justify-center '>
                <div className='pt-5 pb-20 px-5 md:px-20 bg-white text-black w-full max-w-screen-xl'>
                    {projectDetails}
                </div>
            </div>

            <FootBar />
        </div>
    )
}