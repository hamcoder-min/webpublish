import { AvatarImage } from '../base/Avatar.jsx';

export function Home({data}) {
    const {img, name, title, description} = data;

    return (
        <section id="home">
            <AvatarImage    img={img}
                            alt=""photo
                            style="home-avatar" />
            <h2 className="home-title">
                Hello <br />
                I'm <span className="home-title-span">{title}</span>, {name}
            </h2>
            <p className="home-description">{description}</p>
            <a href="#contact" className="home-contact">Contact Me</a>
        </section>
    );
}