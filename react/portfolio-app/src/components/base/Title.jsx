
export function Title({title}) {
    return (
        <h2 className="title">{title}</h2>
    );
}

export function SubTitle({title}) {
    return (
        <p className="description">{title}</p>
    );
}

export function Description({style}) {
    return (
        <p className={style}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Corporis illo dolore tenetur assumenda magni nihil. 
            Natus eligendi voluptas, autem commodi tempore eum, hic inventore, 
            nihil aliquid ad odio excepturi soluta?
        </p>
    );
}

export function BottomDescription({description}) {
    return (
        <p>{description}</p>
    );
}