// Assets
import images from "../../../Assets/Images/images";
import data from '../../../Assets/Data/data';

// Components
import ProjectCard from '../../../Components/ProjectCard';


export default function CartaCard({ className }) {

    const PWRColor = data.projects.carta.color.background;
    const PWRBorder = data.projects.carta.color.border;
    const PWRTextColor = data.projects.carta.color.text;

    return (
        <ProjectCard
            id="project-carta"
            className={className}
            to='/projects/carta'
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
        />
    );
}