// Components
import { ToolsButton } from './Button';


// Ionicon
import { IonIcon} from '@ionic/react';
import { logoGithub } from 'ionicons/icons';


export default function ProjectContentTemplate({colorInfo, title, date, caption, projectDetails, githubUrl = null, toolsUsed = []}) {

    const backgroundColor = colorInfo.background;
    const textColor = colorInfo.text;

    return(
        <div className='absolute w-full top-0 bottom-0 overflow-y-auto border'>
            <div className="p-2 sticky top-0 bg-white bg-opacity-50 backdrop-blur border-b border-neutral-regular w-full flex flex-row justify-center">
                <h1>
                    Project Details
                </h1>
            </div>

            <div className='p-8'>
                <div className={`p-5 rounded-t-2xl ${backgroundColor} ${textColor}`}>                
                    <h1>{ title } </h1>
                    <h4 className='text-gray-200'>{ date }</h4>

                    {githubUrl &&
                        <div className="flex flex-row">
                            <a target="_blank" rel="noopener noreferrer" href={githubUrl} ><IonIcon icon={logoGithub} className="text-2xl" /></a>
                        </div>
                    }

                    {Array.isArray(toolsUsed) && toolsUsed.length > 0 &&
                        <div className="mb-3">
                            <p>Tools Used: </p>
                            <div className="flex flex-row justify-center items-center flex-wrap">
                                {toolsUsed.map(tool => (<ToolsButton className="m-2" > {tool} </ToolsButton>))}
                            </div>
                        </div>
                    }

                    
                    
                    {caption}

                </div>


                <div className='rounded-b-2xl border border-t-0 p-5 bg-white text-black'>
                    {projectDetails}
                </div>
            </div>
        </div>
    )
}