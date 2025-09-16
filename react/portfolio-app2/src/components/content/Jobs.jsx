
export function Job({img, msg, name, peroid}) {
    return (
        <>
            <img src={img} alt={msg} />
            <div>
                <p className="job-name">{name}</p>
                <p className="job-period">{peroid}</p>
            </div>
        </>
    );
}

export function Jobs() {
    const jobs = [
        {
            "img": "/images/jobs/google.png",
            "msg": "google",
            "name": "Google as Junior Software Engineer",
            "period": "2019 Oct - Until now"
        },
        {
            "img": "/images/jobs/samsung.png",
            "msg": "samsung",
            "name": "Samsung as Junior Software Engineer",
            "period": "2010 Oct - 2019 Oct"
        }
    ];

    return (
    <ul className="jobs">
        {jobs && jobs.map(job => 
            <li className="job">
                <Job    img={job.img}
                        msg={job.name}
                        name={job.name}
                        peroid={job.period} />
            </li>
        )}
    </ul>
    );
}