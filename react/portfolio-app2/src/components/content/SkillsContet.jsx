import { Article, SkillsTitle, CodingSkills } from "./Article.jsx";
import { List } from "../base/List.jsx";

export function SkillsContent() {
    const tools = [
        "Visual Studio Code",
        "IntelliJ",
        "Android Studio Code",
        "iOS development tools",
        "Eclipse"
    ];
    const etc = ["Git", "Scrum Master", "SVN"];

    return (
        <div className="skills">
            <Article style="skills-coding">
                <SkillsTitle title="Coding Skills" />
                <CodingSkills />
            </Article>
            <Article style="kills-tools">
                <SkillsTitle title="Tools" />
                <List titles={tools} />
            </Article>
            <Article style="skills-etc">
                <SkillsTitle title="Etc" />
                <List titles={etc} />
            </Article>
        </div>
    );
}