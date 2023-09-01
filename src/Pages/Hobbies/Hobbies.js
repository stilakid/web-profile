// Assets
import images from "../../Assets/Images/images"
import data from "../../Assets/Data/data"

// Components
import FootBar from "../../Components/FootBar"
import { Link } from "react-router-dom"
import HobbyCard from "../../Components/HobbyCard"
import { to } from "@react-spring/web"

export default function Hobbies() {
    return(
        <>
            <div className="flex flex-col justify-center items-center landscape:h-screen">

                <div className="flex flex-col landscape:flex-row landscape:h-1/2 h-screen">
                    <HobbyCard className="w-full h-1/2 landscape:w-1/2 landscape:h-full" to={data.hobbies.dance.url} text={data.hobbies.dance.name} image={images.hobbies.dance.card} />
                    <HobbyCard className="w-full h-1/2 landscape:w-1/2 landscape:h-full" to={data.hobbies.music.url} text={data.hobbies.music.name} image={images.hobbies.music.card} />
                </div>

                <div className="flex flex-col landscape:flex-row landscape:h-1/2 h-screen">
                    <HobbyCard className="w-full h-1/2 landscape:w-1/2 landscape:h-full" to={data.hobbies.rockets.url} text={data.hobbies.rockets.name} image={images.hobbies.rockets.card} />
                    <HobbyCard className="w-full h-1/2 landscape:w-1/2 landscape:h-full" to={data.hobbies.videoEditing.url} text={data.hobbies.videoEditing.name} image={images.hobbies.videoEditing.card} />
                </div>

            </div>
            
            <FootBar />
        </>
    )
}