export default function ProjectPageTemplate({content, sidenav}) {    

    return(
        <div className="flex flex-col flex-grow items-center justify-center">
            <div className="flex flex-row flex-grow w-full max-w-screen-3xl bg-neutral-pale">
                <div className="xl:w-1/5 lg:w-4/12 lg:flex hidden relative">
                    {sidenav}
                </div>

                
                <div className='xl:w-4/5 lg:w-8/12 w-full relative'>
                    {content}
                </div>
            </div>
        </div>
    )
}