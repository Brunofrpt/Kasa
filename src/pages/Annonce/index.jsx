import { useParams, Navigate, useNavigate } from "react-router-dom";
import logements from "../../data/logements.json"
import Carousel from "../../components/carousel";
import Rating from "../../components/rating";
import List from "../../components/List";
import Collapse from "../../components/Collapse";

function Annonce() {

    const { id } = useParams()

    const logement = logements.find((item) => item.id === id)

    if (!logement) return <Navigate to="/404" replace />

    return (
        <main className=" container main">
            <article className="annonce">
                <Carousel pictures={logement.pictures} title={logement.title} />
                <section className="annonce__top">
                    <header className="annonce__description">
                        <h1 className="annonce__title">{logement.title}</h1>
                        <p className="annonce__location">{logement.location}</p>
                        <List items={logement.tags} variant="tags" />
                    </header>
                    <aside className="annonce__aside">
                        <section className="annonce__host">
                            <h3 className="annonce__host-name">{logement.host.name}</h3>
                            <img className="annonce__photo-hote" src={logement.host.picture} alt={logement.title} />
                        </section>
                        <section className="annonce__rating">
                            <Rating rating={logement.rating} />
                        </section>
                    </aside>
                </section>
                <section className=" annonce__details">
                    <Collapse title={"Description"} variant="annonce">
                        <p className="annonce__panel-description">
                            {logement.description}
                        </p>
                    </Collapse>
                    <Collapse title={"Équipements"} variant="annonce">
                        <List items={logement.equipments} variant="equipements" />
                    </Collapse>
                </section>
            </article>
        </main >
    )
}

export default Annonce
