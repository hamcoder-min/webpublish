
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

export function Projects() {
    const projects = [
        {
            "img": "/images/projects/project1.webp",
            "msg": "project #1",
            "title": "Project #1",
            "description": "Clone Coding with HTML, CSS"
        },
        {
            "img": "/images/projects/project2.webp",
            "msg": "project #2",
            "title": "Project #2",
            "description": "Clone Coding with HTML, CSS"
        },
        {
            "img": "/images/projects/project3.webp",
            "msg": "project #3",
            "title": "Project #3",
            "description": "Clone Coding with HTML, CSS"
        },
        {
            "img": "/images/projects/project4.webp",
            "msg": "project #4",
            "title": "Project #4",
            "description": "Clone Coding with HTML, CSS"
        },
        {
            "img": "/images/projects/project5.webp",
            "msg": "project #5",
            "title": "Project #5",
            "description": "Clone Coding with HTML, CSS"
        },
        {
            "img": "/images/projects/project6.webp",
            "msg": "project #6",
            "title": "Project #6",
            "description": "Clone Coding with HTML, CSS"
        },
        {
            "img": "/images/projects/project7.webp",
            "msg": "project #7",
            "title": "Project #7",
            "description": "Clone Coding with HTML, CSS"
        },
        {
            "img": "/images/projects/project8.webp",
            "msg": "project #8",
            "title": "Project #8",
            "description": "Clone Coding with HTML, CSS"
        }
    ];

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