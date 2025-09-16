import { Home } from "./content/Home.jsx";
import { About } from "./content/About.jsx";
import { Skill } from "./content/Skill.jsx";

export function Content() {
    const homeData = {
        "img": "/images/favicon.ico",
        "name": "Judy",
        "title": "Dream Coder",
        "description": "A software engineer currently residing in Seoul, South Korea"
    }
    
    return (
        <>
            <Home data={homeData} />
            <About />
            <Skill />
        </>
    );
}