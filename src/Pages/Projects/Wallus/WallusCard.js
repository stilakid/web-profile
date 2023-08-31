// Assets
import images from '../../../Assets/Images/images';
import data from '../../../Assets/Data/data';

// Components
import ProjectCard from '../../../Components/ProjectCard';


export default function WallusCard({ className,}) {

    return (
        <ProjectCard
            className={className}
            to={data.projects.wallus.url}
            title={data.projects.wallus.title}
            date={data.projects.wallus.date}
            image={images.project.wallus.preview}
            imageAlt="This is an image"
            colorInfo={data.projects.wallus.color}
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