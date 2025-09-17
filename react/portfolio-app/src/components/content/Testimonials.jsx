import { Title, SubTitle } from "../base/Title";
import { AvatarImage } from "../base/Avatar";

export function Testimonials() {
    const Testimonials = [
        {
            "img": "/images/testimonials/people1.webp",
            "msg": "testimonial1",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus impedit aperiam sequi? Dolores sit ipsum, velit labore recusandae, laboriosam consequuntur ducimus ut, fuga officia autem. Exercitationem distinctio voluptas sequi eligendi!",
            "name": "James Kim",
            "company": "Google"
        },
        {
            "img": "/images/testimonials/people2.webp",
            "msg": "testimonial2",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus impedit aperiam sequi? Dolores sit ipsum, velit labore recusandae, laboriosam consequuntur ducimus ut, fuga officia autem. Exercitationem distinctio voluptas sequi eligendi!",
            "name": "Smith park",
            "company": "Samsung"
        },
        {
            "img": "/images/testimonials/people3.webp",
            "msg": "testimonial3",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus impedit aperiam sequi? Dolores sit ipsum, velit labore recusandae, laboriosam consequuntur ducimus ut, fuga officia autem. Exercitationem distinctio voluptas sequi eligendi!",
            "name": "Anna Jin",
            "company": "Samsung"
        }
    ];

    return (
        <section id="testimonial" class="section container">
            <Title title="Testimonial" />
            <SubTitle title="See what they say about me" />
            <ul class="testimonials">
                {Testimonials && Testimonials.map(item =>
                    <li class="testimonial">
                        <AvatarImage    img={item.img}
                                        msg={item.msg}
                                        style="testimonial-img" />
                        <div class="testimonial-text">
                            <p>
                                {item.description}
                            </p>
                                <p><a href="#" class="testimonial-text-name">{item.name}</a> / {item.company}</p>
                        </div>
                    </li>
                )}
            </ul>
        </section>
    );
}