import { Link, NavLink } from "react-router-dom"
import logo from "../../assets/LOGO.svg"

function Header() {
    return (
        <header className="header">
            <div className="container header__inner">
                <Link to="/" aria-label="retour à l'accueil">
                    <img className="header__logo" src={logo} alt="kasa Logo"></img>
                </Link>

                <nav aria-label="navigation principale" className="header__nav">
                    <ul className="header__links">
                        <li><NavLink to="/" className={({ isActive }) => isActive ? "header__link header__link--active" : "header__link"
                        }
                            end
                        >
                            Accueil
                        </NavLink></li>

                        <li><NavLink to="/a-propos" className={({ isActive }) => isActive ? "header__link header__link--active" : "header__link"
                        }
                        >
                            À propos
                        </NavLink> </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header