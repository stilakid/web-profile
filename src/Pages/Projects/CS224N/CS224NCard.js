// Assets
import images from '../../../Assets/Images/images';
import data from '../../../Assets/Data/data';

// Components
import ProjectCard from '../../../Components/ProjectCard';


export default function CS224NCard({ className,}) {

    return (
        <ProjectCard
            className={className}
            to={data.projects.cs224n.url}
            title={data.projects.cs224n.title}
            date={data.projects.cs224n.date}
            image={images.projects.cs224n.preview}
            imageAlt="This is an image"
            colorInfo={data.projects.cs224n.color}
            summary={
                <>
                    <p className="mb-3 xl:text-lg">
                        Given a new student review for a possible class, we predict the Stanford class
                        and quarter most associated with that user review. To achieve this, we created
                        our custom dataset by scrapping Stanford CARTA platform. 
                    </p>
                
                    <p className='xl:text-lg'>
                        We used this to train our baseline model (basic LSTM), followed by two transformer
                        models (BertModel and DistilBertModel), then a generative model (FLAN-T5).
                    </p>
                </>
            }
        />
    );
}