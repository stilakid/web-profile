// Assets
import images from "../../../Assets/Images/images";
import data from "../../../Assets/Data/data";

// Components
import ProjectCard from '../../../Components/ProjectCard';


export default function BunnyWorldCard({ className }) {

    const bunnyWorldColor = data.projects.bunnyWorld.color.background;
    const bunnyWorldBorder = data.projects.bunnyWorld.color.border;
    const bunnyWorldTextColor = data.projects.bunnyWorld.color.text;



    return (
        <ProjectCard
            id="project-bunny"
            className={className}
            to='/projects/bunnyworld'
            title="Bunny World"
            date="Mar 17 2023"
            image={images.project.bunnyWorld.preview}
            imageAlt="This is an image"
            backgroundColor={bunnyWorldColor}
            textColor={bunnyWorldTextColor}
            summary={
                <>
                    <p className="mb-3">You are trapped in a world of bunnies. Choose your path forward wisely or you may incur the wrath of the bunny of death!</p>

                    <p>Was the game too easy? Come build your own 2D game with our Bunny World Game Editor! You can do all of that from the comfort of your android device!</p>
                </>
            }
        />
    );
}