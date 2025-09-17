import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function ArrowTop() {
    return (
        <aside>
            <a href="#" className="arrow-up"><FontAwesomeIcon icon={faArrowUp} /></a>
        </aside>
    );
}