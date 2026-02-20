function Card ({logement}){
    return (
        <article className="card">
            <img className="card__image" src={logement.cover} alt={logement.title}/>
            <h2 className="card__title">{logement.title}</h2>
        </article>
    );
}

export default Card