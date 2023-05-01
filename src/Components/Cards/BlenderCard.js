import React from 'react';

// Assets
import images from "../../Assets/Images/images"

// Components
import Section from '../Section';
import ProjectCard from '../ProjectCard';
import BlueLink from '../BlueLink';

// Ionicon
import { IonIcon} from '@ionic/react';
import { logoGithub } from 'ionicons/icons';


export default function BlenderCard({ children, ...props }) {

    const blenderColor = "bg-gradient-to-r from-gray-200 to-gray-400";
    const blenderBorder = "border-gray-200";
    const blenderTextColor = "text-black";

    return (
        <ProjectCard
            id="project-blender"
            title="Fun with Blender"
            date="Dec 09 2022"
            image={images.project.blender.preview}
            imageAlt="This is an image"
            backgroundColor={blenderColor}
            textColor={blenderTextColor}
            summary={
                <>
                    <p className="mb-3"> A blender noob recreates a scene you'd expect to see in Need for Speed or Fast and Furious. </p>

                    <p> It would be easy, they said. There are tonnes of blender tutorials online, they said. Well at least, they were right about the latter. </p>
                </>
            }
            titleCardDetails={
                <>
                    <div className="flex flex-row">
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/stilakid/CS147-Wallus"><IonIcon icon={logoGithub} className="text-2xl" /></a>
                    </div>

                    <div className="mb-3">
                        <p>Tools Used: </p>
                        <div className="flex flex-col justify-center items-center">
                            <p>
                                <em> Blender </em> || 
                                <em> TurboSquid </em>
                            </p>
                        </div>
                    </div>

                    <p>
                        This render was developed as part of the final project for Stanford's <em>CS148: Introduction to Computer Graphics and Imaging</em>.
                    </p>
                </>
            }
        >
            <Section
                id="project-blender-1"
                title="About this Project"
                bgColor={blenderColor}
                borderColor={blenderBorder}
                textColor={blenderTextColor}
            >
                <h2 className="mb-3">
                    Overview
                </h2>

                <p className="mb-3">
                    This is a fairly simple blender project where the goal is to create 
                    a scene inspired by some existing media. Personally, I wanted to 
                    capture a moment during a high speed street race at night, inspired 
                    by racing games like Forza Horizon and Need for Speed.
                </p>

                <p className='mb-6'>
                    Another goal that I set for myself was to pick up as much blender skill 
                    as I could. So, there was a deliberate emphasis on incorporating a diverse 
                    set of features, which was not required for the project.
                </p>


            </Section>

            <Section
                id="project-blender-2"
                title="Rendered Image"
                bgColor={blenderColor}
                borderColor={blenderBorder}
                textColor={blenderTextColor}
            >
                <div className='border-2 p-2 shadow-md rounded-2xl mb-3'>
                    <h2 className='mb-3'>
                        Final Image
                    </h2>

                    <figure className='mb-3'>
                        <img src={images.project.blender.finalImage} alt='Colored cars racing on a bridge at night under the moon.' />
                        <figcaption> Resolution: 1920 by 1080 | Samples: 4096 </figcaption>
                    </figure>
                </div>


                <div className='border-2 p-2 shadow-md rounded-2xl mb-3'>
                    <h2 className='mb-3'>
                        Variant A (Different Angle)
                    </h2>

                    <figure className='mb-6'>
                        <img src={images.project.blender.variantA} alt='Colored cars racing on a bridge at night under the moon but from a different angle than before.' />
                        <figcaption> Resolution: 1920 x 1080 | Samples: 256 </figcaption>
                    </figure>
                </div>
                

                <div className='flex flex-row border-2 p-2 shadow-md rounded-2xl mb-3'>
                    <div className='mr-2'>
                        <h2 className='mb-3'>
                            Variant B (No Texture)
                        </h2>
                        
                        <figure className='mb-6'>
                            <img src={images.project.blender.variantB} alt='Shaded cars racing on a bridge at night under the moon.' />
                            <figcaption> Resolution: 1920 x 1080 | Samples: 256 </figcaption>
                        </figure>
                    </div>
                    
                    <div>
                        <h2 className='mb-3'>
                            Variant C (No Texture and Volumetric Domain)
                        </h2>

                        <figure className='mb-6'>
                            <img src={images.project.blender.variantC} alt='Shaded cars racing on a bridge at night under the moon but this one has transparent volumetric domain.' />
                            <figcaption> Resolution: 1920 x 1080 | Samples: 256 </figcaption>
                        </figure>
                    </div>
                </div>

                
            </Section>

            <Section
                id="project-blender-3"
                title="Report"
                bgColor={blenderColor}
                borderColor={blenderBorder}
                textColor={blenderTextColor}
            >
                <h2 className="mb-3">
                    Inspiration
                </h2>

                <p className="mb-6">
                    Driving on a raining night with my father is a memory I am fond of ever since I was a young kid. 
                    So, I decided to capture that essence with a bit of a twist. Featuring exotic super cars with neon underglows tearing through a bridge, 
                    the scene draws inspiration from Fast and Furious and the popular racing game Need for Speed.
                </p>



                <h2 className="mb-3">
                    Motivational Images
                </h2>
                
                <div className='mb-6 flex flex-row'>
                    <div className='flex flex-col mr-2'>
                        <img className='mb-2' src={images.project.blender.motivationalImage1} alt='Wet night street with street lamps.' />
                        <img src={images.project.blender.motivationalImage4} alt='An audi in a city parking lot at night with futuristic stret lamps.' />
                    </div>

                    <div className='flex flex-col'>
                        <img className='mb-2' src={images.project.blender.motivationalImage2} alt='A red cadillac zooming through a bridge in a city with skyscrappers.' />
                        <img className='mb-2' src={images.project.blender.motivationalImage3} alt='A car facing you with its headlights on under the dazling night sky painted by the milky way galaxy.' />
                        <img src={images.project.blender.motivationalImage5} alt='A wavy bridge illuminated almost entirely with bluish light.' />
                    </div>
                </div>
                
            </Section>

            <Section
                id="project-blender-4"
                title="Assets"
                bgColor={blenderColor}
                borderColor={blenderBorder}
                textColor={blenderTextColor}
            >
                <div className='border-2 p-5 shadow-md rounded-2xl mb-6'>
                    <h2 className='mb-3'>
                        Bridge
                    </h2>

                    <div className='flex flex-col items-center'>
                        <img className='max-w-3xl' src={images.project.blender.bridge1} alt='My bridge model.' />
                    </div>

                    <div className='flex flex-col items-center'>
                        <p className='my-6'>
                            I made the bridge from scratch with the help of <BlueLink.Underline 
                                href="https://www.youtube.com/watch?v=WYdtkMXM_xI&t=742s"
                            > this 
                            </BlueLink.Underline> tutorial.
                        </p>
                    </div>
                    

                    <div className='flex flex-row mb-3'>
                        <div className='w-1/2 mr-2 flex flex-col justify-center'>
                            <img src={images.project.blender.bridge2} alt='Closer view of my bridge model focusing on the side of the bridge.' />
                        </div>

                        <div className='w-1/2 flex flex-col justify-center'>
                            <p className='mb-3'>
                                Diverging from the tutorial, I extended the structure connecting the two main cylinders of the bridge so as to make the bridge wider.
                            </p>

                            <p className=''>
                                I also added lights to the bridge and gave parts of the support structure an emission material as well so that the lights bounced off 
                                better from the black Audi in the scene. Otherwise, it looked too bland.
                            </p>
                        </div>
                    </div>
                </div>


                <div className='border-2 p-5 shadow-md rounded-2xl mb-6'>
                    <h2 className='mb-3'>
                        Asphalt
                    </h2>

                    <img src={images.project.blender.asphalt1} alt='The road I made in blender as seen from high above.' />

                    <div className='flex flex-col items-center'>
                        <p className='my-6'>
                            The road and the markings are all procedurally generated with the shading editor of blender.
                        </p>
                    </div>

                    <div className='flex flex-row mb-6'>
                        <div className='w-1/2 mr-2 flex flex-col justify-center'>
                            <img src={images.project.blender.asphalt2} alt='Super close view of the road I made in blender seen from an angle, i.e., not from directly above the road.' />
                        </div>

                        <div className='w-1/2 flex flex-col justify-center'>
                            <p className='mb-3'>
                                For the texture of the asphalt and the wet look, I referenced <BlueLink.Underline 
                                    href="https://youtu.be/5L74YpLyiFI"
                                > this 
                                </BlueLink.Underline> tutorial.
                            </p>

                            <p className='mb-3'>
                                As for the markings on the road, I referenced these two tutorials: <BlueLink.Underline
                                    href="https://www.youtube.com/watch?v=-6GxKIReJ_0"
                                >
                                    Road marking
                                </BlueLink.Underline> and <BlueLink.Underline
                                    href="https://www.youtube.com/watch?v=RTW3MOjKBIA&t=41s"
                                >
                                    Dotted marking
                                </BlueLink.Underline>.
                            </p>
                        </div>
                    </div>

                    <div className='flex flex-row mb-3'>
                        <div className='w-1/2 mr-2 flex flex-col justify-center'>
                            <p className='my-6'>
                                I paid particular attention to make the road markings look realistic from a distance. 
                                Therefore, their edges are not super straight, and they have cracks on them that looks good as long as you don’t zoom in too close. 
                            </p>
                        </div>

                        <div className='w-1/2 flex flex-col justify-center'>
                            <img src={images.project.blender.asphalt3} alt='View of the road I made in blender from a closer distance taken from directly above the road.' />
                        </div>

                    </div>

                    <div className='flex flex-col items-center'>
                        <p className='my-6'>
                            Here’s a peek at the shader editor simplified through node groups.
                        </p>
                    </div>

                    <img src={images.project.blender.asphalt4} alt='The shader editor for the road texture in Blender.' />
                </div>
                

                <div className='border-2 p-5 shadow-md rounded-2xl mb-6'>
                    <h2 className='mb-3'>
                        Road Barrier
                    </h2>

                    <div className='flex flex-row mb-3'>
                        <div className='w-1/2 mr-2 flex flex-col justify-center'>
                            <p className='my-6'>
                                This is a fairly simple geometry made from a cube with extended surfaces. 
                                Like with other objects in the scene, I used an array and a mirror modifier to duplicate it and extend it along the length of the road.
                            </p>


                            <p className='my-6'>
                                The texture is generated procedurally. I used <BlueLink.Underline 
                                    href="https://www.youtube.com/watch?v=8Odon-JrQ7o"
                                > this 
                                </BlueLink.Underline> tutorial to guide me.
                            </p>
                        </div>

                        <div className='w-1/2'>
                            <img src={images.project.blender.barrier} alt='The road barrier I made in blender.' />
                        </div>
                    </div>




                </div>


                <div className='border-2 p-5 shadow-md rounded-2xl mb-6'>
                    <h2 className='mb-3'>
                        Streetlights
                    </h2>

                    <div className='flex flex-row mb-3'>
                        <div className='w-7/12 mr-2 flex flex-col justify-center'>
                            <p className='mb-3'>
                                I imported the streetlight models from TurboSquid, gave it a <BlueLink.Underline 
                                    href="https://3dtextures.me/2022/05/13/metal-006/"
                                > 
                                    metal texture
                                </BlueLink.Underline>, and added emission material to the light source.
                            </p>

                            <p className='mb-3'>
                                Additionally, I attached area light to the lamps. It did a much better job compared to a spotlight, which did not illuminate the streets in a way I wanted it to.
                            </p>
                        </div>

                        <div className='w-5/12 flex flex-row items-center'>
                            <img className='max-h-80' src={images.project.blender.streetlight1} alt='The double streetlight model I used in blender.' />
                            <img className='max-h-80' src={images.project.blender.streetlight2} alt='The single streetlight model I used in blender.' />
                        </div>
                    </div>
                </div>


                <div className='border-2 p-5 shadow-md rounded-2xl mb-6'>
                    <h2 className='mb-3'>
                        Street Railing
                    </h2>

                    <div className='flex flex-row mb-3'>
                        <div className='w-1/2 mr-3 flex flex-col justify-center'>
                            <img src={images.project.blender.streetRailing} alt='The model of the street railing I made.' />
                        </div>

                        <div className='w-1/2 flex flex-col justify-center'>
                            <p className='mb-3'>
                                I made this object following this <BlueLink.Underline 
                                    href="https://www.youtube.com/watch?v=uymK9hV7IJw&t=475s"
                                > 
                                    tutorial
                                </BlueLink.Underline> on YouTube.
                            </p>

                            <p className='mb-3'>
                                For the texture, I UV unwrapped the street railing and applied the <BlueLink.Underline 
                                    href="https://polyhaven.com/a/green_metal_rust"
                                > 
                                    green metal texture
                                </BlueLink.Underline> found at Poly Haven.
                            </p>

                            <p className='mb-3'>
                                I further used <BlueLink.Underline 
                                    href="https://youtu.be/1z9lZghGNM0"
                                > 
                                    this
                                </BlueLink.Underline> tutorial to give it a wet look and combined it with the roughness map of the green metal texture.
                            </p>

                            <p className='mb-3'>
                                For the texture map, I used the normal map instead of the displacement map since I wanted the railing to be very smooth. 
                                Displacement maps added bumps which made the railing look not so wet.
                            </p>
                        </div>
                    </div>


                    <p className='mb-3'>
                        To make sure that the texture features did not repeat in regular intervals over the railing, 
                        I used a third party <BlueLink.Underline 
                            href="https://help.poliigon.com/en/articles/6342599-poliigon-blender-addon-2022"
                        > 
                            Poliigon node
                        </BlueLink.Underline> to rotate the textures and add variation to the square texture so that the 
                        boundary of the textures would actually be squiggly.
                    </p>


                    <p className='mb-3'>
                        For the concrete below the railing, I used the textures available <BlueLink.Underline 
                            href="https://polyhaven.com/a/gravel_concrete"
                        > 
                            here
                        </BlueLink.Underline>.
                    </p>




                </div>



                <div className='border-2 p-5 shadow-md rounded-2xl mb-6'>
                    <h2 className='mb-3'>
                        Pavement
                    </h2>

                    <div className='flex flex-col items-center'>
                        <p className='mb-3'>
                            Although the pavement is not very visible in the scene, I did texture it since I wasn’t settled on the camera angle when I made it.
                        </p>

                        <p className='mb-3'>
                            Again, I used <BlueLink.Underline 
                                href="https://polyhaven.com/a/hexagonal_concrete_paving"
                            > 
                                these textures
                            </BlueLink.Underline> available in Poly Haven.
                        </p>
                    </div>

                    <div className='flex flex-row mb-3'>
                        <div className='w-1/2 mr-3'>
                            <img src={images.project.blender.pavement2} alt='Further view of the texture of the pavement on the bridge in my model.' />
                        </div>

                        <div className='w-1/2'>
                            <img src={images.project.blender.pavement1} alt='The texture of the pavement on the bridge in my model.' />
                        </div>
                    </div>

                </div>


                <div className='border-2 p-5 shadow-md rounded-2xl mb-6'>
                    <h2 className='mb-3'>
                        In-road warning lights
                    </h2>

                    <div className='flex flex-row mb-3'>
                        <div className='w-1/2 mr-3 flex flex-col justify-center'>
                            <p className='mb-3'>
                                I made these lights myself. For textures, I used the inbuilt Principled BSDF and Emission texture. 
                            </p>
                        </div>

                        <div className='w-1/2'>
                            <img src={images.project.blender.embeddedRoadLight} alt='The model of the simple embedded road light I made.' />
                        </div>
                    </div>
                </div>

                <div className='border-2 p-5 shadow-md rounded-2xl mb-6'>
                    <h2 className='mb-3'>
                        Cars
                    </h2>

                    <div className='flex flex-row mb-3'>
                        <div className='w-2/3 mr-3 flex flex-col justify-center'>
                            <p className='mb-3'>
                                I imported the vehicle models from TurboSquid. I used the textures readily available with the model, except for the green Audi for which I made

                                <ul className='list-disc ml-4'>
                                    <li>the green paint material</li>
                                    <li>the mirror material</li>
                                    <li>the glass material</li>
                                    <li>the backlight material</li>
                                    <li>the material for the rims and spoiler</li>
                                </ul>
                            </p>

                            <p className='mb-3'>
                                I also reassigned the material for some of the surfaces to give it a better design. Additionally, I corrected the UV maps for the headlight.
                            </p>
                        </div>

                        <div className='w-1/3'>
                            <img src={images.project.blender.car1} alt='The model of the green Audi I used in this project.' />
                        </div>
                    </div>

                    
                    <div className='flex flex-col items-center'>
                        <p className='mb-3'>
                            I followed two YouTube tutorials to make the <BlueLink.Underline 
                                href="https://youtu.be/tIxnbYogJ_k"
                            > 
                                glass
                            </BlueLink.Underline> and <BlueLink.Underline 
                                href="https://www.youtube.com/watch?v=SLChjoLf5jg&t=212s"
                            > 
                                mirror
                            </BlueLink.Underline> materials.
                        </p>
                    </div>                    

                    <img src={images.project.blender.car2} alt='The model of the black Audi, red Bugatti, and the blue Nissan I used in this project.' />
                    
                    <div className='flex flex-col items-center'>
                        <p className='mb-3'>
                            For the Nissan GT-R and the black Audi R8, I added new texture for the number plates since it was missing for both.
                        </p>

                        <p className='mb-3'>
                            I made and added the neon underlights to all the cars and attached spotlights to the car headlights. 
                            Then, to make sure that the car wheels blurred in the rendered image, I separated the wheels from the original model for 
                            the three cars closest to the camera, made their respective cars their parent, and animated the wheels to rotate for 250 frames.
                        </p>
                    </div>
                    

                </div>

                <div className='border-2 p-5 shadow-md rounded-2xl mb-6'>
                    <h2 className='mb-3'>
                        Smoke
                    </h2>

                    <div className='flex justify-center items-center'>
                        <img className='max-w-3xl' src={images.project.blender.smoke1} alt='Smoke from the tyres of a drifting Nissan being simulated.' />
                    </div>

                    <div className='my-6 flex flex-col items-center'>
                        <p className='mb-3'>
                            The smoke is simulated using blender’s fluid simulation engine, Mantaflow. To set it up, I made four cylinders with open bases, scaled it to the size of the tires of Nissan GT-R, made sure that they wrapped around the tires, and made the tires their parent. Then, I enclosed the scene inside a smoke domain and made the four cylinders the smoke source.
                        </p>

                        <p className='mb-3'>
                            To make the smoke more realistic, I made copies of Nissan GT-R and Bugatti Veyron, assigned transparent textures to them, and set it up so that the smoke collided with them. I made copies of the vehicles instead of making the existing vehicles the collision object because the cars moved too slowly in the original animation to avoid blurriness in the final render. I only wanted the wheels to be blurred, not the vehicles themselves. Thus, I animated the new transparent models of the vehicle such that they moved quickly, but at the same time, went through the location where the cars were supposed to be in the final render.
                        </p>

                        <p className='mb-3'>
                            Rendering smoke was very taxing on my computer, driving the render time from 3 hours to 400 hours for 4096 samples. So, I tweaked the blender volume settings, played around with step rate and max steps, and found a sweet spot between quality and fast render time, which made it possible to render the final image under 9 hours.
                        </p> 
                    </div>
 
                    <div className='flex justify-center items-center'>
                        <img className='max-w-2xl' src={images.project.blender.smoke2} alt='Comparison of smoke simulation made with different settings.' />
                    </div>

                    <div className='my-6 flex flex-col items-center'>
                        <p className='mb-3'>
                            Here are some test images taken at approximately 256 samples with the top-left image being the fastest render and the bottom right image being the one with the best quality. Quality increases from left to right. The most evident change is the thickness of the smoke. Lower quality settings resulted in thinner smoke.
                        </p>

                        <p className='mb-3'>
                            To shade the smoke, I used <BlueLink.Underline 
                                href="https://blendermarket.com/products/khaos-fire-shader-fire-shading-simplified"
                            > 
                                Khaos fire shader
                            </BlueLink.Underline>.
                        </p>
                    </div>
                </div>


                <div className='border-2 p-5 shadow-md rounded-2xl mb-6'>
                    <h2 className='mb-3'>
                        Fog/Mist
                    </h2>

                    <p className='mb-3'>
                        The mist was added with the Principled Volume shader and was used to add a bit of glow around the streetlights.
                    </p>

                    <div className='flex flex-row mb-3'>
                        <div className='w-1/2 mr-3 flex justify-center items-center'>
                            <img className='max-h-60' src={images.project.blender.mist1} alt='The mist simulation near a streetlight.' />
                        </div>
                        <div className='w-1/2 flex justify-center items-center'>
                            <img className='max-h-60' src={images.project.blender.mist2} alt='Another shot of the mist simulation near another streetlight.' />
                        </div>
                    </div>

                    <p className='mb-3'>
                        I didn’t overdo this one because increasing the volume density made it difficult to see the stars and the moon as well.
                    </p>
                </div>

                <div className='border-2 p-5 shadow-md rounded-2xl mb-6'>
                    <h2 className='mb-3'>
                        Rain
                    </h2>

                    
                    <div className='flex flex-row mb-3'>
                        <div className='flex-grow flex flex-col justify-center'>
                            <p className='mb-3'>
                                To make the rain, I combined the two tutorials below.
                                <ul className='list-disc ml-4'>
                                    <li>
                                        <BlueLink.Underline 
                                            href="https://www.youtube.com/watch?v=x0If5d2tq2s"
                                        > 
                                            Rain Tutorial 1
                                        </BlueLink.Underline>
                                    </li>
                                    <li>
                                        <BlueLink.Underline 
                                            href="https://www.youtube.com/watch?v=35bbyAJodEQ"
                                        > 
                                            Rain Tutorial 2
                                        </BlueLink.Underline>
                                    </li>
                                </ul>
                            </p>

                            <p className='mb-3'>
                                I used Blender’s particle emitter to make the rain.
                            </p>

                            <p className='mb-3'>
                                This is the shape of the rain. Since motion blur is active, it appears as a long streak of water in the final image
                            </p>
                        </div>
                        <div className='flex flex-row mb-3 items-center'>
                            <div className='mr-3 flex justify-center items-center'>
                                <img className='max-h-96' src={images.project.blender.rain1} alt='Rain simulation with textures.' />
                            </div>
                            <div className='flex justify-center items-center'>
                                <img className='max-h-96' src={images.project.blender.rain2} alt='Rain simulation without textures.' />
                            </div>
                        </div>
                    </div>

                    


                </div>

                <div className='border-2 p-5 shadow-md rounded-2xl mb-6'>
                    <h2 className='mb-3'>
                        Sky Dome
                    </h2>

                    <div className='flex flex-row mb-3'>
                        <div className='w-1/2 mr-3 flex flex-col justify-center'>
                            <p className='mb-3'>
                                For the sky, I decided to make a sky dome instead of using Nishita sky or an HDRI.
                            </p>

                            <p className='mb-3'>
                                Reasons:
                                <ul className='list-disc ml-4'>
                                    <li>Nishita sky was no good for nighttime scenes.</li>
                                    <li>None of the HDRIs I found suited the scenes I was trying to create.</li>
                                    <li>I just wanted to make more stuff myself.</li>
                                </ul>
                            </p>
                        </div>
                        <div className='w-1/2 flex flex-col justify-center'>
                            <img src={images.project.blender.skyDome1} alt='Sky dome made in this project as seen from outside the dome.' />
                        </div>
                    </div>

                    <div className='flex flex-col items-center my-6'>
                        <p className='mb-3'>
                            <BlueLink.Underline 
                                href="https://www.youtube.com/watch?v=UKXs-6PUG5M&t=298s"
                            > 
                                This
                            </BlueLink.Underline> is the tutorial I referenced to make the dome.
                        </p>
                    </div>
                    
                    <div className='flex flex-row mb-6 flex-wrap justify-center items-center space-x-2 space-y-2'>
                        <img className=' max-h-72' src={images.project.blender.skyDome2} alt='Sky dome made in this project as seen from inside the dome, featuring the moon.' />

                        <img className=' max-h-72' src={images.project.blender.skyDome3} alt='Another perspective of the sky dome made in this project as seen from inside the dome, featuring a closer shot of the moon.' />

                        <img className=' max-h-72' src={images.project.blender.skyDome4} alt='Yet another perspective of the sky dome made in this project as seen from inside the dome, featuring the stars.' />

                    </div>
                </div>


            </Section>

            <Section
                id="project-blender-5"
                title="Outcome & Reflection"
                bgColor={blenderColor}
                borderColor={blenderBorder}
                textColor={blenderTextColor}
            >
                <p className="mb-3">
                    This was my first time working with blender. We did some coding as part of assignments leading up to this project where we wrote the code for 
                    ray tracing and shading, but for the most part, it was simply me learning how to use blender.
                </p>

                <p className="mb-3">
                    I learnt so much about how computer graphics worked through this project and also learnt how to use blender and optimize the scene.
                </p>

                <p className="mb-6">
                    As far as the image is concerned, I would have preferred to make it look more realistic. Adding fluid simulation however took much of my time 
                    and slowed my progress when working on my project because I didn't know how to optimize it for a very long time. As noted before, 
                    without optimization, mantaflow would have added about 80 hours to the render time of my final scene, and I had to render the scene partially or 
                    at reduced resolution many times before that.
                </p>

                <p className="mb-6">
                    Despite the setback, I thoroughly enjoyed learning to procedurally generate texture and making cool goemetry all on my own.
                </p>

            </Section>
        </ProjectCard>
    );
}