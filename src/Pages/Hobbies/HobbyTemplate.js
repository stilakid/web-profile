// Assets
import data from "../../Assets/Data/data"

// Router
import { useParams } from 'react-router-dom';

// Components
import FootBar from "../../Components/FootBar"

export default function HobbyTemplate() {

    const { id } = useParams();
    const hobby = data.hobbies[id]; // Test this!!

    let response;
    if (!hobby) {
        response =  <div className='flex justify-center items-center h-full'>
                        Invalid hobby ID! Please review the URL!
                    </div>;
    } else {
        response = hobby.content;
    }
    
    return(
        <>
            {response}
            <FootBar />
        </>
    )
}