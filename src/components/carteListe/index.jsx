import Card from "../carte";

function CardListe({logements}) {
    return (
        <section className="container cardlist">
            <ul className="cardlist__list">
                {logements.map((logement)=> (
                    <li className="cardlist__li" key={logement.id}>
                        <Card logement={logement}/>
                    </li>
                )
            )}
            </ul>
        </section>
    );
}

export default CardListe