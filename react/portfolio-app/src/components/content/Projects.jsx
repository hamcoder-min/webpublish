
export function Project({img, msg, title, description}) {
    return (
        <>
            <img src={img} alt={msg} className="project-img" />
            <div className="project-metadata">
                <h3 className="project-metadata-title">{title}</h3>
                <p>{description}</p>
            </div>
        </>
    );
}

export function Projects({projects}) {
    return (
        <ul className="projects">
                {projects && projects.map(project => 
                    <li className="project">
                        <Project    img={project.img}
                                    msg={project.msg}
                                    title={project.title}
                                    description={project.description} />
                    </li>   
                )}
        </ul>
    );
}