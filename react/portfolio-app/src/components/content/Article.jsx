
export function Article({children, style}) {
    return (
        <article className={style} >
            {children}
        </article>
    );
}

/**
 * SkillsTitle
 */
export function SkillsTitle({title}) {
    return (
        <h3 className="skill-title">{title}</h3>
    );
}

/**
 * CodingSkills
 */
export function CodingSkills() {
    const skills = [
        { "title": "HTML", "value": "98%", "width": "98%" },
        { "title": "CSS", "value": "90%", "width": "90%" },
        { "title": "JavaScript", "value": "90%", "width": "90%" },
        { "title": "TypeScript", "value": "80%", "width": "80%" },
        { "title": "React", "value": "79%", "width": "79%" },
        { "title": "NodeJs", "value": "68%", "width": "68%" },
    ];

    return (
        <ul>
            {skills && skills.map(skill => 
                <li className="bar">
                    <div className="bar-title">
                        <span>{skill.title}</span>
                        <span>{skill.value}</span>
                    </div>
                    <div className="bar-bg">
                        <div className="bar-value" style={{width: skill.width}}></div>
                    </div>
                </li>
            )}
        </ul>
    );
}