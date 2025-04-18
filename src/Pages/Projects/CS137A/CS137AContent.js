// Assets
import data from '../../../Assets/Data/data';

// Components
import Section from '../../../Components/Section';


export {CS137ACaption, CS137AContent};


function CS137ACaption() {
    return(
        <>
        </>
    )
}


function CS137AContent() {

    const cs137aColor = data.projects.cs137a.color.background;
    const cs137aBorder = data.projects.cs137a.color.border;
    const cs137aTextColor = data.projects.cs137a.color.text


    return(
        <>
            <Section
                id="project-profile-1"
                title="About this Project"
                bgColor={cs137aColor}
                borderColor={cs137aBorder}
                textColor={cs137aTextColor}
            >

                <p className="mb-3">
                    Details will be listed shortly. Cannot link the github due to university policy.
                </p>
            </Section>
        </>
    )
}