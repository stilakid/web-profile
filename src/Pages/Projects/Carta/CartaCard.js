// Assets
import images from "../../../Assets/Images/images";
import data from '../../../Assets/Data/data';

// Components
import ProjectCard from '../../../Components/ProjectCard';


export default function CartaCard({ className }) {

    return (
        <ProjectCard
            className={className}
            to={data.projects.carta.url}
            title={data.projects.carta.title}
            date={data.projects.carta.date}
            image={images.projects.carta.preview}
            imageAlt="This is an image"
            colorInfo={data.projects.carta.color}
            summary={
                <>
                    <p className="mb-3 xl:text-lg">
                        I was investigating how the voice of an instructor can affect the experience of their students, but I needed data. 
                        Massive amounts of data that I coldn't get my hands on normally.
                    </p>

                    <p className="xl:text-lg">
                        Oh what better way is there to infer that than scrapping Carta's entire repository of student feedbacks from Stanford University!
                    </p>
                </>
            }
        />
    );
}