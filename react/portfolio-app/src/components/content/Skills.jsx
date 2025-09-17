import { Title, SubTitle, Description } from "../base/Title.jsx";
import { SkillsContent } from "./SkillsContent.jsx";

export function Skills() {
    return(
        <section id="skill" className="section container">
            <Title title="My skills" />
            <SubTitle title="Skills & Attributes" />
            <Description style="" />
            <SkillsContent />
        </section>
    );
}