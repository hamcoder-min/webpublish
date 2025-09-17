import { Home } from "./content/Home.jsx";
import { About } from "./content/About.jsx";
import { Skills } from "./content/Skills.jsx";
import { Work } from "./content/Work.jsx";
import { Testimonials } from "./content/Testimonials.jsx";
import { ArrowTop } from "./content/ArrowTop.jsx";

export function Content() {
    const homeData = {
        "img": "/images/favicon.ico",
        "name": "Judy",
        "title": "Dream Coder",
        "description": "A software engineer currently residing in Seoul, South Korea"
    }

    return (
        <>
            <Home data={homeData}/>
            <About />
            <Skills />
            <Work />
            <Testimonials />
            <ArrowTop />
        </>
    );
}