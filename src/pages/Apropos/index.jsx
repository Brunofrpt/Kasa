import Colapse from "../../components/Collapse";
import banner from "../../assets/image-source-2.png";


function Apropos() {
    return (
        <main className="container a-propos">
            <img className="a-propos__banner" src={banner} alt="banner Kasa"/>
            <section className="fiabilite">
                <Colapse title={"Fiabilité"} variant="a-propos">
                    <p className="annonce__panel-description" >Les annonces postées sur Kasa garantissent une fiabilité totale.
                        Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
                </Colapse>
            </section>
            <section className="respect">
                <Colapse title={"Respect"} variant="a-propos">
                    <p className="annonce__panel-description" >La bienveillance fait partie des valeurs fondatrices de Kasa. 
                        Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                </Colapse>
            </section>
            <section className="service">
                <Colapse title={"Service"} variant="a-propos">
                    <p className="annonce__panel-description" >La qualité du service est au coeur de notre engagement chez Kasa.
                        Nous veillerons à ce que chaque intéraction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect
                        et de bienveillance.
                    </p>
                </Colapse>
            </section>
            <section className="securite">
                <Colapse title={"Securité"} variant ="a-propos">
                    <p className="annonce__panel-description" >La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, 
                        chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, 
                        cela permet à nos équipes de vérifier que les standards sont bien respectés. 
                        Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                    </p>
                </Colapse>
            </section>
        </main>
    )
}

export default Apropos