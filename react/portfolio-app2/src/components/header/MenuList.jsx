import { useState } from "react";
import { Menu } from "./Menu.jsx";

export function MenuList() {
    const menus = [
        { "href": "#home", "name": "Home"},
        { "href": "#about", "name": "About"},
        { "href": "#skill", "name": "Skills"},
        { "href": "#work", "name": "My Work"},
        { "href": "#testimonial", "name": "Testimonial"},
        { "href": "#contact", "name": "Contact"}
    ];

    const [active, setActive] = useState('Home');
    const handleClick = (name) => {
        setActive(name);
    }


    return (
        <nav>
                <ul className="header-menu">
                    {menus && menus.map(menu => 
                        <li>
                            <Menu   href={menu.href}
                                    name={menu.name}
                                    click={handleClick}
                                    style={active === menu.name ? "header-menu-item active" : "header-menu-item"} />
                        </li>
                    )}
                </ul>
            </nav>
    );
}