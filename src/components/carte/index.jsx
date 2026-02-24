import { Link } from "react-router-dom";

function Card ({logement}){
    return (
        <Link to={`/annonce/${logement.id}`}>
        <article className="card">
            <img className="card__image" src={logement.cover} alt={logement.title}/>
            <h2 className="card__title">{logement.title}</h2>
        </article>
        </Link>
    );
}

export default Card