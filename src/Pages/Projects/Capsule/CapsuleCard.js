// Assets
import images from '../../../Assets/Images/images';
import data from '../../../Assets/Data/data';

// Components
import ProjectCard from '../../../Components/ProjectCard';


export default function CapsuleCard({ className,}) {

    return (
        <ProjectCard
            className={className}
            to={data.projects.capsule.url}
            title={data.projects.capsule.title}
            date={data.projects.capsule.date}
            image={images.projects.capsule.preview}
            imageAlt="This is an image"
            colorInfo={data.projects.capsule.color}
            summary={
                <>
                    <p className="mb-3 xl:text-lg">
                    Capsule is a location-based photo and memory sharing app that rebrands social media as an outdoor and exploratory action.
                    </p>

                    <p className="mb-3 xl:text-lg">
                        Let’s say I go up Hoover Tower one day. Using the app, I would take a selfie of myself with the view and save it as a “capsule” at that location for each of my friends.
                    </p>
                
                    <p className='xl:text-lg'>
                        One day, if one of my friends decide to go up Hoover Tower, they will get a notification that I had been there before, and had left a capsule that they could now see!
                    </p>
                </>
            }
        />
    );
}