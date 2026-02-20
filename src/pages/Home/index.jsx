import logements from "../../data/logements.json"
import CardListe from "../../components/carteListe"

function Home() {
    return (
        <main className="main">
            <section className=" container hero__section">
                <h1 className="hero__title">Chez vous, partout et ailleurs</h1>
            </section>
            <CardListe logements={logements}/>
        </main>
    )
}


export default Home