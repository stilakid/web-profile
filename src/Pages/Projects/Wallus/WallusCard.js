// Assets
import images from '../../../Assets/Images/images';
import data from '../../../Assets/Data/data';

// Components
import ProjectCard from '../../../Components/ProjectCard';


export default function WallusCard({ className,}) {

    const wallusColor = data.projects.wallus.color.background;
    const wallusBorder = data.projects.wallus.color.border;
    const wallusTextColor = data.projects.wallus.color.text;

    return (
        <ProjectCard
            id="project-wallus"
            className={className}
            to='/projects/wallus'
            title="Wallus: Your Personal Finance App"
            date="Dec 09 2022"
            image={images.project.wallus.preview}
            imageAlt="This is an image"
            backgroundColor={wallusColor}
            textColor={wallusTextColor}
            summary={
                <>
                    <p className="mb-3 xl:text-lg">
                        Chances are, at one point in your life, you found investing intimidating and filled with jargon.
                    </p>

                    <p className="mb-3 xl:text-lg">
                        Wallus, combining "Wallet" + "Us", is an app that makes investing more welcoming by being part of a community. 
                        You and your friends can start investing in the same stock and share profits.
                    </p>
                
                    <p className='xl:text-lg'>
                        Wallus reinvents investing to be fun and social for the first time.
                    </p>
                </>
            }
        />
    );
}