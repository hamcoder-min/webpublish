import { useState } from "react";

export function Category({style, title, count, hover}) {
    return (
        <button className={style}
                onMouseOver={() => {hover(title)}}>
            {title}<span className="category-count">{count}</span>
        </button>
    );
}

export function Categories() {
    const categories = [
        { "title": "All", "count": "8" },
        { "title": "Front-end", "count": "4" },
        { "title": "Back-end", "count": "2" },
        { "title": "Mobile", "count": "2" }
    ];

    const [active, setActive] = useState('All');
    const handleMouseOver = (title) => {
        setActive(title);
    }

    return (
        <ul className="categories">
            {categories && categories.map(category => 
                <li>
                    <Category   style={active === category.title ? "category selected" : "category"}
                                title={category.title}
                                count={category.count}
                                hover={handleMouseOver} />
                </li>
            )}
        </ul>
    );
}