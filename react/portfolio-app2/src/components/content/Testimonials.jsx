import { Title, SubTitle } from "../base/Title.jsx";

export function Testimonials() {
    const testimonials = [
        {
            "img": "/images/testimonials/people1.webp", 
            "msg": "testimonia1", 
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus impedit aperiam sequi? Dolores sit ipsum, velit labore recusandae, laboriosam consequuntur ducimus ut, fuga officia autem. Exercitationem distinctio voluptas sequi eligendi!", 
            "name": "James Kim",
            "company": "Google"
        },
        {
            "img": "/images/testimonials/people2.webp", 
            "msg": "testimonia2", 
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
        <section id="testimonial" className="section container">
            <Title title="Testimonial" />
            <SubTitle title="See what they say about me" />
            <ul className="testimonials">
                {testimonials && testimonials.map(item =>
                    <li className="testimonial">
                        <img src={item.img} alt={item.msg} className="testimonial-img" />
                        <div className="testimonial-text">
                            <p>
                                {item.description}
                            </p>
                            <p><a href="#" className="testimonial-text-name">{item.name}</a> / {item.company}</p>
                        </div>
                    </li>
                )}
            </ul>
        </section>
    );
}