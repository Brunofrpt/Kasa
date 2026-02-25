import { Link } from "react-router-dom";


function Error () {
    return (
        <main className=" container error">
            <h1 className="error__title">404</h1>
            <h2 className="error__subtitle">Oups! La page que vous demandez n'existe pas.</h2>
            <Link to="/" className="error__link">Retourner sur la page d’accueil</Link>
        </main>
    )
}

export default Error