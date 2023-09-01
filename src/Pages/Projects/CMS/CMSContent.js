// Assets
import videos from '../../../Assets/Videos/videos';
import data from '../../../Assets/Data/data';

// Components
import Section from '../../../Components/Section';
import VideoAutoPlay from '../../../Components/VideoAutoPlay';


export {CMSCaption, CMSContent};


function CMSCaption() {
    return(
        <>
            <p>
                This project was initially developed as the final project for Stanford's <em>CS193X: Web Programming Fundamentals</em>.
            </p>
        </>
    )
}


function CMSContent() {

    const CMSColor = data.projects.sura.color.background;
    const CMSBorder = data.projects.sura.color.border;
    const CMSTextColor = data.projects.sura.color.text


    return(
        <>
            <Section
                id="project-cms-1"
                title="What is the Project About?"
                bgColor={CMSColor}
                borderColor={CMSBorder}
                textColor={CMSTextColor}
            >
                <p className="mb-3">
                    This is a Content Management System that I made as a Sophomore in college. It was designed to be simple and intuitive to the user without 
                    overwhelming them with the technical stuff.
                </p>

                <VideoAutoPlay className='rounded-2xl'>
                    <source src={videos.projects.sura.cms_1} type="video/mp4"/>
                </VideoAutoPlay>

                <p className="mb-3">
                    I initially made a scaled down version of it for a class project using functional programming paradigm. We were asked to make any kind of website imaginable 
                    and I thought making a CMS would be cool and challenging. To get a really good handle on programming with JavaScript, we were challenged to 
                    write this website with minimal use of frameworks. So, no React and everything took tonnes of time and careful planning.
                </p>

                <p className="mb-6">
                    I continued to work on it even after I finished taking the class because I was also making a website for a Student Organization called 
                    Stanford Undergraduate Research Association (SURA), and I wanted to power the website with this CMS. As the project grew in size, 
                    I made the decision to change my code to follow object-oriented-programming paradigm because it was getting harder to maintain and update the code.
                </p>
            </Section>


            <Section
                id="project-cms-2"
                title="Features"
                bgColor={CMSColor}
                borderColor={CMSBorder}
                textColor={CMSTextColor}
            >
                <div className='border-2 p-5 shadow-md rounded-2xl mb-6'>
                    <h2 id="project-cms-2a" className="mb-3">
                        Admin Controls
                    </h2>

                    <p className="mb-3">
                        When an admin logs into the website, they get an admin overlay button signified by a circular button near the bottom-right corner of the screen.
                        Clicking the button expands/collapses the actions that the admin can take. This transition is accompanied by a transition animation. Since the 
                        admin menu can be expanded/collapsed, it allows the admin to easily see the current state of the webpage with minimal obstruction from the UI.
                    </p>

                    <VideoAutoPlay className='rounded-2xl'>
                        <source src={videos.projects.sura.cms_2} type="video/mp4"/>
                    </VideoAutoPlay>

                    <p className="mb-3">
                        The button is marked with a 'plus (+)' symbol when the menu is collapsed and is marked with a 'minus (-)' symbol when the menu is expanded.
                    </p>

                    <p className="mb-3">
                        The menu allows the admin to edit/delete the current page, edit the navbar for the whole website, add/delete a sidebar from the current page, and 
                        add a new page to the website.
                    </p>
                </div>


                <div className='border-2 p-5 shadow-md rounded-2xl mb-6'>
                    <h2 id="project-cms-2b" className="mb-3">
                        Make New Webpage
                    </h2>

                    <VideoAutoPlay className='rounded-2xl'>
                        <source src={videos.projects.sura.cms_3} type="video/mp4"/>
                    </VideoAutoPlay>

                    <p className="mb-3">
                        The admin menu allows the admin to add a new page to the website.
                    </p>
                </div>


                <div className='border-2 p-5 shadow-md rounded-2xl mb-6'>
                    <h2 id="project-cms-2c" className="mb-3">
                        Edit Webpage
                    </h2>

                    <p className="mb-3">
                        With the 'Edit Webpage' option available in the admin menu, you can enable the interface that allows you to make edits directly to the webpage.
                    </p>

                    <p className='mb-3'>
                        For instance, you can make changes to the webpage title.
                    </p>

                    <VideoAutoPlay className='rounded-2xl'>
                        <source src={videos.projects.sura.cms_4} type="video/mp4"/>
                    </VideoAutoPlay>

                    <p className='mb-3'>
                        You can add links to the webpage.
                    </p>


                    <VideoAutoPlay className='rounded-2xl'>
                        <source src={videos.projects.sura.cms_20} type="video/mp4"/>
                    </VideoAutoPlay>


                    <p className='mb-3'>
                        You can edit bodies of text. The editor remembers the spacing you include as well. You can also upload images.
                    </p>

                    <VideoAutoPlay className='rounded-2xl'>
                        <source src={videos.projects.sura.cms_11} type="video/mp4"/>
                    </VideoAutoPlay>

                    <p className="mb-3">
                        The website provides a robust way of uploading images. If you try to add an image, 
                        it crosschecks to see if its name is identical to those of the current images 
                        stored in the server for this particular website. If there is a match, it appends characters 
                        to make it unique.
                    </p>

                    <p className='mb-3'>
                        If you want the changes to persist, simply click the 'Save' button after making edits. 
                        Otherwise, you can click the 'Cancel' button and it undoes all the edits.
                    </p>

                    <VideoAutoPlay className='rounded-2xl'>
                        <source src={videos.projects.sura.cms_19} type="video/mp4"/>
                    </VideoAutoPlay>
                </div>

                

                <div className='border-2 p-5 shadow-md rounded-2xl mb-6'>
                    <h2 id="project-cms-2d" className="mb-3">
                        Navbar Editor
                    </h2>
                    
                    <p className="mb-3">
                        If you click on the "Edit Navbar" button in the admin controls menu, 
                        you are presented with a dialog box that allows you to select pages in 
                        the website that you want to feature in the navbar.
                    </p>
                    
                    <VideoAutoPlay className='rounded-2xl'>
                        <source src={videos.projects.sura.cms_17} type="video/mp4"/>
                    </VideoAutoPlay>

                    <p className="mb-3">
                        The lower section of the dialog box allows you to customize the navbar. 
                        It allows you to set the names for the navlinks and control how they are ordered 
                        in the navbar.
                    </p>

                    <p className="mb-3">
                        Contrary to the simple description, the implementation turned out to be one of the 
                        most complex part of this project.
                    </p>
                </div>
                

                <div className='border-2 p-5 shadow-md rounded-2xl mb-6'>
                    <h2 id="project-cms-2e" className="mb-3">
                        Sidebar
                    </h2>

                    <p className="mb-3">
                        When you click on the "Add Sidebar" button in the admin controls menu, 
                        it adds a side pane to the left of the current page. This area allows you to 
                        add more links.
                    </p>

                    <p className="mb-3">
                        If you don't want the side pane, you can simply click on "Delete Sidebar" 
                        button in the admin controls menu.
                    </p>

                    <VideoAutoPlay className='rounded-2xl'>
                        <source src={videos.projects.sura.cms_18} type="video/mp4"/>
                    </VideoAutoPlay>


                    <p className="mb-3">
                        It is best suited for adding links to different parts of the current page so that 
                        visitors to this site can better navigate the page.
                    </p>

                    <VideoAutoPlay className='rounded-2xl'>
                        <source src={videos.projects.sura.cms_16} type="video/mp4"/>
                    </VideoAutoPlay>
                </div>



                <div className='border-2 p-5 shadow-md rounded-2xl mb-6'>
                    <h2 id="project-cms-2f" className="mb-3">
                        Section Templates
                    </h2>

                    <p className="mb-3">
                        The website allows the admin to add different types of sections to the webpage. 
                        Currently, there are 13 different templates that you can use.
                    </p>

                    <p className="mb-3">
                        To access these templates, you simply need to click on "New Section" button on the 
                        webpage. This conjures a dialogbox with all the different templates that you can use.
                    </p>

                    <VideoAutoPlay className='rounded-2xl'>
                        <source src={videos.projects.sura.cms_8} type="video/mp4"/>
                    </VideoAutoPlay>

                    <p className='mb-3'>
                        To add a template to the webpage, click on one of the templates in the template menu.
                    </p>

                    <VideoAutoPlay className='rounded-2xl'>
                        <source src={videos.projects.sura.cms_9} type="video/mp4"/>
                    </VideoAutoPlay>

                    <p className='mb-3'>
                        To delete an instance of a template from the webpage, click on the 'x' button in the upper-right 
                        corner of the section.
                    </p>

                    <VideoAutoPlay className='rounded-2xl'>
                        <source src={videos.projects.sura.cms_10} type="video/mp4"/>
                    </VideoAutoPlay>
                </div>


                <div className='border-2 p-5 shadow-md rounded-2xl mb-6'>
                    <h2 id="project-cms-2g" className="mb-3">
                        Background Editor
                    </h2>

                    <p className="mb-3">
                        The website alows you to edit the main background for the webpage as well as 
                        the individual background of each section.
                    </p>

                    <p className="mb-3">
                        By clicking on the edit background button in any of the sections, 
                        a floating background editor pops up using which 
                        you can configure the color for the background, give it a linear color gradient, 
                        add images to the background, and overlay the background color over the background 
                        images.
                    </p>

                    <VideoAutoPlay className='rounded-2xl'>
                        <source src={videos.projects.sura.cms_12} type="video/mp4"/>
                    </VideoAutoPlay>

                    <VideoAutoPlay className='rounded-2xl'>
                        <source src={videos.projects.sura.cms_13} type="video/mp4"/>
                    </VideoAutoPlay>

                    <p className="mb-3">
                        For the main background of the webpage, when you click the 'Edit Page' button, 
                        a background editor similar to the one for individual section pops up in the 
                        page background area.
                    </p>

                    <VideoAutoPlay className='rounded-2xl'>
                        <source src={videos.projects.sura.cms_5} type="video/mp4"/>
                    </VideoAutoPlay>
                    <VideoAutoPlay className='rounded-2xl'>
                        <source src={videos.projects.sura.cms_7} type="video/mp4"/>
                    </VideoAutoPlay>

                    <p className='mb-3'>
                        However, for the page background, you can also add videos!
                    </p>
                    <VideoAutoPlay className='rounded-2xl'>
                        <source src={videos.projects.sura.cms_6} type="video/mp4"/>
                    </VideoAutoPlay>


                    <p className='mb-3'>
                        The video name conflicts when adding videos to the website are handled 
                        in a similar fashion as image name conflicts, which is discussed in the "Image Uploads" 
                        section above.
                    </p>
                </div>




                <div className='border-2 p-5 shadow-md rounded-2xl mb-6'>
                    <h2 id="project-cms-2h" className="mb-3">
                        Backend
                    </h2>

                    <p className="mb-3">
                        I wrote all the backend APIs for this project from scratch. It is supported by 
                        node.js, the popular back end web application framework Express.js, and MongoDB.
                    </p>

                    <p className="mb-3">
                    </p>
                </div>
            </Section>


            <Section
                id="project-cms-3"
                title="Outcome & Reflection"
                bgColor={CMSColor}
                borderColor={CMSBorder}
                textColor={CMSTextColor}
            >
                <h2 id="project-cms-3a" className="mb-3"> Key Takeaways </h2>

                <p className="mb-3">
                    Since we could not use frameworks like React, implementing basic features were much more challenging and time consuming but I really felt that 
                    it made me a better JavaScript programmer. Although it made my task much more difficult, the end result was much more satisfying. It made me understand 
                    how these frameworks simply things under the hood and helped me tremendously in my Summer Internship with OpenProof as the project that they were 
                    working on predated these popular frameworks and I had to create things from scratch.
                </p>

                <p className="mb-6">
                    This is an experience that made me a better programmer.
                </p>
            </Section>
        </>
    )
}