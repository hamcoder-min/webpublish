import { Title, SubTitle, BottomDescription } from "./base/Title";
import { ContactLink } from "./footer/ContactLink";

export function Footer() {
    const links = [
        {"href": "http://www.github.com", "type": "github"},
        {"ref": "http://www.linkedin.com", "type": "linkedin"}
    ];
    return (
        <footer id="contact" class="footer">
            <Title title="Let's talk" />
            <SubTitle title="jeon.developer.judy@gmail.com" />
            <ContactLink links={links}/>
            <BottomDescription description="Dream Software Engineer Judy · All right reserved" />
    </footer>
    );
}